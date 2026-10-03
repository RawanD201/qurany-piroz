// ڤیدیۆساز's encoder in a browser — the far end of
// lib/Tabs/FirstTabQuran/VideoStudio/quran_video_generator_web.dart.
//
// Dart draws every frame (the same VideoFrame the studio's monitor shows) and lays out the sound;
// this file does the two things a browser does better than Dart can: it mixes the recitation and
// its beds sample-exactly in an OfflineAudioContext, and it encodes — H.264 and AAC (Opus where a
// browser has no AAC encoder) through WebCodecs, muxed into an MP4 by mp4-muxer
// (vendor/mp4-muxer.min.js, MIT).
//
//   qpxVideoExport.supported()                 WebCodecs and an offline audio context exist
//   await qpxVideoExport.mix(spec)              → AudioBuffer of the whole video's sound
//   const s = await qpxVideoExport.create({width, height, fps, sampleRate})
//   await s.addAudio(audioBuffer)
//   await s.addFrame(rgbaBytes, timestampUs, durationUs, keyFrame)   (once per frame)
//   const mp4 = await s.finish()                → Uint8Array
//   s.cancel()
(function () {
  'use strict';

  var VIDEO_CODECS = ['avc1.640028', 'avc1.4d0028', 'avc1.42e028', 'avc1.640033', 'avc1.42e033'];
  var AUDIO_CODECS = [['mp4a.40.2', 'aac'], ['opus', 'opus']];

  function offlineContext() {
    return window.OfflineAudioContext || window.webkitOfflineAudioContext || null;
  }

  function supported() {
    return typeof window.VideoEncoder === 'function' &&
      typeof window.AudioEncoder === 'function' &&
      typeof window.VideoFrame === 'function' &&
      typeof window.AudioData === 'function' &&
      offlineContext() !== null;
  }

  function settle(ms) {
    return new Promise(function (resolve) { setTimeout(resolve, ms); });
  }

  // A long video must not queue a thousand frames of 8 MB each before the encoder has taken any.
  async function drain(encoder, limit) {
    while (encoder.encodeQueueSize > limit) await settle(4);
  }

  async function pickVideo(width, height, fps) {
    var pixels = width * height;
    var bitrate = pixels >= 1920 * 1080 * 0.9 ? 6000000 : 4000000;
    for (var i = 0; i < VIDEO_CODECS.length; i++) {
      var config = {
        codec: VIDEO_CODECS[i], width: width, height: height,
        bitrate: bitrate, framerate: fps, avc: { format: 'avc' },
      };
      try {
        var answer = await VideoEncoder.isConfigSupported(config);
        if (answer.supported) return config;
      } catch (e) { /* the next one */ }
    }
    return null;
  }

  async function pickAudio(sampleRate) {
    for (var i = 0; i < AUDIO_CODECS.length; i++) {
      var config = { codec: AUDIO_CODECS[i][0], sampleRate: sampleRate, numberOfChannels: 2, bitrate: 160000 };
      try {
        var answer = await AudioEncoder.isConfigSupported(config);
        if (answer.supported) return { config: config, mux: AUDIO_CODECS[i][1] };
      } catch (e) { /* the next one */ }
    }
    return null;
  }

  // spec: { duration, sampleRate, files: [ArrayBuffer], clips: [{ file, when, offset, length,
  //         rate, gain, loop, until }] } — every time in seconds on the video's clock, except
  //         offset and length, which are in the recording's own time.
  async function mix(spec) {
    var Context = offlineContext();
    var frames = Math.max(1, Math.ceil(spec.duration * spec.sampleRate));
    var context = new Context(2, frames, spec.sampleRate);
    var buffers = [];
    for (var i = 0; i < spec.files.length; i++) {
      try {
        buffers.push(await context.decodeAudioData(spec.files[i]));
      } catch (e) {
        buffers.push(null);
      }
    }
    spec.clips.forEach(function (clip) {
      var buffer = buffers[clip.file];
      if (!buffer) return;
      var source = context.createBufferSource();
      source.buffer = buffer;
      source.playbackRate.value = clip.rate || 1;
      var gain = context.createGain();
      gain.gain.value = clip.gain == null ? 1 : clip.gain;
      source.connect(gain);
      gain.connect(context.destination);
      if (clip.loop) {
        source.loop = true;
        source.start(clip.when, buffer.duration > 0 ? clip.offset % buffer.duration : 0);
        source.stop(clip.until);
      } else {
        var offset = clip.offset || 0;
        // VideoPlan's rule: a start past the recording's end does not belong to it.
        if (clip.clampOffset && !(offset > 0 && offset < buffer.duration - 0.1)) offset = 0;
        source.start(clip.when, offset, clip.length);
      }
    });
    return await context.startRendering();
  }

  async function create(options) {
    if (typeof window.Mp4Muxer !== 'object') throw new Error('mp4-muxer is not loaded');
    var width = options.width, height = options.height, fps = options.fps;
    var sampleRate = options.sampleRate || 48000;
    var videoConfig = await pickVideo(width, height, fps);
    if (!videoConfig) throw new Error('unsupported: no H.264 encoder for ' + width + 'x' + height);
    var audio = await pickAudio(sampleRate);
    if (!audio) throw new Error('unsupported: no AAC or Opus encoder');

    var target = new Mp4Muxer.ArrayBufferTarget();
    var muxer = new Mp4Muxer.Muxer({
      target: target,
      video: { codec: 'avc', width: width, height: height, frameRate: fps },
      audio: { codec: audio.mux, numberOfChannels: 2, sampleRate: sampleRate },
      fastStart: 'in-memory',
      firstTimestampBehavior: 'offset',
    });

    var failure = null;
    var videoEncoder = new VideoEncoder({
      output: function (chunk, meta) { muxer.addVideoChunk(chunk, meta); },
      error: function (e) { failure = failure || e; },
    });
    videoEncoder.configure(videoConfig);
    var audioEncoder = new AudioEncoder({
      output: function (chunk, meta) { muxer.addAudioChunk(chunk, meta); },
      error: function (e) { failure = failure || e; },
    });
    audioEncoder.configure(audio.config);

    function check() { if (failure) throw failure; }

    return {
      codec: videoConfig.codec + ' + ' + audio.config.codec,

      addAudio: async function (buffer) {
        check();
        var total = buffer.length;
        var left = buffer.getChannelData(0);
        var right = buffer.numberOfChannels > 1 ? buffer.getChannelData(1) : left;
        var step = 4096;
        for (var start = 0; start < total; start += step) {
          var count = Math.min(step, total - start);
          var planar = new Float32Array(count * 2);
          planar.set(left.subarray(start, start + count), 0);
          planar.set(right.subarray(start, start + count), count);
          var data = new AudioData({
            format: 'f32-planar', sampleRate: buffer.sampleRate, numberOfFrames: count,
            numberOfChannels: 2, timestamp: Math.round(start / buffer.sampleRate * 1e6), data: planar,
          });
          audioEncoder.encode(data);
          data.close();
          await drain(audioEncoder, 32);
          check();
        }
      },

      addFrame: async function (rgba, timestampUs, durationUs, keyFrame) {
        check();
        var frame = new VideoFrame(rgba, {
          format: 'RGBA', codedWidth: width, codedHeight: height,
          timestamp: timestampUs, duration: durationUs,
        });
        videoEncoder.encode(frame, { keyFrame: !!keyFrame });
        frame.close();
        await drain(videoEncoder, 6);
        check();
      },

      finish: async function () {
        check();
        await videoEncoder.flush();
        await audioEncoder.flush();
        check();
        videoEncoder.close();
        audioEncoder.close();
        muxer.finalize();
        return new Uint8Array(target.buffer);
      },

      cancel: function () {
        try { videoEncoder.close(); } catch (e) { /* already closed */ }
        try { audioEncoder.close(); } catch (e) { /* already closed */ }
      },
    };
  }

  window.qpxVideoExport = { supported: supported, mix: mix, create: create };
})();
