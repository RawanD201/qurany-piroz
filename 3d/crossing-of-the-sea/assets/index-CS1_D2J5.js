import{$ as e,A as t,B as n,C as r,D as i,E as a,F as o,G as s,H as c,I as l,J as u,K as d,L as f,M as p,N as m,O as h,P as g,Q as _,R as ee,S as v,T as te,U as ne,V as y,W as re,X as ie,Y as ae,Z as oe,_ as b,a as se,at as ce,b as le,c as ue,d as de,et as x,f as fe,g as pe,h as S,i as me,it as C,j as w,k as he,l as ge,m as _e,n as ve,nt as ye,o as be,ot as xe,p as Se,q as Ce,r as we,rt as T,s as Te,t as Ee,tt as De,u as E,v as Oe,w as ke,x as Ae,y as je,z as Me}from"./three-ChW2KScY.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var D=(e,t,n)=>e<t?t:e>n?n:e,O=e=>e<0?0:e>1?1:e,Ne=(e,t,n)=>e+(t-e)*n;function k(e,t,n){let r=O((n-e)/(t-e));return r*r*(3-2*r)}var Pe=e=>{let t=O(e);return t*t*(3-2*t)},Fe=e=>{let t=O(e);return t<.5?4*t*t*t:1-(-2*t+2)**3/2},Ie=e=>1-(1-O(e))**3,Le=e=>O(e)**3,Re=e=>-(Math.cos(Math.PI*O(e))-1)/2,ze=(e,t)=>1-Math.exp(-e*t),Be=e=>e*Math.PI/180;function Ve(e){"@babel/helpers - typeof";return Ve=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Ve(e)}function He(e,t){if(Ve(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(Ve(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Ue(e){var t=He(e,`string`);return Ve(t)==`symbol`?t:t+``}function A(e,t,n){return(t=Ue(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function We(e,t,n){let r=Math.floor(e.sampleRate*t),i=e.createBuffer(2,r,e.sampleRate);for(let e=0;e<2;e++){let t=i.getChannelData(e),a=0,o=0,s=0,c=0,l=0,u=0,d=0,f=0;for(let e=0;e<r;e++){let r=Math.random()*2-1;n===`white`?t[e]=r*.5:n===`brown`?(f=(f+.02*r)/1.02,t[e]=f*3.2):(a=.99886*a+r*.0555179,o=.99332*o+r*.0750759,s=.969*s+r*.153852,c=.8665*c+r*.3104856,l=.55*l+r*.5329522,u=-.7616*u-r*.016898,t[e]=(a+o+s+c+l+u+d+r*.5362)*.11,d=r*.115926)}let p=Math.min(2048,Math.floor(r/8));for(let e=0;e<p;e++){let n=e/p;t[r-p+e]=t[r-p+e]*(1-n)+t[e]*n}}return i}function Ge(e,t,n){let r=Math.floor(e.sampleRate*t),i=e.createBuffer(2,r,e.sampleRate);for(let e=0;e<2;e++){let t=i.getChannelData(e);for(let e=0;e<r;e++)t[e]=(Math.random()*2-1)*(1-e/r)**n}return i}var Ke=class{constructor(){A(this,`ctx`,null),A(this,`master`,void 0),A(this,`ambience`,void 0),A(this,`effects`,void 0),A(this,`reverb`,void 0),A(this,`reverbSend`,void 0),A(this,`noise`,null),A(this,`layers`,{}),A(this,`roarPan`,void 0),A(this,`swarmOsc`,[]),A(this,`swarmGain`,void 0),A(this,`volumes`,{master:.8,ambience:.8,effects:.9,muted:!1}),A(this,`stepTimer`,0),A(this,`crackleTimer`,0),A(this,`marchPhase`,0),A(this,`suspended`,!1),A(this,`onGesture`,()=>{this.ctx&&this.ctx.state!==`running`&&!this.suspended&&this.ctx.resume().catch(()=>void 0)})}get unlocked(){return!!this.ctx&&this.ctx.state===`running`}async unlock(){if(!this.ctx){let e=window.AudioContext??window.webkitAudioContext;if(!e)return;this.ctx=new e({latencyHint:`playback`}),this.build(),window.addEventListener(`touchend`,this.onGesture,{passive:!0}),window.addEventListener(`click`,this.onGesture),window.addEventListener(`keydown`,this.onGesture)}if(this.suspended=!1,this.ctx.state!==`running`)try{await this.ctx.resume()}catch{}}build(){let e=this.ctx;this.master=e.createGain(),this.master.gain.value=0;let t=e.createDynamicsCompressor();t.threshold.value=-14,t.ratio.value=3,this.master.connect(t).connect(e.destination),this.ambience=e.createGain(),this.effects=e.createGain(),this.ambience.connect(this.master),this.effects.connect(this.master),this.reverb=e.createConvolver(),this.reverb.buffer=Ge(e,3.2,2.6),this.reverbSend=e.createGain(),this.reverbSend.gain.value=.35,this.reverbSend.connect(this.reverb).connect(this.effects),this.noise={white:We(e,4,`white`),pink:We(e,4,`pink`),brown:We(e,5,`brown`)};let n=(t,n,r,i,a=.7,o=this.ambience)=>{let s=e.createBufferSource();s.buffer=this.noise[n],s.loop=!0,s.loopStart=Math.random();let c=e.createBiquadFilter();c.type=r,c.frequency.value=i,c.Q.value=a;let l=e.createGain();l.gain.value=0,s.connect(c).connect(l).connect(o),s.start(0,Math.random()*3);let u={gain:l,filter:c,src:s,level:0};return this.layers[t]=u,u};n(`wind`,`pink`,`bandpass`,520,.6),n(`windHigh`,`white`,`bandpass`,2400,1.2),n(`sea`,`brown`,`lowpass`,420,.5),n(`surf`,`pink`,`lowpass`,1200,.5),n(`rain`,`white`,`highpass`,2500,.4),n(`fire`,`pink`,`bandpass`,900,.8),n(`march`,`brown`,`lowpass`,160,.7),n(`turbulence`,`brown`,`lowpass`,300,.6);let r=e.createStereoPanner(),i=e.createStereoPanner();r.pan.value=-.75,i.pan.value=.75;let a=e.createGain(),o=e.createGain();a.gain.value=0,o.gain.value=0;for(let[t,n]of[[r,a],[i,o]]){let r=e.createBufferSource();r.buffer=this.noise.brown,r.loop=!0;let i=e.createBiquadFilter();i.type=`lowpass`,i.frequency.value=700;let a=e.createBufferSource();a.buffer=this.noise.pink,a.loop=!0;let o=e.createBiquadFilter();o.type=`bandpass`,o.frequency.value=1800,o.Q.value=.5;let s=e.createGain();s.gain.value=.35,r.connect(i).connect(n),a.connect(o).connect(s).connect(n),n.connect(t).connect(this.ambience),r.start(0,Math.random()*4),a.start(0,Math.random()*3)}this.roarPan={left:r,right:i,leftGain:a,rightGain:o},this.swarmGain=e.createGain(),this.swarmGain.gain.value=0;let s=e.createBiquadFilter();s.type=`bandpass`,s.frequency.value=420,s.Q.value=1.4,this.swarmGain.connect(s).connect(this.ambience);for(let t=0;t<6;t++){let n=e.createOscillator();n.type=`sawtooth`,n.frequency.value=170+t*23+Math.random()*9;let r=e.createGain();r.gain.value=.05,n.connect(r).connect(this.swarmGain),n.start(),this.swarmOsc.push(n)}this.applyVolumes(!0)}setVolumes(e){this.volumes={...e},this.applyVolumes(!1)}applyVolumes(e){if(!this.ctx)return;let t=this.ctx.currentTime,n=this.volumes.muted||this.suspended?0:this.volumes.master,r=e?.01:.25;this.master.gain.setTargetAtTime(n,t,r),this.ambience.gain.setTargetAtTime(this.volumes.ambience,t,r),this.effects.gain.setTargetAtTime(this.volumes.effects,t,r)}set(e,t,n=.4){let r=this.layers[e];r&&this.ctx&&(Math.abs(r.level-t)<.002||(r.level=t,r.gain.gain.setTargetAtTime(t,this.ctx.currentTime,n)))}update(e,t){let n=this.ctx;if(!n||n.state!==`running`)return;let r=n.currentTime,i=.75+.25*Math.sin(r*.37)*Math.sin(r*.13+1.7);this.set(`wind`,(.05+.16*e.wind)*i),this.set(`windHigh`,.02*e.wind*i+.03*e.insidePassage*e.seaOpenness),this.layers.wind.filter.frequency.setTargetAtTime(380+420*i,r,.8);let a=O(1-e.distanceToShore/260),o=.6+.4*Math.sin(r*.55+Math.sin(r*.21)*1.5);this.set(`sea`,.12+.08*(1-e.insidePassage)),this.set(`surf`,a*.22*o,.25);let s=e.seaOpenness>.01?O(1-e.distanceToWall/420):0,c=e.seaOpenness*(.06+.5*s*s)+e.insidePassage*.12,l=e.wallSide;this.roarPan.leftGain.gain.setTargetAtTime(c*(.55-.35*l),r,.35),this.roarPan.rightGain.gain.setTargetAtTime(c*(.55+.35*l),r,.35),this.set(`turbulence`,e.turbulence*.35),this.set(`rain`,e.rain*.22,.8),this.swarmGain.gain.setTargetAtTime(e.swarm*.05,r,.6);let u=e.nearCamp*(1-e.daylight);this.set(`fire`,u*.04),this.crackleTimer-=t,u>.05&&this.crackleTimer<=0&&(this.crackleTimer=.04+Math.random()*.35,this.click(1800+Math.random()*2400,.012+Math.random()*.02,u*(.05+Math.random()*.1),this.ambience)),this.marchPhase+=t*2.6;let d=.55+.45*Math.max(0,Math.sin(this.marchPhase*Math.PI*2));this.set(`march`,e.pursuers*.3*d,.05),e.walkSpeed>.15&&e.surface!==`none`?(this.stepTimer-=t*(1.2+1.6*e.walkSpeed),this.stepTimer<=0&&(this.stepTimer=.62,this.footstep(e.surface,.35+.4*e.walkSpeed))):this.stepTimer=.1}click(e,t,n,r){let i=this.ctx,a=i.currentTime,o=i.createBufferSource();o.buffer=this.noise.white;let s=i.createBiquadFilter();s.type=`bandpass`,s.frequency.value=e,s.Q.value=2;let c=i.createGain();c.gain.setValueAtTime(n,a),c.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(s).connect(c).connect(r),o.start(a,Math.random()*2,t+.05)}footstep(e,t){let n=this.ctx,r=n.currentTime,i=n.createBufferSource();i.buffer=this.noise.pink;let a=n.createBiquadFilter(),o=n.createGain(),s=.16;e===`sand`?(a.type=`lowpass`,a.frequency.value=900):e===`seabed`?(a.type=`bandpass`,a.frequency.value=1300,a.Q.value=.9,s=.12):(a.type=`bandpass`,a.frequency.value=2600,a.Q.value=1.6,s=.07),o.gain.setValueAtTime(1e-4,r),o.gain.linearRampToValueAtTime(t*.22,r+.015),o.gain.exponentialRampToValueAtTime(1e-4,r+s),i.connect(a).connect(o).connect(this.effects),i.start(r,Math.random()*3,s+.05)}cue(e){let t=this.ctx;if(!t||t.state!==`running`)return;let n=t.currentTime,r=this.noise,i=(e,t,r,i,a)=>{e.gain.setValueAtTime(1e-4,n),e.gain.linearRampToValueAtTime(t,n+r),e.gain.setValueAtTime(t,n+r+i),e.gain.exponentialRampToValueAtTime(1e-4,n+r+i+a)};switch(e){case`strike`:{let e=t.createOscillator();e.type=`sine`,e.frequency.setValueAtTime(70,n),e.frequency.exponentialRampToValueAtTime(32,n+2.5);let a=t.createGain();i(a,.7,.01,.1,3.5),e.connect(a),a.connect(this.effects),a.connect(this.reverbSend),e.start(n),e.stop(n+4);let o=t.createBufferSource();o.buffer=r.brown;let s=t.createBiquadFilter();s.type=`lowpass`,s.frequency.value=260;let c=t.createGain();i(c,.6,.01,.05,2.2),o.connect(s).connect(c),c.connect(this.effects),c.connect(this.reverbSend),o.start(n,0,2.6);break}case`seaOpen`:{let e=t.createBufferSource();e.buffer=r.brown,e.loop=!0;let a=t.createBiquadFilter();a.type=`lowpass`,a.frequency.setValueAtTime(120,n),a.frequency.linearRampToValueAtTime(1100,n+9),a.frequency.linearRampToValueAtTime(500,n+20);let o=t.createGain();i(o,.85,4,8,8),e.connect(a).connect(o).connect(this.effects),e.start(n),e.stop(n+22);let s=t.createOscillator();s.type=`sine`,s.frequency.setValueAtTime(34,n),s.frequency.linearRampToValueAtTime(46,n+10);let c=t.createGain();i(c,.35,5,6,8),s.connect(c).connect(this.effects),s.start(n),s.stop(n+20);let l=t.createBufferSource();l.buffer=r.white,l.loop=!0;let u=t.createBiquadFilter();u.type=`bandpass`,u.frequency.value=2200,u.Q.value=.4;let d=t.createGain();i(d,.14,6,6,7),l.connect(u).connect(d).connect(this.effects),l.start(n),l.stop(n+20);break}case`seaClose`:{let e=t.createBufferSource();e.buffer=r.brown,e.loop=!0;let a=t.createBiquadFilter();a.type=`lowpass`,a.frequency.setValueAtTime(300,n),a.frequency.linearRampToValueAtTime(1500,n+7),a.frequency.exponentialRampToValueAtTime(220,n+22);let o=t.createGain();i(o,1,3,6,14),e.connect(a).connect(o),o.connect(this.effects),o.connect(this.reverbSend),e.start(n),e.stop(n+24);let s=t.createBufferSource();s.buffer=r.pink,s.loop=!0;let c=t.createBiquadFilter();c.type=`highpass`,c.frequency.value=900;let l=t.createGain();i(l,.25,5,4,12),s.connect(c).connect(l).connect(this.effects),s.start(n),s.stop(n+22);break}case`thunder`:{let e=t.createBufferSource();e.buffer=r.brown;let a=t.createBiquadFilter();a.type=`lowpass`,a.frequency.setValueAtTime(900,n),a.frequency.exponentialRampToValueAtTime(90,n+4);let o=t.createGain();i(o,.55,.05,.4,4.5),e.connect(a).connect(o),o.connect(this.effects),o.connect(this.reverbSend),e.start(n+Math.random()*.3,0,5);break}case`uiSelect`:case`uiOpen`:case`uiClose`:{let r=t.createOscillator();r.type=`sine`,r.frequency.value=e===`uiClose`?520:e===`uiOpen`?760:660;let i=t.createGain();i.gain.setValueAtTime(1e-4,n),i.gain.linearRampToValueAtTime(.035,n+.01),i.gain.exponentialRampToValueAtTime(1e-4,n+.12),r.connect(i).connect(this.effects),r.start(n),r.stop(n+.15);break}}}suspend(){if(this.suspended=!0,!this.ctx)return;this.applyVolumes(!1);let e=this.ctx;window.setTimeout(()=>{this.suspended&&e.state===`running`&&e.suspend().catch(()=>void 0)},400)}resume(){this.suspended=!1,this.ctx&&(this.ctx.resume().catch(()=>void 0),this.applyVolumes(!1))}dispose(){window.removeEventListener(`touchend`,this.onGesture),window.removeEventListener(`click`,this.onGesture),window.removeEventListener(`keydown`,this.onGesture);for(let e of this.swarmOsc)try{e.stop()}catch{}for(let e of Object.values(this.layers))try{e.src.stop()}catch{}this.ctx?.close().catch(()=>void 0),this.ctx=null,this.layers={}}},qe=new Map,j=null;function Je(e){qe.set(e.code,e),j||(j=e)}function Ye(e){let t=qe.get(e);if(!t)throw Error(`Unknown locale ${e}`);return j=t,t}function M(){if(!j)throw Error(`No locale registered`);return j}var Xe=`٠١٢٣٤٥٦٧٨٩`;function N(e){let t=String(e);return!j||j.digits===`latn`?t:t.replace(/[0-9]/g,e=>Xe[Number(e)]).replace(/%/g,`٪`)}function Ze(){return j?.dir===`rtl`?` • `:` · `}function Qe(e){return e.join(j?.dir===`rtl`?`، `:`, `)}function P(e,t){let n=M().ui[e];return n===void 0&&(n=e),t&&(n=n.replace(/\{(\w+)\}/g,(e,n)=>n in t?N(t[n]):e)),n}var $e={code:`ar`,name:`العربية`,dir:`rtl`,digits:`arab`,translationId:`ar.muyassar`,ui:{"app.title":`عبور البحر`,"app.viewport":`المشهد ثلاثي الأبعاد`,"app.subtitle":`تأمل تفاعلي في ما قصّه القرآن عن موسى عليه السلام وانفلاق البحر`,"loading.title":`جارٍ تجهيز المشهد`,"loading.terrain":`تشكيل الأرض وقاع البحر…`,"loading.water":`ملء البحر…`,"loading.people":`جمع المسافرين…`,"loading.effects":`إثارة الرذاذ والضباب…`,"loading.ready":`جاهز`,"intro.lead":`تجوّل في أرض قديمة، وشاهد البحر وهو ينفلق، واعبر بين جدارَي الماء، وتابع ما قصّه القرآن عن نجاة بني إسرائيل من فرعون.`,"intro.noticeTitle":`قبل أن تبدأ`,"intro.notice1":`تُعرض الآيات بنص القرآن العربي مع التفسير الميسر وإحالات المصادر. أما كل ما سوى ذلك — الطبيعة والناس وشكل الماء وحجمه — فهو إعادة بناء فنية، ومُعلَّم بذلك.`,"intro.notice2":`لا يُصوَّر الأنبياء. ويظهر القوم على هيئة أطياف صغيرة بعيدة فقط.`,"intro.notice3":`موضع العبور بدقة غير معروف؛ ولا تدّعي هذه المحاكاة أنها تعرضه.`,"intro.guided":`ابدأ الرحلة الموجّهة`,"intro.guidedHint":`١٠ فصول قصيرة مع السرد والآيات`,"intro.free":`تجوّل بحرية`,"intro.freeHint":`امشِ حيث شئت، وافلق البحر متى كنت مستعدًا`,"intro.sound":`يبدأ الصوت عند البدء. يُنصح باستخدام السماعات.`,"intro.quality":`الرسومات: {level}`,"common.close":`إغلاق`,"common.back":`رجوع`,"common.on":`تشغيل`,"common.off":`إيقاف`,"common.returnToWebsite":`العودة إلى الموقع`,"hud.menu":`القائمة`,"hud.verses":`الآيات`,"hud.chapters":`الفصول`,"hud.places":`الأماكن`,"hud.settings":`الإعدادات`,"hud.help":`المساعدة`,"hud.mute":`كتم الصوت`,"hud.unmute":`تشغيل الصوت`,"hud.guidedMode":`الرحلة الموجّهة`,"hud.freeMode":`التجوّل الحر`,"hud.chapterOf":`الفصل {n} من {total}`,"guided.previous":`الفصل السابق`,"guided.pause":`إيقاف مؤقت`,"guided.resume":`متابعة`,"guided.replay":`إعادة الفصل`,"guided.next":`الفصل التالي`,"guided.exploreHere":`تجوّل من هنا`,"guided.exit":`الخروج من الرحلة الموجّهة`,"guided.autoNext":`الفصل التالي بعد {s} ث`,"guided.continue":`متابعة`,"guided.paused":`متوقف مؤقتًا`,"guided.speed":`سرعة التشغيل`,"guided.narrator":`الراوي`,"guided.references":`المراجع`,"guided.hideText":`إخفاء نص السرد`,"guided.showText":`إظهار نص السرد`,"free.viewpoints":`نقاط المشاهدة`,"free.partSea":`افلق البحر`,"free.parting":`البحر ينفلق…`,"free.calmSea":`أعِد البحر ساكنًا`,"free.replayOpening":`إعادة مشهد الانفلاق`,"free.settling":`البحر يسكن…`,"free.startGuided":`الرحلة الموجّهة`,"free.passageClosed":`لا يمكن دخول الممر إلا والبحر منفلق. اختر «افلق البحر» أولًا.`,"free.lockHint":`انقر على المشهد للنظر حولك • زر Esc يحرّر الفأرة`,"free.inspect":`تفحّص: {name}`,"free.tapHint":`اسحب للنظر • استخدم المقبض للمشي • المس العلامات لمعرفة المزيد`,"keyverse.translation":`التفسير الميسر`,"info.role":`في هذه التجربة`,"info.sources":`ما تقوله المصادر، وما أُعيد بناؤه`,"info.openVerses":`اقرأ الآيات`,"info.legend":`كيف تُصنَّف العبارات`,"verses.title":`الآيات`,"verses.passagesTitle":`المقاطع القرآنية`,"verses.arabicSource":`النص العربي: نص القرآن من مشروع تنزيل (الرسم العثماني) منقولًا كما هو — CC BY 3.0، المصدر:`,"verses.translationSource":`التفسير: التفسير الميسر، مجمع الملك فهد لطباعة المصحف الشريف، عبر مشروع تنزيل. التفسير بيان للمعنى ولا يقوم مقام النص القرآني.`,"verses.allPassages":`كل المقاطع`,"verses.ayah":`الآية {key}`,"verses.tafsirLabel":`التفسير الميسر:`,"pause.title":`متوقف مؤقتًا`,"pause.resume":`متابعة`,"pause.restart":`إعادة التجربة من البداية`,"pause.startGuided":`ابدأ الرحلة الموجّهة`,"pause.exitGuided":`الخروج من الرحلة الموجّهة والتجوّل`,"pause.about":`حول التجربة والمصادر`,"chapters.title":`الفصول`,"chapters.current":`الفصل الحالي`,"places.title":`الأماكن والأشياء`,"places.hint":`اختر مكانًا لتقرأ عنه. وفي المشهد ثلاثي الأبعاد يمكنك النقر أو اللمس على العلامات المضيئة وكثير من الأشياء.`,"settings.title":`الإعدادات`,"settings.graphics":`الرسومات`,"settings.quality":`الجودة`,"settings.quality.auto":`تلقائي ({level})`,"settings.quality.low":`منخفضة`,"settings.quality.medium":`متوسطة`,"settings.quality.high":`عالية`,"settings.resolution":`الدقة`,"settings.adaptive":`خفض الدقة تلقائيًا عند البطء`,"settings.shadows":`الظلال`,"settings.sound":`الصوت`,"settings.master":`مستوى الصوت العام`,"settings.ambience":`أصوات البيئة`,"settings.effects":`المؤثرات`,"settings.muted":`كتم جميع الأصوات`,"settings.accessibility":`سهولة الاستخدام والقراءة`,"settings.reducedMotion":`تقليل الحركة (كاميرا أهدأ، ومؤثرات أقل)`,"settings.largeText":`نص أكبر`,"settings.showArabic":`عرض النص القرآني مع الآيات الرئيسة`,"settings.narrationVoice":`قراءة السرد بصوت مسموع (صوت الجهاز؛ الراوي فقط)`,"settings.autoAdvance":`الانتقال إلى الفصل التالي تلقائيًا`,"settings.controls":`التحكم`,"settings.sensitivity":`حساسية النظر`,"settings.invertY":`عكس النظر العمودي`,"settings.language":`اللغة`,"settings.languageNote":`تغيير اللغة يعيد تحميل الصفحة ويبدأ التجربة من جديد.`,"help.title":`التحكم والمساعدة`,"help.desktop":`لوحة المفاتيح والفأرة`,"help.desktop.move":`W A S D أو ↑ ↓ — المشي؛ ← → — الالتفات`,"help.desktop.run":`Shift — الإسراع`,"help.desktop.look":`انقر على المشهد للنظر بالفأرة (Esc يحرّرها)، أو اسحب مع الضغط على زر الفأرة`,"help.desktop.inspect":`انقر على علامة أو شيء — أو اضغط E / Enter — لتقرأ عنه`,"help.touch":`الشاشات اللمسية`,"help.touch.move":`المقبض (أسفل اليسار) — المشي؛ ادفعه إلى آخره للإسراع`,"help.touch.look":`اسحب في أي مكان آخر — النظر حولك`,"help.touch.inspect":`المس علامة أو شيئًا — للقراءة عنه`,"help.keys":`الاختصارات`,"help.keys.list":`P — القائمة • Space — إيقاف السرد مؤقتًا • N / B — الفصل التالي / السابق • R — إعادة الفصل • V — الآيات • C — الفصول • M — كتم الصوت • H — المساعدة`,"help.guided":`في الرحلة الموجّهة تُوجَّه الكاميرا لك. يمكنك إيقاف أي فصل مؤقتًا أو إعادته أو تخطيه، أو اختيار «تجوّل من هنا» لتمشي بحرية في تلك اللحظة.`,"help.respect":`احترامًا، لا يُصوَّر الأنبياء، ولا يُعرض غرق جنود فرعون عرضًا صريحًا. ولا تستخدم التجربة إلا الأصوات الطبيعية.`,"about.title":`حول التجربة والمصادر`,"about.approach":`المنهج`,"about.approachText":`القرآن هو المصدر الأول. وكل عبارة في التجربة مصنّفة: نص قرآني (مع الإحالة إلى الآيات)، أو تفسير، أو إعادة بناء فنية. يلخّص السرد الآيات بكلمات بسيطة ويحيل إليها دائمًا؛ وليس ترجمة.`,"about.sources":`المصادر`,"about.reconstruction":`ما الذي أُعيد بناؤه`,"about.reconstructionText":`موضع العبور، والطبيعة، والمخيم، والمدينة، وهيئة الناس وعددهم، وعرض الطريق، وارتفاع الماء وحركته، وألوان السماء، وجميع الأصوات — كلها اختيارات فنية. ويذكر القرآن البحر باسم «البحر» و«اليمّ»، لكن هذه المقاطع لا تحدد أيّ بحر كان.`,"about.respect":`الاحترام`,"about.respectText":`لا يُصوَّر الأنبياء، ولا يُختلق حوار لأي شخص، ولا توجد موسيقى ولا أداء صوتي. ويمكن لصوت الجهاز — اختياريًا — أن يقرأ نص الراوي.`,"about.assets":`البرمجيات والموارد`,"about.assetsText":`جميع النماذج ثلاثية الأبعاد والخامات والأصوات مولَّدة برمجيًا لهذا المشروع. بُني باستخدام three.js (رخصة MIT). الخط القرآني: Amiri Quran؛ خط الواجهة العربية والكردية: Vazirmatn (كلاهما برخصة SIL Open Font License 1.1).`,"about.privacy":`الخصوصية`,"about.privacyText":`لا حساب ولا تتبّع ولا تحليلات. تُحفظ الإعدادات في هذا المتصفح فقط، إن كان التخزين متاحًا.`,"complete.title":`العبور`,"complete.text":`تابعتَ القصة من بلاط فرعون إلى الشاطئ الآخر. ويقدّمها القرآن آيةً لمن يتفكّر (الشعراء: ٦٧).`,"complete.review":`مراجعة المقاطع القرآنية`,"complete.replayOpening":`مشاهدة انفلاق البحر مرة أخرى`,"complete.restart":`إعادة التجربة من البداية`,"complete.free":`العودة إلى التجوّل الحر`,"error.webglTitle":`لا يستطيع هذا الجهاز عرض المشهد ثلاثي الأبعاد`,"error.webglText":`تحتاج التجربة إلى WebGL 2، وهو غير متاح هنا أو معطّل. جرّب إصدارًا حديثًا من Safari أو Chrome أو Edge أو Firefox، أو فعّل تسريع العتاد.`,"error.contextLostTitle":`انقطعت الرسومات`,"error.contextLostText":`أوقف الجهاز الرسومات ثلاثية الأبعاد (قد يحدث هذا عند انخفاض الذاكرة). أعد تحميل الصفحة للمتابعة.`,"error.genericTitle":`حدث خطأ ما`,"error.genericText":`تعذّر على التجربة المتابعة. غالبًا ما تساعد إعادة تحميل الصفحة.`,"error.reload":`إعادة التحميل`,"toast.muted":`الصوت مكتوم`,"toast.unmuted":`الصوت مُشغَّل`,"toast.qualityLowered":`خُفِّضت الدقة للحفاظ على سلاسة العرض`,"toast.moved":`نُقلتَ إلى أرض آمنة`},chapters:{"moses-and-pharaoh":{title:`موسى وفرعون`,subtitle:`رسالة إلى فرعون وملئه`,narration:[`يقصّ القرآن أن موسى عليه السلام أُرسل مع أخيه هارون عليه السلام إلى فرعون وملئه بآيات بيّنات (الأعراف: ١٠٣؛ يونس: ٧٥).`,`وأعلن موسى أنه رسول من رب العالمين، وطلب أن يُسمح لبني إسرائيل بالخروج معه (الأعراف: ١٠٤–١٠٥؛ الدخان: ١٧–١٨).`,`فردّ فرعون وملؤه الرسالة، وقالوا إنها ليست إلا سحرًا، واستكبروا (يونس: ٧٥–٧٨).`,`ذُكرت مصر في القرآن (يونس: ٨٧)، لكن مدنها لم تُوصف. والمدينة الظاهرة في الأفق إعادة بناء فنية.`]},"the-signs":{title:`الآيات البيّنات`,subtitle:`آيات أُريها فرعون وقومه`,narration:[`أظهر موسى عليه السلام آياتٍ أمام فرعون، منها عصاه ويده (الأعراف: ١٠٧–١٠٨). ولا تُصوَّر هنا.`,`وجمع فرعون السحرة المهرة، فلما بطل كيدهم خرّوا ساجدين وآمنوا برب موسى وهارون عليهما السلام (الأعراف: ١١٣–١٢٢؛ يونس: ٧٩–٨٢).`,`ثم ابتُلي قوم فرعون بالشدّة، وبآيات مفصّلات متتابعة: ﴿الطُّوفَانَ وَالْجَرَادَ وَالْقُمَّلَ وَالضَّفَادِعَ وَالدَّمَ﴾ (الأعراف: ١٣٠؛ الأعراف: ١٣٣).`,`وكانوا كلما كُشف عنهم البلاء نقضوا عهدهم بأن يُرسلوا بني إسرائيل (الأعراف: ١٣٤–١٣٥).`,`العاصفة وأسراب الحشرات المعروضة هنا ليست إلا إشارة إلى تلك الآيات؛ فهيئتها لم تُوصف، ولذلك فهذا إعادة بناء فنية.`]},"the-departure":{title:`الخروج`,subtitle:`الخروج ليلًا`,narration:[`أُوحي إلى موسى عليه السلام أن يسري بعباد الله ليلًا، وأُخبر بأنهم سيُتَّبَعون (الشعراء: ٥٢؛ طه: ٧٧؛ الدخان: ٢٣).`,`الخروج ليلًا مذكور في القرآن. أما المخيم والخيام والسُّرُج التي تراها فإعادة بناء فنية.`,`يمضي الركب نازلًا نحو البحر. يمكنك التوقف هنا والتجوّل في المخيم، ثم المتابعة.`]},"approaching-the-sea":{title:`الاقتراب من البحر`,subtitle:`فرعون يحشد جنوده`,narration:[`أرسل فرعون في المدائن حاشرين ليجمعوا جنوده، مستخفًّا ببني إسرائيل بأنهم ﴿لَشِرْذِمَةٌ قَلِيلُونَ﴾ (الشعراء: ٥٣–٥٦).`,`ويذكر القرآن أن المطاردين لحقوا بهم عند الشروق (الشعراء: ٦٠).`,`لا تسمّي هذه المقاطع البحر. وكثيرًا ما يُعرَّف بالبحر الأحمر أو أحد خليجيه، لكن موضع العبور بدقة غير معروف.`]},"the-sea-opens":{title:`انفلاق البحر`,subtitle:`﴿اضْرِبْ بِعَصَاكَ الْبَحْرَ﴾`,narration:[`فلما تراءى الجمعان قال أصحاب موسى عليه السلام إنهم مُدرَكون لا محالة (الشعراء: ٦١).`,`فأجاب موسى بأن ربه معه وسيهديه (الشعراء: ٦٢).`,`ثم أُوحي إلى موسى أن يضرب البحر بعصاه، فانفلق فكان كل فرق ﴿كَالطَّوْدِ الْعَظِيمِ﴾ (الشعراء: ٦٣).`,`لا يصف القرآن هيئة الانفلاق: فارتفاعه وشكله وسرعته هنا إعادة بناء فنية.`]},"entering-the-passage":{title:`دخول الممر`,subtitle:`طريق يابس في البحر`,narration:[`ضُرب لهم في البحر طريق يابس (طه: ٧٧).`,`وقيل لهم ألّا يخافوا أن يُدرَكوا، ولا يخشوا (طه: ٧٧).`,`عرض الطريق اختيار فني؛ أما عمق قاع البحر فيتبع خليج السويس، وهو أحد التعريفات التقليدية لهذا البحر.`]},"the-crossing":{title:`العبور`,subtitle:`بين جدارَي الماء`,narration:[`يذكر القرآن أن الله جاوز ببني إسرائيل البحر (يونس: ٩٠؛ البقرة: ٥٠).`,`ونجّى موسى عليه السلام ومن معه أجمعين (الشعراء: ٦٥).`,`يمكنك مغادرة الرحلة الموجّهة في أي وقت والمشي بنفسك بين جدارَي الماء.`]},"the-pursuit":{title:`مطاردة فرعون`,subtitle:`اتّبعوهم إلى البحر`,narration:[`فأتبعهم فرعون وجنوده ﴿بَغْيًا وَعَدْوًا﴾ (يونس: ٩٠).`,`وقُرِّب الآخرون إلى ذلك المكان (الشعراء: ٦٤).`,`وأضلّ فرعون قومه وما هداهم (طه: ٧٩).`,`لم يصف القرآن عددهم ولا مراكبهم ولا سلاحهم؛ والأطياف المعروضة إعادة بناء فنية.`]},"the-waters-close":{title:`انطباق الماء`,subtitle:`البحر يغشى المطاردين`,narration:[`ثم أُغرق الآخرون، وغشيهم من اليمّ ما غشيهم (الشعراء: ٦٦؛ طه: ٧٨).`,`ولما أدركه الغرق أعلن فرعون أنه آمن بالذي آمنت به بنو إسرائيل (يونس: ٩٠).`,`ويذكر القرآن أن هذا الإعلان المتأخر قوبل بتذكيره بعصيانه وإفساده من قبل (يونس: ٩١).`,`وأن بدنه سيُنجّى ليكون آية لمن خلفه (يونس: ٩٢).`,`لا يُعرض أحد وهو يغرق هنا: إنما ينطبق الماء على الممر فحسب.`]},conclusion:{title:`بعد العبور`,subtitle:`آية لمن يتفكّر`,narration:[`أُمر موسى عليه السلام أن يترك البحر ﴿رَهْوًا﴾ (الدخان: ٢٤). واختلف المفسرون: هل معناه ساكنًا، أم باقيًا على انفلاقه.`,`وأُورث بنو إسرائيل الأرض التي بارك الله فيها، وتمّت كلمة ربك الحسنى عليهم بما صبروا (الأعراف: ١٣٧).`,`ويقدّم القرآن الحدث آيةً، وما كان أكثرهم مؤمنين؛ وإن ربك لهو العزيز الرحيم (الشعراء: ٦٧–٦٨).`,`خذ وقتك في التأمل في البحر من جديد، أو تجوّل بحرية، أو راجع المقاطع القرآنية.`]}},hotspots:{strikePoint:{title:`ضرب البحر`,summary:`الموضع على الشاطئ الذي تمثّل فيه هذه المحاكاة اللحظة التي أُوحي فيها إلى موسى عليه السلام أن يضرب البحر بعصاه.`,role:`يحدد المكان الذي يبدأ فيه البحر بالانفلاق في التسلسل الموجّه (الفصل ٥).`,statements:[{kind:`quran`,text:`أُوحي إلى موسى أن يضرب البحر بعصاه، فانفلق.`,refs:[`26:63`]},{kind:`quran`,text:`ضُرب لهم في البحر طريق يابس.`,refs:[`20:77`]},{kind:`artistic`,text:`لا يُصوَّر موسى. وتُعرض اللحظة بنبضة ضوء خافتة وتموّج على الماء فقط. والموضع بدقة غير معروف.`}],refs:[`26:63`,`20:77`]},shoreline:{title:`شاطئ الخروج`,summary:`شاطئ رملي يجتمع فيه القوم المسافرون قبل العبور.`,role:`نقطة بداية العبور، ونقطة مشاهدة تطلّ على امتداد الممر.`,statements:[{kind:`quran`,text:`لحق المطاردون بهم عند الشروق.`,refs:[`26:60`]},{kind:`quran`,text:`لما تراءى الجمعان خشي أصحاب موسى عليه السلام أن يُدرَكوا.`,refs:[`26:61`]},{kind:`interpretation`,text:`موضع العبور غير معروف. ومن المواضع المقترحة خليج السويس وخليج العقبة والبحيرات القريبة من برزخ السويس؛ ولا يقين في شيء منها.`},{kind:`artistic`,text:`الشاطئ والكثبان والتلال المعروضة هنا إعادة بناء، وليست موضعًا معروفًا.`}],refs:[`26:60-62`]},sea:{title:`البحر`,summary:`مسطّح مائي واسع يفصل شاطئ الخروج عن الشاطئ الآخر.`,role:`البحر الذي ينفلق في المشهد الرئيس.`,statements:[{kind:`quran`,text:`يسمّيه القرآن «البحر»، ويسمّيه أيضًا «اليمّ».`,refs:[`2:50`,`7:136`,`20:78`]},{kind:`interpretation`,text:`لا تسمّي هذه المقاطع هذا المسطّح المائي. وكثيرًا ما يُعرَّف بالبحر الأحمر أو أحد خليجيه، لكن هذا التعريف غير يقيني.`},{kind:`interpretation`,text:`يتبع عمق البحر هنا الأرقام المنشورة لخليج السويس، وهو التعريف التقليدي: نحو ٤٠ م في المتوسط ونحو ٧٠ م في أعمق مواضعه. وهذا رأي من عدة آراء؛ فالقرآن لا يسمّي البحر.`},{kind:`artistic`,text:`عرضه (نحو ٣ كم هنا، بينما يبلغ عرض الخليج الحقيقي ١٩–٣٢ كم) ولونه وأمواجه اختيارات فنية.`}],refs:[`2:50`,`7:136`,`20:77-78`]},opening:{title:`الفُرجة في البحر`,summary:`الشقّ الذي انقسم عنده البحر قسمين، تاركًا ممرًا بينهما.`,role:`مدخل الممر.`,statements:[{kind:`quran`,text:`انفلق البحر فكان كل فرق ﴿كَالطَّوْدِ الْعَظِيمِ﴾.`,refs:[`26:63`]},{kind:`quran`,text:`فرق الله البحر لبني إسرائيل وأنجاهم.`,refs:[`2:50`]},{kind:`artistic`,text:`سرعة الانفلاق والرذاذ والريح والصوت كلها فنية؛ فالقرآن لا يصف العملية الطبيعية.`}],refs:[`26:63`,`2:50`]},waterWalls:{title:`جدارا الماء`,summary:`كتل شاهقة من الماء قائمة على جانبي الممر.`,role:`تحيطان بالممر. يمكنك المشي بجانبهما، لا الدخول فيهما.`,statements:[{kind:`quran`,text:`كان كل فرق ﴿كَالطَّوْدِ الْعَظِيمِ﴾.`,refs:[`26:63`]},{kind:`interpretation`,text:`يُفهم هذا عادةً على أن الماء المنفلق قام عاليًا كالجبال على جانبي الطريق.`},{kind:`artistic`,text:`ارتفاعهما (نحو ٩٥ م هنا) وشكلهما ولونهما وزبدهما وحركتهما إعادة بناء فنية.`}],refs:[`26:63`]},crossingPath:{title:`الطريق اليابس`,summary:`قاع البحر المكشوف الذي يعبر عليه القوم.`,role:`الطريق الذي يمكن المشي عليه بين جدارَي الماء.`,statements:[{kind:`quran`,text:`أُمر موسى أن يضرب لهم ﴿طَرِيقًا فِي الْبَحْرِ يَبَسًا﴾ دون خوف من أن يُدرَكوا.`,refs:[`20:77`]},{kind:`artistic`,text:`عرضه (نحو ٧٠ م) وسطحه الرملي وانحناء الطريق اللطيف اختيارات فنية.`},{kind:`interpretation`,text:`يتبع الطريق قاع البحر، فينحدر برفق إلى نحو ٧٠ م تحت مستوى سطح البحر في الوسط، كما في خليج السويس (وهو أحد التعريفات التقليدية للبحر، لا أمر يقيني).`}],refs:[`20:77`]},farShore:{title:`الشاطئ الآخر`,summary:`الشاطئ الذي يُبلَغ في نهاية العبور.`,role:`حيث يجتمع القوم بعد العبور، ومكان للنظر إلى البحر من جديد.`,statements:[{kind:`quran`,text:`جاوز الله ببني إسرائيل البحر.`,refs:[`10:90`]},{kind:`quran`,text:`نجّى الله موسى عليه السلام ومن معه أجمعين.`,refs:[`26:65`]},{kind:`artistic`,text:`طبيعة الشاطئ الآخر إعادة بناء؛ وموضعه غير معروف.`}],refs:[`10:90`,`26:65`]},encampment:{title:`المخيم`,summary:`خيام قوم مسافرين وأمتعتهم وهم يتهيّؤون للرحيل.`,role:`نقطة بداية الخروج (الفصل ٣).`,statements:[{kind:`quran`,text:`أُمر موسى عليه السلام أن يسري بعباد الله ليلًا.`,refs:[`20:77`,`26:52`,`44:23`]},{kind:`quran`,text:`أُمر موسى وهارون عليهما السلام أن يتّخذا لقومهما بمصر بيوتًا وأن يجعلوها قبلة.`,refs:[`10:87`]},{kind:`artistic`,text:`لا يصف القرآن مخيمًا قبل العبور. والخيام والأمتعة والنيران والملابس إعادة بناء.`}],refs:[`20:77`,`26:52`,`44:23`,`10:87`]},distantLandscape:{title:`المشهد البعيد`,summary:`جبال وصحراء وراء الشاطئ الآخر.`,role:`تمنح إحساسًا بالحجم والمسافة.`,statements:[{kind:`quran`,text:`أُورث القوم الذين كانوا يُستضعَفون مشارق الأرض ومغاربها التي بارك الله فيها.`,refs:[`7:137`]},{kind:`artistic`,text:`الجبال والصحراء إعادة بناء عامة، ولا تمثّل موضعًا معروفًا.`}],refs:[`7:137`]},city:{title:`مدينة فرعون (إعادة بناء)`,summary:`مبانٍ ضخمة في الأفق، ترمز إلى مقرّ سلطان فرعون.`,role:`خلفية الفصلين الأولين.`,statements:[{kind:`quran`,text:`أُرسل موسى وهارون عليهما السلام إلى فرعون وملئه.`,refs:[`7:103`,`10:75`]},{kind:`quran`,text:`ذُكرت مصر في القرآن.`,refs:[`10:87`]},{kind:`quran`,text:`دمّر الله ما كان يصنع فرعون وقومه وما كانوا يعرشون.`,refs:[`7:137`]},{kind:`artistic`,text:`العمارة إعادة بناء عامة؛ فالقرآن لا يصف المدينة.`}],refs:[`7:103`,`10:75`,`10:87`,`7:137`]},israelites:{title:`بنو إسرائيل`,summary:`القوم المسافرون، معروضين على هيئة أطياف صغيرة بلا ملامح.`,role:`الذين أسرى بهم موسى عليه السلام ليلًا وعبر بهم البحر.`,statements:[{kind:`quran`,text:`طلب موسى من فرعون أن يُرسل معه بني إسرائيل.`,refs:[`7:105`]},{kind:`quran`,text:`وصفهم حاشرو فرعون بأنهم ﴿لَشِرْذِمَةٌ قَلِيلُونَ﴾.`,refs:[`26:54`]},{kind:`artistic`,text:`لم يُوصف عددهم ولا ملابسهم ولا دوابّهم ولا أمتعتهم. ولا يُصوَّر أي فرد — ولا أي نبي.`}],refs:[`7:105`,`26:52-54`]},pursuers:{title:`جنود فرعون`,summary:`القوات المطاردة، معروضة على هيئة أطياف داكنة بعيدة تثير الغبار.`,role:`يطاردون بني إسرائيل ويغشاهم البحر.`,statements:[{kind:`quran`,text:`أرسل فرعون في المدائن حاشرين ليجمعوا جنوده.`,refs:[`26:53-56`]},{kind:`quran`,text:`أتبعهم فرعون وجنوده بغيًا وعدوًا.`,refs:[`10:90`]},{kind:`quran`,text:`غشيهم البحر.`,refs:[`20:78`,`26:66`]},{kind:`artistic`,text:`عددهم ومراكبهم وعتادهم وتشكيلهم فنية؛ فالقرآن لا يذكر شيئًا من هذه التفاصيل. ولا يُعرض غرقهم عرضًا صريحًا.`}],refs:[`26:53-56`,`10:90`,`20:78`]},sunrise:{title:`الشروق`,summary:`الشمس تشرق فوق الجانب الآخر من البحر.`,role:`يحدد وقت الفصول التي ينفلق فيها البحر.`,statements:[{kind:`quran`,text:`لحق المطاردون بهم عند الشروق.`,refs:[`26:60`]},{kind:`quran`,text:`كان الخروج ليلًا.`,refs:[`20:77`,`26:52`,`44:23`]},{kind:`artistic`,text:`اتجاه الشروق بالنسبة إلى العبور، وألوان السماء، اختيارات فنية.`}],refs:[`26:60`,`26:52`]}},viewpoints:{camp:`المخيم`,shoreline:`شاطئ الخروج`,overlook:`التلّ المطلّ على البحر`,passage:`داخل الممر`,farShore:`الشاطئ الآخر`,farOverlook:`التلّ على الشاطئ الآخر`},classifications:{quran:{label:`نص قرآني`,description:`ورد في القرآن — انظر الإحالة إلى الآيات.`},interpretation:{label:`تفسير`,description:`استنتاج أو رأي للمفسرين؛ لم يرد صريحًا.`},artistic:{label:`إعادة بناء فنية`,description:`صُنع لهذه التجربة؛ وليس حقيقة ثابتة.`}}},et={code:`ckb`,name:`کوردی`,dir:`rtl`,digits:`arab`,translationId:`ckb.hevi`,ui:{"app.title":`پەڕینەوە لە دەریا`,"app.viewport":`دیمەنی سێڕەهەندیی شوێنەکە`,"app.subtitle":`تێڕامانێکی کارلێکەر لە گێڕانەوەی قورئان دەربارەی مووسا و لەتبوونی دەریا`,"loading.title":`دیمەنەکە ئامادە دەکرێت`,"loading.terrain":`زەوی و بنی دەریا شێوە دەگرن…`,"loading.water":`دەریاکە پڕ دەکرێت…`,"loading.people":`ڕێبوارەکان کۆ دەکرێنەوە…`,"loading.effects":`پرژەی ئاو و تەم بەرز دەبنەوە…`,"loading.ready":`ئامادەیە`,"intro.lead":`بە نێو سروشتێکی کۆندا بگەڕێ، سەیری لەتبوونی دەریا بکە، لە نێوان دیوارەکانی ئاودا بپەڕەوە و شوێن گێڕانەوەی قورئان بکەوە دەربارەی ڕزگاربوونی نەوەکانی ئیسرائیل لەدەست فیرعەون.`,"intro.noticeTitle":`پێش ئەوەی دەست پێ بکەیت`,"intro.notice1":`ئایەتەکان بە دەقی عەرەبیی قورئان و بە وەرگێڕانی کوردیی هێڤی و ئاماژەی سەرچاوەوە پیشان دەدرێن. هەموو شتەکانی دیکە — سروشتەکە، خەڵکەکە، شێوە و قەبارەی ئاوەکە — بونیادنانەوەی هونەرین و بەو شێوەیە ناونراون.`,"intro.notice2":`هەواڵدەران وێنا ناکرێن. کۆمەڵەکە تەنیا وەک سێبەری بچووک و دوور پیشان دەدرێت.`,"intro.notice3":`شوێنی وردی پەڕینەوەکە نەزانراوە؛ ئەم ئەزموونە بانگەشەی پیشاندانی ناکات.`,"intro.guided":`دەستپێکردنی گەشتی ڕێنموونیکراو`,"intro.guidedHint":`١٠ بەشی کورت بە گێڕانەوە و ئایەتەوە`,"intro.free":`گەڕانی ئازاد`,"intro.freeHint":`بە هەر شوێنێکدا بگەڕێ؛ هەر کاتێک ئامادە بوویت دەریاکە لەت بکە`,"intro.sound":`دەنگ لەگەڵ دەستپێکردندا دەست پێ دەکات. گوێگر (هێدفۆن) پێشنیار دەکرێت.`,"intro.quality":`گرافیک: {level}`,"common.close":`داخستن`,"common.back":`گەڕانەوە`,"common.on":`هەڵکراو`,"common.off":`کوژاوە`,"common.returnToWebsite":`گەڕانەوە بۆ ماڵپەڕەکە`,"hud.menu":`لیست`,"hud.verses":`ئایەتەکان`,"hud.chapters":`بەشەکان`,"hud.places":`شوێنەکان`,"hud.settings":`ڕێکخستنەکان`,"hud.help":`یارمەتی`,"hud.mute":`بێدەنگکردن`,"hud.unmute":`هەڵکردنی دەنگ`,"hud.guidedMode":`گەشتی ڕێنموونیکراو`,"hud.freeMode":`گەڕانی ئازاد`,"hud.chapterOf":`بەشی {n} لە {total}`,"guided.previous":`بەشی پێشوو`,"guided.pause":`وەستاندن`,"guided.resume":`بەردەوامبوون`,"guided.replay":`دووبارەکردنەوەی بەش`,"guided.next":`بەشی دواتر`,"guided.exploreHere":`لێرەوە بگەڕێ`,"guided.exit":`دەرچوون لە گەشتی ڕێنموونیکراو`,"guided.autoNext":`بەشی دواتر دوای {s} چرکە`,"guided.continue":`بەردەوامبوون`,"guided.paused":`وەستێنراوە`,"guided.speed":`خێرایی لێدان`,"guided.narrator":`گێڕەرەوە`,"guided.references":`سەرچاوەکان`,"guided.hideText":`شاردنەوەی دەقی گێڕانەوە`,"guided.showText":`پیشاندانی دەقی گێڕانەوە`,"free.viewpoints":`دیمەنگاکان`,"free.partSea":`لەتکردنی دەریا`,"free.parting":`دەریاکە لەت دەبێت…`,"free.calmSea":`ئارامکردنەوەی دەریا`,"free.replayOpening":`دووبارەکردنەوەی لەتبوونەکە`,"free.settling":`دەریاکە ئارام دەبێتەوە…`,"free.startGuided":`گەشتی ڕێنموونیکراو`,"free.passageClosed":`تەنیا کاتێک دەریاکە لەت بووە دەتوانیت بچیتە نێو ڕێڕەوەکەوە. سەرەتا ”لەتکردنی دەریا“ هەڵبژێرە.`,"free.lockHint":`کرتە لە دیمەنەکە بکە بۆ سەیرکردنی دەوروبەر • Esc ماوسەکە ئازاد دەکات`,"free.inspect":`سەیرکردن: {name}`,"free.tapHint":`ڕایبکێشە بۆ سەیرکردن • بە دەستەکە بڕۆ • لە نیشانەکان بدە بۆ زانیاریی زیاتر`,"keyverse.translation":`وەرگێڕان: وەرگێڕانی هێڤی`,"info.role":`لەم ئەزموونەدا`,"info.sources":`ئەوەی سەرچاوەکان دەیڵێن، و ئەوەی بونیاد نراوەتەوە`,"info.openVerses":`خوێندنەوەی ئایەتەکان`,"info.legend":`دەستەواژەکان چۆن ناو دەنرێن`,"verses.title":`ئایەتەکان`,"verses.passagesTitle":`دەقە قورئانییەکان`,"verses.arabicSource":`عەرەبی: دەقی قورئانی تەنزیل (عوسمانی)، وەک خۆی — CC BY 3.0، سەرچاوە:`,"verses.translationSource":`کوردی: وەرگێڕانی هێڤی، ئەلەند کاوە عەلی ئەحمەد — بە ڕەزامەندیی وەرگێڕ بەکارهاتووە. وەرگێڕان واتا دەگەیەنێت و ناتوانێت جێگەی دەقی عەرەبی بگرێتەوە.`,"verses.allPassages":`هەموو دەقەکان`,"verses.ayah":`ئایەتی {key}`,"verses.tafsirLabel":`ڕاڤە:`,"pause.title":`وەستێنراوە`,"pause.resume":`بەردەوامبوون`,"pause.restart":`دەستپێکردنەوەی ئەزموونەکە`,"pause.startGuided":`دەستپێکردنی گەشتی ڕێنموونیکراو`,"pause.exitGuided":`دەرچوون لە گەشتی ڕێنموونیکراو و گەڕانی ئازاد`,"pause.about":`دەربارە و سەرچاوەکان`,"chapters.title":`بەشەکان`,"chapters.current":`بەشی ئێستا`,"places.title":`شوێن و شتەکان`,"places.hint":`شوێنێک هەڵبژێرە بۆ خوێندنەوە دەربارەی. لە دیمەنی سێڕەهەندیدا دەتوانیت کرتە لە نیشانە درەوشاوەکان و زۆربەی شتەکان بکەیت یان لێیان بدەیت.`,"settings.title":`ڕێکخستنەکان`,"settings.graphics":`گرافیک`,"settings.quality":`کوالیتی`,"settings.quality.auto":`خۆکار ({level})`,"settings.quality.low":`نزم`,"settings.quality.medium":`مامناوەند`,"settings.quality.high":`بەرز`,"settings.resolution":`ڕوونی`,"settings.adaptive":`کەمکردنەوەی خۆکاری ڕوونی کاتێک خاو دەبێت`,"settings.shadows":`سێبەرەکان`,"settings.sound":`دەنگ`,"settings.master":`دەنگی گشتی`,"settings.ambience":`دەوروبەر`,"settings.effects":`کاریگەرییەکان`,"settings.muted":`بێدەنگکردنی هەموو دەنگەکان`,"settings.accessibility":`دەستگەیشتن و خوێندنەوە`,"settings.reducedMotion":`کەمکردنەوەی جووڵە (کامێرای نەرمتر، کاریگەریی کەمتر)`,"settings.largeText":`دەقی گەورەتر`,"settings.showArabic":`پیشاندانی دەقی عەرەبی لەگەڵ ئایەتە سەرەکییەکان`,"settings.narrationVoice":`خوێندنەوەی گێڕانەوە بە دەنگ (دەنگی ئامێرەکە؛ تەنیا گێڕەرەوە)`,"settings.autoAdvance":`چوونی خۆکار بۆ بەشی دواتر`,"settings.controls":`کۆنترۆڵەکان`,"settings.sensitivity":`هەستیاریی سەیرکردن`,"settings.invertY":`پێچەوانەکردنەوەی سەیرکردنی ستوونی`,"settings.language":`زمان`,"settings.languageNote":`گۆڕینی زمان پەڕەکە دووبارە بار دەکاتەوە و ئەزموونەکە لە سەرەتاوە دەست پێ دەکاتەوە.`,"help.title":`کۆنترۆڵ و یارمەتی`,"help.desktop":`تەختەکلیل و ماوس`,"help.desktop.move":`W A S D یان ↑ ↓ — ڕۆیشتن؛ ← → — سووڕانەوە`,"help.desktop.run":`Shift — پەلەکردن`,"help.desktop.look":`کرتە لە دیمەنەکە بکە بۆ سەیرکردن بە ماوس (Esc ئازادی دەکات)، یان بە داگرتنی دوگمەی ماوس ڕایبکێشە`,"help.desktop.inspect":`کرتە لە نیشانەیەک یان شتێک بکە — یان E / Enter دابگرە — بۆ خوێندنەوە دەربارەی`,"help.touch":`شاشەی دەستلێدان`,"help.touch.move":`دەستەک (خوارەوەی چەپ) — ڕۆیشتن؛ بە تەواوی پاڵی پێوە بنێ بۆ پەلەکردن`,"help.touch.look":`لە هەر شوێنێکی دیکە ڕایبکێشە — سەیرکردنی دەوروبەر`,"help.touch.inspect":`لە نیشانەیەک یان شتێک بدە — خوێندنەوە دەربارەی`,"help.keys":`کورتەڕێکان`,"help.keys.list":`P — لیست • Space — وەستاندنی گێڕانەوە • N / B — بەشی دواتر / پێشوو • R — دووبارەکردنەوەی بەش • V — ئایەتەکان • C — بەشەکان • M — بێدەنگکردن • H — یارمەتی`,"help.guided":`لە گەشتی ڕێنموونیکراودا کامێرا بۆت ئاراستە دەکرێت. دەتوانیت هەر بەشێک بوەستێنیت، دووبارەی بکەیتەوە یان تێیپەڕێنیت، یان ”لێرەوە بگەڕێ“ هەڵبژێریت بۆ ئەوەی لەو ساتەدا بە ئازادی بڕۆیت.`,"help.respect":`لەبەر ڕێزگرتن، هەواڵدەران وێنا ناکرێن، و نوقمبوونی سەربازەکانی فیرعەون بە شێوەیەکی دڵتەزێن پیشان نادرێت. ئەزموونەکە تەنیا دەنگی سروشتی بەکار دەهێنێت.`,"about.title":`دەربارە و سەرچاوەکان`,"about.approach":`ڕێباز`,"about.approachText":`قورئان سەرچاوەی سەرەکییە. هەر دەستەواژەیەک لەم ئەزموونەدا وەک دەقی قورئان (بە ئاماژەی ئایەتەوە)، ڕاڤە، یان بونیادنانەوەی هونەری ناونراوە. گێڕانەوەکە بە وشەی سادە پوختەی ئایەتەکان دەڵێت و هەمیشە ئاماژەیان پێ دەدات؛ وەرگێڕان نییە.`,"about.sources":`سەرچاوەکان`,"about.reconstruction":`چی بونیاد نراوەتەوە`,"about.reconstructionText":`شوێنی پەڕینەوەکە، سروشتەکە، ئۆردووگاکە، شارەکە، شێوە و ژمارەی خەڵکەکە، پانیی ڕێگاکە، بەرزی و ڕەفتاری ئاوەکە، ڕەنگەکانی ئاسمان و هەموو دەنگەکان هەڵبژاردنی هونەرین. قورئان ناوی دەریا دەهێنێت (”البحر“، ”اليم“) بەڵام ئەم دەقانە دیاری ناکەن کە کام دەریا بووە.`,"about.respect":`ڕێزگرتن`,"about.respectText":`هەواڵدەران وێنا ناکرێن، هیچ گفتوگۆیەک بۆ هیچ کەسێک دانەهێنراوە، و هیچ مۆسیقا یان دەنگی ئەکتەرێک نییە. دەنگێکی ئارەزوومەندانەی ئامێرەکە دەتوانێت دەقی گێڕەرەوە بە دەنگ بخوێنێتەوە.`,"about.assets":`نەرمەکاڵا و کەرەستەکان`,"about.assetsText":`هەموو مۆدێلە سێڕەهەندییەکان، ڕووکار و دەنگەکان بۆ ئەم پڕۆژەیە بە کۆد دروست کراون. بە three.js (مۆڵەتی MIT) دروستکراوە. فۆنتی عەرەبی: Amiri Quran؛ فۆنتی کوردی و عەرەبی: Vazirmatn (هەردووکیان SIL Open Font License 1.1).`,"about.privacy":`تایبەتمەندی`,"about.privacyText":`هیچ هەژمار، شوێنکەوتن یان شیکاری نییە. ڕێکخستنەکان تەنیا لەم وێبگەڕەدا هەڵدەگیرێن، ئەگەر هەڵگرتن بەردەست بێت.`,"complete.title":`پەڕینەوەکە`,"complete.text":`شوێن گێڕانەوەکە کەوتیت لە کۆشکی فیرعەونەوە تا کەناری ئەوبەر. قورئان وەک نیشانەیەک بۆ ئەوانەی بیر دەکەنەوە پیشانی دەدات (الشعراء: ٦٧).`,"complete.review":`پێداچوونەوە بە دەقە قورئانییەکاندا`,"complete.replayOpening":`دووبارە سەیرکردنی لەتبوونی دەریا`,"complete.restart":`دەستپێکردنەوەی ئەزموونەکە`,"complete.free":`گەڕانەوە بۆ گەڕانی ئازاد`,"error.webglTitle":`ئەم ئامێرە ناتوانێت دیمەنی سێڕەهەندی پیشان بدات`,"error.webglText":`ئەزموونەکە پێویستی بە WebGL 2 هەیە، کە لێرەدا بەردەست نییە یان ناچالاک کراوە. تکایە وەشانێکی نوێی Safari، Chrome، Edge یان Firefox تاقی بکەرەوە، یان خێراکردنی ڕەقەکاڵا (hardware acceleration) هەڵبکە.`,"error.contextLostTitle":`گرافیکەکە پچڕا`,"error.contextLostText":`ئامێرەکە گرافیکی سێڕەهەندیی وەستاند (ئەمە ڕوو دەدات کاتێک بیرگە کەمە). پەڕەکە دووبارە بار بکەرەوە بۆ بەردەوامبوون.`,"error.genericTitle":`هەڵەیەک ڕووی دا`,"error.genericText":`ئەزموونەکە نەیتوانی بەردەوام بێت. دووبارە بارکردنەوەی پەڕەکە زۆرجار یارمەتیدەرە.`,"error.reload":`دووبارە بارکردنەوە`,"toast.muted":`دەنگ کوژایەوە`,"toast.unmuted":`دەنگ هەڵکرا`,"toast.qualityLowered":`ڕوونی کەم کرایەوە بۆ ئەوەی جووڵە نەرم بمێنێتەوە`,"toast.moved":`گوازرایتەوە بۆ زەوییەکی سەلامەت`},chapters:{"moses-and-pharaoh":{title:`مووسا و فیرعەون`,subtitle:`پەیامێک بۆ فیرعەون و چاوپڕکەرانی`,narration:[`قورئان دەگێڕێتەوە کە مووسا لەگەڵ براکەی هاروون بە نیشانە ئاشکراکانەوە بۆ لای فیرعەون و چاوپڕکەرانی نێردران (الأعراف: ١٠٣؛ يونس: ٧٥).`,`مووسا ڕایگەیاند کە پەیامبەرێکە لە پەروەردگاری جیهانیانەوە، و داوای کرد ڕێ بە نەوەکانی ئیسرائیل بدرێت لەگەڵیدا بڕۆن (الأعراف: ١٠٤–١٠٥؛ الدخان: ١٧–١٨).`,`فیرعەون و چاوپڕکەرانی پەیامەکەیان ڕەت کردەوە، بە تەنیا جادوو ناویان برد و خۆیان بەگەورە زانی (يونس: ٧٥–٧٨).`,`ناوی میسڕ لە قورئاندا هاتووە (يونس: ٨٧)، بەڵام شارەکانی وەسف نەکراون. ئەو شارەی لە ئاسۆدا دەبینرێت بونیادنانەوەیەکی هونەرییە.`]},"the-signs":{title:`نیشانەکان`,subtitle:`ئەو نیشانانەی بە فیرعەون و قەومەکەی پیشان دران`,narration:[`مووسا لەبەردەم فیرعەوندا نیشانەی پیشان دا، لەوانە گۆچانەکەی و دەستی (الأعراف: ١٠٧–١٠٨). لێرەدا وێنا ناکرێن.`,`فیرعەون جادووبازانی شارەزای کۆ کردەوە. کاتێک فێڵەکەیان پووچەڵ بووەوە، کەوتنە سووجدە و ئیمانیان بە پەروەردگاری مووسا و هاروون هێنا (الأعراف: ١١٣–١٢٢؛ يونس: ٧٩–٨٢).`,`پاشان قەومی فیرعەون بە سەختی و بە زنجیرەیەک نیشانەی ئاشکرا تاقی کرانەوە: تۆفان، کوللە، ئەسپێ، بۆق و خوێن (الأعراف: ١٣٠؛ الأعراف: ١٣٣).`,`هەر جارێک ناڕەحەتییەکە لەسەریان لادەبرا، بەڵێنەکەیان دەشکاند کە نەوەکانی ئیسرائیل ڕەوانە بکەن (الأعراف: ١٣٤–١٣٥).`,`ئەو زریان و پۆلە مێروەی لێرەدا پیشان دەدرێن تەنیا ئاماژە بەو نیشانانە دەکەن؛ چۆنیەتیی دەرکەوتنیان وەسف نەکراوە، بۆیە ئەمە بونیادنانەوەیەکی هونەرییە.`]},"the-departure":{title:`ڕۆیشتن`,subtitle:`ڕۆیشتن بە شەو`,narration:[`سرووش بۆ مووسا نێردرا کە بە شەو لەگەڵ بەندەکانی خودادا بکەوێتە ڕێ، و پێی گوترا کە شوێنیان دەکەون (الشعراء: ٥٢؛ طه: ٧٧؛ الدخان: ٢٣).`,`ڕۆیشتن بە شەو لە قورئاندا هاتووە. ئەو ئۆردووگا و چادر و چرایانەی دەیانبینیت بونیادنانەوەیەکی هونەرین.`,`ڕیزەکە بەرەو خوار بەرەو دەریا دەڕوات. دەتوانیت لێرەدا بوەستیت و بە نێو ئۆردووگاکەدا بگەڕێیت، پاشان بەردەوام بیت.`]},"approaching-the-sea":{title:`نزیکبوونەوە لە دەریا`,subtitle:`فیرعەون سەربازەکانی کۆ دەکاتەوە`,narration:[`فیرعەون حەشرکەرانی بۆ شارەکان نارد بۆ کۆکردنەوەی سەربازەکانی، و نەوەکانی ئیسرائیلی بە دەستەیەکی کەم ناو برد (الشعراء: ٥٣–٥٦).`,`قورئان دەڵێت کە شوێنکەوتووان لە کاتی خۆرهەڵهاتندا پێیان گەیشتن (الشعراء: ٦٠).`,`ئەم دەقانە ناوی دەریاکە نابەن. زۆرجار بە دەریای سوور یان یەکێک لە کەنداوەکانی دەستنیشان دەکرێت، بەڵام شوێنی وردی پەڕینەوەکە نەزانراوە.`]},"the-sea-opens":{title:`دەریا لەت دەبێت`,subtitle:`بە گۆچانەکەت بە دەریاکەدا بکێشە`,narration:[`کاتێک هەردوو کۆمەڵەکە یەکتریان بینی، هاودەمانی مووسا گوتیان کە بێگومان پێیان دەگەن (الشعراء: ٦١).`,`مووسا وەڵامی دایەوە کە پەروەردگاری لەگەڵیدایە و ڕاستەڕێی دەکات (الشعراء: ٦٢).`,`پاشان سرووش بۆ مووسا نێردرا کە بە گۆچانەکەی بە دەریاکەدا بکێشێت، ئیدی لەت بوو و «هەر لایەک وەک شاکێوێکی مەزن بوو» (الشعراء: ٦٣).`,`قورئان وەسفی ناکات کە لەتبوونەکە چۆن دەرکەوت: بەرزی، شێوە و خێراییەکەی لێرەدا بونیادنانەوەیەکی هونەرییە.`]},"entering-the-passage":{title:`چوونە نێو ڕێڕەوەکەوە`,subtitle:`ڕێگەیەکی وشک بە نێو دەریادا`,narration:[`ڕێگەیەکی وشک بە نێو دەریادا بۆیان لێ درا (طه: ٧٧).`,`پێیان گوترا کە نە لە پێگەیشتن بترسن و نە ترسیان هەبێت (طه: ٧٧).`,`پانیی ڕێگاکە هەڵبژاردنێکی هونەرییە؛ قووڵیی بنی دەریاکە شوێن کەنداوی سوێس دەکەوێت، کە یەکێکە لە دەستنیشانکردنە نەریتییەکانی دەریاکە.`]},"the-crossing":{title:`پەڕینەوەکە`,subtitle:`لە نێوان دیوارەکانی ئاودا`,narration:[`قورئان دەڵێت کە خودا نەوەکانی ئیسرائیلی لە دەریاکەدا پەڕاندەوە (يونس: ٩٠؛ البقرة: ٥٠).`,`مووسا و هەموو ئەوانەی لەگەڵیدا بوون ڕزگار کران (الشعراء: ٦٥).`,`هەر کاتێک بتەوێت دەتوانیت گەشتە ڕێنموونیکراوەکە جێ بهێڵیت و خۆت لە نێوان دیوارەکانی ئاودا بڕۆیت.`]},"the-pursuit":{title:`شوێنکەوتنی فیرعەون`,subtitle:`شوێنیان کەوتن بۆ نێو دەریا`,narration:[`فیرعەون و سەربازەکانی بە سنوورشکاندن و دوژمنایەتییەوە شوێنیان کەوتن (يونس: ٩٠).`,`ئەوانی دیکە بۆ ئەو شوێنە نزیک کرانەوە (الشعراء: ٦٤).`,`فیرعەون قەومەکەی گومڕا کرد و ڕاستەڕێی نەکردن (طه: ٧٩).`,`ژمارە، سواری و چەکەکانیان لە قورئاندا وەسف نەکراون؛ سێبەرەکان بونیادنانەوەیەکی هونەرین.`]},"the-waters-close":{title:`ئاوەکان یەک دەگرنەوە`,subtitle:`دەریا شوێنکەوتووان دادەپۆشێت`,narration:[`پاشان ئەوانی دیکە نوقم کران و دەریا دایپۆشین (الشعراء: ٦٦؛ طه: ٧٨).`,`کاتێک نوقمبوون گەیشتە فیرعەون، ڕایگەیاند کە ئیمانی بەو زاتە هێناوە کە نەوەکانی ئیسرائیل ئیمانیان پێی هێناوە (يونس: ٩٠).`,`قورئان تۆمار دەکات کە وەڵامی ئەم ڕاگەیاندنە درەنگە بە بیرخستنەوەی سەرپێچی و تێکدانی پێشووی درایەوە (يونس: ٩١).`,`لاشەکەی دەپارێزرا تا ببێتە نیشانەیەک بۆ ئەوانەی لە دوای ئەوەوە دێن (يونس: ٩٢).`,`لێرەدا کەس لە کاتی نوقمبووندا پیشان نادرێت: تەنیا ئاوەکان بەسەر ڕێڕەوەکەدا یەک دەگرنەوە.`]},conclusion:{title:`دوای پەڕینەوەکە`,subtitle:`نیشانەیەک بۆ ئەوانەی بیر دەکەنەوە`,narration:[`بە مووسا گوترابوو کە دەریاکە «بەڕاوەستاوییەوە» بەجێ بهێڵێت (الدخان: ٢٤). ڕاڤەکاران جیاوازن لەوەی ئایا واتاکەی ئارامە، یان هێشتا لەتبووە.`,`نەوەکانی ئیسرائیل کرانە میراتگری ئەو زەوییانەی خودا بەرەکەتی تێدا ڕشتبوو، و وتە جوانەکەی ئەو بەهۆی خۆڕاگرییانەوە بەتەواوەتی هاتە دی (الأعراف: ١٣٧).`,`قورئان ئەم ڕووداوە وەک نیشانەیەک پیشان دەدات، کەچی زۆربەیان ئاساییشبەخش نەبوون؛ پەروەردگاریشت زۆر شکۆمەند و زۆر میهربەخشە (الشعراء: ٦٧–٦٨).`,`کاتی خۆت بگرە بۆ ئاوڕدانەوە لە دەریاکە، بە ئازادی بگەڕێ، یان پێداچوونەوە بە دەقەکاندا بکە.`]}},hotspots:{strikePoint:{title:`لێدانی دەریا`,summary:`ئەو شوێنەی سەر کەنار کە ئەم ئەزموونە تێیدا ئەو ساتە دەنوێنێت کە سرووش بۆ مووسا نێردرا بە گۆچانەکەی بە دەریاکەدا بکێشێت.`,role:`ئەو شوێنە دیاری دەکات کە دەریا لە زنجیرە ڕێنموونیکراوەکەدا (بەشی ٥) دەست بە لەتبوون دەکات.`,statements:[{kind:`quran`,text:`سرووش بۆ مووسا نێردرا کە بە گۆچانەکەی بە دەریاکەدا بکێشێت، ئیدی لەت بوو.`,refs:[`26:63`]},{kind:`quran`,text:`ڕێگەیەکی وشک بە نێو دەریادا بۆیان لێ درا.`,refs:[`20:77`]},{kind:`artistic`,text:`مووسا وێنا ناکرێت. ئەو ساتە تەنیا بە لەرەیەکی نەرمی ڕووناکی و شەپۆلێکی بچووک لەسەر ئاوەکە پیشان دەدرێت. شوێنە وردەکەی نەزانراوە.`}],refs:[`26:63`,`20:77`]},shoreline:{title:`کەناری دەرچوون`,summary:`کەنارێکی لماوی کە کۆمەڵە ڕێبوارەکە پێش پەڕینەوە تێیدا کۆ دەبنەوە.`,role:`خاڵی دەستپێکی پەڕینەوەکە، و دیمەنگایەک بەرەو درێژایی ڕێڕەوەکە.`,statements:[{kind:`quran`,text:`شوێنکەوتووان لە کاتی خۆرهەڵهاتندا پێیان گەیشتن.`,refs:[`26:60`]},{kind:`quran`,text:`کاتێک هەردوو کۆمەڵەکە یەکتریان بینی، هاودەمانی مووسا ترسان کە پێیان بگەن.`,refs:[`26:61`]},{kind:`interpretation`,text:`شوێنی پەڕینەوەکە نەزانراوە. ئەو شوێنانەی پێشنیار کراون بریتین لە کەنداوی سوێس، کەنداوی عەقەبە و ئەو دەریاچانەی نزیک تەنگەی سوێسن؛ هیچیان دڵنیا نییە.`},{kind:`artistic`,text:`ئەو کەنار و گردۆڵکەی لم و گردانەی لێرەدا پیشان دەدرێن بونیادنانەوەن، نەک شوێنێکی ناسراو.`}],refs:[`26:60-62`]},sea:{title:`دەریاکە`,summary:`ڕووبەرێکی فراوانی ئاو کە کەناری دەرچوون لە کەناری ئەوبەر جیا دەکاتەوە.`,role:`ئەو دەریایەی لە زنجیرە سەرەکییەکەدا لەت دەبێت.`,statements:[{kind:`quran`,text:`قورئان پێی دەڵێت ”البحر“ (دەریا)؛ هەروەها ”اليم“یشی پێ گوتراوە.`,refs:[`2:50`,`7:136`,`20:78`]},{kind:`interpretation`,text:`ئەم دەقانە ناوی ئەو ئاوە نابەن. زۆرجار بە دەریای سوور یان یەکێک لە کەنداوەکانی دەستنیشان دەکرێت، بەڵام ئەم دەستنیشانکردنە دڵنیا نییە.`},{kind:`interpretation`,text:`قووڵیی دەریاکە لێرەدا شوێن ژمارە بڵاوکراوەکانی کەنداوی سوێس دەکەوێت، کە دەستنیشانکردنی نەریتییە: بە تێکڕا نزیکەی ٤٠ م و لە قووڵترین شوێندا نزیکەی ٧٠ م. ئەمە یەکێکە لە چەند بۆچوونێک؛ قورئان ناوی دەریاکە نابات.`},{kind:`artistic`,text:`پانییەکەی (لێرەدا نزیکەی ٣ کم؛ کەنداوە ڕاستەقینەکە ١٩–٣٢ کم پانە)، ڕەنگ و شەپۆلەکانی هەڵبژاردنی هونەرین.`}],refs:[`2:50`,`7:136`,`20:77-78`]},opening:{title:`کرانەوەی دەریا`,summary:`ئەو درزەی دەریاکە تێیدا بوو بە دوو بەش و ڕێڕەوێکی لە نێوانیاندا بەجێ هێشت.`,role:`دەروازەی ڕێڕەوەکە.`,statements:[{kind:`quran`,text:`دەریاکە لەت بوو، و «هەر لایەک وەک شاکێوێکی مەزن بوو».`,refs:[`26:63`]},{kind:`quran`,text:`خودا دەریاکەی بۆ نەوەکانی ئیسرائیل جیا کردەوە و ڕزگاری کردن.`,refs:[`2:50`]},{kind:`artistic`,text:`خێرایی لەتبوونەکە، پرژەی ئاو، با و دەنگەکە هونەرین؛ قورئان پرۆسە فیزیکییەکە وەسف ناکات.`}],refs:[`26:63`,`2:50`]},waterWalls:{title:`دیوارەکانی ئاو`,summary:`بارستەی بەرزی ئاو کە لە هەردوو لای ڕێڕەوەکەوە ڕاوەستاون.`,role:`چوارچێوەی ڕێڕەوەکە پێک دەهێنن. دەتوانیت بە تەنیشتیاندا بڕۆیت، بەڵام ناتوانیت بچیتە نێویانەوە.`,statements:[{kind:`quran`,text:`هەر لایەک «وەک شاکێوێکی مەزن بوو» (”كالطود العظيم“).`,refs:[`26:63`]},{kind:`interpretation`,text:`بە گشتی وا تێگەیشتراوە کە ئاوە لەتبووەکە وەک چیا لە هەردوو لای ڕێگاکەوە بەرز ڕاوەستابوو.`},{kind:`artistic`,text:`بەرزییان (لێرەدا نزیکەی ٩٥ م)، شێوە، ڕەنگ، کەف و جووڵەیان بونیادنانەوەی هونەرین.`}],refs:[`26:63`]},crossingPath:{title:`ڕێگا وشکەکە`,summary:`بنی دەرکەوتووی دەریاکە کە کۆمەڵەکە بەسەریدا دەپەڕنەوە.`,role:`ئەو ڕێگایەی دەتوانیت بەسەریدا بڕۆیت لە نێوان دیوارەکانی ئاودا.`,statements:[{kind:`quran`,text:`بە مووسا گوترا: «ڕێگەیەکی وشکیان لە دەریادا بۆ لێ بدە» (”يبسا“)، بێ ترس لە پێگەیشتن.`,refs:[`20:77`]},{kind:`artistic`,text:`پانییەکەی (نزیکەی ٧٠ م)، ڕووە لماوییەکە و چەمانەوە نەرمەکەی ڕێگاکە هەڵبژاردنی هونەرین.`},{kind:`interpretation`,text:`ڕێگاکە شوێن بنی دەریا دەکەوێت و لە ناوەڕاستدا بە نەرمی تا نزیکەی ٧٠ م ژێر ئاستی دەریا نزم دەبێتەوە، وەک لە کەنداوی سوێسدا (یەکێک لە دەستنیشانکردنە نەریتییەکانی دەریاکە، نەک شتێکی دڵنیا).`}],refs:[`20:77`]},farShore:{title:`کەناری ئەوبەر`,summary:`ئەو کەنارەی لە کۆتایی پەڕینەوەکەدا پێی دەگەن.`,role:`ئەو شوێنەی کۆمەڵەکە دوای پەڕینەوە تێیدا کۆ دەبنەوە، و شوێنێک بۆ ئاوڕدانەوە لە دەریاکە.`,statements:[{kind:`quran`,text:`خودا نەوەکانی ئیسرائیلی لە دەریاکەدا پەڕاندەوە.`,refs:[`10:90`]},{kind:`quran`,text:`مووسا و هەموو ئەوانەی لەگەڵیدا بوون ڕزگار کران.`,refs:[`26:65`]},{kind:`artistic`,text:`سروشتی کەناری ئەوبەر بونیادنانەوەیە؛ شوێنەکەی نەزانراوە.`}],refs:[`10:90`,`26:65`]},encampment:{title:`ئۆردووگاکە`,summary:`چادر و کەلوپەلی کۆمەڵێکی ڕێبوار کە خۆیان بۆ ڕۆیشتن ئامادە دەکەن.`,role:`خاڵی دەستپێکی ڕۆیشتنەکە (بەشی ٣).`,statements:[{kind:`quran`,text:`بە مووسا گوترا کە بە شەو لەگەڵ بەندەکانی خودادا بڕوات.`,refs:[`20:77`,`26:52`,`44:23`]},{kind:`quran`,text:`بە مووسا و هاروون گوترا کە لە میسڕدا ماڵ بۆ قەومەکەیان دابین بکەن و بیانکەنە نوێژگە.`,refs:[`10:87`]},{kind:`artistic`,text:`قورئان وەسفی ئۆردووگایەک ناکات پێش پەڕینەوە. چادرەکان، کەلوپەل، ئاگر و جلوبەرگەکان بونیادنانەوەن.`}],refs:[`20:77`,`26:52`,`44:23`,`10:87`]},distantLandscape:{title:`سروشتی دوور`,summary:`چیا و بیابان لە پشت کەناری ئەوبەرەوە.`,role:`هەستی قەبارە و دووری دەبەخشێت.`,statements:[{kind:`quran`,text:`ئەو قەومەی لاواز دەکران کرانە میراتگری ڕۆژهەڵاتەکان و ڕۆژئاواکانی ئەو زەوییەی خودا بەرەکەتی تێدا ڕشتبوو.`,refs:[`7:137`]},{kind:`artistic`,text:`چیا و بیابانەکان بونیادنانەوەی گشتین و شوێنێکی ناسراو نانوێنن.`}],refs:[`7:137`]},city:{title:`شاری فیرعەون (بونیادنانەوە)`,summary:`بینای گەورە لە ئاسۆدا، کە بنکەی دەسەڵاتی فیرعەون دەنوێنن.`,role:`پاشبنەمای دوو بەشی یەکەم.`,statements:[{kind:`quran`,text:`مووسا و هاروون بۆ لای فیرعەون و چاوپڕکەرانی نێردران.`,refs:[`7:103`,`10:75`]},{kind:`quran`,text:`ناوی میسڕ لە قورئاندا هاتووە.`,refs:[`10:87`]},{kind:`quran`,text:`خودا ئەوەی فیرعەون و قەومەکەی دروستیان دەکرد و ئەوەی بنیاتیان دەنا وێران کرد.`,refs:[`7:137`]},{kind:`artistic`,text:`تەلارسازییەکە بونیادنانەوەیەکی گشتییە؛ قورئان وەسفی شارەکە ناکات.`}],refs:[`7:103`,`10:75`,`10:87`,`7:137`]},israelites:{title:`نەوەکانی ئیسرائیل`,summary:`کۆمەڵە ڕێبوارەکە، کە وەک سێبەری بچووک و بێڕوخسار پیشان دەدرێن.`,role:`ئەوانەی مووسا بە شەو دەری هێنان و بە نێو دەریادا بردنی.`,statements:[{kind:`quran`,text:`مووسا داوای لە فیرعەون کرد کە نەوەکانی ئیسرائیل لەگەڵیدا بنێرێت.`,refs:[`7:105`]},{kind:`quran`,text:`حەشرکەرانی فیرعەون وەسفیان کردن کە «کەسانێکی دابڕدابڕی زۆر کەمن».`,refs:[`26:54`]},{kind:`artistic`,text:`ژمارە، جلوبەرگ، ئاژەڵ و کەلوپەلەکانیان وەسف نەکراون. هیچ تاکێک — و هیچ هەواڵدەرێک — وێنا ناکرێت.`}],refs:[`7:105`,`26:52-54`]},pursuers:{title:`سەربازەکانی فیرعەون`,summary:`هێزە شوێنکەوتووەکان، کە وەک سێبەری تاریک و دوور پیشان دەدرێن و تەپوتۆز هەڵدەستێنن.`,role:`شوێن نەوەکانی ئیسرائیل دەکەون و دەریا دایاندەپۆشێت.`,statements:[{kind:`quran`,text:`فیرعەون حەشرکەرانی بۆ شارەکان نارد بۆ کۆکردنەوەی سەربازەکانی.`,refs:[`26:53-56`]},{kind:`quran`,text:`فیرعەون و سەربازەکانی بە سنوورشکاندن و دوژمنایەتییەوە شوێنیان کەوتن.`,refs:[`10:90`]},{kind:`quran`,text:`دەریا دایپۆشین.`,refs:[`20:78`,`26:66`]},{kind:`artistic`,text:`ژمارە، سواری، کەرەستە و ڕیزبەندییان هونەرین؛ قورئان هیچ وردەکارییەکی لەو جۆرە نادات. نوقمبوونیان بە شێوەیەکی دڵتەزێن پیشان نادرێت.`}],refs:[`26:53-56`,`10:90`,`20:78`]},sunrise:{title:`خۆرهەڵهاتن`,summary:`خۆر لە ئەوبەری دەریاکەوە هەڵدێت.`,role:`کاتی ئەو بەشانە دیاری دەکات کە دەریا تێیاندا لەت دەبێت.`,statements:[{kind:`quran`,text:`شوێنکەوتووان لە کاتی خۆرهەڵهاتندا پێیان گەیشتن.`,refs:[`26:60`]},{kind:`quran`,text:`ڕۆیشتنەکە بە شەو بوو.`,refs:[`20:77`,`26:52`,`44:23`]},{kind:`artistic`,text:`ئاراستەی خۆرهەڵهاتن بە بەراورد بە پەڕینەوەکە، و ڕەنگەکانی ئاسمان، هەڵبژاردنی هونەرین.`}],refs:[`26:60`,`26:52`]}},viewpoints:{camp:`ئۆردووگاکە`,shoreline:`کەناری دەرچوون`,overlook:`گردی سەر دەریاکە`,passage:`نێو ڕێڕەوەکە`,farShore:`کەناری ئەوبەر`,farOverlook:`گردی کەناری ئەوبەر`},classifications:{quran:{label:`دەقی قورئان`,description:`لە قورئاندا هاتووە — بڕوانە ئاماژەی ئایەتەکان.`},interpretation:{label:`ڕاڤە`,description:`ئەنجامگیرییەک یان بۆچوونی ڕاڤەکاران؛ بە ڕاشکاوی نەهاتووە.`},artistic:{label:`بونیادنانەوەی هونەری`,description:`بۆ ئەم ئەزموونە دروست کراوە؛ ڕاستییەکی سەلمێنراو نییە.`}}},tt={code:`en`,name:`English`,dir:`ltr`,digits:`latn`,translationId:`en.pickthall`,ui:{"app.title":`The Crossing of the Sea`,"app.viewport":`3D view of the scene`,"app.subtitle":`An interactive reflection on the Quranic account of Moses and the parting of the sea`,"loading.title":`Preparing the scene`,"loading.terrain":`Shaping the land and the sea bed…`,"loading.water":`Filling the sea…`,"loading.people":`Gathering the travellers…`,"loading.effects":`Raising spray and mist…`,"loading.ready":`Ready`,"intro.lead":`Walk through an ancient landscape, watch the sea part, cross between the walls of water and follow the Quranic account of the escape of the Children of Israel from Pharaoh.`,"intro.noticeTitle":`Before you begin`,"intro.notice1":`Verses are shown from the Quran in Arabic with an English translation and references. Everything else — the landscape, the people, the shape and size of the water — is an artistic reconstruction, and is labelled as such.`,"intro.notice2":`Prophets are not depicted. The community is shown only as small, distant silhouettes.`,"intro.notice3":`The exact place of the crossing is not known; this simulation does not claim to show it.`,"intro.guided":`Begin the guided journey`,"intro.guidedHint":`10 short chapters with narration and verses`,"intro.free":`Explore freely`,"intro.freeHint":`Walk anywhere; part the sea when you are ready`,"intro.sound":`Sound begins when you start. Headphones are recommended.`,"intro.quality":`Graphics: {level}`,"common.close":`Close`,"common.back":`Back`,"common.on":`On`,"common.off":`Off`,"common.returnToWebsite":`Return to the website`,"hud.menu":`Menu`,"hud.verses":`Verses`,"hud.chapters":`Chapters`,"hud.places":`Places`,"hud.settings":`Settings`,"hud.help":`Help`,"hud.mute":`Mute sound`,"hud.unmute":`Turn sound on`,"hud.guidedMode":`Guided journey`,"hud.freeMode":`Free exploration`,"hud.chapterOf":`Chapter {n} of {total}`,"guided.previous":`Previous chapter`,"guided.pause":`Pause`,"guided.resume":`Resume`,"guided.replay":`Replay chapter`,"guided.next":`Next chapter`,"guided.exploreHere":`Explore from here`,"guided.exit":`Exit guided mode`,"guided.autoNext":`Next chapter in {s} s`,"guided.continue":`Continue`,"guided.paused":`Paused`,"guided.speed":`Playback speed`,"guided.narrator":`Narrator`,"guided.references":`References`,"guided.hideText":`Hide the narration text`,"guided.showText":`Show the narration text`,"free.viewpoints":`Viewpoints`,"free.partSea":`Part the sea`,"free.parting":`The sea is parting…`,"free.calmSea":`Calm the sea`,"free.replayOpening":`Replay the opening`,"free.settling":`The sea is settling…`,"free.startGuided":`Guided journey`,"free.passageClosed":`The passage can only be entered while the sea is parted. Choose “Part the sea” first.`,"free.lockHint":`Click the view to look around · Esc releases the mouse`,"free.inspect":`Inspect: {name}`,"free.tapHint":`Drag to look · use the stick to walk · tap markers to learn more`,"keyverse.translation":`Translation: M. M. Pickthall (1930)`,"info.role":`In this experience`,"info.sources":`What the sources say, and what is reconstructed`,"info.openVerses":`Read the verses`,"info.legend":`How statements are labelled`,"verses.title":`Verses`,"verses.passagesTitle":`The Quranic passages`,"verses.arabicSource":`Arabic: Tanzil Quran Text (Uthmani), reproduced verbatim — CC BY 3.0, tanzil.net`,"verses.translationSource":`English: M. M. Pickthall, The Meaning of the Glorious Koran (1930), public domain; digitised by the Tanzil Project. A translation conveys meaning and cannot replace the Arabic text.`,"verses.allPassages":`All passages`,"verses.ayah":`Verse {key}`,"verses.tafsirLabel":`Explanation:`,"pause.title":`Paused`,"pause.resume":`Resume`,"pause.restart":`Restart the experience`,"pause.startGuided":`Start the guided journey`,"pause.exitGuided":`Exit guided mode and explore`,"pause.about":`About & sources`,"chapters.title":`Chapters`,"chapters.current":`Current chapter`,"places.title":`Places & objects`,"places.hint":`Select a place to read about it. In the 3D view, glowing markers and many objects can be clicked or tapped.`,"settings.title":`Settings`,"settings.graphics":`Graphics`,"settings.quality":`Quality`,"settings.quality.auto":`Automatic ({level})`,"settings.quality.low":`Low`,"settings.quality.medium":`Medium`,"settings.quality.high":`High`,"settings.resolution":`Resolution`,"settings.adaptive":`Lower resolution automatically when slow`,"settings.shadows":`Shadows`,"settings.sound":`Sound`,"settings.master":`Master volume`,"settings.ambience":`Environment`,"settings.effects":`Effects`,"settings.muted":`Mute all sound`,"settings.accessibility":`Accessibility & reading`,"settings.reducedMotion":`Reduce motion (gentler camera, fewer effects)`,"settings.largeText":`Larger text`,"settings.showArabic":`Show Arabic text with key verses`,"settings.narrationVoice":`Read the narration aloud (device voice; narrator only)`,"settings.autoAdvance":`Continue to the next chapter automatically`,"settings.controls":`Controls`,"settings.sensitivity":`Look sensitivity`,"settings.invertY":`Invert vertical look`,"settings.language":`Language`,"settings.languageNote":`Changing the language reloads the page and starts the experience again.`,"help.title":`Controls & help`,"help.desktop":`Keyboard and mouse`,"help.desktop.move":`W A S D or ↑ ↓ — walk; ← → — turn`,"help.desktop.run":`Shift — hurry`,"help.desktop.look":`Click the view to look with the mouse (Esc releases it), or drag with the mouse button held`,"help.desktop.inspect":`Click a marker or object — or press E / Enter — to read about it`,"help.touch":`Touch screens`,"help.touch.move":`Stick (lower left) — walk; push it fully to hurry`,"help.touch.look":`Drag anywhere else — look around`,"help.touch.inspect":`Tap a marker or object — read about it`,"help.keys":`Shortcuts`,"help.keys.list":`P — menu · Space — pause narration · N / B — next / previous chapter · R — replay chapter · V — verses · C — chapters · M — mute · H — help`,"help.guided":`In the guided journey the camera is directed for you. You can pause, replay or skip any chapter, or choose “Explore from here” to walk freely at that moment.`,"help.respect":`Out of respect, prophets are not depicted, and the drowning of Pharaoh’s forces is not shown graphically. The experience uses natural sounds only.`,"about.title":`About & sources`,"about.approach":`Approach`,"about.approachText":`The Quran is the primary source. Each statement in the experience is labelled as a Quranic statement (with references), an interpretation, or an artistic reconstruction. Narration summarises the verses in plain words and always points to them; it is not a translation.`,"about.sources":`Sources`,"about.reconstruction":`What is reconstructed`,"about.reconstructionText":`The location of the crossing, the landscape, the encampment, the city, the appearance and number of people, the width of the path, the height and behaviour of the water, the colours of the sky and all sounds are artistic choices. The Quran names the sea (al-baḥr, al-yamm) but these passages do not identify which sea it was.`,"about.respect":`Respect`,"about.respectText":`Prophets are not depicted, no dialogue is invented for any figure, and there is no music or voice acting. An optional device voice can read the narrator’s text aloud.`,"about.assets":`Software and assets`,"about.assetsText":`All 3D models, textures and sounds are generated in code for this project. Built with three.js (MIT licence). Arabic font: Amiri Quran (SIL Open Font License 1.1).`,"about.privacy":`Privacy`,"about.privacyText":`No account, tracking or analytics. Settings are stored only in this browser, if storage is available.`,"complete.title":`The crossing`,"complete.text":`You have followed the account from Pharaoh’s court to the far shore. The Quran presents it as a sign for those who reflect (26:67).`,"complete.review":`Review the Quranic passages`,"complete.replayOpening":`Replay the sea opening`,"complete.restart":`Restart the experience`,"complete.free":`Return to free exploration`,"error.webglTitle":`This device cannot show the 3D scene`,"error.webglText":`The experience needs WebGL 2, which is not available here or has been disabled. Please try a recent version of Safari, Chrome, Edge or Firefox, or turn on hardware acceleration.`,"error.contextLostTitle":`The graphics were interrupted`,"error.contextLostText":`The device paused the 3D graphics (this can happen when memory is low). Reload the page to continue.`,"error.genericTitle":`Something went wrong`,"error.genericText":`The experience could not continue. Reloading the page usually helps.`,"error.reload":`Reload`,"toast.muted":`Sound off`,"toast.unmuted":`Sound on`,"toast.qualityLowered":`Resolution lowered to keep things smooth`,"toast.moved":`You were moved to safe ground`},chapters:{"moses-and-pharaoh":{title:`Moses and Pharaoh`,subtitle:`A message to Pharaoh and his chiefs`,narration:[`The Quran recounts that Moses, with his brother Aaron, was sent to Pharaoh and his chiefs with clear signs (7:103, 10:75).`,`Moses declared that he was a messenger from the Lord of the Worlds, and asked that the Children of Israel be allowed to leave with him (7:104–105, 44:17–18).`,`Pharaoh and his chiefs rejected the message, called it mere magic, and behaved with arrogance (10:75–78).`,`Egypt is named in the Quran (10:87), but its cities are not described. The city on the horizon is an artistic reconstruction.`]},"the-signs":{title:`The signs`,subtitle:`Signs shown to Pharaoh and his people`,narration:[`Moses showed signs before Pharaoh, among them his staff and his hand (7:107–108). They are not depicted here.`,`Pharaoh gathered skilled sorcerers. When their deception was undone, they fell prostrate and believed in the Lord of Moses and Aaron (7:113–122, 10:79–82).`,`Pharaoh’s people were then tried with hardship, and with a succession of clear signs: the flood, locusts, lice, frogs and blood (7:130, 7:133).`,`Each time the distress was lifted, they broke their promise to let the Children of Israel go (7:134–135).`,`The storm and the swarm shown here only suggest these signs; how they appeared is not described, so this is an artistic reconstruction.`]},"the-departure":{title:`The departure`,subtitle:`Leaving by night`,narration:[`Moses was inspired to set out by night with God’s servants, and told that they would be pursued (26:52, 20:77, 44:23).`,`The departure by night is stated in the Quran. The encampment, tents and lamps you see are an artistic reconstruction.`,`The column makes its way down towards the sea. You may pause here and explore the encampment, then continue.`]},"approaching-the-sea":{title:`Approaching the sea`,subtitle:`Pharaoh gathers his forces`,narration:[`Pharaoh sent summoners into the cities to gather his forces, dismissing the Children of Israel as a small band (26:53–56).`,`The Quran states that the pursuers caught up with them at sunrise (26:60).`,`These passages do not name the sea. It is often identified with the Red Sea or one of its gulfs, but the exact place of the crossing is not known.`]},"the-sea-opens":{title:`The sea opens`,subtitle:`Strike the sea with your staff`,narration:[`When the two groups saw each other, the companions of Moses said they would surely be overtaken (26:61).`,`Moses replied that his Lord was with him and would guide him (26:62).`,`Then Moses was inspired to strike the sea with his staff, and it parted, each part like a vast mountain (26:63).`,`The Quran does not describe how the parting looked: its height, shape and speed here are an artistic reconstruction.`]},"entering-the-passage":{title:`Entering the passage`,subtitle:`A dry path through the sea`,narration:[`A dry path was struck for them through the sea (20:77).`,`They were told not to fear being overtaken, nor to be afraid (20:77).`,`The width of the path is an artistic choice; the depth of the sea bed follows the Gulf of Suez, one traditional identification of the sea.`]},"the-crossing":{title:`The crossing`,subtitle:`Between the walls of water`,narration:[`The Quran states that God brought the Children of Israel across the sea (10:90, 2:50).`,`Moses and all who were with him were saved (26:65).`,`You can leave the guided tour at any time and walk between the walls of water yourself.`]},"the-pursuit":{title:`Pharaoh’s pursuit`,subtitle:`Following them into the sea`,narration:[`Pharaoh and his forces followed them, in rebellion and hostility (10:90).`,`The others were brought near to that place (26:64).`,`Pharaoh led his people astray and did not guide them (20:79).`,`Their numbers, mounts and arms are not described in the Quran; the silhouettes are an artistic reconstruction.`]},"the-waters-close":{title:`The waters close`,subtitle:`The sea covers the pursuers`,narration:[`Then the others were drowned, and the sea covered them (26:66, 20:78).`,`When drowning overtook him, Pharaoh declared that he believed in the One in whom the Children of Israel believed (10:90).`,`The Quran records that this belated declaration was answered with a reminder of his earlier rebellion and corruption (10:91).`,`His body would be preserved as a sign for those who came after him (10:92).`,`No one is shown drowning here: the waters simply close over the passage.`]},conclusion:{title:`After the crossing`,subtitle:`A sign for those who reflect`,narration:[`Moses had been told to leave the sea behind “at rest” (44:24). Commentators differ on whether this means calm, or still parted.`,`The Children of Israel were made to inherit lands that God had blessed, and His fair word was fulfilled because of their patience (7:137).`,`The Quran presents the event as a sign, yet most did not believe; and your Lord is the Mighty, the Merciful (26:67–68).`,`Take your time to look back over the sea, explore freely, or review the passages.`]}},hotspots:{strikePoint:{title:`The striking of the sea`,summary:`The place on the shore where this simulation represents the moment Moses was inspired to strike the sea with his staff.`,role:`Marks where the sea begins to part in the guided sequence (chapter 5).`,statements:[{kind:`quran`,text:`Moses was inspired to strike the sea with his staff, and it parted.`,refs:[`26:63`]},{kind:`quran`,text:`A dry path was struck for them through the sea.`,refs:[`20:77`]},{kind:`artistic`,text:`Moses is not depicted. The moment is shown only by a soft pulse of light and a ripple on the water. The exact spot is unknown.`}],refs:[`26:63`,`20:77`]},shoreline:{title:`The shore of departure`,summary:`A sandy beach where the travelling community gathers before the crossing.`,role:`Starting point of the crossing, and a viewpoint looking along the passage.`,statements:[{kind:`quran`,text:`The pursuers caught up with them at sunrise.`,refs:[`26:60`]},{kind:`quran`,text:`When the two groups saw each other, the companions of Moses feared they would be overtaken.`,refs:[`26:61`]},{kind:`interpretation`,text:`The place of the crossing is not known. Proposals include the Gulf of Suez, the Gulf of Aqaba and lakes near the Isthmus of Suez; none is certain.`},{kind:`artistic`,text:`The beach, dunes and hills shown here are reconstructions, not a known location.`}],refs:[`26:60-62`]},sea:{title:`The sea`,summary:`A vast body of water separating the shore of departure from the far shore.`,role:`The sea that parts in the central sequence.`,statements:[{kind:`quran`,text:`The Quran calls it “the sea” (al-bahr); it is also called al-yamm.`,refs:[`2:50`,`7:136`,`20:78`]},{kind:`interpretation`,text:`These passages do not name the body of water. It is often identified with the Red Sea or one of its gulfs, but this identification is not certain.`},{kind:`interpretation`,text:`The depth of the sea here follows published figures for the Gulf of Suez, the traditional identification: about 40 m on average and about 70 m at most. This is one view among several; the Quran does not name the sea.`},{kind:`artistic`,text:`Its width (about 3 km here; the real gulf is 19–32 km wide), colour and waves are artistic choices.`}],refs:[`2:50`,`7:136`,`20:77-78`]},opening:{title:`The opening in the sea`,summary:`The cleft where the sea divided into two parts, leaving a passage between them.`,role:`The entrance to the passage.`,statements:[{kind:`quran`,text:`The sea parted, and each part was like a vast mountain.`,refs:[`26:63`]},{kind:`quran`,text:`God parted the sea for the Children of Israel and saved them.`,refs:[`2:50`]},{kind:`artistic`,text:`The speed of the parting, the spray, the wind and the sound are artistic; the Quran does not describe the physical process.`}],refs:[`26:63`,`2:50`]},waterWalls:{title:`The walls of water`,summary:`Towering masses of water standing on either side of the passage.`,role:`They frame the passage. You can walk beside them, but not into them.`,statements:[{kind:`quran`,text:`Each part was like a vast mountain (ka-ṭ-ṭawd al-ʿaẓīm).`,refs:[`26:63`]},{kind:`interpretation`,text:`This is commonly understood to mean that the parted water stood high, like mountains, on either side of the path.`},{kind:`artistic`,text:`Their height (about 95 m here), shape, colour, foam and motion are artistic reconstructions.`}],refs:[`26:63`]},crossingPath:{title:`The dry path`,summary:`The exposed floor of the sea along which the community crosses.`,role:`The walkable route between the walls of water.`,statements:[{kind:`quran`,text:`Moses was told to strike for them a dry path (yabas) in the sea, without fear of being overtaken.`,refs:[`20:77`]},{kind:`artistic`,text:`The width (about 70 m), the sandy surface and the gentle curve of the route are artistic choices.`},{kind:`interpretation`,text:`The path follows the sea bed, shelving gently to about 70 m below sea level in the middle, as in the Gulf of Suez (one traditional identification of the sea, not a certainty).`}],refs:[`20:77`]},farShore:{title:`The far shore`,summary:`The shore reached at the end of the crossing.`,role:`Where the community gathers after crossing, and a place to look back over the sea.`,statements:[{kind:`quran`,text:`God brought the Children of Israel across the sea.`,refs:[`10:90`]},{kind:`quran`,text:`Moses and all who were with him were saved.`,refs:[`26:65`]},{kind:`artistic`,text:`The landscape of the far shore is a reconstruction; its location is unknown.`}],refs:[`10:90`,`26:65`]},encampment:{title:`The encampment`,summary:`Tents and belongings of a travelling community preparing to leave.`,role:`Starting point of the departure (chapter 3).`,statements:[{kind:`quran`,text:`Moses was told to travel with God’s servants by night.`,refs:[`20:77`,`26:52`,`44:23`]},{kind:`quran`,text:`Moses and Aaron were told to appoint houses for their people in Egypt and make them places of worship.`,refs:[`10:87`]},{kind:`artistic`,text:`The Quran does not describe a camp before the crossing. The tents, belongings, fires and clothing are reconstructions.`}],refs:[`20:77`,`26:52`,`44:23`,`10:87`]},distantLandscape:{title:`The distant landscape`,summary:`Mountains and desert beyond the far shore.`,role:`Gives a sense of scale and distance.`,statements:[{kind:`quran`,text:`The oppressed people were made to inherit the eastern and western parts of the land which God had blessed.`,refs:[`7:137`]},{kind:`artistic`,text:`The mountains and desert are generic reconstructions and do not represent a known place.`}],refs:[`7:137`]},city:{title:`Pharaoh’s city (reconstruction)`,summary:`Monumental buildings on the horizon, standing for the seat of Pharaoh’s power.`,role:`Backdrop for the first two chapters.`,statements:[{kind:`quran`,text:`Moses and Aaron were sent to Pharaoh and his chiefs.`,refs:[`7:103`,`10:75`]},{kind:`quran`,text:`Egypt is named in the Quran.`,refs:[`10:87`]},{kind:`quran`,text:`God destroyed what Pharaoh and his people had made and what they had built.`,refs:[`7:137`]},{kind:`artistic`,text:`The architecture is a generic reconstruction; the Quran does not describe the city.`}],refs:[`7:103`,`10:75`,`10:87`,`7:137`]},israelites:{title:`The Children of Israel`,summary:`The travelling community, shown as small, featureless silhouettes.`,role:`Those whom Moses led out by night and across the sea.`,statements:[{kind:`quran`,text:`Moses asked Pharaoh to let the Children of Israel go with him.`,refs:[`7:105`]},{kind:`quran`,text:`Pharaoh’s summoners described them as “but a little troop”.`,refs:[`26:54`]},{kind:`artistic`,text:`Their number, clothing, animals and belongings are not described. No individual — and no prophet — is depicted.`}],refs:[`7:105`,`26:52-54`]},pursuers:{title:`Pharaoh’s forces`,summary:`The pursuing forces, shown as dark, distant silhouettes raising dust.`,role:`They pursue the Children of Israel and are overwhelmed by the sea.`,statements:[{kind:`quran`,text:`Pharaoh sent summoners into the cities to gather his forces.`,refs:[`26:53-56`]},{kind:`quran`,text:`Pharaoh and his forces followed them in rebellion and hostility.`,refs:[`10:90`]},{kind:`quran`,text:`The sea overwhelmed them.`,refs:[`20:78`,`26:66`]},{kind:`artistic`,text:`Their numbers, mounts, equipment and formation are artistic; the Quran gives no such details. Their drowning is not shown graphically.`}],refs:[`26:53-56`,`10:90`,`20:78`]},sunrise:{title:`Sunrise`,summary:`The sun rising over the far side of the sea.`,role:`Sets the time of the chapters in which the sea opens.`,statements:[{kind:`quran`,text:`The pursuers caught up with them at sunrise.`,refs:[`26:60`]},{kind:`quran`,text:`The departure was by night.`,refs:[`20:77`,`26:52`,`44:23`]},{kind:`artistic`,text:`The direction of the sunrise relative to the crossing, and the colours of the sky, are artistic choices.`}],refs:[`26:60`,`26:52`]}},viewpoints:{camp:`The encampment`,shoreline:`Shore of departure`,overlook:`Hill overlooking the sea`,passage:`Inside the passage`,farShore:`The far shore`,farOverlook:`Hill on the far shore`},classifications:{quran:{label:`Quranic statement`,description:`Stated in the Quran — see the verse references.`},interpretation:{label:`Interpretation`,description:`An inference or a view of commentators; not stated explicitly.`},artistic:{label:`Artistic reconstruction`,description:`Created for this simulation; not established fact.`}}},nt=[{code:`en`,name:`English`},{code:`ckb`,name:`کوردی`},{code:`ar`,name:`العربية`}],rt=`quran-3d:language`;function it(e){if(!e)return null;let t=e.trim().toLowerCase();return t===`en`||t.startsWith(`en-`)?`en`:t===`ckb`||t.startsWith(`ckb-`)||t===`ku-arab`||t===`ku-iq`||t===`ku-ir`||t===`sorani`?`ckb`:t===`ar`||t.startsWith(`ar-`)?`ar`:null}function at(){try{let e=it(new URLSearchParams(window.location.search).get(`lang`));if(e)return e}catch{}try{let e=it(window.localStorage.getItem(rt));if(e)return e}catch{}try{for(let e of navigator.languages??[navigator.language]){let t=it(e);if(t)return t}}catch{}return`en`}function ot(e){try{window.localStorage.setItem(rt,e)}catch{}let t=new URL(window.location.href);t.searchParams.set(`lang`,e),window.location.replace(t.toString())}function st(e=at()){Je(tt),Je(et),Je($e);try{Ye(e)}catch{Ye(`en`)}typeof document<`u`&&(document.documentElement.lang=M().code,document.documentElement.dir=M().dir,M().code!==`en`&&(document.title=M().ui[`app.title`]),document.getElementById(`viewport`)?.setAttribute(`aria-label`,M().ui[`app.viewport`]))}function ct(e,t,n=0){let r=(e|0)*374761393+(t|0)*668265263+(n|0)*1442695041;return r=(r^r>>>13)*1274126177,r^=r>>>16,(r>>>0)/4294967296}function lt(e,t,n=0){let r=Math.floor(e),i=Math.floor(t),a=e-r,o=t-i,s=a*a*(3-2*a),c=o*o*(3-2*o),l=ct(r,i,n),u=ct(r+1,i,n),d=ct(r,i+1,n),f=ct(r+1,i+1,n);return l+(u-l)*s+(d-l)*c+(l-u-d+f)*s*c}function F(e,t,n=5,r=0){let i=.5,a=0,o=0,s=e,c=t;for(let e=0;e<n;e++)a+=i*lt(s,c,r+e*17),o+=i,s=s*2.03+17.1,c=c*2.03+9.2,i*=.5;return a/o}function ut(e,t,n=5,r=0){let i=.5,a=0,o=0,s=e,c=t,l=1;for(let e=0;e<n;e++){let t=1-Math.abs(lt(s,c,r+e*31)*2-1);t*=t*l,l=Math.min(1,Math.max(0,t*1.6)),a+=i*t,o+=i,s=s*2.11+3.7,c=c*2.11+1.3,i*=.5}return a/o}function dt(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var I=3e3,ft=1.25,pt=.6,L=12e3,mt=6500,ht={minX:-760,maxX:760,minS:-980,maxS:3640},gt=1.7,R=e=>-e,z=e=>-e,B={camp:{x:-70,z:300},strikePoint:{x:0,z:4},southShore:{x:0,z:0},southOverlook:{x:-265,z:120},northShore:{x:0,z:-3e3},restArea:{x:55,z:-3185},northOverlook:{x:250,z:-3110},pursuerStart:{x:-640,z:860},city:{x:-900,z:2650}},_t=4.2,vt=5.5;function V(e){let t=D(e/I,0,1);return 70*Math.sin(Math.PI*t)}function yt(e){return e<=0||e>=1?0:70*Math.sin(Math.PI*e)**+ft}function bt(e){if(e<=0||e>=3e3)return 0;let t=-yt(e/I),n=Math.min(e,I-e);return t+(1*Math.sin(e*.011+1.3)+.6*Math.sin(e*.027))*k(0,400,n)}function xt(e){let t=k(90,420,Math.abs(e));return t<=0?0:t*(300*(F(e*.0021+3.1,.5,4,11)-.5)+80*(F(e*.0093+11,2.5,3,12)-.5))}function St(e){let t=k(90,420,Math.abs(e));return t<=0?I:I+t*(320*(F(e*.0019+7.7,4.5,4,21)-.5)+70*(F(e*.011+1,6.5,3,22)-.5))}var Ct=[{x:-70,z:300},{x:-58,z:230},{x:-38,z:165},{x:-18,z:100},{x:-6,z:45},{x:0,z:8}],wt=[{x:0,z:-3006},{x:12,z:-3060},{x:35,z:-3125},{x:55,z:-3185}],Tt=[{x:-640,z:860},{x:-480,z:650},{x:-330,z:450},{x:-210,z:262},{x:-80,z:100},{x:0,z:10}];function Et(e=20){let t=[];for(let n=0;n<=3000.000001;n+=e)t.push({x:V(n),z:z(n)});return t}function Dt(e=20){return[...Ct.slice(0,-1),...Et(e),...wt.slice(1)]}function Ot(e=20){let t=Et(e).filter(e=>R(e.z)<=I*.7);return[...Tt.slice(0,-1),...t]}function H(e,t,n){let r=1/0;for(let i=0;i<n.length-1;i++){let a=n[i],o=n[i+1],s=o.x-a.x,c=o.z-a.z,l=s*s+c*c,u=l>0?D(((e-a.x)*s+(t-a.z)*c)/l,0,1):0,d=e-(a.x+s*u),f=t-(a.z+c*u),p=d*d+f*f;p<r&&(r=p)}return Math.sqrt(r)}function kt(e,t,n,r,i){let a=Math.hypot(e-n.x,t-n.z);return a>r*1.7?0:i*k(r*1.6,r*.7,a)+1.2*(F(e*.05,t*.05,3,5)-.5)*k(r*1.6,r*1,a)}function At(e,t,n,r){let i=-yt(n/(n+r));return i-=5*(F(e*.004,t*.004,4,31)-.5)*k(0,150,Math.min(n,r)),Math.min(i,0)}function jt(e){return 2.6*k(0,80,e)+e*.008}function Mt(e,t,n,r){let i=jt(r),a=.25+.75*k(5,32,H(e,t,Ct));i+=6.5*(F(e*.0062,n*.0062,4,41)-.25)*k(25,220,r)*a,i+=58*ut(e*.0013+2,n*.0013,5,43)*k(330,1350,r),i+=.6*(F(e*.04,n*.04,3,45)-.5)*k(5,40,r)*a,i+=kt(e,t,B.southOverlook,92,78)*k(0,60,r);let o=1-k(97.75,195.5,Math.hypot(e-B.camp.x,t-B.camp.z));return o>0&&(i=Ne(i,_t+.6*(F(e*.03,t*.03,3,47)-.5),o)),i}function Nt(e,t,n,r){let i=jt(r),a=.3+.7*k(5,30,H(e,t,wt));i+=6*(F(e*.0058,n*.0058,4,51)-.25)*k(25,220,r)*a,i+=210*ut(e*9e-4+5,n*9e-4,5,53)*k(520,2100,r),i+=24*ut(e*.004,n*.004,4,55)*k(260,900,r),i+=.6*(F(e*.04,n*.04,3,57)-.5)*k(5,40,r)*a,i+=kt(e,t,B.northOverlook,84,66)*k(0,60,r);let o=1-k(76,161.5,Math.hypot(e-B.restArea.x,t-B.restArea.z));return o>0&&(i=Ne(i,vt+.5*(F(e*.03,t*.03,3,59)-.5),o)),i}function U(e,t){let n=R(t),r=n-xt(e),i=St(e)-n;if(r>0&&i>0){let t=Math.min(r,i),a=At(e,n,r,i),o=1-k(39,76,Math.abs(e-V(n)));if(o>0){let r=bt(n)+.3*(F(e*.06,n*.06,3,61)-.5)*k(0,30,t);a=Ne(a,r,o)}return a}let a=r<=0?Mt(e,t,n,-r):Nt(e,t,n,-i),o=Math.abs(e);return o<=6500?a:Ne(a,Math.min(a,-6),k(mt,1e4,o))}function Pt(e,t,n=.75){let r=U(e-n,t),i=U(e+n,t),a=U(e,t-n),o=U(e,t+n),s=r-i,c=a-o,l=2*n,u=Math.hypot(s,l,c);return{x:s/u,y:l/u,z:c/u}}function Ft(e,t){let n=R(t);return n>xt(e)&&n<St(e)}var It=[{x:-78,z:292},{x:-32,z:330},{x:-112,z:340},{x:-50,z:262}],Lt=null;function Rt(){if(Lt)return Lt;let e=[],t=1234567,n=()=>(t=t*1664525+1013904223>>>0,t/4294967296),{x:r,z:i}=B.camp,a=0;for(;e.length<54&&a<4e3;){a++;let t=n()*Math.PI*2,o=Math.sqrt(n())*115*.95,s=r+Math.cos(t)*o,c=i+Math.sin(t)*o;if(H(s,c,Ct)<9||It.some(e=>Math.hypot(e.x-s,e.z-c)<9))continue;let l=.8+n()*.6,u=2.6*l;e.some(e=>Math.hypot(e.x-s,e.z-c)<e.radius+u+2.5)||e.push({x:s,z:c,rotation:n()*Math.PI*2,radius:u,scale:l,tint:n()})}return Lt=e,e}var zt=I+420,Bt=I+520,Vt=()=>({openFront:0,closeFront:0,turbulence:0});function Ht(e,t){return Pe((t.openFront-e)/420)}function Ut(e,t){return Pe((t.closeFront-(I-e))/520)}function Wt(e){return k(13,13+pt,e)*k(13,13+pt,I-e)}function Gt(e,t){return e<0||e>3e3?0:36*Ht(e,t)*(1-Ut(e,t))}function Kt(e,t){if(e<0||e>3e3)return 0;let n=Ut(e,t);return 34*Wt(e)*Ht(e,t)*(1-n*n)}function qt(e,t,n){let r=Kt(e,n);return r<=0?0:r*(1-k(38,80,t-Gt(e,n)))}function Jt(e,t,n,r=0){let i=R(t);if(i<0||i>3e3)return!1;let a=Gt(i,n);return a<=r?!1:Math.abs(e-V(i))<a-r}function Yt(e){return O(e.openFront/zt)*(1-O(e.closeFront/Bt))}function Xt(e){return e.openFront>=zt-.001&&e.closeFront<=.001}var Zt=1.4,Qt=class{constructor(e){A(this,`getSeaState`,void 0),A(this,`tents`,void 0),this.getSeaState=e,this.tents=Rt()}groundHeight(e,t){return U(e,t)}inOpenPassage(e,t,n=Zt){let r=R(t);if(r<=0||r>=3e3)return!1;let i=this.getSeaState();if(Ht(r,i)<.97||Ut(r,i)>.01)return!1;let a=Gt(r,i);return Math.abs(e-V(r))<a-n}isWalkable(e,t){let n=R(t);if(e<ht.minX||e>ht.maxX||n<ht.minS||n>ht.maxS)return!1;if(this.inOpenPassage(e,t))return!0;let r=U(e,t);if(r<-.45)return!1;if(Ft(e,t)&&n>0&&n<3e3){let t=Gt(n,this.getSeaState());if(t>.05&&Math.abs(e-V(n))<t+1.4&&r<0)return!1}if(Math.hypot(e-B.camp.x,t-B.camp.z)<160){for(let n of this.tents)if(Math.hypot(e-n.x,t-n.z)<n.radius)return!1}return!0}move(e,t,n,r,i){let a=Math.max(1,Math.ceil(Math.hypot(n,r)/.75)),o=e,s=t,c=n/a,l=r/a;for(let e=0;e<a;e++)if(this.isWalkable(o+c,s+l))o+=c,s+=l;else if(Math.abs(c)>1e-6&&this.isWalkable(o+c,s))o+=c;else if(Math.abs(l)>1e-6&&this.isWalkable(o,s+l))s+=l;else break;return i.x=o,i.z=s,i}nearestWalkable(e,t,n){if(this.isWalkable(e,t))return n.x=e,n.z=t,n;for(let r=2;r<=900;r+=r<40?2:8){let i=Math.max(12,Math.round(r*.6));for(let a=0;a<i;a++){let o=a/i*Math.PI*2,s=e+Math.cos(o)*r,c=t+Math.sin(o)*r;if(this.isWalkable(s,c))return n.x=s,n.z=c,n}}return n.x=6,n.z=24,n}surfaceAt(e,t){return this.inOpenPassage(e,t,0)||U(e,t)<.15?`seabed`:Pt(e,t,1.5).y<.8?`rock`:`sand`}},$t=class{constructor(){A(this,`listeners`,new Map)}on(e,t){let n=this.listeners.get(e);return n||(n=new Set,this.listeners.set(e,n)),n.add(t),()=>this.off(e,t)}off(e,t){this.listeners.get(e)?.delete(t)}emit(e,t){let n=this.listeners.get(e);if(n)for(let e of[...n])e(t)}clear(){this.listeners.clear()}},en=class{constructor(){A(this,`fns`,[])}add(e){this.fns.push(e)}listen(e,t,n,r){e.addEventListener(t,n,r),this.fns.push(()=>e.removeEventListener(t,n,r))}dispose(){for(let e=this.fns.length-1;e>=0;e--)try{this.fns[e]()}catch(e){console.warn(`[dispose] cleanup failed`,e)}this.fns=[]}},tn=.0022,nn=.0048,rn=1.9,an=56,on=320,sn=12;function cn(e){if(!(e instanceof HTMLElement))return!1;let t=e.tagName;return t===`INPUT`||t===`SELECT`||t===`TEXTAREA`||e.isContentEditable}function ln(e){return e instanceof HTMLElement?cn(e)||e.tagName===`BUTTON`||e.tagName===`A`||e.getAttribute(`role`)===`button`||e.tabIndex>=0&&e!==document.body:!1}var un=class{constructor(e){A(this,`el`,void 0),A(this,`d`,new en),A(this,`keys`,new Set),A(this,`yawAcc`,0),A(this,`pitchAcc`,0),A(this,`sensitivity`,1),A(this,`invert`,1),A(this,`_mode`,`menu`),A(this,`_touchActive`,!1),A(this,`locked`,!1),A(this,`touches`,new Map),A(this,`joyX`,0),A(this,`joyY`,0),A(this,`mouseDown`,null),A(this,`selectCbs`,new Set),A(this,`hoverCbs`,new Set),A(this,`lockCbs`,new Set),A(this,`shortcutCbs`,new Set),A(this,`joyBase`,void 0),A(this,`joyKnob`,void 0),A(this,`joyHint`,void 0),A(this,`clearKeys`,()=>{this.keys.clear()}),A(this,`onKeyDown`,e=>{if(cn(e.target)||e.ctrlKey||e.metaKey||e.altKey)return;let t=e.code,n=[`KeyW`,`KeyA`,`KeyS`,`KeyD`,`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`ShiftLeft`,`ShiftRight`],r=!ln(e.target)||e.target instanceof Node&&this.el.contains(e.target);if(n.includes(t))this._mode===`free`&&(this.keys.add(t),t.startsWith(`Arrow`)&&r&&e.preventDefault());else if(!e.repeat)switch(t){case`KeyP`:this.emitShortcut(`pause`);break;case`KeyH`:this.emitShortcut(`help`);break;case`Slash`:e.shiftKey&&this.emitShortcut(`help`);break;case`KeyM`:this.emitShortcut(`mute`);break;case`KeyC`:this.emitShortcut(`chapters`);break;case`KeyV`:this.emitShortcut(`verses`);break;case`KeyE`:this.emitShortcut(`interact`);break;case`Enter`:r&&this.emitShortcut(`interact`);break;case`KeyN`:this.emitShortcut(`skip`);break;case`KeyB`:this.emitShortcut(`prev`);break;case`KeyR`:this.emitShortcut(`replay`);break;case`Space`:r&&(e.preventDefault(),this.emitShortcut(`togglePlay`));break;case`Escape`:this.locked||this.emitShortcut(`escape`)}}),A(this,`onKeyUp`,e=>{this.keys.delete(e.code)}),A(this,`onLockChange`,()=>{let e=document.pointerLockElement===this.el;if(e!==this.locked){this.locked=e,e||this.keys.clear();for(let t of[...this.lockCbs])t(e);this.updateJoystickVisual()}}),A(this,`onPointerDown`,e=>{if(e.pointerType===`touch`||e.pointerType===`pen`){e.preventDefault(),this._touchActive||(this._touchActive=!0,this.updateJoystickVisual());let t=this.el.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top,i=[...this.touches.values()].some(e=>e.kind===`joystick`),a=n<t.width*.42&&r>t.height*.38,o=this._mode===`free`&&a&&!i?`joystick`:`look`;this.touches.set(e.pointerId,{id:e.pointerId,kind:o,startX:e.clientX,startY:e.clientY,lastX:e.clientX,lastY:e.clientY,startT:performance.now(),moved:0}),o===`joystick`&&(this.joyBase.style.left=`${e.clientX}px`,this.joyBase.style.top=`${e.clientY}px`,this.joyBase.classList.add(`active`),this.joyHint.classList.add(`hidden`),this.joyKnob.style.transform=`translate(-50%, -50%)`);try{this.el.setPointerCapture(e.pointerId)}catch{}}else e.button===0&&(this._touchActive&&e.pointerType===`mouse`&&(this._touchActive=!1,this.updateJoystickVisual()),this.mouseDown={x:e.clientX,y:e.clientY,t:performance.now(),moved:0,id:e.pointerId})}),A(this,`onPointerMove`,e=>{let t=this.touches.get(e.pointerId);if(t){e.preventDefault();let n=e.clientX-t.lastX,r=e.clientY-t.lastY;if(t.moved+=Math.abs(n)+Math.abs(r),t.lastX=e.clientX,t.lastY=e.clientY,t.kind===`joystick`){let n=e.clientX-t.startX,r=e.clientY-t.startY,i=Math.hypot(n,r);i>an&&(n=n/i*an,r=r/i*an),this.joyKnob.style.transform=`translate(calc(-50% + ${n}px), calc(-50% + ${r}px))`;let a=.12,o=n/an,s=-r/an,c=Math.hypot(o,s),l=c<a?0:(c-a)/.88/Math.max(c,1e-6);this.joyX=o*l,this.joyY=s*l}else this._mode===`free`&&(this.yawAcc-=n*nn*this.sensitivity,this.pitchAcc-=r*nn*this.sensitivity*this.invert);return}if(e.pointerType!==`mouse`)return;if(this.locked){this._mode===`free`&&(this.yawAcc-=e.movementX*tn*this.sensitivity,this.pitchAcc-=e.movementY*tn*this.sensitivity*this.invert);return}let n=this.mouseDown;if(n&&n.id===e.pointerId&&(e.buttons&1)==1){let t=e.movementX,r=e.movementY;n.moved+=Math.abs(t)+Math.abs(r),this._mode===`free`&&n.moved>4&&(this.yawAcc-=t*tn*1.2*this.sensitivity,this.pitchAcc-=r*tn*1.2*this.sensitivity*this.invert)}if(e.target instanceof Node&&this.el.contains(e.target))for(let t of[...this.hoverCbs])t(e.clientX,e.clientY)}),A(this,`onPointerUp`,e=>{let t=this.touches.get(e.pointerId);if(t){if(this.touches.delete(e.pointerId),t.kind===`joystick`)this.resetJoystick();else if(e.type===`pointerup`&&performance.now()-t.startT<on&&t.moved<sn)for(let t of[...this.selectCbs])t(e.clientX,e.clientY);return}let n=this.mouseDown;if(n&&n.id===e.pointerId&&(this.mouseDown=null,e.type===`pointerup`&&!(n.moved>6)&&(e.target instanceof Node&&this.el.contains(e.target)||this.locked))){if(this.locked){let e=this.el.getBoundingClientRect();for(let t of[...this.selectCbs])t(e.left+e.width/2,e.top+e.height/2)}else for(let t of[...this.selectCbs])t(e.clientX,e.clientY)}}),A(this,`onPointerLeave`,()=>{if(!this.locked)for(let e of[...this.hoverCbs])e(null,null)}),this.el=e.element,this.el.classList.add(`cos-viewport`),this.joyHint=document.createElement(`div`),this.joyHint.className=`cos-joy-hint`,this.joyHint.setAttribute(`aria-hidden`,`true`),this.joyBase=document.createElement(`div`),this.joyBase.className=`cos-joy-base`,this.joyBase.setAttribute(`aria-hidden`,`true`),this.joyKnob=document.createElement(`div`),this.joyKnob.className=`cos-joy-knob`,this.joyBase.appendChild(this.joyKnob),e.overlay.append(this.joyHint,this.joyBase),this.d.add(()=>{this.joyHint.remove(),this.joyBase.remove()});let t={passive:!1};this.d.listen(window,`keydown`,this.onKeyDown),this.d.listen(window,`keyup`,this.onKeyUp),this.d.listen(window,`blur`,this.clearKeys),this.d.listen(document,`visibilitychange`,this.clearKeys),this.d.listen(this.el,`pointerdown`,this.onPointerDown,t),this.d.listen(window,`pointermove`,this.onPointerMove,t),this.d.listen(window,`pointerup`,this.onPointerUp,t),this.d.listen(window,`pointercancel`,this.onPointerUp,t),this.d.listen(this.el,`pointerleave`,this.onPointerLeave),this.d.listen(document,`pointerlockchange`,this.onLockChange),this.d.listen(document,`pointerlockerror`,this.onLockChange),this.d.listen(this.el,`contextmenu`,(e=>e.preventDefault())),this.d.listen(this.el,`touchmove`,(e=>e.preventDefault()),t),this.d.listen(this.el,`gesturestart`,(e=>e.preventDefault()),t),this.updateJoystickVisual()}get mode(){return this._mode}get pointerLocked(){return this.locked}get touchActive(){return this._touchActive}setMode(e){if(e!==this._mode){if(this._mode=e,e!==`free`){this.keys.clear(),this.resetJoystick();for(let[e,t]of this.touches)t.kind===`joystick`&&this.touches.delete(e)}e===`menu`&&this.exitPointerLock(),this.updateJoystickVisual()}}setTouchActive(e){this._touchActive=e,this.updateJoystickVisual()}setLookSettings(e,t){this.sensitivity=D(e,.1,4),this.invert=t?-1:1}consume(e){let t=this._mode===`free`,n=0,r=0,i=0;t&&((this.keys.has(`KeyW`)||this.keys.has(`ArrowUp`))&&(r+=1),(this.keys.has(`KeyS`)||this.keys.has(`ArrowDown`))&&--r,this.keys.has(`KeyD`)&&(n+=1),this.keys.has(`KeyA`)&&--n,this.keys.has(`ArrowLeft`)&&(i+=1),this.keys.has(`ArrowRight`)&&--i,n+=this.joyX,r+=this.joyY);let a=Math.hypot(n,r);a>1&&(n/=a,r/=a);let o=Math.hypot(this.joyX,this.joyY),s={moveX:n,moveY:r,run:t&&(this.keys.has(`ShiftLeft`)||this.keys.has(`ShiftRight`)||o>.93),lookYaw:t?this.yawAcc+i*rn*e:0,lookPitch:t?this.pitchAcc:0};return this.yawAcc=0,this.pitchAcc=0,s}requestPointerLock(){if(!(this.locked||this._mode!==`free`||this._touchActive))try{let e=this.el.requestPointerLock();e&&typeof e.catch==`function`&&e.catch(()=>void 0)}catch{}}exitPointerLock(){if(document.pointerLockElement)try{document.exitPointerLock()}catch{}}onSelect(e){return this.selectCbs.add(e),()=>this.selectCbs.delete(e)}onHover(e){return this.hoverCbs.add(e),()=>this.hoverCbs.delete(e)}onPointerLockChange(e){return this.lockCbs.add(e),()=>this.lockCbs.delete(e)}onShortcut(e){return this.shortcutCbs.add(e),()=>this.shortcutCbs.delete(e)}emitShortcut(e){for(let t of[...this.shortcutCbs])t(e)}resetJoystick(){this.joyX=0,this.joyY=0,this.joyBase.classList.remove(`active`),this.joyKnob.style.transform=`translate(-50%, -50%)`,this.updateJoystickVisual()}updateJoystickVisual(){let e=this._touchActive&&this._mode===`free`;this.joyHint.classList.toggle(`hidden`,!e||this.joyBase.classList.contains(`active`))}dispose(){this.exitPointerLock(),this.d.dispose(),this.selectCbs.clear(),this.hoverCbs.clear(),this.lockCbs.clear(),this.shortcutCbs.clear(),this.touches.clear(),this.keys.clear()}},dn=4.2,fn=12,pn=9,mn=o.degToRad(84),hn=class{constructor(e,t){A(this,`camera`,void 0),A(this,`collision`,void 0),A(this,`position`,new C(6,gt,24)),A(this,`yaw`,0),A(this,`pitch`,0),A(this,`vel`,new T),A(this,`tmp`,{x:0,z:0}),A(this,`bobPhase`,0),A(this,`_speed`,0),A(this,`_surface`,`sand`),A(this,`surfaceTimer`,0),A(this,`euler`,new v(0,0,0,`YXZ`)),this.camera=e,this.collision=t,this.position.y=t.groundHeight(this.position.x,this.position.z)+gt}get speed(){return this._speed}get walkIntensity(){return D(this._speed/dn,0,1.6)/1.6}get surface(){return this._surface}update(e,t,n){if(this.yaw+=t.lookYaw,this.pitch=D(this.pitch+t.lookPitch,-mn,mn),e>0){let n=Math.sin(this.yaw),r=Math.cos(this.yaw),i=-n,a=-r,o=r,s=-n,c=t.run?fn:dn,l=(i*t.moveY+o*t.moveX)*c,u=(a*t.moveY+s*t.moveX)*c,d=ze(pn,e);this.vel.x+=(l-this.vel.x)*d,this.vel.y+=(u-this.vel.y)*d,Math.hypot(this.vel.x,this.vel.y)<.01&&l===0&&u===0&&this.vel.set(0,0);let f=this.position.x,p=this.position.z;this.collision.move(f,p,this.vel.x*e,this.vel.y*e,this.tmp);let m=this.tmp.x-f,h=this.tmp.z-p;Math.abs(m)<Math.abs(this.vel.x*e)*.5&&(this.vel.x*=.3),Math.abs(h)<Math.abs(this.vel.y*e)*.5&&(this.vel.y*=.3),this.position.x=this.tmp.x,this.position.z=this.tmp.z,this._speed=Math.hypot(m,h)/e;let g=this.collision.groundHeight(this.position.x,this.position.z)+gt;g>this.position.y?this.position.y+=(g-this.position.y)*ze(25,e):this.position.y+=(g-this.position.y)*ze(12,e),this.position.y=Math.max(this.position.y,g-.25),this.surfaceTimer-=e,this.surfaceTimer<=0&&(this._surface=this.collision.surfaceAt(this.position.x,this.position.z),this.surfaceTimer=.25),this._speed>.3&&(this.bobPhase+=e*(this._speed*1.55+2))}this.writeCamera(n)}writeCamera(e){let t=e?0:Math.sin(this.bobPhase*2)*.035*this.walkIntensity;this.camera.position.set(this.position.x,this.position.y+t,this.position.z),this.euler.set(this.pitch,this.yaw,0,`YXZ`),this.camera.quaternion.setFromEuler(this.euler)}teleport(e,t,n,r=0){this.collision.nearestWalkable(e,t,this.tmp),this.position.set(this.tmp.x,this.collision.groundHeight(this.tmp.x,this.tmp.z)+gt,this.tmp.z),this.yaw=n,this.pitch=D(r,-mn,mn),this.vel.set(0,0),this._speed=0,this.writeCamera(!0)}syncFromCamera(e){this.euler.setFromQuaternion(e.quaternion,`YXZ`),this.yaw=this.euler.y,this.pitch=D(this.euler.x,-mn,mn),this.collision.nearestWalkable(e.position.x,e.position.z,this.tmp),this.position.set(this.tmp.x,this.collision.groundHeight(this.tmp.x,this.tmp.z)+gt,this.tmp.z),this.vel.set(0,0),this._speed=0,this.writeCamera(!0)}ensureValidPosition(){return!this.collision.isWalkable(this.position.x,this.position.z)&&(this.collision.nearestWalkable(this.position.x,this.position.z,this.tmp),this.position.set(this.tmp.x,this.collision.groundHeight(this.tmp.x,this.tmp.z)+gt,this.tmp.z),this.vel.set(0,0),!0)}},gn=class{constructor(e){A(this,`object`,new te),A(this,`pickables`,[]),A(this,`markers`,[]),A(this,`geometry`,new c(1,1.3).translate(0,.625,0)),A(this,`hitGeometry`,new x(1,10,8)),A(this,`hitMaterial`,new f({visible:!1})),A(this,`highlighted`,null),A(this,`tmpUp`,new C),A(this,`visible`,!0),A(this,`getSeaState`,void 0),this.object.name=`HotspotMarkers`,this.getSeaState=e.getSeaState;for(let t of e.defs){if(!t.marker)continue;let n={uHighlight:{value:0},uOpacity:{value:1},uTime:e.shared.uTime},r=new _({name:`Marker:${t.id}`,uniforms:n,vertexShader:`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,fragmentShader:`
          uniform float uHighlight;
          uniform float uOpacity;
          uniform float uTime;
          varying vec2 vUv;
          // A location pin: round head with an inner dot and a point at the bottom.
          void main() {
            vec2 p = vec2(vUv.x * 2.0 - 1.0, vUv.y * 2.6 - 0.6);
            vec2 headC = vec2(0.0, 1.25);
            float dHead = length(p - headC) - 0.62;
            // Tapered tail from the head down to the tip at (0, -0.55).
            float tailT = clamp((headC.y - p.y) / 1.8, 0.0, 1.0);
            float tailW = mix(0.5, 0.0, tailT);
            float dTail = abs(p.x) - tailW;
            float inTail = step(-0.55, p.y) * step(p.y, headC.y);
            float d = min(dHead, mix(1.0, dTail, inTail));
            float aa = 0.06;
            float body = 1.0 - smoothstep(-aa, aa, d);
            float outline = 1.0 - smoothstep(-aa, aa, d - 0.1);
            float inner = 1.0 - smoothstep(0.22 - aa, 0.22 + aa, length(p - headC));
            float pulse = 0.5 + 0.5 * sin(uTime * 2.0);
            float halo = (1.0 - smoothstep(0.62, 1.05 + 0.1 * pulse, length(p - headC))) * 0.25 * (1.0 - body);
            vec3 gold = mix(vec3(0.86, 0.62, 0.24), vec3(0.98, 0.8, 0.42), uHighlight);
            vec3 col = mix(vec3(0.08, 0.06, 0.03), gold, body);
            col = mix(col, vec3(0.08, 0.06, 0.03), inner);
            float a = max(max(outline, body), halo) * uOpacity;
            if (a < 0.01) discard;
            col = mix(gold * 0.8, col, step(0.001, outline));
            gl_FragColor = vec4(col * a, a);
            #include <colorspace_fragment>
          }
        `,toneMapped:!1,transparent:!0,depthWrite:!1,depthTest:!0,premultipliedAlpha:!0,fog:!1}),i=new l(this.geometry,r);i.renderOrder=40,i.frustumCulled=!1,i.userData.hotspot=t.id;let a=new l(this.hitGeometry,this.hitMaterial);a.userData.hotspot=t.id,a.visible=!0;let o=new C(t.x,U(t.x,t.z)+t.lift,t.z);(t.id===`sea`||t.id===`opening`||t.id===`waterWalls`)&&(o.y=Math.max(o.y,t.lift)),i.position.copy(o),a.position.copy(o),this.object.add(i,a),this.pickables.push(a),this.markers.push({def:t,sprite:i,hit:a,uniforms:n,base:o,opacity:1})}}setHighlighted(e){this.highlighted=e}setVisible(e){this.visible=e}update(e){let t=e.camera,n=this.getSeaState(),r=Xt(n),i=n.openFront<=0&&n.closeFront<=0,a=2*Math.tan(t.fov*Math.PI/360);for(let n of this.markers){let o=this.visible&&(n.def.visibleWhen===`always`||n.def.visibleWhen===`seaOpen`&&r||n.def.visibleWhen===`seaCalm`&&i),s=t.position.distanceTo(n.base),c=n.def.id===`city`||n.def.id===`distantLandscape`?9e3:2600;n.opacity+=((o&&s>6&&s<c?1:0)-n.opacity)*Math.min(1,e.realDt*4);let l=n.opacity>.02;if(n.sprite.visible=l,n.hit.visible=l&&n.opacity>.5,!l)continue;let u=+(this.highlighted===n.def.id);n.uniforms.uHighlight.value+=(u-n.uniforms.uHighlight.value)*Math.min(1,e.realDt*8),n.uniforms.uOpacity.value=n.opacity;let d=s*a*(.034+.008*n.uniforms.uHighlight.value),f=e.reducedMotion?0:Math.sin(e.time*1.4+n.base.x)*d*.08;n.sprite.position.set(n.base.x,n.base.y+f,n.base.z),n.sprite.quaternion.copy(t.quaternion),n.sprite.scale.setScalar(d),this.tmpUp.set(0,1,0).applyQuaternion(t.quaternion),n.hit.position.copy(n.sprite.position).addScaledVector(this.tmpUp,d*.9),n.hit.scale.setScalar(d*.55)}}dispose(){for(let e of this.markers)e.sprite.material.dispose();this.geometry.dispose(),this.hitGeometry.dispose(),this.hitMaterial.dispose(),this.object.removeFromParent()}},_n=new Set([`shoreline`,`sea`,`opening`,`waterWalls`,`crossingPath`,`distantLandscape`,`encampment`,`city`,`israelites`,`pursuers`,`farShore`,`strikePoint`,`sunrise`]),vn=class{constructor(e){A(this,`opts`,void 0),A(this,`raycaster`,new Ce),A(this,`ndc`,new T),this.opts=e,this.raycaster.params.Points={threshold:0}}pick(e,t,n){this.ndc.set(e,t),this.raycaster.setFromCamera(this.ndc,n),this.raycaster.far=8e3;let r=this.raycaster.ray,i=null,a=this.opts.getObjects().filter(e=>e.visible),s=this.raycaster.intersectObjects(a,!1);for(let e of s){let t=e.object;for(;t&&!t.userData.hotspot;)t=t.parent;let n=t?.userData.hotspot;if(n&&_n.has(n)){i={hotspot:n,point:e.point.clone(),distance:e.distance};break}}let c=this.march(r.origin,r.direction,i?i.distance:8e3);if(c&&(!i||c.distance<i.distance)&&(i=c),i)return i;let l=this.opts.getSunDir();return l.y>-.03&&r.direction.angleTo(l)<o.degToRad(6)?{hotspot:`sunrise`,point:r.origin.clone().addScaledVector(r.direction,3e3),distance:3e3}:null}march(e,t,n){let r=this.opts.getSeaState(),i=.3,a=new C,o=i;for(;i<n;){if(a.copy(e).addScaledVector(t,i),a.y>450&&t.y>=0)return null;let n=this.classify(a,r);if(n){let s=o,c=i;for(let n=0;n<8;n++){let n=(s+c)/2;a.copy(e).addScaledVector(t,n),this.classify(a,r)?c=n:s=n}return a.copy(e).addScaledVector(t,c),{hotspot:this.classify(a,r)??n,point:a.clone(),distance:c}}o=i,i+=Math.max(.4,i*.012)}return null}classify(e,t){let n=R(e.z),r=U(e.x,e.z),i=n>0&&n<3e3,a=Math.abs(e.x-V(n)),o=i?Gt(n,t):0;if(i&&o>.5&&a<o)return e.y<=r?`crossingPath`:null;if(i&&o>.5&&a<o+8&&e.y>r&&e.y<Kt(n,t)+1)return`waterWalls`;if(Ft(e.x,e.z)){let s=i?qt(n,a,t):0;return e.y<=Math.max(s,r)?e.y<=r&&r>-.2?this.landKind(e):s>1.5?a<o+40?`waterWalls`:`opening`:Math.hypot(e.x-B.strikePoint.x,e.z-B.strikePoint.z)<14?`strikePoint`:`sea`:null}return e.y<=r?this.landKind(e):null}landKind(e){let t=R(e.z);return Math.hypot(e.x-B.strikePoint.x,e.z-B.strikePoint.z)<14?`strikePoint`:Math.hypot(e.x-B.camp.x,e.z-B.camp.z)<138?`encampment`:Math.hypot(e.x-B.city.x,e.z-B.city.z)<420?`city`:t<0&&t>-240&&Math.abs(e.x)<700?`shoreline`:t>3e3&&t<3320&&Math.abs(e.x)<700?`farShore`:`distantLandscape`}},yn=55;function bn(e,t){switch(e??`inOut`){case`linear`:return O(t);case`in`:return Le(t);case`out`:return Ie(t);default:return Fe(t)}}var xn=class{constructor(e){A(this,`opts`,void 0),A(this,`reducedMotion`,!1),A(this,`shots`,[]),A(this,`time`,0),A(this,`total`,0),A(this,`blendIn`,2),A(this,`_active`,!1),A(this,`fromPos`,new C),A(this,`fromQuat`,new s),A(this,`fromFov`,yn),A(this,`pos`,new C),A(this,`target`,new C),A(this,`tmp`,new C),A(this,`lookObj`,new Me),A(this,`followPos`,new C),A(this,`followTarget`,new C),A(this,`followInit`,!1),A(this,`fov`,yn),A(this,`captured`,!1),this.opts=e}get active(){return this._active}resolve(e,t=new C){let[n,r,i]=e,a=typeof r==`number`?r:this.opts.groundHeight(n,i)+r.ground;return t.set(n,a,i)}play(e,t={}){let n=0;this.shots=e.map(e=>{let t={shot:e,start:n,end:n+e.duration};if(n+=e.duration,e.kind===`path`){let n=e.points.map(e=>this.resolve(e));if(t.posCurve=new Se(n.length>1?n:[n[0],n[0].clone()],!1,`centripetal`),e.targets!==`ahead`){let n=e.targets.map(e=>this.resolve(e));t.targetCurve=new Se(n.length>1?n:[n[0],n[0].clone()],!1,`centripetal`)}}else e.kind===`static`?(t.position=this.resolve(e.position),t.target=this.resolve(e.target)):e.kind===`orbit`&&(t.center=this.resolve(e.center));return t}),this.total=n,this.time=t.startTime??0,this.blendIn=this.reducedMotion?Math.min(.8,t.blendIn??2):t.blendIn??2,this._active=this.shots.length>0,this.captured=!1,this.followInit=!1}stop(){this._active=!1,this.shots=[]}evaluate(e,t){let n=Math.min(e,Math.max(0,this.total-1e-4)),r=this.shots.find(e=>n>=e.start&&n<e.end)??this.shots[this.shots.length-1],i=r.shot,a=i.duration>0?O((n-r.start)/i.duration):1;this.fov=i.fov??yn;let o=this.reducedMotion;switch(i.kind){case`static`:this.pos.copy(r.position),this.target.copy(r.target);break;case`path`:{let e=o?.85+.15*a:bn(i.ease,a),t=r.posCurve;t.getPoint(e,this.pos),r.targetCurve?r.targetCurve.getPoint(e,this.target):(t.getPoint(Math.min(1,e+.02),this.tmp),this.target.copy(this.tmp).sub(this.pos).normalize().multiplyScalar(50).add(this.pos),this.target.y=this.pos.y+(this.tmp.y-this.pos.y)*.5);break}case`orbit`:{let e=o?.5:bn(i.ease,a),t=(i.fromDeg+(i.toDeg-i.fromDeg)*e)*Math.PI/180,n=r.center;this.pos.set(n.x+Math.cos(t)*i.radius,n.y+i.height,n.z-Math.sin(t)*i.radius),this.target.copy(n);break}case`follow`:{this.opts.getFocus(i.subject,this.tmp);let[e,n,r]=i.offset,[a,s,c]=i.lookOffset??[0,0,0],l=new C(this.tmp.x+e,this.tmp.y+n,this.tmp.z+r),u=new C(this.tmp.x+a,this.tmp.y+s,this.tmp.z+c),d=this.opts.groundHeight(l.x,l.z)+1.2;l.y<d&&(l.y=d),this.followInit||(this.followPos.copy(l),this.followTarget.copy(u),this.followInit=!0);let f=1-Math.exp(-(o?.8:1.6)*t);this.followPos.lerp(l,f),this.followTarget.lerp(u,f),this.pos.copy(this.followPos),this.target.copy(this.followTarget);break}}let s=this.opts.groundHeight(this.pos.x,this.pos.z)+.8;this.pos.y<s&&(this.pos.y=s)}update(e,t){if(!this._active)return!1;this.captured||(this.fromPos.copy(t.position),this.fromQuat.copy(t.quaternion),this.fromFov=t.fov,this.captured=!0),this.time+=e,this.evaluate(this.time,e),this.lookObj.position.copy(this.pos),this.lookObj.lookAt(this.target),this.lookObj.rotateY(Math.PI);let n=this.blendIn>0?Pe(this.time/this.blendIn):1;t.position.copy(this.fromPos).lerp(this.pos,n),t.quaternion.copy(this.fromQuat).slerp(this.lookObj.quaternion,n);let r=this.fromFov+(this.fov-this.fromFov)*n;return Math.abs(t.fov-r)>.01&&(t.fov=r,t.updateProjectionMatrix()),!0}},Sn=(e,t,n=0)=>[V(e)+n,{ground:t},z(e)],W=(e,t,n=0)=>[V(e)+n,t,z(e)],Cn=[B.city.x,70,B.city.z],wn=B.camp,Tn=B.northShore,En=[{id:`moses-and-pharaoh`,duration:46,initial:{timeOfDay:`afternoon`,sea:`calm`,crowd:`camp`,pursuers:`hidden`,rain:0,swarm:0},shots:[{kind:`path`,duration:24,points:[[-260,{ground:45},820],[-420,{ground:40},1250]],targets:[Cn,Cn],fov:45},{kind:`path`,duration:30,points:[[-560,{ground:30},1500],[-760,{ground:26},1720]],targets:[Cn,[B.city.x,55,B.city.z]],fov:42}],events:[{at:10,type:`keyVerse`,ref:`7:105`},{at:30,type:`keyVerse`,ref:null}],narrationTimes:[1.5,11,22,33],refs:[`7:103-106`,`10:75-78`,`44:17-21`],exploreSpawn:{x:-45,z:245,yawDeg:8}},{id:`the-signs`,duration:54,initial:{timeOfDay:`afternoon`,sea:`calm`,crowd:`camp`,pursuers:`hidden`,rain:0,swarm:0},shots:[{kind:`path`,duration:28,points:[[-560,{ground:18},1450],[-640,{ground:14},1640]],targets:[Cn,[-850,45,2400]],fov:50},{kind:`orbit`,duration:30,center:[-720,{ground:30},1900],radius:260,height:25,fromDeg:300,toDeg:255,fov:50}],events:[{at:1,type:`timeOfDay`,name:`storm`,seconds:8},{at:8,type:`rain`,amount:1,fade:5},{at:12,type:`audio`,cue:`thunder`},{at:20,type:`keyVerse`,ref:`7:133`},{at:21,type:`swarm`,amount:.9,fade:4},{at:27,type:`audio`,cue:`thunder`},{at:36,type:`keyVerse`,ref:null},{at:38,type:`rain`,amount:0,fade:6},{at:40,type:`swarm`,amount:0,fade:5},{at:42,type:`timeOfDay`,name:`dusk`,seconds:10}],narrationTimes:[1.5,11,21,31,42],refs:[`7:107-108`,`7:113-122`,`7:130-135`,`10:79-82`],exploreSpawn:{x:-45,z:245,yawDeg:8}},{id:`the-departure`,duration:42,initial:{timeOfDay:`night`,sea:`calm`,crowd:`camp`,pursuers:`hidden`,rain:0,swarm:0},shots:[{kind:`orbit`,duration:16,center:[wn.x,{ground:2},wn.z],radius:75,height:16,fromDeg:215,toDeg:260,fov:50},{kind:`follow`,duration:30,subject:`crowd`,offset:[36,16,44],lookOffset:[0,0,-40],fov:52}],events:[{at:4,type:`crowd`,formation:`departing`},{at:8,type:`keyVerse`,ref:`26:52`},{at:22,type:`keyVerse`,ref:null}],narrationTimes:[1.5,13,26],refs:[`20:77`,`26:52`,`44:23`],exploreSpawn:{x:-60,z:262,yawDeg:0}},{id:`approaching-the-sea`,duration:44,initial:{timeOfDay:`predawn`,sea:`calm`,crowd:`departing`,pursuers:`distant`,rain:0,swarm:0},shots:[{kind:`path`,duration:22,points:[[-170,{ground:34},250],[-120,{ground:20},110]],targets:[[0,2,-60],[0,2,-200]],fov:50},{kind:`static`,duration:26,position:[70,{ground:9},40],target:[-480,40,640],fov:45}],events:[{at:1,type:`crowd`,formation:`shore`},{at:16,type:`pursuers`,formation:`approaching`},{at:18,type:`timeOfDay`,name:`sunrise`,seconds:20},{at:20,type:`keyVerse`,ref:`26:60`},{at:34,type:`keyVerse`,ref:null}],narrationTimes:[1.5,15,28],refs:[`26:53-60`],exploreSpawn:{x:6,z:40,yawDeg:0}},{id:`the-sea-opens`,duration:54,initial:{timeOfDay:`sunrise`,sea:`calm`,crowd:`shore`,pursuers:`approaching`,rain:0,swarm:0},shots:[{kind:`static`,duration:13,position:[-40,{ground:5},75],target:[25,6,-500],fov:50},{kind:`path`,duration:24,points:[[0,{ground:38},175],[6,{ground:22},70]],targets:[W(1300,0),W(1e3,5)],fov:55},{kind:`path`,duration:20,points:[Sn(-25,2.2,6),Sn(40,2,4)],targets:[W(400,22),W(500,26)],fov:62}],events:[{at:7,type:`keyVerse`,ref:`26:62`},{at:13,type:`keyVerse`,ref:`26:63`},{at:14,type:`strike`,x:B.strikePoint.x,z:B.strikePoint.z},{at:15,type:`seaOpen`,duration:18},{at:33,type:`keyVerse`,ref:null},{at:30,type:`pursuers`,formation:`atShore`}],narrationTimes:[1.5,7,13,36],refs:[`26:61-63`,`2:50`,`20:77`],exploreSpawn:{x:6,z:30,yawDeg:0}},{id:`entering-the-passage`,duration:42,initial:{timeOfDay:`sunrise`,sea:`open`,crowd:`shore`,pursuers:`distant`,rain:0,swarm:0},shots:[{kind:`follow`,duration:18,subject:`crowd`,offset:[-14,16,52],lookOffset:[0,4,-60],fov:58},{kind:`path`,duration:26,points:[Sn(70,2.6),Sn(170,2.4,6),Sn(290,2.2)],targets:`ahead`,ease:`linear`,fov:62}],events:[{at:1,type:`crowd`,formation:`entering`},{at:4,type:`keyVerse`,ref:`20:77`},{at:20,type:`keyVerse`,ref:null},{at:22,type:`pursuers`,formation:`approaching`}],narrationTimes:[1.5,12,27],refs:[`20:77`,`2:50`],exploreSpawn:{x:V(90),z:z(90),yawDeg:0}},{id:`the-crossing`,duration:46,initial:{timeOfDay:`sunrise`,sea:`open`,crowd:`crossing`,pursuers:`atShore`,rain:0,swarm:0},shots:[{kind:`follow`,duration:16,subject:`crowd`,offset:[14,3.5,34],lookOffset:[0,9,-50],fov:62},{kind:`path`,duration:18,points:[W(1150,135,-90),W(1800,150,-60)],targets:[W(1350,-30),W(2150,-25)],fov:50},{kind:`static`,duration:16,position:Sn(1620,1.7,-24),target:W(1665,34,-40),fov:68}],events:[{at:0,type:`timeOfDay`,name:`morning`,seconds:40},{at:12,type:`keyVerse`,ref:`26:65`},{at:28,type:`keyVerse`,ref:null}],narrationTimes:[1.5,14,30],refs:[`10:90`,`26:65`,`2:50`],exploreSpawn:{x:V(1500),z:z(1500),yawDeg:0}},{id:`the-pursuit`,duration:48,initial:{timeOfDay:`morning`,sea:`open`,crowd:`crossing`,pursuers:`atShore`,rain:0,swarm:0},shots:[{kind:`static`,duration:14,position:[-70,{ground:24},140],target:W(350,-5),fov:50},{kind:`follow`,duration:18,subject:`pursuers`,offset:[14,20,62],lookOffset:[0,0,-70],fov:58},{kind:`path`,duration:20,points:[[330,230,-700],[380,260,-1500]],targets:[W(1e3,-20),W(1900,-20)],fov:48}],events:[{at:2,type:`pursuers`,formation:`entering`},{at:8,type:`keyVerse`,ref:`26:64`},{at:18,type:`pursuers`,formation:`inPassage`},{at:22,type:`keyVerse`,ref:`20:79`},{at:34,type:`keyVerse`,ref:null},{at:30,type:`crowd`,formation:`farShore`}],narrationTimes:[1.5,12,23,35],refs:[`10:90`,`26:64`,`20:78-79`],exploreSpawn:{x:V(I-300),z:z(I-300),yawDeg:180}},{id:`the-waters-close`,duration:58,initial:{timeOfDay:`morning`,sea:`open`,crowd:`farShore`,pursuers:`inPassage`,rain:0,swarm:0},shots:[{kind:`static`,duration:24,position:[55,{ground:48},Tn.z-70],target:W(I-1e3,-8),fov:50},{kind:`path`,duration:16,points:[[90,{ground:34},Tn.z-50],[40,{ground:20},Tn.z-20]],targets:[W(I-1300,0),W(I-1700,0)],fov:52},{kind:`static`,duration:22,position:[10,{ground:26},Tn.z-90],target:W(1500,-2),fov:46}],events:[{at:4,type:`seaClose`,duration:18},{at:4,type:`audio`,cue:`seaClose`},{at:6,type:`keyVerse`,ref:`20:78`},{at:20,type:`keyVerse`,ref:`10:90`},{at:31,type:`keyVerse`,ref:`10:91`},{at:42,type:`keyVerse`,ref:`10:92`},{at:54,type:`keyVerse`,ref:null}],narrationTimes:[3,19,30,41,50],refs:[`26:66`,`20:78`,`10:90-92`,`2:50`,`7:136`],exploreSpawn:{x:22,z:Tn.z-40,yawDeg:180}},{id:`conclusion`,duration:48,initial:{timeOfDay:`morning`,sea:`calm`,crowd:`farShore`,pursuers:`hidden`,rain:0,swarm:0},shots:[{kind:`orbit`,duration:24,center:[30,{ground:3},Tn.z-120],radius:110,height:34,fromDeg:40,toDeg:110,fov:50},{kind:`static`,duration:28,position:[20,{ground:3},Tn.z-50],target:[0,4,-1200],fov:50}],events:[{at:3,type:`keyVerse`,ref:`44:24`},{at:14,type:`keyVerse`,ref:`7:137`},{at:26,type:`keyVerse`,ref:`26:67`},{at:40,type:`keyVerse`,ref:null}],narrationTimes:[2,13,25,37],refs:[`44:24`,`7:137`,`26:67-68`,`2:49-50`],exploreSpawn:{x:20,z:Tn.z-60,yawDeg:180}}],Dn=En.findIndex(e=>e.id===`the-sea-opens`),On=class{constructor(e){A(this,`chapters`,void 0),A(this,`autoAdvance`,!0),A(this,`world`,void 0),A(this,`rig`,void 0),A(this,`emitter`,new $t),A(this,`delay`,void 0),A(this,`fired`,new Set),A(this,`countdown`,null),A(this,`st`,{active:!1,chapterIndex:-1,chapterId:null,time:0,duration:0,paused:!1,narrationIndex:-1,finished:!1,chapterEnded:!1}),this.chapters=e.chapters,this.world=e.world,this.rig=e.rig,this.delay=e.autoAdvanceDelay??7}get state(){return this.st}get autoAdvanceIn(){return this.countdown}on(e,t){return this.emitter.on(e,t)}emitState(){this.emitter.emit(`state`,{...this.st})}start(e=0){this.st.active=!0,this.st.finished=!1,this.goTo(e)}goTo(e){let t=Math.max(0,Math.min(this.chapters.length-1,e)),n=this.chapters[t];this.st.active=!0,this.st.chapterIndex=t,this.st.chapterId=n.id,this.st.time=0,this.st.duration=n.duration,this.st.paused=!1,this.st.narrationIndex=-1,this.st.chapterEnded=!1,this.st.finished=!1,this.countdown=null,this.fired=new Set,this.world.applySnapshot(n.initial),this.rig.play(n.shots,{blendIn:2.5}),this.emitter.emit(`chapterStart`,{index:t}),this.processTimeline(),this.emitState()}pause(){this.st.active&&!this.st.paused&&(this.st.paused=!0,this.emitState())}resume(){this.st.active&&this.st.paused&&(this.st.paused=!1,this.emitState())}togglePause(){this.st.paused?this.resume():this.pause()}next(){this.st.active&&(this.st.chapterIndex>=this.chapters.length-1?this.finish():this.goTo(this.st.chapterIndex+1))}prev(){this.st.active&&this.goTo(Math.max(0,this.st.chapterIndex-1))}replay(){this.st.active&&this.goTo(this.st.chapterIndex)}stop(){this.st.active=!1,this.st.paused=!1,this.countdown=null,this.rig.stop(),this.emitState()}finish(){this.st.finished=!0,this.st.chapterEnded=!0,this.countdown=null,this.emitter.emit(`finished`,{}),this.emitState()}processTimeline(){let e=this.chapters[this.st.chapterIndex];e.events.forEach((e,t)=>{!this.fired.has(t)&&e.at<=this.st.time&&(this.fired.add(t),this.world.runEvent(e))});let t=-1;e.narrationTimes.forEach((e,n)=>{e<=this.st.time&&(t=n)}),t!==this.st.narrationIndex&&(this.st.narrationIndex=t,t>=0&&this.emitter.emit(`narration`,{chapterIndex:this.st.chapterIndex,lineIndex:t}))}update(e,t){if(this.st.active){if(!this.st.paused){let t=this.chapters[this.st.chapterIndex];this.st.time=Math.min(this.st.time+e,t.duration+3600),this.processTimeline(),!this.st.chapterEnded&&this.st.time>=t.duration?(this.st.chapterEnded=!0,this.emitter.emit(`chapterEnd`,{index:this.st.chapterIndex}),this.st.chapterIndex>=this.chapters.length-1?this.finish():this.autoAdvance&&(this.countdown=this.delay),this.emitState()):this.countdown!==null&&(this.autoAdvance?(this.countdown-=e,this.countdown<=0&&(this.countdown=null,this.next())):this.countdown=null)}this.rig.update(this.st.paused?0:e,t)}}dispose(){this.emitter.clear(),this.rig.stop()}},kn=[{id:`strikePoint`,x:B.strikePoint.x,z:B.strikePoint.z,lift:2.6,marker:!0,visibleWhen:`always`},{id:`shoreline`,x:64,z:14,lift:3,marker:!0,visibleWhen:`always`},{id:`sea`,x:-170,z:-140,lift:7,marker:!0,visibleWhen:`always`},{id:`opening`,x:V(45),z:z(45),lift:9,marker:!0,visibleWhen:`seaOpen`},{id:`waterWalls`,x:V(170)-31,z:z(170),lift:14,marker:!0,visibleWhen:`seaOpen`},{id:`crossingPath`,x:V(330),z:z(330),lift:2.4,marker:!0,visibleWhen:`seaOpen`},{id:`farShore`,x:14,z:B.northShore.z-14,lift:4,marker:!0,visibleWhen:`always`},{id:`encampment`,x:B.camp.x,z:B.camp.z,lift:9,marker:!0,visibleWhen:`always`},{id:`distantLandscape`,x:420,z:-1700,lift:60,marker:!0,visibleWhen:`always`},{id:`city`,x:B.city.x,z:B.city.z,lift:95,marker:!0,visibleWhen:`always`},{id:`israelites`,x:B.camp.x,z:B.camp.z,lift:3,marker:!1,visibleWhen:`always`},{id:`pursuers`,x:B.pursuerStart.x,z:B.pursuerStart.z,lift:3,marker:!1,visibleWhen:`always`},{id:`sunrise`,x:0,z:-3e3,lift:100,marker:!1,visibleWhen:`always`}];kn.map(e=>e.id);var An=[{id:`camp`,x:-45,z:245,yawDeg:8,pitchDeg:-3,requiresOpenSea:!1},{id:`shoreline`,x:6,z:24,yawDeg:0,pitchDeg:2,requiresOpenSea:!1},{id:`overlook`,x:B.southOverlook.x,z:B.southOverlook.z,yawDeg:-32,pitchDeg:-8,requiresOpenSea:!1},{id:`passage`,x:V(260),z:z(260),yawDeg:0,pitchDeg:8,requiresOpenSea:!0},{id:`farShore`,x:22,z:B.northShore.z-32,yawDeg:180,pitchDeg:2,requiresOpenSea:!1},{id:`farOverlook`,x:B.northOverlook.x,z:B.northOverlook.z,yawDeg:154,pitchDeg:-8,requiresOpenSea:!1}],jn=An.map(e=>e.id),Mn={meta:{id:`tanzil-uthmani`,title:`Tanzil Quran Text (Uthmani)`,version:`1.1`,source:`Tanzil Project`,sourceUrl:`https://tanzil.net`,updatesUrl:`https://tanzil.net/updates/`,license:`Creative Commons Attribution 3.0 (verbatim copies only; changing the text is not allowed)`,options:`Uthmani script with pause marks, sajdah signs, rub-el-hizb signs and superscript alif`,retrieved:`2026-10-09`,notice:`# PLEASE DO NOT REMOVE OR CHANGE THIS COPYRIGHT BLOCK
#====================================================================
#
#  Tanzil Quran Text (Uthmani, Version 1.1)
#  Copyright (C) 2007-2026 Tanzil Project
#  License: Creative Commons Attribution 3.0
#
#  This copy of the Quran text is carefully produced, highly 
#  verified and continuously monitored by a group of specialists 
#  at Tanzil Project.
#
#  TERMS OF USE:
#
#  - Permission is granted to copy and distribute verbatim copies 
#    of this text, but CHANGING IT IS NOT ALLOWED.
#
#  - This Quran text can be used in any website or application, 
#    provided that its source (Tanzil Project) is clearly indicated, 
#    and a link is made to tanzil.net to enable users to keep
#    track of changes.
#
#  - This copyright notice shall be included in all verbatim copies 
#    of the text, and shall be reproduced appropriately in all files 
#    derived from or containing substantial portion of this text.
#
#  Please check updates at: http://tanzil.net/updates/
#
#====================================================================`},verses:JSON.parse(`{"2:49":"وَإِذْ نَجَّيْنَٰكُم مِّنْ ءَالِ فِرْعَوْنَ يَسُومُونَكُمْ سُوٓءَ ٱلْعَذَابِ يُذَبِّحُونَ أَبْنَآءَكُمْ وَيَسْتَحْيُونَ نِسَآءَكُمْ ۚ وَفِى ذَٰلِكُم بَلَآءٌ مِّن رَّبِّكُمْ عَظِيمٌ","2:50":"وَإِذْ فَرَقْنَا بِكُمُ ٱلْبَحْرَ فَأَنجَيْنَٰكُمْ وَأَغْرَقْنَآ ءَالَ فِرْعَوْنَ وَأَنتُمْ تَنظُرُونَ","7:103":"ثُمَّ بَعَثْنَا مِنۢ بَعْدِهِم مُّوسَىٰ بِـَٔايَٰتِنَآ إِلَىٰ فِرْعَوْنَ وَمَلَإِي۟هِۦ فَظَلَمُوا۟ بِهَا ۖ فَٱنظُرْ كَيْفَ كَانَ عَٰقِبَةُ ٱلْمُفْسِدِينَ","7:104":"وَقَالَ مُوسَىٰ يَٰفِرْعَوْنُ إِنِّى رَسُولٌ مِّن رَّبِّ ٱلْعَٰلَمِينَ","7:105":"حَقِيقٌ عَلَىٰٓ أَن لَّآ أَقُولَ عَلَى ٱللَّهِ إِلَّا ٱلْحَقَّ ۚ قَدْ جِئْتُكُم بِبَيِّنَةٍ مِّن رَّبِّكُمْ فَأَرْسِلْ مَعِىَ بَنِىٓ إِسْرَٰٓءِيلَ","7:106":"قَالَ إِن كُنتَ جِئْتَ بِـَٔايَةٍ فَأْتِ بِهَآ إِن كُنتَ مِنَ ٱلصَّٰدِقِينَ","7:107":"فَأَلْقَىٰ عَصَاهُ فَإِذَا هِىَ ثُعْبَانٌ مُّبِينٌ","7:108":"وَنَزَعَ يَدَهُۥ فَإِذَا هِىَ بَيْضَآءُ لِلنَّٰظِرِينَ","7:109":"قَالَ ٱلْمَلَأُ مِن قَوْمِ فِرْعَوْنَ إِنَّ هَٰذَا لَسَٰحِرٌ عَلِيمٌ","7:110":"يُرِيدُ أَن يُخْرِجَكُم مِّنْ أَرْضِكُمْ ۖ فَمَاذَا تَأْمُرُونَ","7:111":"قَالُوٓا۟ أَرْجِهْ وَأَخَاهُ وَأَرْسِلْ فِى ٱلْمَدَآئِنِ حَٰشِرِينَ","7:112":"يَأْتُوكَ بِكُلِّ سَٰحِرٍ عَلِيمٍ","7:113":"وَجَآءَ ٱلسَّحَرَةُ فِرْعَوْنَ قَالُوٓا۟ إِنَّ لَنَا لَأَجْرًا إِن كُنَّا نَحْنُ ٱلْغَٰلِبِينَ","7:114":"قَالَ نَعَمْ وَإِنَّكُمْ لَمِنَ ٱلْمُقَرَّبِينَ","7:115":"قَالُوا۟ يَٰمُوسَىٰٓ إِمَّآ أَن تُلْقِىَ وَإِمَّآ أَن نَّكُونَ نَحْنُ ٱلْمُلْقِينَ","7:116":"قَالَ أَلْقُوا۟ ۖ فَلَمَّآ أَلْقَوْا۟ سَحَرُوٓا۟ أَعْيُنَ ٱلنَّاسِ وَٱسْتَرْهَبُوهُمْ وَجَآءُو بِسِحْرٍ عَظِيمٍ","7:117":"۞ وَأَوْحَيْنَآ إِلَىٰ مُوسَىٰٓ أَنْ أَلْقِ عَصَاكَ ۖ فَإِذَا هِىَ تَلْقَفُ مَا يَأْفِكُونَ","7:118":"فَوَقَعَ ٱلْحَقُّ وَبَطَلَ مَا كَانُوا۟ يَعْمَلُونَ","7:119":"فَغُلِبُوا۟ هُنَالِكَ وَٱنقَلَبُوا۟ صَٰغِرِينَ","7:120":"وَأُلْقِىَ ٱلسَّحَرَةُ سَٰجِدِينَ","7:121":"قَالُوٓا۟ ءَامَنَّا بِرَبِّ ٱلْعَٰلَمِينَ","7:122":"رَبِّ مُوسَىٰ وَهَٰرُونَ","7:123":"قَالَ فِرْعَوْنُ ءَامَنتُم بِهِۦ قَبْلَ أَنْ ءَاذَنَ لَكُمْ ۖ إِنَّ هَٰذَا لَمَكْرٌ مَّكَرْتُمُوهُ فِى ٱلْمَدِينَةِ لِتُخْرِجُوا۟ مِنْهَآ أَهْلَهَا ۖ فَسَوْفَ تَعْلَمُونَ","7:124":"لَأُقَطِّعَنَّ أَيْدِيَكُمْ وَأَرْجُلَكُم مِّنْ خِلَٰفٍ ثُمَّ لَأُصَلِّبَنَّكُمْ أَجْمَعِينَ","7:125":"قَالُوٓا۟ إِنَّآ إِلَىٰ رَبِّنَا مُنقَلِبُونَ","7:126":"وَمَا تَنقِمُ مِنَّآ إِلَّآ أَنْ ءَامَنَّا بِـَٔايَٰتِ رَبِّنَا لَمَّا جَآءَتْنَا ۚ رَبَّنَآ أَفْرِغْ عَلَيْنَا صَبْرًا وَتَوَفَّنَا مُسْلِمِينَ","7:127":"وَقَالَ ٱلْمَلَأُ مِن قَوْمِ فِرْعَوْنَ أَتَذَرُ مُوسَىٰ وَقَوْمَهُۥ لِيُفْسِدُوا۟ فِى ٱلْأَرْضِ وَيَذَرَكَ وَءَالِهَتَكَ ۚ قَالَ سَنُقَتِّلُ أَبْنَآءَهُمْ وَنَسْتَحْىِۦ نِسَآءَهُمْ وَإِنَّا فَوْقَهُمْ قَٰهِرُونَ","7:128":"قَالَ مُوسَىٰ لِقَوْمِهِ ٱسْتَعِينُوا۟ بِٱللَّهِ وَٱصْبِرُوٓا۟ ۖ إِنَّ ٱلْأَرْضَ لِلَّهِ يُورِثُهَا مَن يَشَآءُ مِنْ عِبَادِهِۦ ۖ وَٱلْعَٰقِبَةُ لِلْمُتَّقِينَ","7:129":"قَالُوٓا۟ أُوذِينَا مِن قَبْلِ أَن تَأْتِيَنَا وَمِنۢ بَعْدِ مَا جِئْتَنَا ۚ قَالَ عَسَىٰ رَبُّكُمْ أَن يُهْلِكَ عَدُوَّكُمْ وَيَسْتَخْلِفَكُمْ فِى ٱلْأَرْضِ فَيَنظُرَ كَيْفَ تَعْمَلُونَ","7:130":"وَلَقَدْ أَخَذْنَآ ءَالَ فِرْعَوْنَ بِٱلسِّنِينَ وَنَقْصٍ مِّنَ ٱلثَّمَرَٰتِ لَعَلَّهُمْ يَذَّكَّرُونَ","7:131":"فَإِذَا جَآءَتْهُمُ ٱلْحَسَنَةُ قَالُوا۟ لَنَا هَٰذِهِۦ ۖ وَإِن تُصِبْهُمْ سَيِّئَةٌ يَطَّيَّرُوا۟ بِمُوسَىٰ وَمَن مَّعَهُۥٓ ۗ أَلَآ إِنَّمَا طَٰٓئِرُهُمْ عِندَ ٱللَّهِ وَلَٰكِنَّ أَكْثَرَهُمْ لَا يَعْلَمُونَ","7:132":"وَقَالُوا۟ مَهْمَا تَأْتِنَا بِهِۦ مِنْ ءَايَةٍ لِّتَسْحَرَنَا بِهَا فَمَا نَحْنُ لَكَ بِمُؤْمِنِينَ","7:133":"فَأَرْسَلْنَا عَلَيْهِمُ ٱلطُّوفَانَ وَٱلْجَرَادَ وَٱلْقُمَّلَ وَٱلضَّفَادِعَ وَٱلدَّمَ ءَايَٰتٍ مُّفَصَّلَٰتٍ فَٱسْتَكْبَرُوا۟ وَكَانُوا۟ قَوْمًا مُّجْرِمِينَ","7:134":"وَلَمَّا وَقَعَ عَلَيْهِمُ ٱلرِّجْزُ قَالُوا۟ يَٰمُوسَى ٱدْعُ لَنَا رَبَّكَ بِمَا عَهِدَ عِندَكَ ۖ لَئِن كَشَفْتَ عَنَّا ٱلرِّجْزَ لَنُؤْمِنَنَّ لَكَ وَلَنُرْسِلَنَّ مَعَكَ بَنِىٓ إِسْرَٰٓءِيلَ","7:135":"فَلَمَّا كَشَفْنَا عَنْهُمُ ٱلرِّجْزَ إِلَىٰٓ أَجَلٍ هُم بَٰلِغُوهُ إِذَا هُمْ يَنكُثُونَ","7:136":"فَٱنتَقَمْنَا مِنْهُمْ فَأَغْرَقْنَٰهُمْ فِى ٱلْيَمِّ بِأَنَّهُمْ كَذَّبُوا۟ بِـَٔايَٰتِنَا وَكَانُوا۟ عَنْهَا غَٰفِلِينَ","7:137":"وَأَوْرَثْنَا ٱلْقَوْمَ ٱلَّذِينَ كَانُوا۟ يُسْتَضْعَفُونَ مَشَٰرِقَ ٱلْأَرْضِ وَمَغَٰرِبَهَا ٱلَّتِى بَٰرَكْنَا فِيهَا ۖ وَتَمَّتْ كَلِمَتُ رَبِّكَ ٱلْحُسْنَىٰ عَلَىٰ بَنِىٓ إِسْرَٰٓءِيلَ بِمَا صَبَرُوا۟ ۖ وَدَمَّرْنَا مَا كَانَ يَصْنَعُ فِرْعَوْنُ وَقَوْمُهُۥ وَمَا كَانُوا۟ يَعْرِشُونَ","10:75":"ثُمَّ بَعَثْنَا مِنۢ بَعْدِهِم مُّوسَىٰ وَهَٰرُونَ إِلَىٰ فِرْعَوْنَ وَمَلَإِي۟هِۦ بِـَٔايَٰتِنَا فَٱسْتَكْبَرُوا۟ وَكَانُوا۟ قَوْمًا مُّجْرِمِينَ","10:76":"فَلَمَّا جَآءَهُمُ ٱلْحَقُّ مِنْ عِندِنَا قَالُوٓا۟ إِنَّ هَٰذَا لَسِحْرٌ مُّبِينٌ","10:77":"قَالَ مُوسَىٰٓ أَتَقُولُونَ لِلْحَقِّ لَمَّا جَآءَكُمْ ۖ أَسِحْرٌ هَٰذَا وَلَا يُفْلِحُ ٱلسَّٰحِرُونَ","10:78":"قَالُوٓا۟ أَجِئْتَنَا لِتَلْفِتَنَا عَمَّا وَجَدْنَا عَلَيْهِ ءَابَآءَنَا وَتَكُونَ لَكُمَا ٱلْكِبْرِيَآءُ فِى ٱلْأَرْضِ وَمَا نَحْنُ لَكُمَا بِمُؤْمِنِينَ","10:79":"وَقَالَ فِرْعَوْنُ ٱئْتُونِى بِكُلِّ سَٰحِرٍ عَلِيمٍ","10:80":"فَلَمَّا جَآءَ ٱلسَّحَرَةُ قَالَ لَهُم مُّوسَىٰٓ أَلْقُوا۟ مَآ أَنتُم مُّلْقُونَ","10:81":"فَلَمَّآ أَلْقَوْا۟ قَالَ مُوسَىٰ مَا جِئْتُم بِهِ ٱلسِّحْرُ ۖ إِنَّ ٱللَّهَ سَيُبْطِلُهُۥٓ ۖ إِنَّ ٱللَّهَ لَا يُصْلِحُ عَمَلَ ٱلْمُفْسِدِينَ","10:82":"وَيُحِقُّ ٱللَّهُ ٱلْحَقَّ بِكَلِمَٰتِهِۦ وَلَوْ كَرِهَ ٱلْمُجْرِمُونَ","10:83":"فَمَآ ءَامَنَ لِمُوسَىٰٓ إِلَّا ذُرِّيَّةٌ مِّن قَوْمِهِۦ عَلَىٰ خَوْفٍ مِّن فِرْعَوْنَ وَمَلَإِي۟هِمْ أَن يَفْتِنَهُمْ ۚ وَإِنَّ فِرْعَوْنَ لَعَالٍ فِى ٱلْأَرْضِ وَإِنَّهُۥ لَمِنَ ٱلْمُسْرِفِينَ","10:84":"وَقَالَ مُوسَىٰ يَٰقَوْمِ إِن كُنتُمْ ءَامَنتُم بِٱللَّهِ فَعَلَيْهِ تَوَكَّلُوٓا۟ إِن كُنتُم مُّسْلِمِينَ","10:85":"فَقَالُوا۟ عَلَى ٱللَّهِ تَوَكَّلْنَا رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِّلْقَوْمِ ٱلظَّٰلِمِينَ","10:86":"وَنَجِّنَا بِرَحْمَتِكَ مِنَ ٱلْقَوْمِ ٱلْكَٰفِرِينَ","10:87":"وَأَوْحَيْنَآ إِلَىٰ مُوسَىٰ وَأَخِيهِ أَن تَبَوَّءَا لِقَوْمِكُمَا بِمِصْرَ بُيُوتًا وَٱجْعَلُوا۟ بُيُوتَكُمْ قِبْلَةً وَأَقِيمُوا۟ ٱلصَّلَوٰةَ ۗ وَبَشِّرِ ٱلْمُؤْمِنِينَ","10:88":"وَقَالَ مُوسَىٰ رَبَّنَآ إِنَّكَ ءَاتَيْتَ فِرْعَوْنَ وَمَلَأَهُۥ زِينَةً وَأَمْوَٰلًا فِى ٱلْحَيَوٰةِ ٱلدُّنْيَا رَبَّنَا لِيُضِلُّوا۟ عَن سَبِيلِكَ ۖ رَبَّنَا ٱطْمِسْ عَلَىٰٓ أَمْوَٰلِهِمْ وَٱشْدُدْ عَلَىٰ قُلُوبِهِمْ فَلَا يُؤْمِنُوا۟ حَتَّىٰ يَرَوُا۟ ٱلْعَذَابَ ٱلْأَلِيمَ","10:89":"قَالَ قَدْ أُجِيبَت دَّعْوَتُكُمَا فَٱسْتَقِيمَا وَلَا تَتَّبِعَآنِّ سَبِيلَ ٱلَّذِينَ لَا يَعْلَمُونَ","10:90":"۞ وَجَٰوَزْنَا بِبَنِىٓ إِسْرَٰٓءِيلَ ٱلْبَحْرَ فَأَتْبَعَهُمْ فِرْعَوْنُ وَجُنُودُهُۥ بَغْيًا وَعَدْوًا ۖ حَتَّىٰٓ إِذَآ أَدْرَكَهُ ٱلْغَرَقُ قَالَ ءَامَنتُ أَنَّهُۥ لَآ إِلَٰهَ إِلَّا ٱلَّذِىٓ ءَامَنَتْ بِهِۦ بَنُوٓا۟ إِسْرَٰٓءِيلَ وَأَنَا۠ مِنَ ٱلْمُسْلِمِينَ","10:91":"ءَآلْـَٰٔنَ وَقَدْ عَصَيْتَ قَبْلُ وَكُنتَ مِنَ ٱلْمُفْسِدِينَ","10:92":"فَٱلْيَوْمَ نُنَجِّيكَ بِبَدَنِكَ لِتَكُونَ لِمَنْ خَلْفَكَ ءَايَةً ۚ وَإِنَّ كَثِيرًا مِّنَ ٱلنَّاسِ عَنْ ءَايَٰتِنَا لَغَٰفِلُونَ","20:77":"وَلَقَدْ أَوْحَيْنَآ إِلَىٰ مُوسَىٰٓ أَنْ أَسْرِ بِعِبَادِى فَٱضْرِبْ لَهُمْ طَرِيقًا فِى ٱلْبَحْرِ يَبَسًا لَّا تَخَٰفُ دَرَكًا وَلَا تَخْشَىٰ","20:78":"فَأَتْبَعَهُمْ فِرْعَوْنُ بِجُنُودِهِۦ فَغَشِيَهُم مِّنَ ٱلْيَمِّ مَا غَشِيَهُمْ","20:79":"وَأَضَلَّ فِرْعَوْنُ قَوْمَهُۥ وَمَا هَدَىٰ","26:52":"۞ وَأَوْحَيْنَآ إِلَىٰ مُوسَىٰٓ أَنْ أَسْرِ بِعِبَادِىٓ إِنَّكُم مُّتَّبَعُونَ","26:53":"فَأَرْسَلَ فِرْعَوْنُ فِى ٱلْمَدَآئِنِ حَٰشِرِينَ","26:54":"إِنَّ هَٰٓؤُلَآءِ لَشِرْذِمَةٌ قَلِيلُونَ","26:55":"وَإِنَّهُمْ لَنَا لَغَآئِظُونَ","26:56":"وَإِنَّا لَجَمِيعٌ حَٰذِرُونَ","26:57":"فَأَخْرَجْنَٰهُم مِّن جَنَّٰتٍ وَعُيُونٍ","26:58":"وَكُنُوزٍ وَمَقَامٍ كَرِيمٍ","26:59":"كَذَٰلِكَ وَأَوْرَثْنَٰهَا بَنِىٓ إِسْرَٰٓءِيلَ","26:60":"فَأَتْبَعُوهُم مُّشْرِقِينَ","26:61":"فَلَمَّا تَرَٰٓءَا ٱلْجَمْعَانِ قَالَ أَصْحَٰبُ مُوسَىٰٓ إِنَّا لَمُدْرَكُونَ","26:62":"قَالَ كَلَّآ ۖ إِنَّ مَعِىَ رَبِّى سَيَهْدِينِ","26:63":"فَأَوْحَيْنَآ إِلَىٰ مُوسَىٰٓ أَنِ ٱضْرِب بِّعَصَاكَ ٱلْبَحْرَ ۖ فَٱنفَلَقَ فَكَانَ كُلُّ فِرْقٍ كَٱلطَّوْدِ ٱلْعَظِيمِ","26:64":"وَأَزْلَفْنَا ثَمَّ ٱلْـَٔاخَرِينَ","26:65":"وَأَنجَيْنَا مُوسَىٰ وَمَن مَّعَهُۥٓ أَجْمَعِينَ","26:66":"ثُمَّ أَغْرَقْنَا ٱلْـَٔاخَرِينَ","26:67":"إِنَّ فِى ذَٰلِكَ لَـَٔايَةً ۖ وَمَا كَانَ أَكْثَرُهُم مُّؤْمِنِينَ","26:68":"وَإِنَّ رَبَّكَ لَهُوَ ٱلْعَزِيزُ ٱلرَّحِيمُ","44:17":"۞ وَلَقَدْ فَتَنَّا قَبْلَهُمْ قَوْمَ فِرْعَوْنَ وَجَآءَهُمْ رَسُولٌ كَرِيمٌ","44:18":"أَنْ أَدُّوٓا۟ إِلَىَّ عِبَادَ ٱللَّهِ ۖ إِنِّى لَكُمْ رَسُولٌ أَمِينٌ","44:19":"وَأَن لَّا تَعْلُوا۟ عَلَى ٱللَّهِ ۖ إِنِّىٓ ءَاتِيكُم بِسُلْطَٰنٍ مُّبِينٍ","44:20":"وَإِنِّى عُذْتُ بِرَبِّى وَرَبِّكُمْ أَن تَرْجُمُونِ","44:21":"وَإِن لَّمْ تُؤْمِنُوا۟ لِى فَٱعْتَزِلُونِ","44:22":"فَدَعَا رَبَّهُۥٓ أَنَّ هَٰٓؤُلَآءِ قَوْمٌ مُّجْرِمُونَ","44:23":"فَأَسْرِ بِعِبَادِى لَيْلًا إِنَّكُم مُّتَّبَعُونَ","44:24":"وَٱتْرُكِ ٱلْبَحْرَ رَهْوًا ۖ إِنَّهُمْ جُندٌ مُّغْرَقُونَ"}`)},Nn={meta:{id:`en.pickthall`,language:`en`,title:`The Meaning of the Glorious Koran`,translator:`Mohammed Marmaduke William Pickthall`,firstPublished:1930,source:`Tanzil Project translation file en.pickthall`,sourceUrl:`https://tanzil.net/trans/`,license:`The 1930 translation is in the public domain in the United States (published 1930) and in countries whose copyright term is the author's life plus 70 years or less (the translator died in 1936). The digitised text is distributed by the Tanzil Project for non-commercial use.`,retrieved:`2026-10-09`,notice:`# --------------------------------------------------------------------
#
#  Quran Translation
#  Name: Pickthall
#  Translator: Mohammed Marmaduke William Pickthall
#  Language: English
#  ID: en.pickthall
#  Last Update: September 4, 2010
#  Source: Tanzil.net
#
# --------------------------------------------------------------------`},verses:{"2:49":`And (remember) when We did deliver you from Pharaoh's folk, who were afflicting you with dreadful torment, slaying your sons and sparing your women: that was a tremendous trial from your Lord.`,"2:50":`And when We brought you through the sea and rescued you, and drowned the folk of Pharaoh in your sight.`,"7:103":`Then, after them, We sent Moses with our tokens unto Pharaoh and his chiefs, but they repelled them. Now, see the nature of the consequence for the corrupters!`,"7:104":`Moses said: O Pharaoh! Lo! I am a messenger from the Lord of the Worlds,`,"7:105":`Approved upon condition that I speak concerning Allah nothing but the truth. I come unto you (lords of Egypt) with a clear proof from your Lord. So let the Children of Israel go with me.`,"7:106":`(Pharaoh) said: If thou comest with a token, then produce it, if thou art of those who speak the truth.`,"7:107":`Then he flung down his staff and lo! it was a serpent manifest;`,"7:108":`And he drew forth his hand (from his bosom), and lo! it was white for the beholders.`,"7:109":`The chiefs of Pharaoh's people said: Lo! this is some knowing wizard,`,"7:110":`Who would expel you from your land. Now what do ye advise?`,"7:111":`They said (unto Pharaoh): Put him off (a while) - him and his brother - and send into the cities summoners,`,"7:112":`To bring each knowing wizard unto thee.`,"7:113":`And the wizards came to Pharaoh, saying: Surely there will be a reward for us if we are victors.`,"7:114":`He answered: Yes, and surely ye shall be of those brought near (to me).`,"7:115":`They said: O Moses! Either throw (first) or let us be the first throwers?`,"7:116":`He said: Throw! And when they threw they cast a spell upon the people's eyes, and overawed them, and produced a mighty spell.`,"7:117":`And We inspired Moses (saying): Throw thy staff! And lo! it swallowed up their lying show.`,"7:118":`Thus was the Truth vindicated and that which they were doing was made vain.`,"7:119":`Thus were they there defeated and brought low.`,"7:120":`And the wizards fell down prostrate,`,"7:121":`Crying: We believe in the Lord of the Worlds,`,"7:122":`The Lord of Moses and Aaron.`,"7:123":`Pharaoh said: Ye believe in Him before I give you leave! Lo! this is the plot that ye have plotted in the city that ye may drive its people hence. But ye shall come to know!`,"7:124":`Surely I shall have your hands and feet cut off upon alternate sides. Then I shall crucify you every one.`,"7:125":`They said: Lo! We are about to return unto our Lord!`,"7:126":`Thou takest vengeance on us only forasmuch as we believed the tokens of our Lord when they came unto us. Our Lord! Vouchsafe unto us steadfastness and make us die as men who have surrendered (unto Thee).`,"7:127":`The chiefs of Pharaoh's people said: (O King), wilt thou suffer Moses and his people to make mischief in the land, and flout thee and thy gods? He said: We will slay their sons and spare their women, for lo! we are in power over them.`,"7:128":`And Moses said unto his people: Seek help in Allah and endure. Lo! the earth is Allah's. He giveth it for an inheritance to whom He will. And lo! the sequel is for those who keep their duty (unto Him).`,"7:129":`They said: We suffered hurt before thou camest unto us, and since thou hast come unto us. He said: It may be that your Lord is going to destroy your adversary and make you viceroys in the earth, that He may see how ye behave.`,"7:130":`And we straitened Pharaoh's folk with famine and dearth of fruits, that peradventure they might heed.`,"7:131":`But whenever good befell them, they said: This is ours; and whenever evil smote them they ascribed it to the evil auspices of Moses and those with him. Surely their evil auspice was only with Allah. But most of them knew not.`,"7:132":`And they said: Whatever portent thou bringest wherewith to bewitch us, we shall not put faith in thee.`,"7:133":`So We sent against them the flood and the locusts and the vermin and the frogs and the blood - a succession of clear signs. But they were arrogant and became a guilty folk.`,"7:134":`And when the terror fell on them they cried: O Moses! Pray for us unto thy Lord, because He hath a covenant with thee. If thou removest the terror from us we verily will trust thee and will let the Children of Israel go with thee.`,"7:135":`But when We did remove from them the terror for a term which they must reach, behold! they broke their covenant.`,"7:136":`Therefore We took retribution from them; therefore We drowned them in the sea: because they denied Our revelations and were heedless of them.`,"7:137":`And We caused the folk who were despised to inherit the eastern parts of the land and the western parts thereof which We had blessed. And the fair word of thy Lord was fulfilled for the Children of Israel because of their endurance; and We annihilated (all) that Pharaoh and his folk had done and that they had contrived.`,"10:75":`Then, after them, We sent Moses and Aaron unto Pharaoh and his chiefs with Our revelations, but they were arrogant and were a guilty folk.`,"10:76":`And when the Truth from Our presence came unto them, they said: Lo! this is mere magic.`,"10:77":`Moses said: Speak ye (so) of the Truth when it hath come unto you? Is this magic? Now magicians thrive not.`,"10:78":`They said: Hast thou come unto us to pervert us from that (faith) in which we found our fathers, and that you two may own the place of greatness in the land? We will not believe you two.`,"10:79":`And Pharaoh said: Bring every cunning wizard unto me.`,"10:80":`And when the wizards came, Moses said unto them: Cast your cast!`,"10:81":`And when they had cast, Moses said: That which ye have brought is magic. Lo! Allah will make it vain. Lo! Allah upholdeth not the work of mischief-makers.`,"10:82":`And Allah will vindicate the Truth by His words, however much the guilty be averse.`,"10:83":`But none trusted Moses, save some scions of his people, (and they were) in fear of Pharaoh and their chiefs, that he would persecute them. Lo! Pharaoh was verily a tyrant in the land, and lo! he verily was of the wanton.`,"10:84":`And Moses said: O my people! If ye have believed in Allah then put trust in Him, if ye have indeed surrendered (unto Him)!`,"10:85":`They said: In Allah we put trust. Our Lord! Oh, make us not a lure for the wrongdoing folk;`,"10:86":`And, of Thy mercy, save us from the folk that disbelieve.`,"10:87":`And We inspired Moses and his brother, (saying): Appoint houses for your people in Egypt and make your houses oratories, and establish worship. And give good news to the believers.`,"10:88":`And Moses said: Our Lord! Lo! Thou hast given Pharaoh and his chiefs splendour and riches in the life of the world, Our Lord! that they may lead men astray from Thy way. Our Lord! Destroy their riches and harden their hearts so that they believe not till they see the painful doom.`,"10:89":`He said: Your prayer is heard. Do ye twain keep to the straight path, and follow not the road of those who have no knowledge.`,"10:90":`And We brought the Children of Israel across the sea, and Pharaoh with his hosts pursued them in rebellion and transgression, till, when the (fate of) drowning overtook him, he exclaimed: I believe that there is no Allah save Him in Whom the Children of Israel believe, and I am of those who surrender (unto Him).`,"10:91":`What! Now! When hitherto thou hast rebelled and been of the wrong-doers?`,"10:92":`But this day We save thee in thy body that thou mayst be a portent for those after thee. Lo! most of mankind are heedless of Our portents.`,"20:77":`And verily We inspired Moses, saying: Take away My slaves by night and strike for them a dry path in the sea, fearing not to be overtaken, neither being afraid (of the sea).`,"20:78":`Then Pharaoh followed them with his hosts and there covered them that which did cover them of the sea.`,"20:79":`And Pharaoh led his folk astray, he did not guide them.`,"26:52":`And We inspired Moses, saying: Take away My slaves by night, for ye will be pursued.`,"26:53":`Then Pharaoh sent into the cities summoners,`,"26:54":`(Who said): Lo! these indeed are but a little troop,`,"26:55":`And lo! they are offenders against us.`,"26:56":`And lo! we are a ready host.`,"26:57":`Thus did We take them away from gardens and watersprings,`,"26:58":`And treasures and a fair estate.`,"26:59":`Thus (were those things taken from them) and We caused the Children of Israel to inherit them.`,"26:60":`And they overtook them at sunrise.`,"26:61":`And when the two hosts saw each other, those with Moses said: Lo! we are indeed caught.`,"26:62":`He said: Nay, verily! for lo! my Lord is with me. He will guide me.`,"26:63":`Then We inspired Moses, saying: Smite the sea with thy staff. And it parted, and each part was as a mountain vast.`,"26:64":`Then brought We near the others to that place.`,"26:65":`And We saved Moses and those with him, every one;`,"26:66":`And We drowned the others.`,"26:67":`Lo! herein is indeed a portent, yet most of them are not believers.`,"26:68":`And lo, thy Lord! He is indeed the Mighty, the Merciful.`,"44:17":`And verily We tried before them Pharaoh's folk, when there came unto them a noble messenger,`,"44:18":`Saying: Give up to me the slaves of Allah. Lo! I am a faithful messenger unto you.`,"44:19":`And saying: Be not proud against Allah. Lo! I bring you a clear warrant.`,"44:20":`And lo! I have sought refuge in my Lord and your Lord lest ye stone me to death.`,"44:21":`And if ye put no faith in me, then let me go.`,"44:22":`And he cried unto his Lord, (saying): These are guilty folk.`,"44:23":`Then (his Lord commanded): Take away My slaves by night. Lo! ye will be followed,`,"44:24":`And leave the sea behind at rest, for lo! they are a drowned host.`}},Pn={meta:{id:`ckb.hevi`,language:`ckb`,kind:`translation`,title:`وەرگێڕانی هێڤی`,translator:`ئەلەند کاوە عەلی ئەحمەد`,translatorLatin:`Aland Kawa Ali Ahmad`,firstPublished:2024,source:`Hevi database (E_Hevi.db), table Ayats, column hevi`,sourceUrl:``,license:`© Aland Kawa Ali Ahmad. All rights reserved; used in this experience with the translator’s permission.`,retrieved:`2026-10-09`,notice:`Hevi translation of the meanings of the Quran into Central Kurdish (Sorani). Do not copy without the translator’s permission.`},verses:JSON.parse(`{"2:49":"دەمێکیش لەدەست فیرعەونییەکان ئێوەمان ڕزگار کرد كه خراپترین ئەشکەنجەیان بە ئێوە دەچەشت: کوڕانی ئێوەیان بەخراپی سەردەبڕی و ژنانی ئێوەیان لە ژیاندا بەئاوڕووبردنەوە دەهێشتەوە. ئه‌وە بۆ ئێوە‌ له‌لایه‌ن پەروەردگارتانەوە هەڵسەنگاندنێکی مەزن بوو.","2:50":"دەمێکیش دەریاکەمان بە ئێوە جیا کردەوە و ڕزگارمان كردن و فیرعەونییەکانمان نوقم كرد، لە کاتێکدا خۆتان سەرنجتان دەدا.","7:103":"دواتر لەدوای ئەوان مووسامان بەنیشانەکانمانەوە  ئاڕاستەی فیرعەون و چاوپڕکەرانی کرد، بەڵام زوڵمیان لێی کرد. دەی سەرنج بدە چۆن بوو ئەنجامی یاخیبووان.","7:104":"مووسا گوتی: «ئەی فیرعەون! بەڕاستی من پەیامبەرێکم لە پەروەردگاری جیهانیانەوە.","7:105":"وەها شیاوە کە تەنیا ڕاستی بەدەم خوداوە بڵێم، بەدڵنیاییەوە بەبەڵگەیەکی ئاشکرای پەروەردگارتانەوە بۆ لاتان هاتووم، دەسا نەوەکانی ئیسرائیل لەگەڵمدا بنێرە.»","7:106":"گوتی: «ئەگەر بەڕاستی نیشانەیەکت هێناوە، فەرموو بیخە ڕوو ئەگەر لە ڕاستگۆیانیت.»","7:107":"ئیدی گۆچانەکەی خست، دەستبەجێ بوو بە ئەژدیهایەکی ئاشکرا؛","7:108":"دەستیشی (لە بن باخەڵیەوە) دەر هێنا، دەستبەجێ  بووە سپیەکی پڕشنگدار بۆ سەرنجدەران.","7:109":"چاوپڕکەرانی قەومی فیرعەون گوتیان: «بەڕاستی ئەمە جادووبازێکی زۆرزانە!","7:110":"گەرەکیەتی کە لە زەوییەکەتاندا وەدەرتان بنێت، کەوایە فەرمانی چی دەدەن؟»","7:111":"گوتیان: «(دۆسیەی) خۆی و براکەی دوابخە؛ حەشرکەران [شاندەکان] ڕەوانەی شارەکان بکە","7:112":"با هەموو جادووبازێکی فرەزانت بۆ بهێنن.»","7:113":"جادووبازان بۆ لای فیرعەون هاتن، گوتیان: «بێگومان ئێمە پاداشتێکمان بۆ دەبێت ئەگەر ئێمە زاڵ بووین.»","7:114":"گوتی: «بێگومان! بەڕاستی لە نزیککراوانیش دەبن.»","7:115":"گوتیان: «ئەی مووسا! یان تۆ بیخە، یان ئێمە بخەر دەبین.»","7:116":"گوتی: «بیخەن.» جا کە خستیان، جادوویان لە چاوی خەڵک کرد و دایچڵەکاندن و جادوویەکی مەزنیان هێنایە ئاراوە.","7:117":"سرووشمان بەرەو مووسا نارد: «گۆچانەکەت بخە.» ئیدی دەستبەجێ هەرچییەک کە چەواشەیان پێ دەکرد هەڵیلووشی.","7:118":"سەرئەنجام ڕاستی داکەوت، ئەوەی کە ئەوانیش دەیانکرد هەڵوەشایەوە.","7:119":"لەوێدا ژێر خران و بەکزۆڵییەوە هەڵگەڕانەوە،","7:120":"جادووبازەکانیش خرانە سووجدەوە،","7:121":"گوتیان: «ئیمانمان بە پەروەردگاری جیهانیان هێنا،","7:122":"پەروەردگاری مووسا و هاروون.»","7:123":"گوتی: «ئایا ئیمانتان پێی هێنا پێش ئەوەی من ئیزنتان بدەم؟ ئەمە نەخشەیەکە ئێوە لە شارەکەدا نەخشاندووتانە تا دانیشتووانەکەی لێ وەدەر بنێن، دەی بەم زووانە دەزانن!","7:124":"سوێند بێت دەستتان و پێتان بەپێچەوانەوە بقرتێنم، دواتر لەخاچتان بدەم، هەموو پێکەوە!»","7:125":"گوتیان: «بەدڵنیاییەوە ئێمە هەر بەرەو پەروەردگارمان دەگەڕێینەوە؛","7:126":"تەنیا لەبەر ئەوە ڕقت لێمانە کە ئیمانمان بە نیشانەکانی پەروەردگارمان هێناوە کە بۆمان هاتووە. پەروەردگارمان! خۆڕاگرییەکی تایبەت بەسەرمانەوە بڕژێنە، بەموسڵمانییشەوە کۆتایی بە ژیانمان بهێنە.»","7:127":"چاوپڕکەرانی قەومەکەی فیرعەون گوتیان: «ئایا لە مووسا و قەومەکەی دەگەڕێیت پشێوی لە زەویدا  بنێنەوە و لە خۆت و پەرستراوەکەت گەڕێت؟» گوتی: «کوڕانیان دەکوژین و خانمانیان لە ژیاندا بەبێشەرمی دەهێڵینەوە. ئێمە بەدڵنیاییەوە لەسەروویانەوە باڵادەستین.»","7:128":"مووسا بە قەومەکەی خۆی گوت: «داوای یارمەتی لە خودا بکەن و خۆتان ڕابگرن. بەدڵنیاییەوە زەوی بۆ خودایە، کێی بوێت لە بەندەکانی دەیکاتە میراتگری؛ لووتکەی سەرکەوتنیش بۆ خۆپارێزانە.»","7:129":"گوتیان: «پێش ئەوەی تۆ بۆ لامان بێیت، دوای ئەوەیش کە بۆ لامان هاتوویت، ئێمە هەر ئازارمان چەشتووە!» گوتی: «جێی ئومێدە کە پەروەردگارتان دوژمنەکەتان لەنێو ببات و ئێوە لە زەویدا بە جێنشین دابنێت. دواتر سەرنج دەدات ئێوە چۆن کار دەکەن.»","7:130":"بەڕاستی فیرعەونییەکانمان گیرۆدەی وشکەساڵی و کەمبوونەوەی بەروبوومەکان کرد بەشکو بەبیریاندا بێتەوە.","7:131":"جا کاتێک بارودۆخێکی خۆشیان بۆ بچووایە، دەیانگوت: «ئەمە بۆ ئێمەیە!» ئەگەریش تووشی بارودۆخێکی خراپ ببوونایە، بە شوومی مووسا و ئەوانەیان دەزانی کە لەگەڵ ئەودان. بەدڵنیاییەوە شوومیی خۆیان لەلای خودایە، بەڵام زۆربەیان نازانن.","7:132":"گوتیشیان: «هەرچەند هەر نیشانەیەکمان بۆ بهێنیت، تا بەهۆیەوە جادوومان لێ بکەیت، ئەوا ئێمە هەرگیز باوەڕت پێ ناکەین!»","7:133":"ئیدی تۆفان و جۆرەها کوللە و ئەسپێ و جۆرەها بۆق و خوێنمان بۆ سەریان نارد کە چەندان نیشانەی شیکراو بوون، کەچی خۆیان زۆر بەگەورە زانی و قەومێکی چاکەبڕ بوون.","7:134":"کە ئەو سزا بلەرێنەیش بەسەریاندا داکەوت، گوتیان: «ئەی مووسا! بانگی پەروەردگارت بکە بۆمان وەک پەیمانی داویتەتێ. ئەگەر ئەم سزا بلەرێنە لەسەرمان لا بدات، باوەڕت پێ دەکەین و نەوەکانی ئیسرائیل لەگەڵت ڕەوانە دەکەین.»","7:135":"جا کە ئەو سزا بلەرێنەی بەسەریانەوە لابرد، تا بە ئاکامێک دەگەیشتن، دەسبەجێ پەیمانەکەیان هەڵدەوەشاندەوە.","7:136":"بۆیە تۆڵەمان لێیان سەند، ئیدی بۆ نێو دەریاکە نوقممان کردن بەهۆی ئەوەوە کە نیشانەکانی ئێمەیان بەدرۆ زانی و لێی بێئاگا بوون.","7:137":"ئەو قەومەیش کە لاواز دەکران بە میراتگری ڕۆژهەڵاتەکانی و ڕۆژئاواکانی ئەو زەوییەمان دانان کە بەرەکەتمان تێیدا ڕشت. جوانترین ڕستەی پەروەردگارت بۆ نەوەکانی ئیسرائیل بەتەواوەتی چووە جێ بەهۆی ئەوەوە کە خۆیان ڕاگرتبوو. ئەوەیش کە فیرعەون و قەومەکەی چێیان دەکرد وێرانمان کرد، هەرچییەکیش کە کەپریان بۆی دەکرد.","10:75":"دواتر لەدوای ئەوان، مووسا و هاروونمان بەنیشانەکانمانەوە بەرەو فیرعەون و چاوپڕکەرانی ئاڕاستە کرد، بەڵام خۆیان زۆر بەگەورە زانی و قەومێکی چاکەبڕ بوون.","10:76":"جا کە لەلایەن ئێمەوە ڕاستییان بۆ چوو، گوتیان: «بەڕاستی ئەمە جادوویەکی ئاشکرایە!»","10:77":"مووسا گوتی: «ئایا بەو ڕاستییە دەڵێن جادوو کە بۆتان هاتووە لە کاتێکدا جادووبازان کامەران نابن؟»","10:78":"گوتیان: «ئایا بۆیە بۆ لامان هاتوویت تا لەوە لامان بدەیت کە باوانمان لەسەری بوون و لە زەویدا گەورەیی بۆ هەردووکتان بێت؟ ئێمە هەرگیز باوەڕ بەم دووانەتان ناکەین!»","10:79":"فیرعەون گوتی: «هەرچی جادووبازی فرەزانە بۆم بهێنن!»","10:80":"جا کە دادووبازەکان هاتن، مووسا پێیانی گوت: «بیخەن ئەوەی کە ئێوە بخەریانن.»","10:81":"ئیدی کە خستیان، مووسا گوتی: «ئەوەی کە هێناوتانە تەنیا جادوویەکە. بەدڵنیاییەوە خودا هەڵیدەوەشێنێتەوە. بەڕاستی خودا کردەوەی تێکدەران چاک ناکات.","10:82":"خودا بە وشەکانی خۆی ڕاستی دەچەسپێنێت؛ هەرچەند چاکەبڕان پێیان ناخۆش بێت.»","10:83":"ئیدی کەس متمانەی بە مووسا نەکرد، چەند زارۆیەکی قەومەکەی خۆی نەبێت بەترسەوە، لەدەست فیرعەون و چاوپڕکەرانی کە بیانچەوسێننەوە. بەڕاستی فیرعەون لە زەویدا خۆبڵندبین بوو، بەڕاستی لە سنووردەرچووان بوو.","10:84":"مووسا گوتی: «ئەی قەومەکەم! ئەگەر بەڕاستی ئیمانتان بە خودا هێناوە، دەی خۆتانی پێ بسپێرن ئەگەر بەڕاستی موسڵمانن.»","10:85":"دەستبەجێ گوتیان: «خۆمان تەنیا بە خودا سپاردووە، پەروەردگارمان! بە فیتنەمان مەگێڕە بۆ قەومی زاڵمان،","10:86":"بە میهری خۆیشت ڕزگارمان بکە لەدەست قەومی ڕاستیپۆشان.»","10:87":"سرووشمان بۆ مووسا و براکەی نارد: «چەند شەوگەیەک لە میسڕدا بۆ قەومەکەتان پێک بهێنن؛ شەوگەکانتان بە نوێژگە بگێڕن؛ نوێژ بەڕێکی و بەبەردەوامی جێبەجێ بکەن. مژدەی ڕوخۆشکەر بە ئاساییشبەخشان بدە.»","10:88":"مووسا گوتی: «پەروەردگارمان! بەڕاستی ڕازاوەییەکی تایبەت و پارەگەلێکت لە ژیانی دونیادا بە فیرعەون و چاوپڕکەرانی داوە. پەروەردگارمان! تا کەسانی دیکە لە ڕێگەکەت گومڕا بکەن. پەروەردگارمان! پارەکانیان داماڵێنە و دڵیان بەتەواوەتی توند بکە، چونکە ئەوانە ئیمان ناهێنن تا ئەشکەنجەی پڕژان نەبینن.»","10:89":"فەرمووی: «بێگومان دوعاکەی هەردووکتان وەڵام درایەوە، کەوایە هەردووکتان بەبەردەوامی ڕاستڕەو بن و شوێن ڕێی ئەوانە مەکەون کە شارەزا نین.»","10:90":"نەوەکانی ئیسرائیلمان لە دەریاکەدا پەڕاندەوە، دەستبەجێ فیرعەون و سەربازەکانی بۆ سنوورشکاندن و دوژمنایەتی شوێنیان کەوتن. تا دەمێک خەریک بوو نوقم دەبوو، گوتی: «ئیمانم بەو زاتە هێناوە کە هیچ پەرستراوێک نییە جگە لەوەی کە نەوەکانی ئیسرائیل ئیمانیان پێی هێناوە و من لە موسڵمانانم.»","10:91":"«ئا ئێستا؟ لە کاتێکدا پێشتر سەرپێچیت کرد و لە تێکدەران بوویت.","10:92":"بەڵام ئەمڕۆ بەلاشەتەوە ڕزگار دەکەین تا ببیتە نیشانەیەک بۆ هەرکێ کە لەدوای خۆتەوە دێت. بەڕاستی زۆرێک لە خەڵک لە نیشانەکانمان بێئاگان.","20:77":"بەڕاستی سرووشمان بەرەو مووسا نارد: «شەوڕەوی بە بەندەکانم بکە، ڕێگەیەکی وشکیان لە دەریادا بۆ لێ بدە؛ مەترسە لە هیچ دەستپێگەیشتنێت و مەزنەترست نەبێت.»","20:78":"ئیدی فیرعەون بەلەشکرەکانیەوە شوێنیان کەوتن، سەرئەنجام لە دەریادا دایانیپۆشی ئەوەی کە دایانیپۆشی!","20:79":"فیرعەون قەومەکەی گومڕا کرد؛ ڕاستەڕێیانی نەکرد.","26:52":"سرووشمان بەرەو مووسا نارد: «شەوڕەوی بە بەندەکانم بکە، بەڕاستی ئێوە بەدواکەوتوون.»","26:53":"ئیدی فیرعەون حەشرکەرانی بۆ شارەکان نارد:","26:54":"«بەڕاستی ئەمانە کەسانێکی دابڕدابڕی زۆر کەمن!","26:55":"بەڕاستی ئەوان بۆ ئێمە هەڵچووێنن.","26:56":"لە کاتێکدا بەڕاستی ئێمە کۆمەڵێکی بەحەزەرین.»","26:57":"سەرئەنجام لە باخانێکی چڕوپڕ و کانیاوگەلێکی تایبەتەوە دەرمانهێنان،","26:58":"لە گەنجینەگەلێکی تایبەت و پێگەیەکی نایابیشەوە؛","26:59":"نەوەکانی ئیسرائیلمان بە میراتگری هاوشێوەی ئەوە گێڕا.","26:60":"ئیدی لە کاتی خۆرهەڵهاتندا شوێنیان کەوتن،","26:61":"جا کە دوو کۆمەڵەکە یەکتریان بینی، هاودەمانی مووسا گوتیان: «تەواو گیراین!»","26:62":"گوتی: «هەرگیز! بەدڵنیاییەوە پەروەردگارم لەگەڵمە، بەزوویی ڕاستەڕێم دەکات.»","26:63":"دەستبەجێ سرووشمان بەرەو مووسا نارد: «بەگۆچانەکەت بە دەریاکەدا بکێشە.» ئیدی لەت بوو، هەر لایەک وەک شاکێوێکی مەزن بوو،","26:64":"دواتر ئەوانی دیکەمان نزیک کردەوە،","26:65":"مووسا و هەر کەسێکیش کە لەگەڵیدا بووبێت پێکەوە ڕزگارمان کرد.","26:66":"دواتر ئەوانی دیکەمان نوقم کرد.","26:67":"بەڕاستی لەوەدا نیشانەیەکی تایبەت هەیە و زۆربەیان ئاساییشبەخش نەبوون.","26:68":"بەدڵنیاییشەوە پەروەردگارت هەر خۆی زۆر شکۆمەند و زۆر میهربەخشە.","44:17":"بەدڵنیاییەوە قەومی فیرعەونمان پێش خۆیان بەسەختی هەڵسەنگاند و پەیامبەرێکی پڕبایەخیان بۆ چوو.","44:18":"«بەندەکانی خودام بۆ بگەڕێننەوە؛ بەدڵنیاییەوە من بۆ ئێوە پەیامبەرێکی جێباوەڕم.","44:19":"خۆتان لەئاست خودا بەبڵند مەزانن؛ بەدڵنیاییەوە من بۆ ئێوە هێنەری بەڵگەیەکی بەهێز و ئاشکرام.","44:20":"بەڕاستی پەنام بە پەروەردگارم و پەروەردگارتان گرتووە لەوە کە ئێوە بەردەبارانم بکەن.","44:21":"ئەگەریش بەشوێنکەوتنەوە ئیمانم پێ ناهێنن، ئەوا خۆتان لە من دابڕێنن.»","44:22":"ئیدی بانگی پەروەردگاری کرد: «ئەمانە قەومێکی چاکەبڕن!»","44:23":"«کەوایە لە شەوێکدا شەوڕەی بە بەندەکانم بکە، بەدڵنیاییەوە ئێوە بەشوێنکەوتوون.","44:24":"دەریا بەڕاوەستاوییەوە بەجێبهێڵە؛ ئەوانە لەشکرێکی نوقمبوو دەبن.»"}`)},Fn={meta:{id:`ar.muyassar`,language:`ar`,kind:`tafsir`,title:`التفسير الميسر`,translator:`مجمع الملك فهد لطباعة المصحف الشريف`,translatorLatin:`King Fahd Glorious Quran Printing Complex`,firstPublished:2009,source:`Tanzil Project translation file ar.muyassar`,sourceUrl:`https://tanzil.net/trans/`,license:`Published by the King Fahd Glorious Quran Printing Complex; distributed by the Tanzil Project for non-commercial use with attribution.`,retrieved:`2026-10-09`,notice:`# --------------------------------------------------------------------
#
#  Quran Translation
#  Name: تفسير المیسر
#  Translator: King Fahad Quran Complex
#  Language: Arabic
#  ID: ar.muyassar
#  Last Update: January 7, 2011
#  Source: Tanzil.net
#
# --------------------------------------------------------------------`},verses:JSON.parse(`{"2:49":"واذكروا نعمتنا عليكم حين أنقذناكم من بطش فرعون وأتباعه، وهم يُذيقونكم أشدَّ العذاب، فيُكثِرون مِن ذَبْح أبنائكم، وترك بناتكم للخدمة والامتهان. وفي ذلك اختبار لكم من ربكم، وفي إنجائكم منه نعمة عظيمة، تستوجب شكر الله تعالى في كل عصوركم وأجيالكم.","2:50":"واذكروا نعمتنا عليكم، حين فَصَلْنا بسببكم البحر، وجعلنا فيه طرقًا يابسةً، فعبرتم، وأنقذناكم من فرعون وجنوده، ومن الهلاك في الماء. فلما دخل فرعون وجنوده طرقكم أهلكناهم في الماء أمام أعينكم.","7:103":"ثم بعثنا من بعد الرسل المتقدم ذِكْرهم موسى بن عمران بمعجزاتنا البينة إلى فرعون وقومه، فجحدوا وكفروا بها ظلمًا منهم وعنادًا، فانظر -أيها الرسول- متبصرًا كيف فعلنا بهم وأغرقناهم عن آخرهم بمرأى من موسى وقومه؟ وتلك نهاية المفسدين.","7:104":"وقال موسى لفرعون محاورًا مبلِّغًا: إني رسولٌ من الله خالق الخلق أجمعين، ومدبِّر أحوالهم ومآلهم.","7:105":"جدير بأن لا أقول على الله إلا الحق، وحريٌّ بي أن ألتزمه، قد جئتكم ببرهان وحجة باهرة من ربكم على صِدْق ما أذكره لكم، فأطلق -يا فرعون- معي بني إسرائيل مِن أَسْرك وقَهْرك، وخلِّ سبيلهم لعبادة الله.","7:106":"قال فرعرن لموسى: إن كنتَ جئتَ بآية حسب زعمك فأتني بها، وأحضرها عندي؛ لتصحَّ دعواك ويثبت صدقك، إن كنت صادقًا فيما ادَّعيت أنك رسول رب العالمين.","7:107":"فألقى موسى عصاه، فتحولت حيَّة عظيمة ظاهرة للعيان.","7:108":"وجذب يده من جيبه أو من جناحه فإذا هي بيضاء كاللبن من غير برص آية لفرعون، فإذا ردَّها عادت إلى لونها الأول، كسائر بدنه.","7:109":"قال الأشراف من قوم فرعون: إن موسى لساحر يأخذ بأعين الناس بخداعه إياهم، حتى يخيل إليهم أن العصا حية، والشيء بخلاف ما هو عليه، وهو واسع العلم بالسحر ماهر به.","7:110":"يريد أن يخرجكم جميعًا من أرضكم، قال فرعون: فبماذا تشيرون عليَّ أيها الملأ في أمر موسى؟","7:111":"قال مَن حضر مناظرة موسى مِن سادة قوم فرعون وكبرائهم: أَخِّر موسى وأخاه هارون، وابعث في مدائن \\"مصر\\" وأقاليمها الشُّرَط.","7:112":"ليجمعوا لك كل ساحر واسع العلم بالسحر.","7:113":"وجاء السحرة فرعون قالوا: أئنَّ لنا لجائزة ومالا إن غَلَبْنا موسى؟","7:114":"قال فرعون: نعم لكم الأجر والقرب مني إن غَلَبْتُموه.","7:115":"قال سحرة فرعون لموسى على سبيل التكبر وعدم المبالاة: يا موسى اختر أن تُلقي عصاك أولا أو نُلقي نحن أولا.","7:116":"قال موسى للسحرة: ألقوا أنتم، فلما ألقَوا الحبال والعصيَّ سحروا أعين الناس، فخُيِّل إلى الأبصار أن ما فعلوه حقيقة، ولم يكن إلا مجرد صنعة وخيال، وأرهبوا الناس إرهابًا شديدًا، وجاؤوا بسحر قوي كثير.","7:117":"وأوحى الله إلى عبده ورسوله موسى عليه السلام في ذلك الموقف العظيم الذي فرَّق الله فيه بين الحق والباطل، يأمره بأن يُلقي ما في يمينه وهي عصاه، فألقاها فإذا هي تبلع ما يلقونه، ويوهمون الناس أنه حق وهو باطل.","7:118":"فظهر الحق واستبان لمن شهده وحضره في أمر موسى عليه السلام، وأنه رسول الله يدعو إلى الحق، وبطل الكذب الذي كانوا يعملونه.","7:119":"فغُلِبَ جميع السحرة في مكان اجتماعهم، وانصرف فرعون وقومه أذلاء مقهورين مغلوبين.","7:120":"وخَرَّ السحرة سُجَّدًا على وجوههم لله رب العالمين لِمَا عاينوا من عظيم قدرة الله.","7:121":"قالوا: آمنا برب العالمين.","7:122":"وهو رب موسى وهارون، وهو الذي يجب أن تصرف له العبادة وحده دون مَن سواه.","7:123":"قال فرعون للسحرة: آمنتم بالله قبل أن آذن لكم بالإيمان به؟ إن إيمانكم بالله وتصديقكم لموسى وإقراركم بنبوته لحيلة احتلتموها أنتم وموسى؛ لتخرجوا أهل مدينتكم منها، وتكونوا المستأثرين بخيراتها، فسوف تعلمون -أيها السحرة- ما يحلُّ بكم من العذاب والنكال.","7:124":"لأقطعنَّ أيديكم وأرجلكم -أيها السحرة- من خلاف: بقطع اليد اليمنى والرجل اليسرى، أو اليد اليسرى والرجل اليمنى، ثم لأعلقنَّكم جميعًا على جذوع النخل؛ تنكيلا بكم وإرهابًا للناس.","7:125":"قال السحرة لفرعون: قد تحققنا أنَّا إلى الله راجعون، وأن عذابه أشد من عذابك، فلنصبرنَّ اليوم على عذابك؛ لِننجو من عذاب الله يوم القيامة.","7:126":"ولستَ تعيب منا وتنكر -يا فرعون- إلا إيماننا وتصديقنا بحجج ربنا وأدلته التي جاء بها موسى ولا تقدر على مثلها أنت ولا أحد آخر سوى الله الذي له ملك السموات والأرض، ربنا أَفِضْ علينا صبرًا عظيمًا وثباتا عليه، وتوفَّنا منقادين لأمرك متبعين رسولك.","7:127":"وقال السادة والكبراء من قوم فرعون لفرعون: أَتَدَعُ موسى وقومه من بني إسرائيل ليفسدوا الناس في أرض \\"مصر\\" بتغيير دينهم بعبادة الله وحده لا شريك له، وترك عبادتك وعبادة آلهتك؟ قال فرعون: سنُقَتِّل أبناء بني إسرائيل ونستبقي نساءهم أحياء للخدمة، وإنَّا عالون عليهم بقهر المُلْكِ والسلطان.","7:128":"قال موسى لقومه -من بني إسرائيل-: استعينوا بالله على فرعون وقومه، واصبروا على ما نالكم من فرعون من المكاره في أنفسكم وأبنائكم. إن الأرض كلها لله يورثها من يشاء من عباده، والعاقبة المحمودة لمن اتقى الله ففعل أوامره واجتنب نواهيه.","7:129":"قال قوم موسى -من بني إسرائيل- لنبيهم موسى: ابتُلينا وأُوذينا بذبح أبنائنا واستحياء نسائنا على يد فرعون وقومه، من قبل أن تأتينا، ومن بعد ما جئتنا، قال موسى لهم: لعل ربكم أن يهلك عدوكم فرعون وقومه، ويستخلفكم في أرضهم بعد هلاكهم، فينظر كيف تعملون، هل تشكرون أو تكفرون؟","7:130":"ولقد ابتلينا فرعون وقومه بالقحط والجدب، ونَقْص ثمارهم وغَلاتهم؛ ليتذكروا، وينزجروا عن ضلالاتهم، ويفزعوا إلى ربهم بالتوبة.","7:131":"فإذا جاء فرعونَ وقومَه الخِصْبُ والرزقُ قالوا: هذا لنا بما نستحقه، وإن يُصِبْهم جدب وقحط يتشاءموا، ويقولوا: هذا بسبب موسى ومَن معه. ألا إنَّ ما يصيبهم من الجدب والقحط إنما هو بقضاء الله وقدره، وبسبب ذنوبهم وكفرهم، ولكن أكثر قوم فرعون لا يعلمون ذلك؛ لانغمارهم في الجهل والضلال.","7:132":"وقال قوم فرعون لموسى: أي آية تأتِنا بها، ودلالة وحجة أقمتها لتصرفنا عما نحن عليه من دين فرعون، فما نحن لك بمصدِّقين.","7:133":"فأرسلنا عليهم سيلا جارفًا أغرق الزروع والثمار، وأرسلنا الجراد، فأكل زروعهم وثمارهم وأبوابهم وسقوفهم وثيابهم، وأرسلنا القُمَّل الذي يفسد الثمار ويقضي على الحيوان والنبات، وأرسلنا الضفادع فملأت آنيتهم وأطعمتهم ومضاجعهم، وأرسلنا أيضًا الدم فصارت أنهارهم وآبارهم دمًا، ولم يجدوا ماء صالحًا للشرب، هذه آيات من آيات الله لا يقدر عليها غيره، مفرقات بعضها عن بعض، ومع كل هذا ترفَّع قوم فرعون، فاستكبروا عن الإيمان بالله، وكانوا قومًا يعملون بما ينهى الله عنه من المعاصي والفسق عتوًّا وتمردًا.","7:134":"ولما نزل العذاب على فرعون وقومه فزعوا إلى موسى وقالوا: يا موسى ادع لنا ربك بما أوحى به إليك مِن رَفْع العذاب بالتوبة، لئن رفعت عنا العذاب الذي نحن فيه لنصدِّقنَّ بما جئت به، ونتبع ما دعوت إليه، ولنطلقنَّ معك بني إسرائيل، فلا نمنعهم من أن يذهبوا حيث شاؤوا.","7:135":"فلما رفع الله عنهم العذاب الذى أنزله بهم إلى أجلٍ هم بالغوه لا محالة فيعذبون فيه، لا ينفعهم ما تقدَّم لهم من الإمهال وكَشْفِ العذاب إلى حلوله، إذا هم ينقضون عهودهم التي عاهدوا عليها ربهم وموسى، ويقيمون على كفرهم وضلالهم.","7:136":"فانتقمنا منهم حين جاء الأجل المحدد لإهلاكهم، وذلك بإحلال نقمتنا عليهم، وهي إغراقهم في البحر؛ بسبب تكذيبهم بالمعجزات التي ظهرت على يد موسى، وكانوا عن هذه المعجزات غافلين، وتلك الغفلة هي سبب التكذيب.","7:137":"وأررثنا بني إسرائيل الذين كانوا يُستَذَلُّون للخدمة، مشارق الأرض ومغاربها (وهي بلاد \\"الشام\\") التي باركنا فيها، بإخراج الزروع والثمار والأنهار، وتمت كلمة ربك -أيها الرسول- الحسنى على بني إسرائيل بالتمكين لهم في الأرض؛ بسبب صبرهم على أذى فرعون وقومه، ودمَّرنا ما كان يصنع فرعون وقومه من العمارات والمزارع، وما كانوا يبنون من الأبنية والقصور وغير ذلك.","10:75":"ثم بعثنا مِن بعد أولئك الرسل موسى وهارون عليهما السلام إلى فرعون وأشراف قومه بالمعجزات الدالة على صدقهما، فاستكبروا عن قَبول الحق، وكانوا قومًا مشركين مجرمين مكذبين.","10:76":"فلما أتى فرعونَ وقومَه الحقُّ الذي جاء به موسى قالوا: إن الذي جاء به موسى من الآيات إنما هو سحر ظاهر.","10:77":"قال لهم موسى متعجبًا مِن قولهم: أتقولون للحق لما جاءكم: إنه سحر مبين؟ انظروا وَصْفَ ما جاءكم وما اشتمل عليه تجدوه الحق. ولا يفلح الساحرون، ولا يفوزون في الدنيا ولا في الآخرة.","10:78":"قال فرعون وملؤه لموسى: أجئتنا لتصرفنا عما وجدنا عليه آباءنا من عبادة غير الله، وتكون لكما أنت وهارون العظمة والسلطان في أرض \\"مصر\\"؟ وما نحن لكما بمقرِّين بأنكما رسولان أُرسلتما إلينا؛ لنعبد الله وحده لا شريك له.","10:79":"وقال فرعون: جيئوني بكل ساحر متقن للسحر.","10:80":"فلما جاء السحرة فرعون قال لهم موسى: ألقوا على الأرض ما معكم من حبالكم وعصيِّكم.","10:81":"فلما ألقَوا حبالهم وعصيَّهم قال لهم موسى: إنَّ الذي جئتم به وألقيتموه هو السحر، إن الله سيُذْهب ما جئتم به وسيُبطله، إن الله لا يصلح عمل مَن سعى في أرض الله بما يكرهه، وأفسد فيها بمعصيته.","10:82":"ويثبِّت الله الحق الذي جئتكم به من عنده فيُعليه على باطلكم بكلماته وأمره، ولو كره المجرمون أصحاب المعاصي مِن آل فرعون.","10:83":"فما آمن لموسى عليه السلام مع ما أتاهم به من الحجج والأدلة إلا ذرية من قومه من بني إسرائيل، وهم خائفون من فرعون وملئه أن يفتنوهم بالعذاب، فيصدُّوهم عن دينهم، وإن فرعون لَجبار مستكبر في الأرض، وإنه لمن المتجاوزين الحد في الكفر والفساد.","10:84":"وقال موسى: يا قومي إن صدقتم بالله -جلَّ وعلا- وامتثلتم شرعه فثقوا به، وسلِّموا لأمره، وعلى الله توكلوا إن كنتم مذعنين له بالطاعة.","10:85":"فقال قوم موسى له: على الله وحده لا شريك له اعتمدنا، وإليه فوَّضنا أمرنا، ربنا لا تنصرهم علينا فيكون ذلك فتنة لنا عن الدين، أو يُفتن الكفارُ بنصرهم، فيقولوا: لو كانوا على حق لما غُلبوا.","10:86":"ونجِّنا برحمتك من القوم الكافرين فرعون وملئه؛ لأنهم كانوا يأخذونهم بالأعمال الشاقة.","10:87":"وأوحينا إلى موسى وأخيه هارون أن اتخذا لقومكما بيوتًا في \\"مصر\\" تكون مساكن وملاجئ تعتصمون بها، واجعلوا بيوتكم أماكن تصلُّون فيها عند الخوف، وأدُّوا الصلاة المفروضة في أوقاتها. وبشِّر المؤمنين المطيعين لله بالنصر المؤزر، والثواب الجزيل منه سبحانه وتعالى.","10:88":"وقال موسى: ربنا إنك أعطيت فرعون وأشراف قومه زينة من متاع الدنيا؛ فلم يشكروا لك، وإنما استعانوا بها على الإضلال عن سبيلك، ربنا اطمس على أموالهم، فلا ينتفعوا بها، واختم على قلوبهم حتى لا تنشرح للإيمان، فلا يؤمنوا حتى يروا العذاب الشديد الموجع.","10:89":"قال الله تعالى لهما: قد أجيبت دعوتكما في فرعون وملئه وأموالهم -وكان موسى يدعو، وهارون يؤمِّن على دعائه، فمن هنا نسبت الدعوة إلى الاثنين- فاستقيما على دينكما، واستمرَّا على دعوتكما فرعون وقومه إلى توحيد الله وطاعته، ولا تسلكا طريق مَن لا يعلم حقيقة وعدي ووعيدي.","10:90":"وقطَعْنا ببني إسرائيل البحر حتى جاوزوه، فأتبعهم فرعون وجنوده ظلمًا وعدوانًا، فسلكوا البحر وراءهم، حتى إذا أحاط بفرعون الغرق قال: آمنتُ أنه لا إله إلا الذي آمنتْ به بنو إسرائيل، وأنا من الموحدين المستسلمين بالانقياد والطاعة.","10:91":"آلآن يا فرعون، وقد نزل بك الموت تقرُّ لله بالعبودية، وقد عصيته قبل نزول عذابه بك، وكنت من المفسدين الصادين عن سبيله!! فلا تنفعك التوبة ساعة الاحتضار ومشاهدة الموت والعذاب.","10:92":"فاليوم نجعلك على مرتفع من الأرض ببدنك، ينظر إليك من كذَّب بهلاكك؛ لتكون لمن بعدك من الناس عبرة يعتبرون بك. فإن كثيرًا من الناس عن حججنا وأدلتنا لَغافلون، لا يتفكرون فيها ولا يعتبرون.","20:77":"ولقد أوحينا إلى موسى: أن اخرُج ليلا بعبادي من بني إسرائيل من \\"مصر\\"، فاتِّخِذْ لهم في البحر طريقًا يابسًا، لا تخاف من فرعون وجنوده أن يلحقوكم فيدركوكم، ولا تخشى في البحر غرقًا.","20:78":"فأسرى موسى ببني إسرائيل، وعبر بهم طريقًا في البحر، فأتبعهم فرعون بجنوده، فغمرهم من الماء ما لا يعلم كنهه إلا الله، فغرقوا جميعًا ونجا موسى وقومه.","20:79":"وأضلَّ فرعون قومه بما زيَّنه لهم من الكفر والتكذيب، وما سلك بهم طريق الهداية.","26:52":"وأوحى الله إلى موسى عليه السلام: أَنْ سِرْ ليلا بمن آمن من بني إسرائيل؛ لأن فرعون وجنوده متبعوكم حتى لا يدركوكم قبل وصولكم إلى البحر.","26:53":"فأرسل فرعون جنده- حين بلغه مسير بني إسرائيل- يجمعون جيشه من مدائن مملكته.","26:54":"قال فرعون: إن بني إسرائيل الذين فرُّوا مع موسى لَطائفة حقيرة قليلة العدد، وإنهم لمالئون صدورنا غيظًا؛ حيث خالفوا ديننا، وخرجوا بغير إذننا، وإنا لجميع متيقظون مستعدون لهم.","26:55":"قال فرعون: إن بني إسرائيل الذين فرُّوا مع موسى لَطائفة حقيرة قليلة العدد، وإنهم لمالئون صدورنا غيظًا؛ حيث خالفوا ديننا، وخرجوا بغير إذننا، وإنا لجميع متيقظون مستعدون لهم.","26:56":"قال فرعون: إن بني إسرائيل الذين فرُّوا مع موسى لَطائفة حقيرة قليلة العدد، وإنهم لمالئون صدورنا غيظًا؛ حيث خالفوا ديننا، وخرجوا بغير إذننا، وإنا لجميع متيقظون مستعدون لهم.","26:57":"فأخرج الله فرعون وقومه من أرض \\"مصر\\" ذات البساتين وعيون الماء وخزائن المال والمنازل الحسان. وكما أخرجناهم، جعلنا هذه الديار من بعدهم لبني إسرائيل.","26:58":"فأخرج الله فرعون وقومه من أرض \\"مصر\\" ذات البساتين وعيون الماء وخزائن المال والمنازل الحسان. وكما أخرجناهم، جعلنا هذه الديار من بعدهم لبني إسرائيل.","26:59":"فأخرج الله فرعون وقومه من أرض \\"مصر\\" ذات البساتين وعيون الماء وخزائن المال والمنازل الحسان. وكما أخرجناهم، جعلنا هذه الديار من بعدهم لبني إسرائيل.","26:60":"فلحق فرعون وجنده موسى ومَن معه وقت شروق الشمس.","26:61":"فلما رأى كل واحد من الفريقين الآخر قال أصحاب موسى: إنَّ جَمْعَ فرعون مُدْرِكنا ومهلكنا.","26:62":"قال موسى لهم: كلا ليس الأمر كما ذكرتم فلن تُدْرَكوا؛ إن معي ربي بالنصر، سيهديني لما فيه نجاتي ونجاتكم.","26:63":"فأوحينا إلى موسى أن اضرب بعصاك البحر، فضرب، فانفلق البحر إلى اثني عشر طريقًا بعدد قبائل بني إسرائيل، فكانت كل قطعة انفصلت من البحر كالجبل العظيم.","26:64":"وقرَّبْنا هناك فرعون وقومه حتى دخلوا البحر، وأنجينا موسى ومَن معه أجمعين. فاستمر البحر على انفلاقه حتى عبروا إلى البر، ثم أغرقنا فرعون ومن معه بإطباق البحر عليهم بعد أن دخلوا فيه متبعين موسى وقومه.","26:65":"وقرَّبْنا هناك فرعون وقومه حتى دخلوا البحر، وأنجينا موسى ومَن معه أجمعين. فاستمر البحر على انفلاقه حتى عبروا إلى البر، ثم أغرقنا فرعون ومن معه بإطباق البحر عليهم بعد أن دخلوا فيه متبعين موسى وقومه.","26:66":"وقرَّبْنا هناك فرعون وقومه حتى دخلوا البحر، وأنجينا موسى ومَن معه أجمعين. فاستمر البحر على انفلاقه حتى عبروا إلى البر، ثم أغرقنا فرعون ومن معه بإطباق البحر عليهم بعد أن دخلوا فيه متبعين موسى وقومه.","26:67":"إن في ذلك الذي حدث لَعبرة عجيبة دالة على قدرة الله، وما صار أكثر أتباع فرعون مؤمنين مع هذه العلامة الباهرة.","26:68":"وإن ربك لهو العزيز الرحيم، بعزته أهلك الكافرين المكذبين، وبرحمته نجَّى موسى ومَن معه أجمعين.","44:17":"ولقد اختبرنا وابتلينا قبل هؤلاء المشركين قوم فرعون، وجاءهم رسول كريم، وهو موسى عليه السلام، فكذبوه فهلكوا، فهكذا نفعل بأعدائك أيها الرسول، إن لم يؤمنوا.","44:18":"وقال لهم موسى: أن سلِّموا إليَّ عباد الله من بني إسرائيل وأرسلوهم معي؛ ليعبدوا الله وحده لا شريك له، إني لكم رسول أمين على وحيه ورسالته.","44:19":"وألا تتكبروا على الله بتكذيب رسله، إني آتيكم ببرهان واضح على صدق رسالتي، إني استجرت بالله ربي وربكم أن تقتلوني رجمًا بالحجارة، وإن لم تصدقوني على ما جئتكم به فخلُّوا سبيلي، وكفُّوا عن أذاي.","44:20":"وألا تتكبروا على الله بتكذيب رسله، إني آتيكم ببرهان واضح على صدق رسالتي، إني استجرت بالله ربي وربكم أن تقتلوني رجمًا بالحجارة، وإن لم تصدقوني على ما جئتكم به فخلُّوا سبيلي، وكفُّوا عن أذاي.","44:21":"وألا تتكبروا على الله بتكذيب رسله، إني آتيكم ببرهان واضح على صدق رسالتي، إني استجرت بالله ربي وربكم أن تقتلوني رجمًا بالحجارة، وإن لم تصدقوني على ما جئتكم به فخلُّوا سبيلي، وكفُّوا عن أذاي.","44:22":"فدعا موسى ربه- حين كذبه فرعون وقومه ولم يؤمنوا به- قائلا إن هؤلاء قوم مشركون بالله كافرون.","44:23":"فأَسْر- يا موسى- بعبادي- الذين صَدَّقوك، وآمنوا بك، واتبعوك، دون الذين كذبوك منهم- ليلا إنكم متبعون من فرعون وجنوده فتنجون، ويغرق فرعون وجنوده.","44:24":"واترك البحر كما هو على حالته التي كان عليها حين سلكته، ساكنًا غير مضطرب، إن فرعون وجنوده مغرقون في البحر."}`)},In=Mn,Ln={"en.pickthall":Nn,"ckb.hevi":Pn,"ar.muyassar":Fn},Rn={2:{number:2,arabic:`البقرة`,transliteration:`Al-Baqarah`,english:`The Cow`},7:{number:7,arabic:`الأعراف`,transliteration:`Al-A'raf`,english:`The Heights`},10:{number:10,arabic:`يونس`,transliteration:`Yunus`,english:`Jonah`},20:{number:20,arabic:`طه`,transliteration:`Ta-Ha`,english:`Ta-Ha`},26:{number:26,arabic:`الشعراء`,transliteration:`Ash-Shu'ara`,english:`The Poets`},44:{number:44,arabic:`الدخان`,transliteration:`Ad-Dukhan`,english:`The Smoke`}},zn=/^(\d{1,3}):(\d{1,3})(?:-(\d{1,3}))?$/;function Bn(e){let t=zn.exec(e.trim());if(!t)throw Error(`Malformed verse reference: ${e}`);let n=Number(t[1]),r=Number(t[2]),i=t[3]?Number(t[3]):r;if(i<r)throw Error(`Malformed verse range: ${e}`);return{surah:n,from:r,to:i}}function Vn(e){let{surah:t,from:n,to:r}=Bn(e),i=[];for(let e=n;e<=r;e++)i.push(`${t}:${e}`);return i}function Hn(e,t=`en.pickthall`){let n=In.verses[e];if(n===void 0)return null;let r=Ln[t]??Ln[`en.pickthall`],[i,a]=e.split(`:`).map(Number);return{key:e,surah:i,ayah:a,arabic:n,translation:r.verses[e]??``}}function Un(e,t=`en.pickthall`){return Vn(e).map(e=>Hn(e,t)).filter(e=>e!==null)}function Wn(){try{return M().digits===`arab`}catch{return!1}}function Gn(e){let{surah:t,from:n,to:r}=Bn(e);return Wn()?`${Rn[t]?.arabic??N(t)}: ${N(n)}${r===n?``:`–${N(r)}`}`:`${Rn[t]?.transliteration??`Surah ${t}`} ${t}:${n}${r===n?``:`–${r}`}`}function Kn(){return Object.keys(In.verses).sort((e,t)=>{let[n,r]=e.split(`:`).map(Number),[i,a]=t.split(`:`).map(Number);return n-i||r-a})}function qn(){let e=[];for(let t of Kn()){let[n,r]=t.split(`:`).map(Number),i=e[e.length-1];i&&i.surah===n&&i.to===r-1?i.to=r:e.push({surah:n,from:r,to:r})}return e}var Jn=In.meta;function Yn(e=`en.pickthall`){return(Ln[e]??Ln[`en.pickthall`]).meta}function Xn(e){return Wn()?N(e.ayah):e.key}function Zn(e,t){let n=e[t+1];return n!==void 0&&n.translation!==``&&n.translation===e[t].translation}function G(e,t={},...n){let r=document.createElement(e);if(t.class&&(r.className=t.class),t.text!==void 0&&(r.textContent=t.text),t.attrs)for(let[e,n]of Object.entries(t.attrs))n!==void 0&&n!==!1&&r.setAttribute(e,n===!0?``:String(n));if(t.on)for(let[e,n]of Object.entries(t.on))n&&r.addEventListener(e,n);return Qn(r,...n),r}function Qn(e,...t){for(let n of t)n!=null&&n!==!1&&e.appendChild(typeof n==`string`||typeof n==`number`?document.createTextNode(String(n)):n)}function $n(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function K(e,t){e.textContent!==t&&(e.textContent=t)}var er=`http://www.w3.org/2000/svg`,tr={menu:`M3 6h18M3 12h18M3 18h18`,book:`M4 4.5A1.5 1.5 0 0 1 5.5 3H20v15H5.5A1.5 1.5 0 0 0 4 19.5zM4 19.5A1.5 1.5 0 0 0 5.5 21H20`,list:`M9 6h12M9 12h12M9 18h12M4 6h.01M4 12h.01M4 18h.01`,pin:`M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z`,sliders:`M4 6h9M17 6h3M4 12h3M11 12h9M4 18h11M19 18h1M15 4v4M9 10v4M17 16v4`,help:`M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM9.5 9.5a2.6 2.6 0 0 1 5 .9c0 1.7-2.5 2.3-2.5 3.6M12 17h.01`,sound:`M11 5L6 9H3v6h3l5 4zM15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13`,mute:`M11 5L6 9H3v6h3l5 4zM22 9l-6 6M16 9l6 6`,prev:`M18 19L8 12l10-7zM6 5v14`,next:`M6 5l10 7-10 7zM18 5v14`,play:`M7 4.5l13 7.5-13 7.5z`,pause:`M7 4.5h3.5v15H7zM13.5 4.5H17v15h-3.5z`,replay:`M4 12a8 8 0 1 0 2.4-5.7L4 8.5M4 4v4.5h4.5`,close:`M18 6L6 18M6 6l12 12`,walk:`M13 5.5a1.6 1.6 0 1 0 0-.01M10 21l2-5.5 2.5 2V21M9.5 13l1.5-5 3.5 2.5 3 1M8 10.5l3-2.5`,eye:`M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z`,waves:`M2 8c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2M2 13c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2M2 18c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2`,exit:`M9 20H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4M15 16l4-4-4-4M19 12H9`,info:`M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v6M12 7.5h.01`,home:`M3 11l9-7 9 7M5 9.5V20h5v-6h4v6h5V9.5`,compass:`M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM15.5 8.5l-2 5-5 2 2-5z`};function nr(e,t=20){let n=document.createElementNS(er,`svg`);n.setAttribute(`viewBox`,`0 0 24 24`),n.setAttribute(`width`,String(t)),n.setAttribute(`height`,String(t)),n.setAttribute(`aria-hidden`,`true`),n.setAttribute(`focusable`,`false`),n.setAttribute(`class`,`cos-icon`);let r=document.createElementNS(er,`path`);return r.setAttribute(`d`,tr[e]),r.setAttribute(`fill`,e===`play`||e===`pause`||e===`prev`||e===`next`?`currentColor`:`none`),r.setAttribute(`stroke`,`currentColor`),r.setAttribute(`stroke-width`,`1.8`),r.setAttribute(`stroke-linecap`,`round`),r.setAttribute(`stroke-linejoin`,`round`),n.appendChild(r),n}function q(e,t,n,r={}){let i=G(`button`,{class:`cos-btn cos-icon-btn ${r.class??``}`.trim(),attrs:{type:`button`,"aria-label":t,title:t},on:{click:()=>n()}});return i.appendChild(nr(e)),r.showLabel&&i.appendChild(G(`span`,{class:`cos-btn-label`,text:t})),i}function J(e,t,n=``){return G(`button`,{class:`cos-btn ${n}`.trim(),text:e,attrs:{type:`button`},on:{click:()=>t()}})}function rr(e){return[...e.querySelectorAll(`a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])`)].filter(e=>e.offsetParent!==null||e===document.activeElement)}var ir=`crossing-of-the-sea:settings:v1`,ar=[1,1.5,2];function or(){try{return window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}catch{return!1}}function sr(){return{quality:`auto`,resolutionScale:1,adaptiveResolution:!0,shadows:!0,reducedMotion:or(),masterVolume:.8,ambienceVolume:.8,effectsVolume:.9,muted:!1,narrationVoice:!1,autoAdvance:!0,playbackSpeed:1,largeText:!1,showArabic:!0,lookSensitivity:1,invertY:!1,language:`en`}}function cr(e){let t=sr();if(!e||typeof e!=`object`)return t;let n=e,r=(e,t,n,r)=>typeof e==`number`&&Number.isFinite(e)?D(e,t,n):r,i=(e,t)=>typeof e==`boolean`?e:t;return{quality:n.quality===`low`||n.quality===`medium`||n.quality===`high`||n.quality===`auto`?n.quality:t.quality,resolutionScale:r(n.resolutionScale,.5,1,t.resolutionScale),adaptiveResolution:i(n.adaptiveResolution,t.adaptiveResolution),shadows:i(n.shadows,t.shadows),reducedMotion:i(n.reducedMotion,t.reducedMotion),masterVolume:r(n.masterVolume,0,1,t.masterVolume),ambienceVolume:r(n.ambienceVolume,0,1,t.ambienceVolume),effectsVolume:r(n.effectsVolume,0,1,t.effectsVolume),muted:i(n.muted,t.muted),narrationVoice:i(n.narrationVoice,t.narrationVoice),autoAdvance:i(n.autoAdvance,t.autoAdvance),playbackSpeed:typeof n.playbackSpeed==`number`&&ar.includes(n.playbackSpeed)?n.playbackSpeed:t.playbackSpeed,largeText:i(n.largeText,t.largeText),showArabic:i(n.showArabic,t.showArabic),lookSensitivity:r(n.lookSensitivity,.2,3,t.lookSensitivity),invertY:i(n.invertY,t.invertY),language:typeof n.language==`string`&&/^[a-z]{2,3}(-[A-Za-z]{2,4})?$/.test(n.language)?n.language:t.language}}function lr(){try{let e=window.localStorage.getItem(ir);return e?cr(JSON.parse(e)):sr()}catch{return sr()}}function ur(e){try{window.localStorage.setItem(ir,JSON.stringify(e))}catch{}}var dr=[`quran`,`interpretation`,`artistic`],fr=class{constructor(e){A(this,`root`,void 0),A(this,`actions`,void 0),A(this,`settings`,void 0),A(this,`chapters`,void 0),A(this,`viewpoints`,void 0),A(this,`hotspots`,void 0),A(this,`websiteUrl`,void 0),A(this,`_mode`,`loading`),A(this,`touch`,void 0),A(this,`chapterIndex`,0),A(this,`narrationIndex`,null),A(this,`keyVerseRef`,null),A(this,`seaPhase`,`calm`),A(this,`infoId`,null),A(this,`modals`,[]),A(this,`lastGuided`,``),A(this,`pointer`,{x:0,y:0}),A(this,`toastTimer`,0),A(this,`listeners`,[]),A(this,`qualityLabel`,``),A(this,`loading`,void 0),A(this,`loadingBar`,void 0),A(this,`loadingLabel`,void 0),A(this,`hud`,void 0),A(this,`hudMode`,void 0),A(this,`hudChapter`,void 0),A(this,`soundBtn`,void 0),A(this,`narration`,void 0),A(this,`narrationTitle`,void 0),A(this,`narrationCount`,void 0),A(this,`narrationText`,void 0),A(this,`narrationRefs`,void 0),A(this,`narrationProgress`,void 0),A(this,`narrationStatus`,void 0),A(this,`playBtn`,void 0),A(this,`speedBtn`,void 0),A(this,`prevBtn`,void 0),A(this,`nextBtn`,void 0),A(this,`collapseBtn`,void 0),A(this,`keyVerse`,void 0),A(this,`freeTools`,void 0),A(this,`seaBtn`,void 0),A(this,`replayOpeningBtn`,void 0),A(this,`infoPanel`,void 0),A(this,`hoverLabel`,void 0),A(this,`crosshair`,void 0),A(this,`lockHint`,void 0),A(this,`toastEl`,void 0),A(this,`modalLayer`,void 0),A(this,`live`,void 0),this.root=e.root,this.actions=e.actions,this.settings={...e.settings},this.chapters=e.chapters,this.viewpoints=e.viewpoints,this.hotspots=e.hotspots,this.websiteUrl=e.websiteUrl,this.touch=e.isTouch,this.root.classList.add(`cos-ui`),this.root.setAttribute(`lang`,M().code),this.root.setAttribute(`dir`,M().dir),this.live=G(`div`,{class:`cos-sr-only`,attrs:{"aria-live":`polite`,role:`status`}}),this.loadingBar=G(`div`,{class:`cos-loading-bar-fill`}),this.loadingLabel=G(`p`,{class:`cos-loading-label`,text:P(`loading.title`)}),this.loading=G(`div`,{class:`cos-loading`,attrs:{role:`progressbar`,"aria-valuemin":0,"aria-valuemax":100,"aria-label":P(`loading.title`)}},G(`h1`,{class:`cos-title`,text:P(`app.title`)}),G(`div`,{class:`cos-loading-bar`},this.loadingBar),this.loadingLabel),this.hudMode=G(`span`,{class:`cos-hud-mode`}),this.hudChapter=G(`span`,{class:`cos-hud-chapter`}),this.soundBtn=q(`sound`,P(`hud.mute`),()=>this.toggleMute()),this.hud=G(`header`,{class:`cos-hud`,attrs:{"aria-label":P(`app.title`)}},G(`div`,{class:`cos-hud-left`},this.hudMode,this.hudChapter),G(`nav`,{class:`cos-hud-right`,attrs:{"aria-label":P(`hud.menu`)}},q(`book`,P(`hud.verses`),()=>this.openVersesForContext(),{showLabel:!0,class:`cos-hide-narrow`}),q(`list`,P(`hud.chapters`),()=>this.openChapters(),{showLabel:!0,class:`cos-hide-narrow`}),q(`pin`,P(`hud.places`),()=>this.openPlaces(),{showLabel:!0,class:`cos-hide-narrow`}),this.soundBtn,q(`help`,P(`hud.help`),()=>this.openHelp()),q(`menu`,P(`hud.menu`),()=>this.actions.openPause(),{showLabel:!0}))),this.narrationCount=G(`span`,{class:`cos-narr-count`}),this.narrationTitle=G(`h2`,{class:`cos-narr-title`}),this.narrationText=G(`p`,{class:`cos-narr-text`}),this.narrationRefs=G(`div`,{class:`cos-narr-refs`,attrs:{"aria-label":P(`guided.references`)}}),this.narrationProgress=G(`div`,{class:`cos-progress-fill`}),this.narrationStatus=G(`span`,{class:`cos-narr-status`,attrs:{"aria-live":`polite`}}),this.prevBtn=q(`prev`,P(`guided.previous`),()=>this.actions.guidedPrev()),this.playBtn=q(`pause`,P(`guided.pause`),()=>this.actions.guidedTogglePause()),this.speedBtn=G(`button`,{class:`cos-btn cos-speed`,attrs:{type:`button`},on:{click:()=>this.cycleSpeed()}}),this.nextBtn=q(`next`,P(`guided.next`),()=>this.actions.guidedNext(),{class:`cos-next`}),this.collapseBtn=G(`button`,{class:`cos-btn cos-icon-btn cos-collapse`,text:`–`,attrs:{type:`button`,"aria-label":P(`guided.hideText`),"aria-expanded":`true`,title:P(`guided.hideText`)},on:{click:()=>{let e=this.narration.classList.toggle(`cos-collapsed`);this.collapseBtn.setAttribute(`aria-expanded`,String(!e)),this.collapseBtn.textContent=e?`+`:`–`;let t=P(e?`guided.showText`:`guided.hideText`);this.collapseBtn.setAttribute(`aria-label`,t),this.collapseBtn.title=t}}}),this.narration=G(`section`,{class:`cos-narration`,attrs:{"aria-label":P(`hud.guidedMode`)}},G(`div`,{class:`cos-narr-head`},this.narrationCount,G(`span`,{class:`cos-narr-head-end`},this.narrationStatus,this.speedBtn)),this.narrationTitle,G(`p`,{class:`cos-narr-speaker`,text:P(`guided.narrator`)}),this.narrationText,this.narrationRefs,G(`div`,{class:`cos-progress`,attrs:{"aria-hidden":`true`}},this.narrationProgress),G(`div`,{class:`cos-narr-controls`},this.prevBtn,this.playBtn,q(`replay`,P(`guided.replay`),()=>this.actions.guidedReplay()),this.nextBtn,q(`book`,P(`hud.verses`),()=>this.openVersesForContext(),{class:`cos-show-narrow`}),G(`span`,{class:`cos-spacer`}),this.collapseBtn,q(`walk`,P(`guided.exploreHere`),()=>this.actions.exploreHere(),{showLabel:!0}),q(`exit`,P(`guided.exit`),()=>this.actions.exitGuided(),{class:`cos-hide-narrow`}))),this.keyVerse=G(`aside`,{class:`cos-keyverse`,attrs:{"aria-live":`polite`}}),this.seaBtn=G(`button`,{class:`cos-btn cos-tool`,attrs:{type:`button`},on:{click:()=>this.onSeaButton()}}),this.replayOpeningBtn=G(`button`,{class:`cos-btn cos-tool`,attrs:{type:`button`},on:{click:()=>this.actions.freeSea(`replayOpening`)}}),this.freeTools=G(`div`,{class:`cos-free-tools`},q(`eye`,P(`free.viewpoints`),()=>this.openViewpoints(),{showLabel:!0,class:`cos-tool`}),this.seaBtn,this.replayOpeningBtn,q(`compass`,P(`free.startGuided`),()=>this.actions.selectChapter(0),{showLabel:!0,class:`cos-tool`})),this.infoPanel=G(`aside`,{class:`cos-info`,attrs:{"aria-live":`polite`,hidden:!0}}),this.hoverLabel=G(`div`,{class:`cos-hover-label`,attrs:{"aria-hidden":`true`,hidden:!0}}),this.crosshair=G(`div`,{class:`cos-crosshair`,attrs:{"aria-hidden":`true`,hidden:!0}}),this.lockHint=G(`button`,{class:`cos-lock-hint`,text:P(`free.lockHint`),attrs:{type:`button`,hidden:!0},on:{click:()=>this.actions.requestPointerLock()}}),this.toastEl=G(`div`,{class:`cos-toast`,attrs:{role:`status`,hidden:!0}}),this.modalLayer=G(`div`,{class:`cos-modal-layer`}),Qn(this.root,this.live,this.hud,this.keyVerse,this.narration,this.freeTools,this.infoPanel,this.crosshair,this.hoverLabel,this.lockHint,this.toastEl,this.modalLayer,this.loading);let t=e=>{this.pointer.x=e.clientX,this.pointer.y=e.clientY},n=e=>this.onKeyDown(e);window.addEventListener(`pointermove`,t,{passive:!0}),window.addEventListener(`keydown`,n,!0),this.listeners.push(()=>window.removeEventListener(`pointermove`,t)),this.listeners.push(()=>window.removeEventListener(`keydown`,n,!0)),this.setSettings(this.settings),this.setTouchActive(this.touch),this.setFreeSeaState(`calm`),this.setMode(`loading`)}get mode(){return this._mode}get infoOpen(){return this.infoId!==null}get blocking(){return this.modals.length>0||this._mode===`loading`||this._mode===`intro`||this._mode===`error`}setQualityLabel(e){this.qualityLabel=e}announce(e){this.live.textContent=``,window.setTimeout(()=>this.live.textContent=e,30)}onKeyDown(e){let t=this.modals[this.modals.length-1];if(t){if(e.key===`Escape`&&!t.sticky)e.preventDefault(),e.stopPropagation(),this.closeTopModal();else if(e.key===`Tab`){let n=rr(t.node);if(n.length===0)return;let r=n[0],i=n[n.length-1];e.shiftKey&&document.activeElement===r?(e.preventDefault(),i.focus()):!e.shiftKey&&document.activeElement===i&&(e.preventDefault(),r.focus())}}}handleEscape(){let e=this.modals[this.modals.length-1];return e&&!e.sticky?(this.closeTopModal(),!0):this.infoId?(this.closeInfo(),!0):!1}openModal(e,t,n={}){let r=`cos-dlg-${Math.random().toString(36).slice(2,8)}`,i=n.sticky?null:q(`close`,P(`common.close`),()=>this.closeTopModal(),{class:`cos-dialog-close`}),a=G(`div`,{class:`cos-dialog ${n.wide?`cos-dialog-wide`:``} ${n.className??``}`.trim(),attrs:{role:`dialog`,"aria-modal":`true`,"aria-labelledby":r}},G(`div`,{class:`cos-dialog-head`},G(`h2`,{class:`cos-dialog-title`,text:e,attrs:{id:r}}),i),G(`div`,{class:`cos-dialog-body`},...t)),o=G(`div`,{class:`cos-scrim`},a);o.addEventListener(`click`,e=>{e.target===o&&!n.sticky&&this.closeTopModal()});let s=this.modals[this.modals.length-1];return s&&(s.node.hidden=!0),this.modalLayer.appendChild(o),this.modals.push({node:o,restoreFocus:document.activeElement,onClose:n.onClose,sticky:n.sticky}),this.actions.overlayChanged(!0),window.setTimeout(()=>{let e=rr(a);(e.find(e=>!e.classList.contains(`cos-dialog-close`))??e[0]??a).focus()},20),a}closeTopModal(){let e=this.modals.pop();if(!e)return;e.node.remove();let t=this.modals[this.modals.length-1];t&&(t.node.hidden=!1),e.onClose?.(),e.restoreFocus instanceof HTMLElement&&document.contains(e.restoreFocus)&&e.restoreFocus.focus(),this.actions.overlayChanged(this.blocking)}closeAllModals(){for(;this.modals.length;)this.modals.pop().node.remove();this.actions.overlayChanged(this.blocking)}setLoading(e,t){let n=Math.round(Math.max(0,Math.min(1,e))*100);this.loadingBar.style.width=`${n}%`,this.loading.setAttribute(`aria-valuenow`,String(n)),K(this.loadingLabel,t)}hideLoading(){this.loading.classList.add(`cos-fade-out`),window.setTimeout(()=>this.loading.hidden=!0,600)}setMode(e){(e===`guided`||e===`free`)&&this.modals.length&&this.closeAllModals(),this._mode=e,this.root.dataset.mode=e;let t=e===`guided`||e===`free`;this.hud.hidden=!t,this.narration.hidden=e!==`guided`,this.freeTools.hidden=e!==`free`,e!==`guided`&&this.showKeyVerse(null),K(this.hudMode,e===`guided`?P(`hud.guidedMode`):e===`free`?P(`hud.freeMode`):``),this.hudChapter.hidden=e!==`guided`,t||(this.setHoverLabel(null),this.setPointerLockHint(!1)),this.actions.overlayChanged(this.blocking)}showIntro(){this.closeAllModals(),this.setMode(`intro`);let e=[this.languagePicker(),G(`p`,{class:`cos-intro-sub`,text:P(`app.subtitle`)}),G(`p`,{class:`cos-intro-lead`,text:P(`intro.lead`)}),G(`div`,{class:`cos-actions cos-intro-actions`},G(`button`,{class:`cos-btn cos-primary cos-big`,attrs:{type:`button`},on:{click:()=>this.actions.startGuided()}},G(`span`,{class:`cos-big-label`,text:P(`intro.guided`)}),G(`span`,{class:`cos-big-hint`,text:P(`intro.guidedHint`)})),G(`button`,{class:`cos-btn cos-big`,attrs:{type:`button`},on:{click:()=>this.actions.startFree()}},G(`span`,{class:`cos-big-label`,text:P(`intro.free`)}),G(`span`,{class:`cos-big-hint`,text:P(`intro.freeHint`)}))),G(`section`,{class:`cos-notice`,attrs:{"aria-label":P(`intro.noticeTitle`)}},G(`h3`,{text:P(`intro.noticeTitle`)}),G(`p`,{text:P(`intro.notice1`)}),G(`p`,{text:P(`intro.notice2`)}),G(`p`,{text:P(`intro.notice3`)})),G(`div`,{class:`cos-actions cos-actions-secondary`},J(P(`hud.help`),()=>this.openHelp()),J(P(`hud.settings`),()=>this.openSettings()),J(P(`pause.about`),()=>this.openAbout()),G(`a`,{class:`cos-btn cos-link`,text:P(`common.returnToWebsite`),attrs:{href:this.websiteUrl}})),G(`p`,{class:`cos-small`,text:`${P(`intro.sound`)} ${this.qualityLabel?Ze().trimStart()+P(`intro.quality`,{level:this.qualityLabel}):``}`})];this.openModal(P(`app.title`),e,{sticky:!0,wide:!0,className:`cos-intro`}),this.actions.overlayChanged(!0)}showError(e,t){this.closeAllModals(),this.loading.hidden=!0,this.setMode(`error`);let n=e===`webgl`?`error.webglTitle`:e===`context-lost`?`error.contextLostTitle`:`error.genericTitle`,r=[G(`p`,{text:P(e===`webgl`?`error.webglText`:e===`context-lost`?`error.contextLostText`:`error.genericText`)})];t&&r.push(G(`p`,{class:`cos-small`,text:t})),r.push(G(`div`,{class:`cos-actions`},e===`webgl`?null:J(P(`error.reload`),()=>window.location.reload(),`cos-primary`),G(`a`,{class:`cos-btn`,text:P(`common.returnToWebsite`),attrs:{href:this.websiteUrl}}))),this.openModal(P(n),r,{sticky:!0})}showCompletion(){this.closeAllModals(),this.setMode(`complete`),this.openModal(P(`complete.title`),[G(`p`,{text:P(`complete.text`)}),G(`div`,{class:`cos-actions cos-actions-column`},J(P(`complete.review`),()=>this.openPassages(),`cos-primary`),J(P(`complete.replayOpening`),()=>{this.closeAllModals(),this.actions.replaySeaOpening()}),J(P(`complete.restart`),()=>{this.closeAllModals(),this.actions.restart()}),J(P(`complete.free`),()=>{this.closeAllModals(),this.actions.exploreHere()}),G(`a`,{class:`cos-btn cos-link`,text:P(`common.returnToWebsite`),attrs:{href:this.websiteUrl}}))],{onClose:()=>{this._mode===`complete`&&this.actions.exploreHere()}})}openPause(){if(this.modals.length)return;let e=this._mode===`guided`;this.openModal(P(`pause.title`),[G(`div`,{class:`cos-actions cos-actions-column`},J(P(`pause.resume`),()=>this.closePause(),`cos-primary`),e?J(P(`pause.exitGuided`),()=>{this.closeAllModals(),this.actions.exitGuided()}):J(P(`pause.startGuided`),()=>{this.closeAllModals(),this.actions.selectChapter(0)}),J(P(`hud.chapters`),()=>this.openChapters()),J(P(`verses.allPassages`),()=>this.openPassages()),J(P(`hud.settings`),()=>this.openSettings()),J(P(`hud.help`),()=>this.openHelp()),J(P(`pause.about`),()=>this.openAbout()),J(P(`pause.restart`),()=>{this.closeAllModals(),this.actions.restart()}),G(`a`,{class:`cos-btn cos-link`,text:P(`common.returnToWebsite`),attrs:{href:this.websiteUrl}}))],{onClose:()=>this.actions.resume()})}get pauseOpen(){return this.modals.length>0}closePause(){this.closeAllModals(),this.actions.resume()}setChapter(e){this.chapterIndex=e;let t=this.chapters[e],n=M().chapters[t.id];K(this.narrationTitle,n.title),K(this.narrationCount,P(`hud.chapterOf`,{n:e+1,total:this.chapters.length})),K(this.hudChapter,`${N(e+1)}. ${n.title}`),$n(this.narrationRefs);for(let e of t.refs)this.narrationRefs.appendChild(G(`button`,{class:`cos-chip`,text:Gn(e),attrs:{type:`button`,title:P(`info.openVerses`)},on:{click:()=>this.openVerses([e])}}));this.narrationIndex=null,K(this.narrationText,``),this.lastGuided=``}updateGuided(e){let t=`${e.chapterIndex}|${e.paused}|${e.chapterEnded}|${e.autoAdvanceIn===null?`n`:Math.ceil(e.autoAdvanceIn)}|${e.canPrev}|${e.canNext}`;if(this.narrationProgress.style.transform=`scaleX(${Math.max(0,Math.min(1,e.progress))})`,t===this.lastGuided)return;this.lastGuided=t,$n(this.playBtn),this.playBtn.appendChild(nr(e.paused?`play`:`pause`));let n=e.paused?P(`guided.resume`):P(`guided.pause`);this.playBtn.setAttribute(`aria-label`,n),this.playBtn.title=n,this.prevBtn.disabled=!e.canPrev,this.nextBtn.disabled=!e.canNext&&!e.chapterEnded;let r=``;e.paused?r=P(`guided.paused`):e.autoAdvanceIn!==null&&(r=P(`guided.autoNext`,{s:Math.max(1,Math.ceil(e.autoAdvanceIn))})),K(this.narrationStatus,r),this.narration.classList.toggle(`cos-ended`,e.chapterEnded)}showNarration(e){if(e===this.narrationIndex)return;this.narrationIndex=e;let t=this.chapters[this.chapterIndex],n=M().chapters[t.id].narration,r=e!==null&&e>=0?n[e]??``:``;this.narrationText.classList.remove(`cos-fade-in`),this.narrationText.offsetWidth,this.narrationText.classList.add(`cos-fade-in`),K(this.narrationText,r),r&&this.announce(r)}narrationLine(e,t){let n=this.chapters[e];return M().chapters[n.id].narration[t]??``}showKeyVerse(e){if(e===this.keyVerseRef)return;if(this.keyVerseRef=e,$n(this.keyVerse),!e){this.keyVerse.classList.remove(`cos-visible`);return}let t=Un(e,M().translationId),n=G(`div`,{class:`cos-keyverse-card`});t.forEach((e,r)=>{this.settings.showArabic&&n.appendChild(G(`p`,{class:`cos-arabic`,text:e.arabic,attrs:{lang:`ar`,dir:`rtl`}})),Zn(t,r)||n.appendChild(this.translationText(e.translation))}),n.appendChild(G(`p`,{class:`cos-keyverse-ref`},G(`button`,{class:`cos-chip`,text:Gn(e),attrs:{type:`button`},on:{click:()=>this.openVerses([e])}}),G(`span`,{class:`cos-small`,text:P(`keyverse.translation`)}))),this.keyVerse.appendChild(n),this.keyVerse.classList.add(`cos-visible`)}openInfo(e){let t=M().hotspots[e];if(!t)return;this.infoId=e,$n(this.infoPanel);let n=M().classifications,r=G(`ul`,{class:`cos-statements`});for(let e of dr)for(let i of t.statements.filter(t=>t.kind===e)){let e=G(`li`,{class:`cos-statement cos-kind-${i.kind}`},G(`span`,{class:`cos-tag cos-tag-${i.kind}`,text:n[i.kind].label}),G(`span`,{class:`cos-statement-text`,text:i.text}));if(i.refs?.length){let t=G(`span`,{class:`cos-statement-refs`});for(let e of i.refs)t.appendChild(G(`button`,{class:`cos-chip cos-chip-small`,text:Gn(e),attrs:{type:`button`},on:{click:()=>this.openVerses([e])}}));e.appendChild(t)}r.appendChild(e)}Qn(this.infoPanel,G(`div`,{class:`cos-info-head`},G(`h2`,{class:`cos-info-title`,text:t.title}),q(`close`,P(`common.close`),()=>this.closeInfo(),{class:`cos-info-close`})),G(`div`,{class:`cos-info-body`},G(`p`,{class:`cos-info-summary`,text:t.summary}),G(`h3`,{text:P(`info.role`)}),G(`p`,{text:t.role}),G(`h3`,{text:P(`info.sources`)}),r,t.refs.length?J(P(`info.openVerses`),()=>this.openVerses(t.refs),`cos-primary cos-small-btn`):null,this.legend())),this.infoPanel.hidden=!1,this.infoPanel.classList.add(`cos-visible`),this.announce(t.title)}closeInfo(){this.infoId=null,this.infoPanel.classList.remove(`cos-visible`),this.infoPanel.hidden=!0}legend(){let e=M().classifications;return G(`details`,{class:`cos-legend`},G(`summary`,{text:P(`info.legend`)}),G(`ul`,{},...dr.map(t=>G(`li`,{},G(`span`,{class:`cos-tag cos-tag-${t}`,text:e[t].label}),G(`span`,{text:` ${e[t].description}`})))))}verseList(e){let t=G(`div`,{class:`cos-verses`});for(let n of e){let e=G(`section`,{class:`cos-verse-group`},G(`h3`,{class:`cos-verse-group-title`,text:Gn(n)})),r=Un(n,M().translationId);r.forEach((t,n)=>{e.appendChild(G(`article`,{class:`cos-verse`},G(`p`,{class:`cos-verse-key`,text:P(`verses.ayah`,{key:Xn(t)})}),G(`p`,{class:`cos-arabic`,text:t.arabic,attrs:{lang:`ar`,dir:`rtl`}}),Zn(r,n)?null:this.translationText(t.translation)))}),t.appendChild(e)}return t}translationText(e){let t=Yn(M().translationId),n=t.language??M().code,r=n===`ar`||n===`ckb`?`rtl`:`ltr`;return t.kind===`tafsir`?G(`p`,{class:`cos-translation cos-tafsir`,attrs:{lang:n,dir:r}},G(`span`,{class:`cos-tafsir-label`,text:P(`verses.tafsirLabel`)}),` `,e):G(`p`,{class:`cos-translation`,text:e,attrs:{lang:n,dir:r}})}languagePicker(){let e=M().code;return G(`div`,{class:`cos-lang`,attrs:{role:`group`,"aria-label":P(`settings.language`)}},...nt.map(t=>G(`button`,{class:`cos-btn cos-lang-btn${t.code===e?` cos-active`:``}`,text:t.name,attrs:{type:`button`,lang:t.code,dir:t.code===`en`?`ltr`:`rtl`,"aria-pressed":t.code===e?`true`:`false`},on:{click:()=>t.code===e?void 0:ot(t.code)}})))}attribution(){return G(`footer`,{class:`cos-attribution`},G(`p`,{},P(`verses.arabicSource`),` `,G(`a`,{text:`tanzil.net`,attrs:{href:Jn.sourceUrl,target:`_blank`,rel:`noopener noreferrer`}})),G(`p`,{text:P(`verses.translationSource`)}),G(`p`,{class:`cos-small`,text:`${Jn.title} ${Jn.version??``}${Ze()}${Yn(M().translationId).translator??``}`}))}openVerses(e,t){this.openModal(t??P(`verses.title`),[this.verseList(e),J(P(`verses.allPassages`),()=>this.openPassages()),this.attribution()],{wide:!0})}openVersesForContext(){if(this._mode===`guided`){let e=this.chapters[this.chapterIndex];this.openVerses(e.refs,M().chapters[e.id].title)}else this.openPassages()}openPassages(){let e=qn(),t=G(`div`,{class:`cos-tabs`,attrs:{role:`tablist`}}),n=G(`div`,{class:`cos-tab-panel`,attrs:{role:`tabpanel`}}),r=r=>{[...t.children].forEach((e,t)=>e.setAttribute(`aria-selected`,String(r===t))),$n(n);let i=e[r];n.appendChild(this.verseList([`${i.surah}:${i.from}-${i.to}`])),n.scrollTop=0};e.forEach((e,n)=>{t.appendChild(G(`button`,{class:`cos-tab`,text:Gn(`${e.surah}:${e.from}-${e.to}`),attrs:{type:`button`,role:`tab`,"aria-selected":`false`},on:{click:()=>r(n)}}))}),this.openModal(P(`verses.passagesTitle`),[t,n,this.attribution()],{wide:!0}),r(Math.max(0,e.findIndex(e=>e.surah===26)))}openChapters(){let e=G(`ol`,{class:`cos-chapter-list`});this.chapters.forEach((t,n)=>{let r=M().chapters[t.id],i=this._mode===`guided`&&n===this.chapterIndex;e.appendChild(G(`li`,{},G(`button`,{class:`cos-chapter ${i?`cos-current`:``}`,attrs:{type:`button`,"aria-current":i?`step`:void 0},on:{click:()=>{this.closeAllModals(),this.actions.selectChapter(n)}}},G(`span`,{class:`cos-chapter-num`,text:N(n+1)}),G(`span`,{class:`cos-chapter-text`},G(`span`,{class:`cos-chapter-title`,text:r.title}),G(`span`,{class:`cos-chapter-sub`,text:`${r.subtitle}${Ze()}${Qe(t.refs.map(e=>Gn(e)))}`})))))}),this.openModal(P(`chapters.title`),[e],{wide:!0})}openPlaces(){let e=G(`ul`,{class:`cos-place-list`});for(let t of this.hotspots){let n=M().hotspots[t.id];e.appendChild(G(`li`,{},G(`button`,{class:`cos-place`,attrs:{type:`button`},on:{click:()=>{this.closeAllModals(),this.actions.openHotspot(t.id)}}},G(`span`,{class:`cos-place-title`,text:n.title}),G(`span`,{class:`cos-place-sub`,text:n.summary}))))}this.openModal(P(`places.title`),[G(`p`,{class:`cos-small`,text:P(`places.hint`)}),e],{wide:!0})}openViewpoints(){let e=M().viewpoints,t=G(`div`,{class:`cos-actions cos-actions-column`});for(let n of this.viewpoints)t.appendChild(J(e[n],()=>{this.closeAllModals(),this.actions.goToViewpoint(n)}));this.openModal(P(`free.viewpoints`),[t])}openSettings(){let e=this.settings,t=e=>{this.settings={...this.settings,...e},this.actions.settingsChanged({...this.settings})},n=(n,r)=>{let i=`cos-set-${String(n)}`,a=G(`input`,{attrs:{type:`checkbox`,id:i},on:{change:()=>t({[n]:a.checked})}});return a.checked=!!e[n],G(`div`,{class:`cos-field cos-field-check`},a,G(`label`,{text:r,attrs:{for:i}}))},r=(n,r,i,a,o,s)=>{let c=`cos-set-${String(n)}`,l=G(`output`,{text:s(Number(e[n])),attrs:{for:c}}),u=G(`input`,{attrs:{type:`range`,id:c,min:i,max:a,step:o},on:{input:()=>{l.textContent=s(Number(u.value)),t({[n]:Number(u.value)})}}});return u.value=String(e[n]),G(`div`,{class:`cos-field cos-field-range`},G(`label`,{text:r,attrs:{for:c}}),u,l)},i=e=>N(`${Math.round(e*100)}%`),a=`cos-set-quality`,o=G(`select`,{attrs:{id:a},on:{change:()=>t({quality:o.value})}},G(`option`,{text:P(`settings.quality.auto`,{level:this.qualityLabel||``}),attrs:{value:`auto`}}),G(`option`,{text:P(`settings.quality.low`),attrs:{value:`low`}}),G(`option`,{text:P(`settings.quality.medium`),attrs:{value:`medium`}}),G(`option`,{text:P(`settings.quality.high`),attrs:{value:`high`}}));o.value=e.quality,this.openModal(P(`settings.title`),[G(`fieldset`,{class:`cos-fieldset`},G(`legend`,{text:P(`settings.graphics`)}),G(`div`,{class:`cos-field`},G(`label`,{text:P(`settings.quality`),attrs:{for:a}}),o),r(`resolutionScale`,P(`settings.resolution`),.5,1,.05,i),n(`adaptiveResolution`,P(`settings.adaptive`)),n(`shadows`,P(`settings.shadows`))),G(`fieldset`,{class:`cos-fieldset`},G(`legend`,{text:P(`settings.sound`)}),r(`masterVolume`,P(`settings.master`),0,1,.05,i),r(`ambienceVolume`,P(`settings.ambience`),0,1,.05,i),r(`effectsVolume`,P(`settings.effects`),0,1,.05,i),n(`muted`,P(`settings.muted`))),G(`fieldset`,{class:`cos-fieldset`},G(`legend`,{text:P(`settings.accessibility`)}),n(`reducedMotion`,P(`settings.reducedMotion`)),n(`largeText`,P(`settings.largeText`)),n(`showArabic`,P(`settings.showArabic`)),n(`narrationVoice`,P(`settings.narrationVoice`)),n(`autoAdvance`,P(`settings.autoAdvance`))),G(`fieldset`,{class:`cos-fieldset`},G(`legend`,{text:P(`settings.controls`)}),r(`lookSensitivity`,P(`settings.sensitivity`),.3,2.5,.1,e=>N(`${e.toFixed(1)}×`)),n(`invertY`,P(`settings.invertY`))),G(`fieldset`,{class:`cos-fieldset`},G(`legend`,{text:P(`settings.language`)}),this.languagePicker(),G(`p`,{class:`cos-small`,text:P(`settings.languageNote`)}))],{wide:!0})}openHelp(){let e=e=>G(`li`,{text:e});this.openModal(P(`help.title`),[G(`h3`,{text:P(`help.desktop`)}),G(`ul`,{class:`cos-help-list`},e(P(`help.desktop.move`)),e(P(`help.desktop.run`)),e(P(`help.desktop.look`)),e(P(`help.desktop.inspect`))),G(`h3`,{text:P(`help.touch`)}),G(`ul`,{class:`cos-help-list`},e(P(`help.touch.move`)),e(P(`help.touch.look`)),e(P(`help.touch.inspect`))),G(`h3`,{text:P(`help.keys`)}),G(`p`,{text:P(`help.keys.list`)}),G(`p`,{text:P(`help.guided`)}),G(`p`,{class:`cos-small`,text:P(`help.respect`)})],{wide:!0})}openAbout(){let e=Jn,t=Yn(M().translationId);this.openModal(P(`about.title`),[G(`h3`,{text:P(`about.approach`)}),G(`p`,{text:P(`about.approachText`)}),this.legend(),G(`h3`,{text:P(`about.sources`)}),G(`ul`,{class:`cos-help-list`},G(`li`,{},`${e.title} (${e.version??``}) — ${e.license}. `,G(`a`,{text:e.sourceUrl,attrs:{href:e.sourceUrl,target:`_blank`,rel:`noopener noreferrer`}})),G(`li`,{text:`${t.translator??``}, ${t.title} (${t.firstPublished??``}) — ${t.license}`})),G(`h3`,{text:P(`about.reconstruction`)}),G(`p`,{text:P(`about.reconstructionText`)}),G(`h3`,{text:P(`about.respect`)}),G(`p`,{text:P(`about.respectText`)}),G(`h3`,{text:P(`about.assets`)}),G(`p`,{text:P(`about.assetsText`)}),G(`h3`,{text:P(`about.privacy`)}),G(`p`,{text:P(`about.privacyText`)})],{wide:!0})}setFreeSeaState(e){this.seaPhase=e,$n(this.seaBtn),this.seaBtn.appendChild(nr(`waves`));let t,n=!1;switch(e){case`calm`:t=P(`free.partSea`);break;case`opening`:t=P(`free.parting`),n=!0;break;case`open`:t=P(`free.calmSea`);break;default:t=P(`free.settling`),n=!0}this.seaBtn.appendChild(G(`span`,{class:`cos-btn-label`,text:t})),this.seaBtn.disabled=n,$n(this.replayOpeningBtn),this.replayOpeningBtn.appendChild(nr(`replay`)),this.replayOpeningBtn.appendChild(G(`span`,{class:`cos-btn-label`,text:P(`free.replayOpening`)})),this.replayOpeningBtn.hidden=e!==`open`}onSeaButton(){this.seaPhase===`calm`?this.actions.freeSea(`open`):this.seaPhase===`open`&&this.actions.freeSea(`calm`)}setHoverLabel(e){if(!e){this.hoverLabel.hidden=!0;return}K(this.hoverLabel,e),this.hoverLabel.hidden=!1;let t=!this.crosshair.hidden,n=t?window.innerWidth/2:this.pointer.x,r=t?window.innerHeight/2+26:this.pointer.y+22;this.hoverLabel.style.transform=`translate(${Math.round(n)}px, ${Math.round(r)}px) translateX(-50%)`}setPointerLockHint(e){this.lockHint.hidden=!e||this.touch}setCrosshair(e){this.crosshair.hidden=!e}setTouchActive(e){this.touch=e,this.root.classList.toggle(`cos-touch`,e),e&&(this.lockHint.hidden=!0)}cycleSpeed(){let e=ar.indexOf(this.settings.playbackSpeed);this.settings={...this.settings,playbackSpeed:ar[(e+1)%ar.length]},this.actions.settingsChanged({...this.settings})}updateSpeedButton(){let e=this.settings.playbackSpeed,t=N(e),n=`${t===String(e)?t:t.replace(`.`,`٫`)}×`,r=`${P(`guided.speed`)}: ${n}`;K(this.speedBtn,n),this.speedBtn.setAttribute(`aria-label`,r),this.speedBtn.title=r,this.speedBtn.classList.toggle(`cos-speed-fast`,e!==1)}setSettings(e){this.settings={...e},this.updateSpeedButton(),this.root.classList.toggle(`cos-large-text`,e.largeText),this.root.classList.toggle(`cos-reduced-motion`,e.reducedMotion),$n(this.soundBtn),this.soundBtn.appendChild(nr(e.muted?`mute`:`sound`));let t=e.muted?P(`hud.unmute`):P(`hud.mute`);this.soundBtn.setAttribute(`aria-label`,t),this.soundBtn.title=t;let n=this.keyVerseRef;this.keyVerseRef=null,this.showKeyVerse(n)}toggleMute(){let e=!this.settings.muted;this.settings={...this.settings,muted:e},this.actions.settingsChanged({...this.settings}),this.toast(P(e?`toast.muted`:`toast.unmuted`))}toast(e){K(this.toastEl,e),this.toastEl.hidden=!1,this.toastEl.classList.add(`cos-visible`),this.announce(e),window.clearTimeout(this.toastTimer),this.toastTimer=window.setTimeout(()=>{this.toastEl.classList.remove(`cos-visible`),window.setTimeout(()=>this.toastEl.hidden=!0,300)},3200)}refreshText(){this.updateSpeedButton(),this._mode===`guided`&&this.setChapter(this.chapterIndex),this.infoId&&this.openInfo(this.infoId),this.setFreeSeaState(this.seaPhase)}dispose(){for(let e of this.listeners)e();window.clearTimeout(this.toastTimer),$n(this.root)}};function pr(e){let t=e.map(e=>{let t=e.index?e.toNonIndexed():e;for(let e of Object.keys(t.attributes))e!==`position`&&t.deleteAttribute(e);return t}),n=se(t,!1);if(!n)throw Error(`figure merge failed`);let r=be(n,.001);r.computeVertexNormals(),n.dispose();for(let t of e)t.dispose();return r}function mr(e){let t=[],n=new p([new T(0,0),new T(.3,0),new T(.27,.35),new T(.21,.85),new T(.23,1.22),new T(.21,1.38),new T(.09,1.46),new T(0,1.46)],16);t.push(n);let r=new x(.115,12,8);r.scale(1,1.18,1),r.translate(0,1.57,0),t.push(r);let i=new pe(.2,.42,14,1,!0);if(i.translate(0,1.47,-.02),t.push(i),e){let e=new h(.24,0);e.scale(1.1,1,.8),e.translate(0,1.15,-.27),t.push(e)}return pr(t)}function hr(){let e=[],t=new fe(.3,.9,4,8);t.rotateX(Math.PI/2),t.translate(0,1,0),e.push(t);let n=new b(.11,.17,.6,6);n.rotateX(-.7),n.translate(0,1.32,-.62),e.push(n);let r=new fe(.1,.3,3,6);r.rotateX(Math.PI/2-.4),r.translate(0,1.55,-.88),e.push(r);for(let[t,n]of[[-.17,-.45],[.17,-.45],[-.17,.45],[.17,.45]]){let r=new b(.055,.045,.85,5);r.translate(t,.42,n),e.push(r)}let i=new ge(.75,.32,.6);return i.translate(0,1.3,.05),e.push(i),pr(e)}function gr(){let e=[],t=new fe(.36,1.1,4,8);t.rotateX(Math.PI/2),t.translate(0,1.25,0),e.push(t);let n=new b(.13,.22,.85,6);n.rotateX(-.55),n.translate(0,1.7,-.78),e.push(n);let r=new fe(.12,.42,3,6);r.rotateX(Math.PI/2-.5),r.translate(0,2,-1.12),e.push(r);for(let[t,n]of[[-.2,-.55],[.2,-.55],[-.2,.55],[.2,.55]]){let r=new b(.065,.05,1.05,5);r.translate(t,.52,n),e.push(r)}let i=new p([new T(0,0),new T(.2,0),new T(.18,.55),new T(.08,.66),new T(0,.66)],7);i.translate(0,1.55,.05),e.push(i);let a=new x(.11,7,5);return a.translate(0,2.32,.05),e.push(a),pr(e)}function _r(){let e=new x(.07,6,4);return e.translate(.28,1.05,-.1),e}var Y=e=>Number.isInteger(e)?e.toFixed(1):String(e),X=`
uniform float uTime;
uniform vec3 uCameraPos;
uniform float uCorridorFactor;
uniform float uQuality;
uniform float uOpenFront;
uniform float uCloseFront;
uniform float uTurbulence;
uniform vec4 uRipple;
uniform vec3 uSunDir;
uniform vec3 uMoonDir;
uniform vec3 uLightDir;
uniform vec3 uLightColor;
uniform vec3 uSkyZenith;
uniform vec3 uSkyHorizon;
uniform vec3 uSkyGround;
uniform vec3 uSunGlow;
uniform vec3 uSunDisc;
uniform float uMoonVisibility;
uniform float uStarVisibility;
uniform vec3 uAmbientSky;
uniform vec3 uAmbientGround;
uniform vec3 uFogColor;
uniform float uFogDensity;
uniform float uCloudCover;
uniform float uStorm;
uniform vec3 uWind;
uniform sampler2D uHeightTex;
uniform vec4 uHeightBounds;
uniform sampler2D uFoamTex;
uniform sampler2D uRippleTex;
`,Z=`
#ifndef CROSSING_COMMON
#define CROSSING_COMMON
#ifndef PI
#define PI 3.141592653589793
#endif
float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
vec2 hash22(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.xx + p3.yz) * p3.zy);
}
float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 fr = fract(p);
  vec2 u = fr * fr * (3.0 - 2.0 * fr);
  return mix(mix(hash12(i), hash12(i + vec2(1.0, 0.0)), u.x),
             mix(hash12(i + vec2(0.0, 1.0)), hash12(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm3(vec2 p) {
  float a = 0.5; float s = 0.0;
  for (int i = 0; i < 3; i++) { s += a * vnoise(p); p = p * 2.03 + vec2(17.1, 9.2); a *= 0.5; }
  return s / 0.875;
}
float fbm5(vec2 p) {
  float a = 0.5; float s = 0.0;
  for (int i = 0; i < 5; i++) { s += a * vnoise(p); p = p * 2.03 + vec2(17.1, 9.2); a *= 0.5; }
  return s / 0.96875;
}
/** Cheap animated caustic pattern in [0,1]. */
float caustic(vec2 p, float t) {
  vec2 q = p;
  float c = 0.0;
  for (int i = 0; i < 2; i++) {
    q += vec2(sin(q.y * 1.7 + t * 0.9), cos(q.x * 1.3 - t * 0.7)) * 0.55;
    c += abs(sin(q.x * 2.1 + q.y * 1.4 + t));
  }
  c = 1.0 - c * 0.5;
  return pow(clamp(c, 0.0, 1.0), 4.0);
}
float luminance3(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
float hash13(vec3 p3) {
  p3 = fract(p3 * 0.1031);
  p3 += dot(p3, p3.zyx + 31.32);
  return fract((p3.x + p3.y) * p3.z);
}
float vnoise3(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  vec3 u = f * f * (3.0 - 2.0 * f);
  float a = mix(mix(hash13(i), hash13(i + vec3(1, 0, 0)), u.x), mix(hash13(i + vec3(0, 1, 0)), hash13(i + vec3(1, 1, 0)), u.x), u.y);
  float b = mix(mix(hash13(i + vec3(0, 0, 1)), hash13(i + vec3(1, 0, 1)), u.x), mix(hash13(i + vec3(0, 1, 1)), hash13(i + vec3(1, 1, 1)), u.x), u.y);
  return mix(a, b, u.z);
}
float fbm3d(vec3 p) {
  float a = 0.5; float s = 0.0;
  for (int i = 0; i < 3; i++) { s += a * vnoise3(p); p = p * 2.07 + vec3(11.3, 7.1, 3.7); a *= 0.5; }
  return s / 0.875;
}
#endif
`,vr=`
#ifndef CROSSING_SEA
#define CROSSING_SEA
const float PASSAGE_LENGTH = ${Y(I)};
const float PASSAGE_HALF_WIDTH = ${Y(36)};
const float CORRIDOR_BEND = ${Y(70)};
const float WALL_HEIGHT = ${Y(34)};
const float SHORE_RAMP = ${Y(pt)};
const float WATER_EDGE_S = ${Y(13)};
const float OPEN_BAND = ${Y(420)};
const float CLOSE_BAND = ${Y(520)};
const float RIDGE_PLATEAU = ${Y(38)};
const float RIDGE_FALLOFF = ${Y(42)};
const float PATH_MAX_DEPTH = ${Y(70)};
const float SEABED_SHAPE = ${Y(ft)};
const float END_ROUND = ${Y(6)};

float smooth01(float t) { float c = clamp(t, 0.0, 1.0); return c * c * (3.0 - 2.0 * c); }
/** s = -z */
float alongS(float z) { return -z; }
float corridorCenterX(float s) {
  float t = clamp(s / PASSAGE_LENGTH, 0.0, 1.0);
  return CORRIDOR_BEND * sin(3.141592653589793 * t);
}
/** Smooth passage floor height (mirrors passageFloorY in layout.ts exactly). */
float passageFloorY(float s) {
  if (s <= 0.0 || s >= PASSAGE_LENGTH) return 0.0;
  float base = -PATH_MAX_DEPTH * pow(sin(3.141592653589793 * s / PASSAGE_LENGTH), SEABED_SHAPE);
  float d = min(s, PASSAGE_LENGTH - s);
  return base + (1.0 * sin(s * 0.011 + 1.3) + 0.6 * sin(s * 0.027)) * smoothstep(0.0, 400.0, d);
}
float seaOpen(float s) { return smooth01((uOpenFront - s) / OPEN_BAND); }
float seaClose(float s) { return smooth01((uCloseFront - (PASSAGE_LENGTH - s)) / CLOSE_BAND); }
float shoreRamp(float s) {
  return smoothstep(WATER_EDGE_S, WATER_EDGE_S + SHORE_RAMP, s) * smoothstep(WATER_EDGE_S, WATER_EDGE_S + SHORE_RAMP, PASSAGE_LENGTH - s);
}
float corridorHalfWidth(float s) {
  if (s < 0.0 || s > PASSAGE_LENGTH) return 0.0;
  return PASSAGE_HALF_WIDTH * seaOpen(s) * (1.0 - seaClose(s));
}
float wallTopY(float s) {
  if (s < 0.0 || s > PASSAGE_LENGTH) return 0.0;
  float c = seaClose(s);
  return WALL_HEIGHT * shoreRamp(s) * seaOpen(s) * (1.0 - c * c);
}
/** lateral = abs(x - corridorCenterX(s)) */
float ridgeHeight(float s, float lateral) {
  float top = wallTopY(s);
  if (top <= 0.0) return 0.0;
  float d = lateral - corridorHalfWidth(s);
  return top * (1.0 - smoothstep(RIDGE_PLATEAU, RIDGE_PLATEAU + RIDGE_FALLOFF, d));
}
/**
 * Terrain height from the baked height map (see heightTexture.ts).
 * Outside the baked area the edge texels are reused (clamped), which keeps
 * coastlines continuous towards the horizon.
 */
float terrainHeightTex(vec2 xz) {
  vec2 uv = (xz - uHeightBounds.xy) / uHeightBounds.zw;
  return texture2D(uHeightTex, clamp(uv, vec2(0.0), vec2(1.0))).r;
}
#endif
`,yr=`
#ifndef CROSSING_SKY
#define CROSSING_SKY
vec3 skyColor(vec3 dir, float detail) {
  dir = normalize(dir);
  float h = dir.y;
  float up = clamp(h, 0.0, 1.0);
  vec3 col = mix(uSkyHorizon, uSkyZenith, pow(up, 0.5));
  // Below the horizon blend to the ground colour.
  col = mix(col, uSkyGround, smoothstep(0.0, -0.12, h));

  float sd = max(dot(dir, normalize(uSunDir)), 0.0);
  float clear = 1.0 - 0.75 * uStorm;
  // Broad horizon glow towards the sun, plus a tighter halo.
  float horizonBand = exp(-abs(h) * 6.0);
  col += uSunGlow * (pow(sd, 4.0) * 0.45 * horizonBand + pow(sd, 48.0) * 0.55) * clear;
  // Sun disc (about half a degree across, like the real sun) with a tight bright corona.
  col += uSunDisc * (smoothstep(0.999955, 0.999972, sd) * 2.5 + pow(sd, 3000.0) * 0.35) * clear * step(-0.02, h);

  if (detail > 0.5) {
    // Moon
    float md = max(dot(dir, normalize(uMoonDir)), 0.0);
    col += vec3(0.75, 0.8, 0.9) * uMoonVisibility * (smoothstep(0.99935, 0.9996, md) * 3.0 + pow(md, 300.0) * 0.25);
    // Stars
    if (uStarVisibility > 0.001 && h > 0.0) {
      vec3 sp = dir * 300.0;
      vec2 cell = floor(sp.xz / (0.35 + h * 0.65) + vec2(sp.y * 0.37));
      float rnd = hash12(cell);
      float star = smoothstep(0.9965, 1.0, rnd);
      float twinkle = 0.7 + 0.3 * sin(uTime * (1.5 + rnd * 4.0) + rnd * 40.0);
      col += vec3(0.9, 0.92, 1.0) * star * twinkle * uStarVisibility * smoothstep(0.0, 0.25, h) * 1.6;
    }
    // Clouds: thin layer projected on a plane above the camera.
    if (uCloudCover > 0.01 && h > 0.0) {
      vec2 uv = dir.xz / (h + 0.08) * 0.9 + uWind.xy * uTime * 0.004;
      float n = fbm5(uv * 1.3);
      float cover = smoothstep(1.0 - uCloudCover, 1.05 - uCloudCover * 0.45, n);
      vec3 lit = mix(uSkyHorizon * 1.05, uSunGlow * 1.2 + uSkyHorizon * 0.4, pow(sd, 3.0));
      vec3 cloudCol = mix(lit, uSkyZenith * 0.6 + uSkyHorizon * 0.25, uStorm * 0.85);
      col = mix(col, cloudCol, cover * smoothstep(0.0, 0.18, h) * 0.85);
    }
  }
  return max(col, vec3(0.0));
}
#endif
`,br=`
#ifndef CROSSING_FOG
#define CROSSING_FOG
float fogFactorExp2(float dist) {
  return 1.0 - exp(-uFogDensity * uFogDensity * dist * dist);
}
vec3 applyFog(vec3 col, vec3 worldPos) {
  float d = length(worldPos - uCameraPos);
  return mix(col, uFogColor, clamp(fogFactorExp2(d), 0.0, 1.0));
}
#endif
`,xr=`
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
`,Sr=`
#ifndef CROSSING_WALL_SHADOW_FN
#define CROSSING_WALL_SHADOW_FN
float wallShadow(vec3 p, vec3 L) {
  float s = -p.z;
  if (s <= 0.0 || s >= PASSAGE_LENGTH) return 1.0;
  float top = wallTopY(s);
  if (top <= 0.05) return 1.0;
  float hw = corridorHalfWidth(s);
  float lat = p.x - corridorCenterX(s);
  if (abs(lat) > hw + 1.0) return 1.0;
  if (L.y <= 0.0) return 0.0;
  float side = L.x >= 0.0 ? 1.0 : -1.0;
  float dx = max(side * hw - lat, 0.0);
  float t = dx / max(abs(L.x), 1e-3);
  float hAtWall = p.y + t * L.y;
  return smoothstep(top - 2.0, top + 2.0, hAtWall);
}
float corridorDepthFactor(vec3 p) {
  float s = -p.z;
  if (s <= 0.0 || s >= PASSAGE_LENGTH) return 0.0;
  float top = wallTopY(s);
  if (top <= 0.05) return 0.0;
  float hw = corridorHalfWidth(s);
  float lat = abs(p.x - corridorCenterX(s));
  if (lat > hw + 1.0) return 0.0;
  float h = max(top - p.y, 0.0);
  return clamp(h / (h + hw * 1.2 + 1.0), 0.0, 1.0);
}
float corridorAO(vec3 p) {
  return 1.0 - 0.38 * corridorDepthFactor(p);
}
vec3 corridorBounce(vec3 p) {
  float k = corridorDepthFactor(p);
  if (k <= 0.0) return vec3(0.0);
  float s = -p.z;
  float hw = corridorHalfWidth(s);
  float lat = abs(p.x - corridorCenterX(s));
  float nearWall = smoothstep(hw - 8.0, hw, lat);
  vec3 tint = vec3(0.05, 0.16, 0.18) * (0.5 + 0.5 * nearWall);
  return tint * k * (0.05 + luminance3(uLightColor) * 0.05 + luminance3(uAmbientSky) * 0.22);
}
/** Warm light reflected down into the passage from sunlit crests and sand (keeps the path readable). */
vec3 corridorFill(vec3 p) {
  float k = corridorDepthFactor(p);
  if (k <= 0.0) return vec3(0.0);
  float day = clamp(luminance3(uLightColor) * 0.35 + luminance3(uAmbientSky) * 0.4, 0.0, 1.5);
  return vec3(0.3, 0.25, 0.19) * k * day * 0.55;
}
#endif
`,Cr=`
#ifndef CROSSING_BUMP
#define CROSSING_BUMP
vec3 bumpNormal(vec3 surfPos, vec3 surfNorm, float h, float scale) {
  vec3 sx = dFdx(surfPos);
  vec3 sy = dFdy(surfPos);
  vec3 r1 = cross(sy, surfNorm);
  vec3 r2 = cross(surfNorm, sx);
  float det = dot(sx, r1);
  vec2 dh = vec2(dFdx(h), dFdy(h)) * scale;
  vec3 grad = sign(det) * (dh.x * r1 + dh.y * r2);
  return normalize(abs(det) * surfNorm - grad);
}
#endif
`,wr=`getDirectionalLightInfo( directionalLight, directLight );`;function Tr(e,t,n){let r=n.passageLighting!==!1;return e.onBeforeCompile=e=>{Object.assign(e.uniforms,t,n.uniforms??{}),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>\nvarying vec3 vCrossWorldPos;\n${X}\n${n.vertexPars??``}`).replace(`#include <begin_vertex>`,`#include <begin_vertex>\n${n.vertexTransform??``}`).replace(`#include <project_vertex>`,`#include <project_vertex>
        {
          vec4 crossWP = vec4(transformed, 1.0);
          #ifdef USE_INSTANCING
          crossWP = instanceMatrix * crossWP;
          #endif
          vCrossWorldPos = (modelMatrix * crossWP).xyz;
        }`);let i=e.fragmentShader.replace(`#include <common>`,`#include <common>
      varying vec3 vCrossWorldPos;
      ${X}
      ${Z}
      ${vr}
      ${Sr}
      ${n.fragmentPars??``}`);if(n.colorFragment&&(i=i.replace(`#include <color_fragment>`,`#include <color_fragment>\n${n.colorFragment}`)),n.roughnessFragment&&(i=i.replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>\n${n.roughnessFragment}`)),n.normalFragment&&(i=i.replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
         {
           vec3 crossWorldNormalOffset = vec3(0.0);
           ${n.normalFragment}
           normal = normalize(normal + (viewMatrix * vec4(crossWorldNormalOffset, 0.0)).xyz);
         }`)),n.emissiveFragment&&(i=i.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>\n${n.emissiveFragment}`)),r){let e=Te.lights_fragment_begin.replace(wr,`${wr}\n directLight.color *= crossingWallShadow;`);i=i.replace(`#include <lights_fragment_begin>`,`float crossingWallShadow = wallShadow(vCrossWorldPos, normalize(uLightDir));
           ${e}`).replace(`#include <lights_fragment_end>`,`#include <lights_fragment_end>
           reflectedLight.indirectDiffuse *= corridorAO(vCrossWorldPos);
           reflectedLight.indirectDiffuse += corridorBounce(vCrossWorldPos) * diffuseColor.rgb;
           reflectedLight.indirectDiffuse += corridorFill(vCrossWorldPos) * diffuseColor.rgb;`)}e.fragmentShader=i},e.customProgramCacheKey=()=>`crossing:${n.key}`,e.needsUpdate=!0,e}var Er=class{constructor(e){A(this,`points`,void 0),A(this,`cumulative`,void 0),A(this,`length`,void 0);let t=[];for(let n of e){let e=t[t.length-1];(!e||Math.hypot(e.x-n.x,e.z-n.z)>.001)&&t.push({x:n.x,z:n.z})}this.points=t,this.cumulative=new Float64Array(t.length);for(let e=1;e<t.length;e++)this.cumulative[e]=this.cumulative[e-1]+Math.hypot(t[e].x-t[e-1].x,t[e].z-t[e-1].z);this.length=this.cumulative[t.length-1]}segment(e){let t=0,n=this.points.length-2;for(;t<n;){let r=t+n+1>>1;this.cumulative[r]<=e?t=r:n=r-1}return t}sample(e,t){let n=Math.min(Math.max(e,0),this.length),r=this.segment(n),i=this.points[r],a=this.points[r+1]??i,o=this.cumulative[r+1]-this.cumulative[r]||1,s=(n-this.cumulative[r])/o;t.x=i.x+(a.x-i.x)*s,t.z=i.z+(a.z-i.z)*s;let c=Math.hypot(a.x-i.x,a.z-i.z)||1;return t.tx=(a.x-i.x)/c,t.tz=(a.z-i.z)/c,t}project(e,t){let n=1/0,r=0;for(let i=0;i<this.points.length-1;i++){let a=this.points[i],o=this.points[i+1],s=o.x-a.x,c=o.z-a.z,l=s*s+c*c||1,u=Math.min(1,Math.max(0,((e-a.x)*s+(t-a.z)*c)/l)),d=a.x+s*u,f=a.z+c*u,p=(e-d)**2+(t-f)**2;p<n&&(n=p,r=this.cumulative[i]+Math.sqrt(l)*u)}return r}},Dr=5.5,Or=class{constructor(e,t,n,r,i,a,o,s=0){A(this,`group`,new te),A(this,`meshes`,[]),A(this,`route`,void 0),A(this,`agents`,[]),A(this,`spec`,{mode:`hidden`}),A(this,`dummy`,new Me),A(this,`tmp`,{x:0,z:0,tx:0,tz:0}),A(this,`material`,void 0),A(this,`lamps`,void 0),A(this,`lampMaterial`,void 0),A(this,`lampVisibility`,0),A(this,`coverTest`,null),this.route=new Er(t),this.material=Tr(new ee({roughness:.95,metalness:0,name:`Figures`}),e,{key:`figures`});let c=dt(i),l=n.reduce((e,t)=>e+t.weight,0),u=n.map(e=>Math.max(1,Math.round(r*e.weight/l)));if(n.forEach((e,t)=>{let n=new w(e.geometry,this.material,u[t]);n.name=e.name,n.castShadow=e.castShadow,n.receiveShadow=!1,n.frustumCulled=!1,n.userData.hotspot=a,n.instanceMatrix.setUsage(Ae);let r=new S;for(let i=0;i<u[t];i++)r.setHex(e.colors[Math.floor(c()*e.colors.length)]).multiplyScalar(.85+c()*.3),n.setColorAt(i,r),this.agents.push({variant:t,slot:i,rank:c(),lateral:(c()*2-1)*(.55+.45*c()),u:0,speedK:.85+c()*.3,phase:c()*Math.PI*2,vis:0,visTarget:0,scale:e.scale[0]+c()*(e.scale[1]-e.scale[0]),scatterX:0,scatterZ:0,x:0,y:-1e3,z:0,yaw:0,moving:0,covered:!1,lamp:-1});n.instanceColor&&(n.instanceColor.needsUpdate=!0),this.meshes.push(n),this.group.add(n)}),o&&s>0){let e=this.agents.filter(e=>this.meshes[e.variant].name.startsWith(`Person`)&&c()<s);this.lampMaterial=new f({color:new S(2.4,1.3,.45),name:`Lamps`}),this.lamps=new w(o,this.lampMaterial,Math.max(1,e.length)),this.lamps.count=e.length,this.lamps.frustumCulled=!1,this.lamps.instanceMatrix.setUsage(Ae),e.forEach((e,t)=>e.lamp=t),this.group.add(this.lamps)}else this.lamps=null,this.lampMaterial=null,o?.dispose()}prepareScatter(e,t,n,r){let i=dt(r);for(let r of this.agents)for(let a=0;a<30;a++){let a=i()*Math.PI*2,o=Math.sqrt(i())*t,s=e.x+Math.cos(a)*o,c=e.z+Math.sin(a)*o;if(n(s,c)){r.scatterX=s,r.scatterZ=c;break}}}targetU(e,t){return t.mode===`flow`||t.mode===`idle`?t.tail+e.rank*(t.head-t.tail):e.u}applyFormation(e,t){this.spec=e;for(let n of this.agents)n.covered=!1,e.mode===`hidden`?(n.visTarget=0,t&&(n.vis=0)):(n.visTarget=1,t?(n.vis=1,n.u=this.targetU(n,e)):n.vis<.05&&(n.u=this.targetU(n,e)))}setLampVisibility(e){this.lampVisibility=D(e,0,1)}focus(e){let t=0,n=0,r=0,i=0;for(let e of this.agents)e.vis<.5||(n+=e.x,r+=e.y,i+=e.z,t++);return t===0?e:e.set(n/t,r/t+1,i/t)}get visibleFraction(){let e=0;for(let t of this.agents)e+=t.vis;return this.agents.length?e/this.agents.length:0}get movingFraction(){let e=0;for(let t of this.agents)e+=t.moving*t.vis;return this.agents.length?e/this.agents.length:0}sampleMoving(e,t){let n=0;for(let r=0;r<this.agents.length&&n<e.length;r+=t){let t=this.agents[r];t.vis>.5&&t.moving>.3&&e[n++].set(t.x,t.y,t.z)}return n}update(e,t,n){let r=this.spec,i=this.tmp;for(let a of this.agents){if(a.vis+=(a.visTarget-a.vis)*ze(a.visTarget>a.vis?2.5:4,e),a.vis<.004&&a.visTarget===0){a.vis=0,this.writeHidden(a);continue}let o=0,s,c,l;if(r.mode===`scatter`)s=a.scatterX+Math.sin(t*.2+a.phase)*.3,c=a.scatterZ+Math.cos(t*.17+a.phase)*.3,l=a.phase+Math.sin(t*.1+a.phase)*.6;else{if(r.mode===`flow`){let t=r.head-r.tail;if(a.u<r.tail-5||a.u>r.head+5){let t=D(a.u,r.tail,r.head)-a.u;a.u+=Math.sign(t)*Math.min(Math.abs(t),Dr*a.speedK*e),o=1}else a.u+=r.speed*a.speedK*e,o=+(r.speed>0),a.u>r.head&&(a.u-=t,a.vis=0)}else if(r.mode===`idle`){let t=this.targetU(a,r)-a.u;Math.abs(t)>.5&&(a.u+=Math.sign(t)*Math.min(Math.abs(t),Dr*a.speedK*e),o=+(Math.abs(t)>2))}this.route.sample(a.u,i);let u=r.mode===`flow`||r.mode===`idle`?r.width(a.u):0,d=a.lateral*u*.5;r.mode===`idle`&&!n&&(d+=Math.sin(t*.25+a.phase)*.35),s=i.x-i.tz*d,c=i.z+i.tx*d,l=Math.atan2(-i.tx,-i.tz),r.mode===`idle`&&r.face&&o===0&&(l=Math.atan2(-(r.face.x-s),-(r.face.z-c))+Math.sin(a.phase)*.5)}a.moving+=(o-a.moving)*ze(4,e),a.x=s,a.z=c,a.y=U(s,c),a.yaw=l,this.coverTest&&!a.covered&&a.vis>.1&&this.coverTest(s,c)&&(a.covered=!0,a.visTarget=0),this.writeAgent(a,t,n)}for(let e of this.meshes)e.instanceMatrix.needsUpdate=!0;this.lamps&&(this.lamps.visible=this.lampVisibility>.02,this.lamps.instanceMatrix.needsUpdate=!0)}writeAgent(e,t,n){let r=this.dummy,i=e.moving*(n?.3:1),a=t*7.5*e.speedK+e.phase,o=Math.abs(Math.sin(a))*.06*i,s=e.scale*(.15+.85*e.vis);r.position.set(e.x,e.y-.05+o-(1-e.vis)*.8,e.z),r.rotation.set(Math.sin(a)*.03*i+.06*i,e.yaw,Math.sin(a*.5)*.04*i,`YXZ`),r.scale.setScalar(s),r.updateMatrix(),this.meshes[e.variant].setMatrixAt(e.slot,r.matrix),this.lamps&&e.lamp>=0&&((this.lampVisibility<.02||e.vis<.5)&&r.scale.setScalar(0),r.updateMatrix(),this.lamps.setMatrixAt(e.lamp,r.matrix))}writeHidden(e){let t=this.dummy;t.position.set(0,-2e3,0),t.scale.setScalar(0),t.updateMatrix(),this.meshes[e.variant].setMatrixAt(e.slot,t.matrix),this.lamps&&e.lamp>=0&&this.lamps.setMatrixAt(e.lamp,t.matrix)}dispose(){for(let e of this.meshes)e.geometry.dispose(),e.dispose();this.material.dispose(),this.lamps&&(this.lamps.geometry.dispose(),this.lamps.dispose()),this.lampMaterial?.dispose(),this.group.removeFromParent()}},kr=[7299922,5786172,8549215,4865845,6707270,8023128,4142638,9207400,6050372,5065284,6972504],Ar=[7167566,9075560,5917759,8088152],jr=class{constructor(e){A(this,`object`,new te),A(this,`t`,void 0),A(this,`_formation`,`hidden`),A(this,`specs`,void 0),this.object.name=`Crowd`,this.t=new Or(e.shared,Dt(20),[{geometry:mr(!1),weight:.52,colors:kr,scale:[.92,1.06],castShadow:!0,name:`PersonA`},{geometry:mr(!0),weight:.28,colors:kr,scale:[.92,1.05],castShadow:!0,name:`PersonB`},{geometry:mr(!1),weight:.12,colors:kr,scale:[.58,.72],castShadow:!1,name:`PersonC`},{geometry:hr(),weight:.08,colors:Ar,scale:[.9,1.1],castShadow:!0,name:`Animal`}],e.quality.crowdCount,7001,`israelites`,_r(),.08),this.object.add(this.t.group);let t=e.getSeaState;t&&(this.t.coverTest=(e,n)=>U(e,n)<-.45&&!Jt(e,n,t(),0));let n=this.t.route,r=n.project(0,0),i=n.project(B.northShore.x,B.northShore.z),a=n.length,o=Rt();this.t.prepareScatter(B.camp,109.25,(e,t)=>o.every(n=>Math.hypot(n.x-e,n.z-t)>n.radius+.8)&&It.every(n=>Math.hypot(n.x-e,n.z-t)>2.2),7002),this.specs={camp:{mode:`scatter`,centre:B.camp,radius:115,accept:()=>!0},departing:{mode:`flow`,tail:8,head:r-25,width:()=>8,speed:2.4},shore:{mode:`idle`,tail:r-170,head:r-6,width:e=>34+120*k(r-170,r-10,e),face:{x:0,z:-400}},entering:{mode:`flow`,tail:r-120,head:r+480,width:e=>e<r?46:58,speed:3.2},crossing:{mode:`flow`,tail:r+1100,head:i-20,width:e=>e<i-10?58:70,speed:3.4},farShore:{mode:`idle`,tail:i+6,head:a,width:e=>70+40*k(i,a,e),face:{x:0,z:-1800}}}}get formation(){return this._formation}get pickables(){return this.t.meshes}get movingFraction(){return this.t.movingFraction}setFormation(e,t=!1){this._formation=e,this.t.applyFormation(e===`hidden`?{mode:`hidden`}:this.specs[e],t)}getFocus(e){return this.t.focus(e)}setNight(e){this.t.setLampVisibility(+(e>.45))}update(e){this.t.update(e.dt,e.time,e.reducedMotion)}dispose(){this.t.dispose(),this.object.removeFromParent()}};function Mr(){return{uPxScale:{value:800},uMaxPx:{value:160},uViewport:{value:new T(1280,800)},uIntensity:{value:1},uWindowS:{value:0},uCalm:{value:0}}}var Nr=`
uniform float uPxScale;
uniform float uMaxPx;
uniform vec2 uViewport;
uniform float uIntensity;
uniform float uWindowS;
uniform float uCalm;
`;function Pr(e,t,n){let r=n.shape??`mist`,i=r===`mist`?`
        // Irregular wisp: rotated, noise-eroded, thinning as it ages. Never a clean circle.
        float ang = vSeed * 6.2831 + vAge * (vSeed - 0.5) * 2.0;
        mat2 rot = mat2(cos(ang), -sin(ang), sin(ang), cos(ang));
        vec2 q = rot * c;
        q.x *= 0.75 + 0.5 * fract(vSeed * 7.3);
        float r = length(q);
        vec2 drift = vec2(vSeed * 17.1, vSeed * 9.7) + vAge * vec2(0.6, -0.9);
        float n = vnoise(q * 1.7 + drift) * 0.55 + vnoise(q * 3.9 - drift * 1.3) * 0.3 + vnoise(q * 8.3 + drift * 2.1) * 0.15;
        float edge = 1.0 - smoothstep(0.35, 1.0, r);
        float thresh = mix(0.42, 0.72, vAge);
        float a = smoothstep(thresh, thresh + 0.28, n * (0.55 + 0.45 * edge) + edge * 0.25) * edge;
        a *= 0.65 + 0.35 * vnoise(q * 14.0 + drift * 3.0);
      `:r===`drop`?`
        float r2 = dot(c, c);
        if (r2 > 1.0) discard;
        float a = pow(1.0 - r2, 1.5);
      `:`
        float r2 = dot(c, c);
        if (r2 > 1.0) discard;
        float a = smoothstep(1.0, 0.3, r2);
      `;return new _({name:n.name,uniforms:{...e,...t,...n.extraUniforms??{}},vertexShader:`
      ${X}
      ${Z}
      ${vr}
      ${Sr}
      ${Nr}
      attribute vec4 aSeed;
      varying float vAlpha;
      varying vec3 vColor;
      varying float vSeed;
      varying float vAge;
      varying vec3 vWorld;
      ${n.vertexPars??``}
      void main() {
        vec3 pos = vec3(0.0);
        float sizeM = 1.0;
        float alpha = 0.0;
        float ageOut = 0.5;
        vec3 color = vec3(1.0);
        ${n.vertexBody}
        vec4 mv = viewMatrix * vec4(pos, 1.0);
        float dist = max(-mv.z, 0.1);
        float px = sizeM * uPxScale / dist;
        // Fade particles that would be sub-pixel or huge (fill-rate).
        alpha *= smoothstep(0.6, 2.0, px) * (1.0 - smoothstep(uMaxPx * 0.75, uMaxPx * 1.6, px) * 0.6);
        // Fade mist that is right in front of the camera (avoids smearing the lens).
        alpha *= smoothstep(1.5, 8.0, dist);
        gl_PointSize = clamp(px, 0.0, uMaxPx);
        vAlpha = alpha * uIntensity;
        vColor = color;
        vSeed = aSeed.w;
        vAge = clamp(ageOut, 0.0, 1.0);
        vWorld = pos;
        gl_Position = projectionMatrix * mv;
        if (vAlpha < 0.002) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      }
    `,fragmentShader:`
      ${X}
      ${Z}
      ${br}
      varying float vAlpha;
      varying vec3 vColor;
      varying float vSeed;
      varying float vAge;
      varying vec3 vWorld;
      void main() {
        vec2 c = gl_PointCoord * 2.0 - 1.0;
        ${i}
        float alpha = vAlpha * a;
        if (alpha < 0.003) discard;
        vec3 col = applyFog(vColor, vWorld);
        gl_FragColor = vec4(col * alpha, alpha);
        ${xr}
      }
    `,transparent:!0,depthWrite:!1,depthTest:!0,premultipliedAlpha:!0,blending:n.blending??1})}function Fr(t,n){let r=new de;return r.setAttribute(`position`,new E(new Float32Array(t*3),3)),r.setAttribute(`aSeed`,new E(Ir(t,n),4)),r.boundingSphere=new e(new C,1e6),r}function Ir(e,t){let n=t>>>0||1,r=new Float32Array(e*4);for(let t=0;t<e*4;t++)n^=n<<13,n^=n>>>17,n^=n<<5,r[t]=(n>>>0)/4294967296;return r}function Lr(e,t,n){return new _({name:n.name,uniforms:{...e,...t,...n.extraUniforms??{}},vertexShader:`
      ${X}
      ${Z}
      ${vr}
      ${Sr}
      ${Nr}
      attribute vec2 corner;
      attribute vec4 aSeed;
      varying float vAlpha;
      varying vec3 vColor;
      varying vec2 vUv;
      varying vec3 vWorld;
      ${n.vertexPars??``}
      void particleAt(float T, out vec3 pos, out float widthM, out float alpha, out vec3 color, out float seq) {
        pos = vec3(0.0); widthM = 0.1; alpha = 0.0; color = vec3(1.0); seq = 0.0;
        ${n.particleFn}
      }
      void main() {
        vec3 p1; float w; float a; vec3 col; float seq1;
        particleAt(uTime, p1, w, a, col, seq1);
        vec3 p0; float w0; float a0; vec3 col0; float seq0;
        particleAt(uTime - ${n.blur.toFixed(4)}, p0, w0, a0, col0, seq0);
        if (seq0 != seq1) p0 = p1 + vec3(0.0, 0.01, 0.0);
        vec4 c1 = projectionMatrix * viewMatrix * vec4(p1, 1.0);
        vec4 c0 = projectionMatrix * viewMatrix * vec4(p0, 1.0);
        if (c0.w < 0.2) c0 = c1;
        vec2 half_ = uViewport * 0.5;
        vec2 s1 = c1.xy / max(c1.w, 0.2) * half_;
        vec2 s0 = c0.xy / max(c0.w, 0.2) * half_;
        vec2 d = s1 - s0;
        float len = length(d);
        vec2 dir = len > 1e-3 ? d / len : vec2(0.0, 1.0);
        vec2 nrm = vec2(-dir.y, dir.x);
        float wPx = w * uPxScale / max(c1.w, 0.2);
        a *= clamp(wPx, 0.0, 1.0);           // sub-pixel droplets fade instead of aliasing
        wPx = clamp(wPx, 1.0, 24.0);
        float minLen = wPx * ${(n.minAspect??1.5).toFixed(2)};
        if (len < minLen) { s0 = s1 - dir * minLen; }
        a *= clamp(minLen / max(len, minLen), 0.25, 1.0);  // long streaks spread their light
        vec2 tail = s0 - dir * wPx * 0.5;
        vec2 head = s1 + dir * wPx * 0.5;
        vec2 sp = mix(tail, head, corner.y) + nrm * corner.x * wPx * 0.5;
        vec4 c = mix(c0, c1, corner.y);
        gl_Position = vec4(sp / half_ * c.w, c.z, c.w);
        vAlpha = a * uIntensity;
        vColor = col;
        vUv = corner;
        vWorld = mix(p0, p1, corner.y);
        if (vAlpha < 0.002 || c1.w < 0.2) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      }
    `,fragmentShader:`
      ${X}
      ${Z}
      ${br}
      varying float vAlpha;
      varying vec3 vColor;
      varying vec2 vUv;
      varying vec3 vWorld;
      void main() {
        float across = 1.0 - smoothstep(0.2, 1.0, abs(vUv.x));
        float along = smoothstep(0.0, 0.55, vUv.y) * (1.0 - smoothstep(0.9, 1.0, vUv.y) * 0.4);
        float alpha = vAlpha * across * along;
        if (alpha < 0.003) discard;
        vec3 col = applyFog(vColor, vWorld);
        gl_FragColor = vec4(col * alpha, alpha);
        ${xr}
      }
    `,transparent:!0,depthWrite:!1,depthTest:!0,premultipliedAlpha:!0,blending:n.blending??1})}function Rr(n,i){let a=new t;return a.setAttribute(`position`,new r([-1,0,0,1,0,0,1,1,0,-1,1,0],3)),a.setAttribute(`corner`,new r([-1,0,1,0,1,1,-1,1],2)),a.setIndex([0,1,2,0,2,3]),a.setAttribute(`aSeed`,new he(Ir(n,i),4)),a.instanceCount=n,a.boundingSphere=new e(new C,1e6),a}var zr=`
vec3 sprayLight(vec3 pos, float bright) {
  vec3 L = normalize(uLightDir);
  vec3 V = normalize(uCameraPos - pos);
  float sunK = luminance3(uLightColor);
  float skyK = luminance3(uAmbientSky);
  float vis = wallShadow(pos, L);
  float forward = pow(max(dot(-V, L), 0.0), 6.0);
  vec3 base = vec3(0.78, 0.84, 0.87) * (skyK * 0.62 + sunK * 0.16 * vis + 0.03);
  return base * bright + uLightColor * forward * vis * 0.06;
}
/** Droplets glint when the light is behind them. */
vec3 dropletLight(vec3 pos, float bright) {
  vec3 L = normalize(uLightDir);
  vec3 V = normalize(uCameraPos - pos);
  float vis = wallShadow(pos, L);
  float glint = pow(max(dot(-V, L), 0.0), 12.0);
  return sprayLight(pos, bright) + uLightColor * glint * vis * 0.25;
}
`,Br=[2827810,3813931,2039067,4865843,3353638],Vr=12,Hr=`
  uniform vec3 uEmitters[${Vr}];
  uniform float uEmitterCount;
  uniform float uDust;
`,Ur=`
  float idx = floor(aSeed.x * uEmitterCount);
  vec3 base = uEmitters[0];
  for (int i = 1; i < ${Vr}; i++) { if (float(i) == idx) base = uEmitters[i]; }
  float life = mix(3.0, 6.0, aSeed.w);
  float age = fract(uTime / life + aSeed.z);
  float tsec = age * life;
  vec2 dir = normalize(vec2(aSeed.y - 0.5, aSeed.w - 0.5) + 0.001);
  pos = base + vec3(dir.x * (2.0 + tsec * 2.5), 0.4 + tsec * mix(0.8, 2.2, aSeed.y), dir.y * (2.0 + tsec * 2.5));
  pos.xz += uWind.xy * tsec * 2.0;
  sizeM = mix(3.0, 8.0, aSeed.y) * (0.5 + age * 1.5);
  ageOut = age;
  alpha = sin(3.14159 * age) * 0.16 * uDust * step(idx, uEmitterCount - 0.5);
  color = vec3(0.62, 0.52, 0.4) * (luminance3(uAmbientSky) * 0.7 + luminance3(uLightColor) * 0.2 + 0.03);
`,Wr=class{constructor(e){A(this,`object`,new te),A(this,`t`,void 0),A(this,`_formation`,`hidden`),A(this,`specs`,void 0),A(this,`dust`,void 0),A(this,`dustMaterial`,void 0),A(this,`pu`,Mr()),A(this,`dustU`,{uEmitters:{value:Array.from({length:Vr},()=>new C)},uEmitterCount:{value:0},uDust:{value:0}}),this.object.name=`Pursuers`,this.t=new Or(e.shared,Ot(20),[{geometry:mr(!1),weight:.62,colors:Br,scale:[.95,1.08],castShadow:!0,name:`Foot`},{geometry:gr(),weight:.38,colors:Br,scale:[.95,1.08],castShadow:!0,name:`Mounted`}],e.quality.pursuerCount,9001,`pursuers`,null),this.object.add(this.t.group);let t=e.getSeaState;this.t.coverTest=(e,n)=>{let r=R(n);if(r<=2||r>=3e3)return!1;let i=t();return Ut(r,i)>.32||Ht(r,i)<.5&&i.closeFront>0};let n=this.t.route.project(0,0);this.specs={distant:{mode:`idle`,tail:0,head:70,width:()=>60,face:{x:0,z:0}},approaching:{mode:`flow`,tail:40,head:n-140,width:()=>34,speed:6.5},atShore:{mode:`idle`,tail:n-190,head:n-12,width:()=>90,face:{x:0,z:-600}},entering:{mode:`flow`,tail:n-120,head:n+520,width:e=>60,speed:7.5},inPassage:{mode:`flow`,tail:n+500,head:n+I*.66,width:()=>60,speed:7.5}},this.dustMaterial=Pr(e.shared,this.pu,{name:`Dust`,vertexPars:Hr,vertexBody:Ur,shape:`mist`,extraUniforms:this.dustU}),this.dust=new re(Fr(Math.round(1400*e.quality.particleScale)+100,4242),this.dustMaterial),this.dust.frustumCulled=!1,this.dust.renderOrder=33,this.dust.name=`Dust`,this.object.add(this.dust)}get formation(){return this._formation}get pickables(){return this.t.meshes}get visibleFraction(){return this.t.visibleFraction}get movingFraction(){return this.t.movingFraction}setFormation(e,t=!1){this._formation=e,this.t.applyFormation(e===`hidden`?{mode:`hidden`}:this.specs[e],t)}getFocus(e){return this.t.focus(e)}setViewport(e,t,n=1280,r=800){this.pu.uPxScale.value=e,this.pu.uMaxPx.value=t,this.pu.uViewport.value.set(n,r)}update(e){this.t.update(e.dt,e.time,e.reducedMotion);let t=this.t.sampleMoving(this.dustU.uEmitters.value,Math.max(1,Math.floor(this.t.meshes.reduce((e,t)=>e+t.count,0)/Vr)));this.dustU.uEmitterCount.value=t;let n=this._formation===`approaching`||this._formation===`atShore`||this._formation===`entering`||this._formation===`distant`,r=t>0&&n?Math.min(1,this.t.movingFraction*2.5+.15):0;this.dustU.uDust.value+=(r-this.dustU.uDust.value)*Math.min(1,e.dt*1.5),this.dust.visible=this.dustU.uDust.value>.01}dispose(){this.t.dispose(),this.dust.geometry.dispose(),this.dustMaterial.dispose(),this.object.removeFromParent()}},Gr=`
float windowS(float seed, float win, out float edge) {
  float f = fract(seed - uWindowS / win);
  edge = 1.0 - smoothstep(0.36, 0.5, abs(f - 0.5));
  return uWindowS + (f - 0.5) * win;
}
/** Where along the crest a burst of spray is happening right now (0..1). Bursts come and go. */
float jetActivity(float s, float side, float T) {
  float a = vnoise(vec2(s * 0.045 + side * 17.0, T * 0.45));
  float b = vnoise(vec2(s * 0.13 + side * 5.0, T * 1.3));
  return smoothstep(0.45, 0.85, a * 0.7 + b * 0.3);
}
`+zr,Kr=`
  float edge;
  float s = windowS(aSeed.x, 1100.0, edge);
  float side = aSeed.y < 0.5 ? -1.0 : 1.0;
  float life = mix(4.0, 8.0, aSeed.w);
  float tt = uTime * (1.0 - 0.6 * uCalm) / life + aSeed.z;
  float age = fract(tt);
  float cycle = floor(tt);
  float r1 = hash12(vec2(aSeed.x * 91.7, cycle));
  float r2 = hash12(vec2(aSeed.z * 53.3, cycle + 7.0));
  s += (r1 - 0.5) * 10.0;
  float o = seaOpen(s);
  float cl = seaClose(s);
  float top = wallTopY(s);
  float hw = corridorHalfWidth(s);
  float tsec = age * life;
  vec2 wind = uWind.xy * (2.0 + 9.0 * uWind.z);
  vec3 p0 = vec3(corridorCenterX(s) + side * (hw + r2 * 6.0 - 2.0), top + 1.0, -s);
  pos = p0 + vec3(-side * (0.6 + r2 * 2.5), 1.2 + r1 * 2.6, (r2 - 0.5) * 1.5) * tsec + vec3(wind.x, 0.0, wind.y) * tsec * 0.8;
  pos.y -= 0.12 * tsec * tsec;
  sizeM = mix(3.0, 9.0, r2) * (0.6 + age * 1.6);
  ageOut = age;
  float jet = 0.35 + 0.65 * jetActivity(s, side, uTime);
  alpha = smoothstep(0.0, 0.18, age) * (1.0 - smoothstep(0.55, 1.0, age)) * 0.075 * jet * o * (1.0 - cl) * smoothstep(2.0, 12.0, top) * edge;
  color = sprayLight(pos, 0.95);
`,qr=`
  float edge;
  float s = windowS(aSeed.x, 900.0, edge);
  float side = aSeed.y < 0.5 ? -1.0 : 1.0;
  float life = mix(9.0, 16.0, aSeed.w);
  float tt = uTime * (1.0 - 0.5 * uCalm) / life + aSeed.z;
  float age = fract(tt);
  float cycle = floor(tt);
  float r1 = hash12(vec2(aSeed.x * 17.3, cycle));
  float r2 = hash12(vec2(aSeed.z * 29.1, cycle + 11.0));
  float o = seaOpen(s);
  float cl = seaClose(s);
  float hw = corridorHalfWidth(s);
  float floorY = passageFloorY(s);
  float tsec = age * life;
  float lateral = r1 < 0.8 ? hw - 1.5 - r2 * 8.0 : (r2 - 0.5) * 2.0 * hw;
  pos = vec3(corridorCenterX(s) + side * lateral, floorY + 1.2 + r2 * 5.0 + tsec * 0.3, -s + (uWind.y * 0.8 - 0.4) * tsec);
  sizeM = mix(6.0, 15.0, r2);
  ageOut = age * 0.7;
  alpha = sin(3.14159 * age) * 0.09 * o * (1.0 - cl) * edge * smoothstep(3.0, 15.0, wallTopY(s));
  color = sprayLight(pos, 0.9);
`,Jr=`
  float side = aSeed.y < 0.5 ? -1.0 : 1.0;
  float life = mix(2.5, 5.0, aSeed.w);
  float tt = uTime / life + aSeed.z;
  float age = fract(tt);
  float cycle = floor(tt);
  float r1 = hash12(vec2(aSeed.x * 13.7, cycle));
  float r2 = hash12(vec2(aSeed.w * 41.3, cycle + 5.0));
  float s = uOpenFront - OPEN_BAND * (0.05 + 0.85 * r1);
  float o = seaOpen(s);
  float front = smoothstep(0.02, 0.25, o) * (1.0 - smoothstep(0.55, 0.95, o)) * step(0.0, s) * step(s, PASSAGE_LENGTH);
  float hw = corridorHalfWidth(s);
  float tsec = age * life;
  vec3 p0 = vec3(corridorCenterX(s) + side * (hw + r2 * 6.0), max(wallTopY(s), 0.0) + 1.0, -s);
  pos = p0 + vec3(side * mix(-3.0, 4.0, r2), mix(4.0, 12.0, r1 * r2 + 0.2), (r1 - 0.5) * 4.0) * tsec;
  pos.y -= 0.6 * tsec * tsec;
  sizeM = mix(5.0, 16.0, r2) * (0.6 + age * 1.5);
  ageOut = age;
  alpha = smoothstep(0.0, 0.15, age) * (1.0 - smoothstep(0.5, 1.0, age)) * 0.12 * front;
  color = sprayLight(pos, 1.0);
`,Yr=`
  float life = mix(3.0, 6.0, aSeed.w);
  float tt = uTime / life + aSeed.z;
  float age = fract(tt);
  float cycle = floor(tt);
  float r1 = hash12(vec2(aSeed.x * 19.7, cycle));
  float r2 = hash12(vec2(aSeed.w * 23.3, cycle + 2.0));
  float r3 = hash12(vec2(aSeed.y * 31.1, cycle + 5.0));
  float s = PASSAGE_LENGTH - uCloseFront + CLOSE_BAND * (r1 - 0.35);
  float cl = seaClose(s);
  float surge = sin(3.14159 * cl) * step(0.0, s) * step(s, PASSAGE_LENGTH) * shoreRamp(s);
  float tsec = age * life;
  float lateral = (r2 * 2.0 - 1.0) * PASSAGE_HALF_WIDTH * 1.3;
  vec3 p0 = vec3(corridorCenterX(s) + lateral, wallTopY(s) * (0.35 + 0.5 * r3), -s);
  pos = p0 + vec3((r3 - 0.5) * 10.0, mix(4.0, 18.0, pow(r1 * r2, 0.6)), (r2 - 0.5) * 8.0) * tsec;
  pos.y -= 0.8 * tsec * tsec;
  sizeM = mix(8.0, 22.0, r3) * (0.6 + age * 1.4);
  ageOut = age;
  alpha = smoothstep(0.0, 0.12, age) * (1.0 - smoothstep(0.5, 1.0, age)) * 0.13 * surge;
  color = sprayLight(pos, 1.05);
`,Xr=`
  float edge;
  float s = windowS(aSeed.x, 700.0, edge);
  float side = aSeed.y < 0.5 ? -1.0 : 1.0;
  float life = mix(1.3, 2.8, aSeed.w);
  float tt = T * (1.0 - 0.6 * uCalm) / life + aSeed.z;
  float age = fract(tt);
  seq = floor(tt);
  float r1 = hash12(vec2(aSeed.x * 91.7, seq));
  float r2 = hash12(vec2(aSeed.z * 53.3, seq + 7.0));
  float r3 = hash12(vec2(aSeed.w * 11.1, seq + 3.0));
  s += (r1 - 0.5) * 4.0;
  float o = seaOpen(s);
  float cl = seaClose(s);
  float top = wallTopY(s);
  float hw = corridorHalfWidth(s);
  float jet = jetActivity(s, side, T - age * life);
  float tsec = age * life;
  vec2 wind = uWind.xy * (2.0 + 8.0 * uWind.z);
  vec3 p0 = vec3(corridorCenterX(s) + side * (hw + r2 * 3.0 - 0.5), top + 0.5, -s);
  float up = mix(3.0, 15.0, r1 * r1) * (0.5 + 0.7 * jet);
  vec3 v0 = vec3(-side * mix(-1.5, 6.0, r3), up, (r2 - 0.5) * 3.0);
  pos = p0 + v0 * tsec + vec3(wind.x, 0.0, wind.y) * tsec * 0.5;
  pos.y -= 0.5 * 9.81 * tsec * tsec;
  pos.y = max(pos.y, passageFloorY(s));
  widthM = mix(0.05, 0.16, r2);
  alpha = 0.55 * jet * o * (1.0 - cl) * smoothstep(3.0, 12.0, top) * edge * smoothstep(0.0, 0.05, age) * (1.0 - smoothstep(0.75, 1.0, age));
  color = dropletLight(pos, 1.1);
`,Zr=`
  float edge;
  float s = windowS(aSeed.x, 600.0, edge);
  float side = aSeed.y < 0.5 ? -1.0 : 1.0;
  float life = mix(2.4, 4.2, aSeed.w);
  float tt = T * (1.0 - 0.6 * uCalm) / life + aSeed.z;
  float age = fract(tt);
  seq = floor(tt);
  float r1 = hash12(vec2(aSeed.x * 33.1, seq));
  float r2 = hash12(vec2(aSeed.w * 71.9, seq + 3.0));
  s += (r1 - 0.5) * 3.0;
  float o = seaOpen(s);
  float cl = seaClose(s);
  float top = wallTopY(s);
  float floorY = passageFloorY(s);
  float hw = corridorHalfWidth(s);
  float tsec = age * life;
  float y = top - r1 * 8.0 - 0.5 * 9.81 * 0.85 * tsec * tsec;
  float drift = mix(0.6, 2.6, r2) * tsec;
  pos = vec3(corridorCenterX(s) + side * (hw - 1.6 - drift), y, -s);
  widthM = mix(0.06, 0.2, r2);
  alpha = 0.4 * o * (1.0 - cl) * step(floorY + 0.3, y) * smoothstep(0.0, 0.06, age) * edge * smoothstep(3.0, 12.0, top);
  color = dropletLight(pos, 1.05);
`,Qr=`
  float side = aSeed.y < 0.5 ? -1.0 : 1.0;
  float life = mix(1.5, 3.2, aSeed.w);
  float tt = T / life + aSeed.z;
  float age = fract(tt);
  seq = floor(tt);
  float r1 = hash12(vec2(aSeed.x * 13.7, seq));
  float r2 = hash12(vec2(aSeed.w * 41.3, seq + 5.0));
  float r3 = hash12(vec2(aSeed.y * 7.7, seq + 9.0));
  float s = (uOpenFront - (T - uTime) * 0.0) - OPEN_BAND * (0.05 + 0.85 * r1);
  float o = seaOpen(s);
  float front = smoothstep(0.02, 0.25, o) * (1.0 - smoothstep(0.55, 0.95, o)) * step(0.0, s) * step(s, PASSAGE_LENGTH);
  float hw = corridorHalfWidth(s);
  float tsec = age * life;
  vec3 p0 = vec3(corridorCenterX(s) + side * (hw + r2 * 5.0), max(wallTopY(s), 0.0) + 0.5, -s);
  vec3 v0 = vec3(side * mix(-8.0, 10.0, r3), mix(8.0, 30.0, r1 * r2 + 0.15), (r1 - 0.5) * 8.0);
  pos = p0 + v0 * tsec;
  pos.y -= 0.5 * 9.81 * tsec * tsec;
  widthM = mix(0.08, 0.22, r3);
  alpha = 0.6 * front * smoothstep(0.0, 0.05, age) * (1.0 - smoothstep(0.75, 1.0, age));
  color = dropletLight(pos, 1.1);
`,$r=`
  float life = mix(1.8, 3.6, aSeed.w);
  float tt = T / life + aSeed.z;
  float age = fract(tt);
  seq = floor(tt);
  float r1 = hash12(vec2(aSeed.x * 19.7, seq));
  float r2 = hash12(vec2(aSeed.w * 23.3, seq + 2.0));
  float r3 = hash12(vec2(aSeed.y * 31.1, seq + 5.0));
  float s = PASSAGE_LENGTH - uCloseFront + CLOSE_BAND * (r1 - 0.35);
  float cl = seaClose(s);
  float surge = sin(3.14159 * cl) * step(0.0, s) * step(s, PASSAGE_LENGTH) * shoreRamp(s);
  float tsec = age * life;
  vec3 p0 = vec3(corridorCenterX(s) + (r2 * 2.0 - 1.0) * PASSAGE_HALF_WIDTH * 1.2, wallTopY(s) * (0.3 + 0.6 * r3), -s);
  vec3 v0 = vec3((r3 - 0.5) * 22.0, mix(6.0, 32.0, pow(r1 * r2, 0.5)), (r2 - 0.5) * 16.0);
  pos = p0 + v0 * tsec;
  pos.y -= 0.5 * 9.81 * tsec * tsec;
  widthM = mix(0.1, 0.3, r3);
  alpha = 0.55 * surge * smoothstep(0.0, 0.05, age) * (1.0 - smoothstep(0.75, 1.0, age));
  color = dropletLight(pos, 1.1);
`,ei=`
  uniform float uRain;
`,ti=`
  float W = 70.0;
  float H = 45.0;
  float fx = fract(aSeed.x - uCameraPos.x / W) - 0.5;
  float fz = fract(aSeed.z - uCameraPos.z / W) - 0.5;
  float ft = aSeed.y - T * 15.0 / H;
  float fall = fract(ft);
  seq = floor(ft);
  pos = vec3(uCameraPos.x + fx * W, uCameraPos.y - H * 0.35 + fall * H, uCameraPos.z + fz * W);
  pos.xz += uWind.xy * (fall - 0.5) * 7.0;
  widthM = 0.025;
  alpha = 0.32 * uRain * step(aSeed.w, uRain * 1.2 + 0.1) * smoothstep(0.0, 0.08, fall) * (1.0 - smoothstep(0.92, 1.0, fall));
  color = vec3(0.62, 0.66, 0.72) * (luminance3(uAmbientSky) * 0.9 + 0.08);
`,ni=`
  uniform float uSwarm;
  uniform vec3 uSwarmCenter;
`,ri=`
  float t = uTime * (1.0 - 0.6 * uCalm);
  float a = aSeed.x * 6.2831 + t * (0.08 + aSeed.w * 0.12);
  float r = 40.0 + aSeed.y * 220.0;
  vec3 off = vec3(cos(a) * r, 8.0 + aSeed.z * 45.0 + sin(t * 0.7 + aSeed.x * 20.0) * 6.0, sin(a) * r * 0.6);
  off.xz += vec2(vnoise(vec2(aSeed.x * 9.0, t * 0.3)), vnoise(vec2(aSeed.y * 9.0, t * 0.3))) * 40.0 - 20.0;
  pos = uSwarmCenter + off;
  sizeM = 1.1;
  alpha = 0.85 * uSwarm * step(aSeed.w, uSwarm * 1.1);
  color = vec3(0.05, 0.045, 0.03);
`,ii=`
  uniform vec3 uFires[4];
  uniform float uNight;
`,ai=`
  int idx = int(floor(aSeed.x * 3.999));
  vec3 base = uFires[0];
  if (idx == 1) base = uFires[1];
  if (idx == 2) base = uFires[2];
  if (idx == 3) base = uFires[3];
  float life = mix(1.5, 3.5, aSeed.w);
  float age = fract(uTime / life + aSeed.z);
  float tsec = age * life;
  pos = base + vec3((aSeed.y - 0.5) * 0.8, 0.5 + tsec * mix(1.2, 2.8, aSeed.y), (aSeed.w - 0.5) * 0.8);
  pos.xz += vec2(sin(tsec * 3.0 + aSeed.x * 30.0), cos(tsec * 2.3 + aSeed.y * 20.0)) * 0.35 * tsec + uWind.xy * tsec * 0.8;
  sizeM = 0.12;
  alpha = (1.0 - age) * uNight * 0.9;
  color = vec3(1.6, 0.55, 0.12);
`,oi=class{constructor(e){A(this,`object`,new te),A(this,`pu`,Mr()),A(this,`systems`,[]),A(this,`getSeaState`,void 0),A(this,`quality`,void 0),A(this,`rainU`,{uRain:{value:0}}),A(this,`swarmU`,{uSwarm:{value:0},uSwarmCenter:{value:new C(-700,40,1900)}}),A(this,`emberU`,{uFires:{value:It.map(e=>new C(e.x,U(e.x,e.z),e.z))},uNight:{value:0}}),A(this,`campCentre`,new C(B.camp.x,0,B.camp.z)),A(this,`bufferHeight`,800),A(this,`rain`,{cur:0,target:0,rate:1}),A(this,`swarm`,{cur:0,target:0,rate:1}),A(this,`strike`,void 0),this.object.name=`Effects`,this.getSeaState=e.getSeaState,this.quality=e.quality;let t=e.shared;this.addPoints(t,`CrestMist`,4200,11,Gr,Kr,`mist`,`walls`),this.addPoints(t,`BaseMist`,900,13,Gr,qr,`mist`,`walls`),this.addPoints(t,`FrontMist`,2600,14,Gr,Jr,`mist`,`opening`),this.addPoints(t,`CloseMist`,3200,15,Gr,Yr,`mist`,`closing`),this.addStreaks(t,`CrestJets`,16e3,21,Gr,Xr,.045,`walls`),this.addStreaks(t,`FaceStreaks`,9e3,22,Gr,Zr,.05,`walls`),this.addStreaks(t,`FrontJets`,9e3,23,Gr,Qr,.04,`opening`),this.addStreaks(t,`CloseJets`,12e3,24,Gr,$r,.04,`closing`),this.addStreaks(t,`Rain`,7e3,25,ei,ti,.035,`rain`,this.rainU),this.addPoints(t,`Swarm`,5e3,17,ni,ri,`speck`,`swarm`,this.swarmU),this.addPoints(t,`Embers`,220,18,ii,ai,`drop`,`embers`,this.emberU,2);let n={uAge:{value:10}},r=e=>new _({name:e,uniforms:{...t,...n},vertexShader:`
        varying vec2 vUv;
        varying vec3 vWorld;
        void main() {
          vUv = uv;
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorld = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        ${X}
        ${Z}
        ${br}
        uniform float uAge;
        varying vec2 vUv;
        varying vec3 vWorld;
        void main() {
          vec2 p = vUv * 2.0 - 1.0;
          float r = length(p);
          float radius = clamp(uAge / 3.0, 0.0, 1.0);
          float ring = exp(-pow((r - radius) * 14.0, 2.0)) * (1.0 - radius);
          float core = exp(-r * r * 30.0) * exp(-uAge * 1.5);
          float a = clamp(ring * 0.8 + core, 0.0, 1.0);
          if (a < 0.003) discard;
          vec3 col = vec3(1.0, 0.95, 0.85) * a * 2.2;
          gl_FragColor = vec4(col, a);
          ${xr}
        }
      `,transparent:!0,depthWrite:!1,blending:2}),i=r(`StrikeRing`),a=new l(new c(240,240),i);a.rotation.x=-Math.PI/2,a.renderOrder=45,a.visible=!1,a.frustumCulled=!1;let o=r(`StrikeGlow`),s=new l(new c(30,30),o);s.renderOrder=46,s.visible=!1,s.frustumCulled=!1,this.object.add(a,s),this.strike={mesh:a,glow:s,uniforms:n,age:10},this.applyQuality()}addPoints(e,t,n,r,i,a,o,s,c,l){let u=Pr(e,this.pu,{name:t,vertexPars:i,vertexBody:a,shape:o,extraUniforms:c,blending:l}),d=new re(Fr(n,r*7919),u);d.name=t,d.frustumCulled=!1,d.renderOrder=30+this.systems.length,this.object.add(d),this.systems.push({object:d,material:u,maxCount:n,when:s})}addStreaks(e,t,n,r,i,a,o,s,c){let u=Lr(e,this.pu,{name:t,vertexPars:i,particleFn:a,blur:o,extraUniforms:c}),d=new l(Rr(n,r*7919),u);d.name=t,d.frustumCulled=!1,d.renderOrder=30+this.systems.length,this.object.add(d),this.systems.push({object:d,material:u,maxCount:n,when:s})}applyQuality(){for(let e of this.systems){let n=Math.max(32,Math.round(e.maxCount*this.quality.particleScale)),r=e.object.geometry;r instanceof t?r.instanceCount=n:r.setDrawRange(0,n)}}setViewport(e,t,n=256,r=e*1.6){this.bufferHeight=e,this.pu.uPxScale.value=e/(2*Math.tan(t*Math.PI/360)),this.pu.uMaxPx.value=Math.min(n,Math.max(64,e*.3)),this.pu.uViewport.value.set(r,e)}setRain(e,t=3){this.rain.target=O(e),this.rain.rate=1/Math.max(.05,t)}setSwarm(e,t=3){this.swarm.target=O(e),this.swarm.rate=1/Math.max(.05,t)}get rainAmount(){return this.rain.cur}get swarmAmount(){return this.swarm.cur}setNight(e){this.emberU.uNight.value=O(e)}burstStrike(e,t){let n=Math.max(.15,U(e,t)+.15);this.strike.mesh.position.set(e,.2,t-60),this.strike.glow.position.set(e,n+1.5,t),this.strike.age=0}update(e){let t=this.getSeaState(),n=-e.camera.position.z;this.pu.uWindowS.value=D(n,0,I),this.pu.uCalm.value=+!!e.reducedMotion,this.pu.uPxScale.value=this.bufferHeight/(2*Math.tan(e.camera.fov*Math.PI/360));let r=t.openFront>1&&t.closeFront<Bt-1,i=t.openFront>0&&t.openFront<zt-1&&t.closeFront<=0,a=t.closeFront>0&&t.closeFront<Bt,o=t=>{let n=t.target-t.cur;t.cur+=Math.sign(n)*Math.min(Math.abs(n),t.rate*Math.max(e.dt,e.realDt*.5))};o(this.rain),o(this.swarm),this.rainU.uRain.value=this.rain.cur,this.swarmU.uSwarm.value=this.swarm.cur;for(let t of this.systems){let n;switch(t.when){case`walls`:n=r;break;case`opening`:n=i;break;case`closing`:n=a;break;case`rain`:n=this.rain.cur>.001;break;case`swarm`:n=this.swarm.cur>.001;break;case`embers`:n=this.emberU.uNight.value>.02&&e.camera.position.distanceTo(this.campCentre)<700}t.object.visible=n}this.strike.age<6?(this.strike.age+=e.dt,this.strike.uniforms.uAge.value=this.strike.age,this.strike.mesh.visible=!0,this.strike.glow.visible=this.strike.age<2.5,this.strike.glow.quaternion.copy(e.camera.quaternion)):(this.strike.mesh.visible=!1,this.strike.glow.visible=!1)}setQuality(e){this.quality=e,this.applyQuality()}dispose(){for(let e of this.systems)e.object.geometry.dispose(),e.material.dispose();this.strike.mesh.geometry.dispose(),this.strike.mesh.material.dispose(),this.strike.glow.geometry.dispose(),this.strike.glow.material.dispose(),this.object.removeFromParent()}};function si(e,t=new Set){let n=new Set;e.traverse(e=>{let r=e;r.geometry&&!n.has(r.geometry)&&!t.has(r.geometry)&&(n.add(r.geometry),r.geometry.dispose());let i=r.material;if(i)for(let e of Array.isArray(i)?i:[i])ci(e,n,t);e.isInstancedMesh&&e.dispose()}),e.removeFromParent()}function ci(e,t=new Set,n=new Set){if(t.has(e)||n.has(e))return;t.add(e);for(let r of Object.values(e))r instanceof De&&!t.has(r)&&!n.has(r)&&!r.userData.shared&&(t.add(r),r.dispose());let r=e.uniforms;if(r)for(let e of Object.values(r)){let r=e.value;r instanceof De&&!t.has(r)&&!n.has(r)&&!r.userData.shared&&(t.add(r),r.dispose())}e.dispose()}function Q(e,t){let n=t instanceof S?t:new S(t),r=e.getAttribute(`position`).count,i=new Float32Array(r*3);for(let e=0;e<r;e++)i[e*3]=n.r,i[e*3+1]=n.g,i[e*3+2]=n.b;return e.setAttribute(`color`,new E(i,3)),e}function li(e){let t=e.map(e=>e.index?e.toNonIndexed():e);for(let e of t)for(let t of Object.keys(e.attributes))t!==`position`&&t!==`normal`&&t!==`color`&&e.deleteAttribute(t);let n=se(t,!1);if(!n)throw Error(`mergeGeometries failed`);for(let t of e)t.dispose();for(let e of t)e.dispose();return n}function ui(e){let t=new h(1,1),n=t.getAttribute(`position`);for(let t=0;t<n.count;t++){let r=n.getX(t),i=n.getY(t),a=n.getZ(t),o=.72+.5*F(r*1.7+e,a*1.7+i*1.3,3,e);n.setXYZ(t,r*o,Math.max(i*o*.62,-.25),a*o*(.85+.2*Math.sin(e)))}let r=t.index?t.toNonIndexed():t;return r!==t&&t.dispose(),r.computeVertexNormals(),r}function di(){let e=dt(77),t=[];for(let n=0;n<5;n++){let n=new h(.35+e()*.25,0);n.scale(1,.75,1),n.translate((e()-.5)*.7,.25+e()*.25,(e()-.5)*.7),Q(n,new S().setHSL(.17+e()*.05,.25,.28+e()*.08)),t.push(n)}let n=li(t);return n.computeVertexNormals(),n}function fi(){let e=[],t=new S(7231040),n=new C(0,0,0);for(let r=0;r<7;r++){let i=r/7,a=(r+1)/7,o=new C(Math.sin(a*1.2)*.9,a*9,0),c=n.distanceTo(o),l=new b(.22-a*.08,.26-i*.08,c*1.02,7,1,!0),u=o.clone().sub(n).normalize();l.applyQuaternion(new s().setFromUnitVectors(new C(0,1,0),u)),l.translate((n.x+o.x)/2,(n.y+o.y)/2,(n.z+o.z)/2),Q(l,t.clone().multiplyScalar(.85+r%2*.15)),e.push(l),n=o}let i=n.clone();for(let t=0;t<11;t++){let n=t/11*Math.PI*2+t%2*.2,a=.35+t%3*.15,o=3.6+t%3*.4,s=[],c=[],l=new S().setHSL(.22+t%4*.012,.45,.22+t%3*.03);for(let e=0;e<6;e++){let t=e/6,n=(e+1)/6,r=Math.sin(Math.PI*Math.min(1,t*1.1+.08))*.55,i=Math.sin(Math.PI*Math.min(1,n*1.1+.08))*.55,u=a*t*o-t*t*o*.9,d=a*n*o-n*n*o*.9,f=t*o,p=n*o;s.push(f,u,-r,p,d,-i,p,d,i,f,u,-r,p,d,i,f,u,r);for(let e=0;e<6;e++)c.push(l.r,l.g,l.b)}let u=new de;u.setAttribute(`position`,new r(s,3)),u.setAttribute(`color`,new r(c,3)),u.computeVertexNormals(),u.rotateY(n),u.translate(i.x,i.y,i.z),e.push(u)}let a=li(e);return a.computeVertexNormals(),a}function pi(){let e=[],t=new b(.14,.24,3.4,6);t.translate(0,1.7,0),Q(t,5916214),e.push(t);for(let[t,n]of[[.9,.2],[-.8,.5],[.1,-.9]]){let r=new b(.06,.1,1.9,5);r.rotateZ(-Math.atan2(t,1.4)),r.rotateX(Math.atan2(n,1.4)),r.translate(t*.5,3.9,n*.5),Q(r,5916214),e.push(r)}let n=dt(31);for(let t=0;t<6;t++){let t=new h(1.3+n()*.6,0);t.scale(1.4,.32,1.4),t.translate((n()-.5)*2.6,4.7+n()*.4,(n()-.5)*2.6),Q(t,new S().setHSL(.2+n()*.04,.32,.22+n()*.05)),e.push(t)}let r=li(e);return r.computeVertexNormals(),r}function mi(){let e=[],t=2.5,n=1.8,i=(e,r)=>{let i=1-(Math.abs(r)/n)**.9,a=.22*Math.sin(Math.abs(e)/t*Math.PI*2)**2;return Math.max(.15,2.1*i-a*i+.15)},a=[],o=(e,t,n,r)=>a.push(...e,...t,...n,...e,...n,...r);for(let e=0;e<8;e++)for(let r=0;r<8;r++){let a=-2.5+2*t*e/8,s=-2.5+2*t*(e+1)/8,c=-1.8+2*n*r/8,l=-1.8+2*n*(r+1)/8;o([a,i(a,c),c],[a,i(a,l),l],[s,i(s,l),l],[s,i(s,c),c])}for(let e=0;e<8;e++){let r=-1.8+2*n*e/8,a=-1.8+2*n*(e+1)/8;o([t,0,r],[t,i(t,r),r],[t,i(t,a),a],[t,0,a])}for(let e of[-1,1])for(let r=0;r<8;r++){let a=-2.5+2*t*r/8,s=-2.5+2*t*(r+1)/8,c=e*n;e>0?o([a,0,c],[s,0,c],[s,i(s,c),c],[a,i(a,c),c]):o([a,0,c],[a,i(a,c),c],[s,i(s,c),c],[s,0,c])}let s=new de;s.setAttribute(`position`,new r(a,3)),s.computeVertexNormals(),e.push(s);for(let n of[-2.375,0,t*.95]){let t=new b(.04,.05,2.4,5);t.translate(n,2.4/2,0),e.push(t)}let c=e.map(e=>e.index?e.toNonIndexed():e);for(let e of c)for(let t of Object.keys(e.attributes))t!==`position`&&t!==`normal`&&e.deleteAttribute(t);let l=se(c,!1);if(!l)throw Error(`tent merge failed`);return l.computeVertexNormals(),l}function hi(){let e=[],t=new p([new T(0,0),new T(.16,.02),new T(.24,.2),new T(.2,.42),new T(.09,.5),new T(.11,.56)],8);Q(t,10116156),e.push(t);let n=new h(.32,0);n.scale(1.3,.7,1),n.translate(.55,.2,.15),Q(n,9141090),e.push(n);let r=new b(.22,.17,.22,8);r.translate(-.45,.11,.25),Q(r,10979925),e.push(r);let i=li(e);return i.computeVertexNormals(),i}function gi(){let e=[];for(let t=0;t<9;t++){let n=t/9*Math.PI*2,r=ui(t+3);r.scale(.22,.2,.22),r.translate(Math.cos(n)*.8,.08,Math.sin(n)*.8),Q(r,7169372),e.push(r)}for(let t=0;t<3;t++){let n=new b(.07,.08,1,5);n.rotateZ(Math.PI/2-.25),n.rotateY(t/3*Math.PI*2),n.translate(0,.18,0),Q(n,4009506),e.push(n)}let t=li(e);return t.computeVertexNormals(),t}function _i(){let e=dt(2024),t=[],n=e=>new S(13151620).multiplyScalar(.8+e*.25),r=(r,i,a,o,s,c=0,l=0,u=0,d=e())=>{let f=new ge(r,i,a,1,1,1);if(l>0){let e=f.getAttribute(`position`);for(let t=0;t<e.count;t++)e.getY(t)>0&&(e.setX(t,e.getX(t)*(1-l)),e.setZ(t,e.getZ(t)*(1-l*.5)))}f.translate(0,i/2+c,0),f.rotateY(u),f.translate(o,0,s),Q(f,n(d)),t.push(f)};r(520,10,360,0,0,-4,0,0,.3),r(560,18,8,0,190,0,0,0,.2),r(8,18,380,-275,0,0,0,0,.2),r(8,18,380,275,0,0,0,0,.2),r(46,52,16,-30,-40,6,.18,0,.6),r(46,52,16,30,-40,6,.18,0,.6),r(14,30,12,0,-40,6,0,0,.5);for(let e=0;e<6;e++)for(let r of[-1,1]){let i=new b(2.2,2.5,26,8);i.translate(r*18,19,-70-e*12),Q(i,n(.5)),t.push(i)}r(70,34,60,0,-150,6,.04,0,.45),r(36,30,12,-170,40,6,.15,.2,.5),r(36,30,12,-130,40,6,.15,.2,.5),r(90,22,70,150,-60,6,.02,-.1,.4),r(60,16,50,160,60,6,0,.15,.35);for(let[e,r]of[[-12,6],[12,6],[-200,-100]]){let i=new b(.6,2.4,34,4);i.rotateY(Math.PI/4),i.translate(e,23,r),Q(i,n(.7)),t.push(i)}for(let t=0;t<140;t++){let t=(e()-.5)*500,n=(e()-.5)*340;if(Math.abs(t)<70&&n<20&&n>-200)continue;let i=8+e()*14,a=8+e()*14;r(i,5+e()*9,a,t,n,6,0,e()*.3,.2+e()*.3)}let i=li(t);return i.computeVertexNormals(),i}var vi=[3814189,5982778,9073752,11771775,7232072,3090982,10126438].map(e=>new S(e)),yi=class{constructor(e,t){A(this,`shared`,void 0),A(this,`group`,new te),A(this,`pickables`,[]),A(this,`fires`,[]),A(this,`flameMaterial`,void 0),A(this,`flameUniforms`,{uNight:{value:0}}),A(this,`dummy`,new Me),this.shared=e,this.group.name=`Props`,this.flameMaterial=new _({name:`Flame`,uniforms:{...e,...this.flameUniforms},vertexShader:`
        attribute float aSeed;
        varying vec2 vUv;
        varying float vSeed;
        varying vec3 vWorld;
        void main() {
          vUv = uv;
          vSeed = aSeed;
          vec4 wp = modelMatrix * instanceMatrix * vec4(position, 1.0);
          vWorld = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        ${X}
        ${Z}
        ${br}
        uniform float uNight;
        varying vec2 vUv;
        varying float vSeed;
        varying vec3 vWorld;
        void main() {
          vec2 p = vUv * 2.0 - 1.0;
          float t = uTime * 2.2 + vSeed * 10.0;
          float n = vnoise(vec2(p.x * 3.0, vUv.y * 4.0 - t * 1.6));
          float width = (1.0 - vUv.y) * (0.55 + 0.25 * n);
          float shape = smoothstep(width, width * 0.35, abs(p.x)) * smoothstep(0.0, 0.12, vUv.y) * (1.0 - smoothstep(0.55 + 0.35 * n, 1.0, vUv.y));
          vec3 col = mix(vec3(1.0, 0.35, 0.06), vec3(1.0, 0.85, 0.45), smoothstep(0.2, 0.9, shape));
          float a = shape * (0.25 + 0.75 * uNight);
          if (a < 0.01) discard;
          col *= 2.6 * (0.3 + 0.7 * uNight);
          col = applyFog(col, vWorld);
          gl_FragColor = vec4(col * a, a);
          ${xr}
        }
      `,transparent:!0,depthWrite:!1,blending:2,side:2}),this.build(t)}stdMaterial(e,t){return Tr(new ee({roughness:.92,metalness:0,...t}),this.shared,{key:e})}build(e){let t=dt(4242),n=e.vegetationScale,r=(e,t)=>U(e,t),i=this.stdMaterial(`rock`,{vertexColors:!1,color:9403494,flatShading:!0}),a=[ui(1),ui(2),ui(3)],o=Math.round(900*n);a.forEach((e,n)=>{let a=new w(e,i,Math.ceil(o/3));a.instanceColor=new he(new Float32Array(a.count*3),3);let s=0,c=new S;for(let e=0;s<a.count&&e<a.count*8;e++){let e=t()<.25,n=(t()-.5)*(e?2600:1200),i=z(-950+t()*(I+1650)),o=Ft(n,i),l=Math.abs(n-V(-i));if(o&&!(l>33&&l<38)||!o&&H(n,i,Ct)<6||!o&&H(n,i,wt)<6||Math.hypot(n-B.camp.x,i-B.camp.z)<120.75)continue;let u=r(n,i),d=1-Pt(n,i).y,f=t()<.12+d*1.5,p=o?.3+t()*.6:f?1.5+t()*3.5:.25+t()*.7;this.dummy.position.set(n,u-p*.15,i),this.dummy.rotation.set((t()-.5)*.4,t()*Math.PI*2,(t()-.5)*.4),this.dummy.scale.set(p*(.8+t()*.5),p*(.7+t()*.6),p*(.8+t()*.5)),this.dummy.updateMatrix(),a.setMatrixAt(s,this.dummy.matrix),c.setHSL(.08+t()*.03,.18+t()*.1,.36+t()*.16),o&&c.multiplyScalar(.8),a.setColorAt(s,c),s++}a.count=s,a.castShadow=n===0,a.receiveShadow=!0,a.instanceMatrix.needsUpdate=!0,a.instanceColor&&(a.instanceColor.needsUpdate=!0),a.computeBoundingSphere(),a.name=`Rocks${n}`,this.group.add(a)});let s=this.stdMaterial(`plant`,{vertexColors:!0,roughness:1}),u=new w(di(),s,Math.round(700*n));{let e=0;for(let n=0;e<u.count&&n<u.count*10;n++){let n=(t()-.5)*1500,i=z(-1e3+t()*(I+1700));if(Ft(n,i))continue;let a=r(n,i);if(a<1.4||a>45||H(n,i,Ct)<5||H(n,i,wt)<5||Math.hypot(n-B.camp.x,i-B.camp.z)<92)continue;let o=.6+t()*1.1;this.dummy.position.set(n,a-.05,i),this.dummy.rotation.set(0,t()*Math.PI*2,0),this.dummy.scale.set(o,o*(.7+t()*.5),o),this.dummy.updateMatrix(),u.setMatrixAt(e++,this.dummy.matrix)}u.count=e,u.castShadow=!1,u.receiveShadow=!0,u.computeBoundingSphere(),u.name=`Shrubs`,this.group.add(u)}let d=this.stdMaterial(`tree`,{vertexColors:!0,roughness:.95,side:2}),f=[],p=[[-165,335,9],[25,355,7],[-150,215,6],[-10,430,6],[90,-I-230,5]];for(let[e,r,i]of p)for(let a=0;a<Math.max(2,Math.round(i*(.5+.5*n)));a++){let n=t()*Math.PI*2,i=4+t()*22;f.push([e+Math.cos(n)*i,r+Math.sin(n)*i])}let m=new w(fi(),d,f.length);f.forEach(([e,n],i)=>{let a=.8+t()*.45;this.dummy.position.set(e,r(e,n)-.2,n),this.dummy.rotation.set(0,t()*Math.PI*2,0),this.dummy.scale.set(a,a,a),this.dummy.updateMatrix(),m.setMatrixAt(i,this.dummy.matrix)}),m.castShadow=!0,m.receiveShadow=!0,m.computeBoundingSphere(),m.name=`Palms`,this.group.add(m);let h=Math.round(34*(.4+.6*n)),g=new w(pi(),d,h);{let e=0;for(let n=0;e<h&&n<600;n++){let n=(t()-.5)*900,i=z(I+60+t()*520);if(Ft(n,i))continue;let a=r(n,i);if(a<2||a>30||H(n,i,wt)<8)continue;let o=.7+t()*.6;this.dummy.position.set(n,a-.1,i),this.dummy.rotation.set(0,t()*Math.PI*2,0),this.dummy.scale.set(o,o*(.85+t()*.3),o),this.dummy.updateMatrix(),g.setMatrixAt(e++,this.dummy.matrix)}g.count=e,g.castShadow=!0,g.receiveShadow=!0,g.computeBoundingSphere(),g.name=`Acacias`,this.group.add(g)}let _=Rt(),ee=this.stdMaterial(`cloth`,{roughness:1,side:2}),v=new w(mi(),ee,_.length);_.forEach((e,t)=>{this.dummy.position.set(e.x,r(e.x,e.z)-.05,e.z),this.dummy.rotation.set(0,e.rotation,0),this.dummy.scale.setScalar(e.scale),this.dummy.updateMatrix(),v.setMatrixAt(t,this.dummy.matrix),v.setColorAt(t,vi[Math.floor(e.tint*vi.length)%vi.length])}),v.castShadow=!0,v.receiveShadow=!0,v.computeBoundingSphere(),v.name=`Tents`,v.userData.hotspot=`encampment`,this.group.add(v),this.pickables.push(v);let te=this.stdMaterial(`bundle`,{vertexColors:!0,roughness:.95}),y=new w(hi(),te,_.length*2);{let e=0;for(let n of _)for(let i=0;i<2;i++){let a=n.rotation+(i===0?0:Math.PI)+(t()-.5)*.8,o=3.4*n.scale+t()*1.2,s=n.x+Math.cos(a)*o,c=n.z+Math.sin(a)*o;this.dummy.position.set(s,r(s,c),c),this.dummy.rotation.set(0,t()*Math.PI*2,0),this.dummy.scale.setScalar(.9+t()*.4),this.dummy.updateMatrix(),y.setMatrixAt(e++,this.dummy.matrix)}y.count=e,y.castShadow=!1,y.receiveShadow=!0,y.computeBoundingSphere(),y.name=`Belongings`,y.userData.hotspot=`encampment`,this.group.add(y),this.pickables.push(y)}let re=this.stdMaterial(`firepit`,{vertexColors:!0,roughness:1}),ie=new w(gi(),re,It.length),ae=new c(1.1,1.7,1,1);ae.translate(0,.85,0);let oe=ae.clone().rotateY(Math.PI/2),b=new de;{let e=ae.toNonIndexed(),t=oe.toNonIndexed(),n=new Float32Array([...e.getAttribute(`position`).array,...t.getAttribute(`position`).array]),r=new Float32Array([...e.getAttribute(`uv`).array,...t.getAttribute(`uv`).array]);b.setAttribute(`position`,new E(n,3)),b.setAttribute(`uv`,new E(r,2)),e.dispose(),t.dispose(),ae.dispose(),oe.dispose()}let se=new w(b,this.flameMaterial,It.length),ce=new Float32Array(It.length),le=e.level===`low`?1:2;It.forEach((e,t)=>{let n=r(e.x,e.z);this.dummy.position.set(e.x,n,e.z),this.dummy.rotation.set(0,0,0),this.dummy.scale.setScalar(1),this.dummy.updateMatrix(),ie.setMatrixAt(t,this.dummy.matrix),se.setMatrixAt(t,this.dummy.matrix),ce[t]=t*.37;let i=null;t<le&&(i=new ne(16751178,0,45,2),i.position.set(e.x,n+1.4,e.z),i.castShadow=!1,this.group.add(i)),this.fires.push({x:e.x,y:n,z:e.z,light:i,seed:t*1.7})}),b.setAttribute(`aSeed`,new he(ce,1)),ie.receiveShadow=!0,ie.computeBoundingSphere(),ie.name=`FirePits`,ie.userData.hotspot=`encampment`,se.frustumCulled=!1,se.renderOrder=31,se.name=`Flames`,this.group.add(ie,se),this.pickables.push(ie);let ue=this.stdMaterial(`city`,{vertexColors:!0,roughness:1}),x=new l(_i(),ue),fe=r(B.city.x,B.city.z);x.position.set(B.city.x,fe-2,B.city.z),x.rotation.y=.35,x.name=`City`,x.userData.hotspot=`city`,x.castShadow=!1,x.receiveShadow=!1,this.group.add(x),this.pickables.push(x)}update(e,t){this.flameUniforms.uNight.value=t;for(let n of this.fires){if(!n.light)continue;let r=.75+.25*Math.sin(e*9.1+n.seed)*Math.sin(e*5.3+n.seed*2.1)+.1*Math.sin(e*23+n.seed);n.light.intensity=t*260*r}}setQuality(e){for(let e of[...this.group.children])si(e);this.pickables.length=0,this.fires.length=0,this.build(e)}dispose(){si(this.group),this.flameMaterial.dispose()}},bi=class{constructor(e){A(this,`mesh`,void 0),A(this,`material`,void 0);let t=new x(4500,48,24);this.material=new _({name:`SkyDome`,uniforms:{...e},vertexShader:`
        varying vec3 vDir;
        void main() {
          vDir = position;
          vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          gl_Position = p.xyww; // at the far plane
        }
      `,fragmentShader:`
        ${X}
        ${Z}
        ${yr}
        varying vec3 vDir;
        void main() {
          vec3 dir = normalize(vDir);
          vec3 col = skyColor(dir, 1.0);
          // Haze towards the horizon matches the fog so distant land melts into the sky.
          float haze = exp(-max(dir.y, 0.0) * 9.0);
          col = mix(col, uFogColor, haze * 0.55 * clamp(uFogDensity * 2600.0, 0.0, 1.0));
          gl_FragColor = vec4(col, 1.0);
          ${xr}
        }
      `,side:1,depthWrite:!1,depthTest:!0,fog:!1}),this.mesh=new l(t,this.material),this.mesh.name=`Sky`,this.mesh.renderOrder=-1e3,this.mesh.frustumCulled=!1}update(e){this.mesh.position.copy(e.position)}dispose(){this.mesh.geometry.dispose(),this.material.dispose()}};function xi(e,t,n,r){let i=[];e.forEach(([e,t,n],r)=>{let a=Math.max(1,Math.round((t-e)/n));for(let n=r===0?0:1;n<=a;n++)i.push(e+(t-e)*n/a)});let a=e[0],o=e[e.length-1],s=[],c=a[2],l=a[0];for(;l>n;)c*=t,l=Math.max(n,l-c),s.push(l);let u=[];for(c=o[2],l=o[1];l<r;)c*=t,l=Math.min(r,l+c),u.push(l);return[...s.reverse(),...i,...u]}var $={drySand:new S(14863781),paleSand:new S(15588537),wetSand:new S(10259051),seabed:new S(11049082),seabedDeep:new S(8221793),passage:new S(14271644),path:new S(12625020),camp:new S(12033142),rock:new S(9074530),hills:new S(11439976),mountain:new S(9202262),mountainDark:new S(7033412),scrub:new S(10130536)};function Si(e,t,n,r,i){let a=R(t),o=F(e*.013,t*.013,3,71),s=F(e*.11,t*.11,2,73);if(Ft(e,t)&&n<.4){let t=1-k(34,46,Math.abs(e-V(a)));return i.copy($.seabed).lerp($.seabedDeep,O(-n/30)),i.lerp($.passage,t),i.lerp($.wetSand,(1-k(0,.5,Math.abs(n-.1)))*.6*(1-t)),i.multiplyScalar(.9+.2*o),i}i.copy($.drySand).lerp($.paleSand,o*.6),i.lerp($.wetSand,(1-k(.05,.9,n))*.75),i.lerp($.hills,k(8,40,n)*.7);let c=a>3300?k(I+300,I+1600,a):0;c>0&&i.lerp($.mountain,c*k(10,60,n));let l=k(.35,.65,r);i.lerp(s>.5?$.rock:$.mountainDark,l*.85),i.lerp($.scrub,k(.62,.8,F(e*.02,t*.02,3,75))*(1-l)*k(2,6,n)*.35);let u=Math.hypot(e-B.camp.x,t-B.camp.z);i.lerp($.camp,(1-k(69,132.25,u))*.55);let d=Math.min(H(e,t,Ct),H(e,t,wt));return i.lerp($.path,(1-k(2,6.5,d))*.65),i.multiplyScalar(.92+.16*s),i}var Ci=`
/** Height above which the sand is dry; below it, wet from the swash (moves with the waves). */
float wetLine(vec2 xz) {
  float s = -xz.y;
  float toward = s < PASSAGE_LENGTH * 0.5 ? 1.0 : -1.0;
  float ph = dot(xz, vec2(0.12, toward)) * 0.11 - uTime * 0.85 + vnoise(xz * 0.02) * 4.0;
  return 0.18 + 0.2 * pow(0.5 + 0.5 * sin(ph), 3.0) + 0.25 * vnoise(xz * 0.07);
}
/** Grain-scale detail, faded by pixel footprint to avoid shimmering. */
float sandGrain(vec2 xz, float fine) {
  return (vnoise(xz * 9.0) - 0.5) * fine + (vnoise(xz * 2.7) - 0.5) * 0.6;
}
`,wi=`
{
  vec3 wp = vCrossWorldPos;
  float s = -wp.z;
  float footprint = max(fwidth(wp.x), fwidth(wp.z));
  float fine = 1.0 - smoothstep(0.03, 0.25, footprint);
  float midK = 1.0 - smoothstep(0.3, 2.0, footprint);
  float dist = length(wp - uCameraPos);
  // Colour variation at several scales: dune patches, wind-sorted streaks, grain.
  float big = fbm3(wp.xz * 0.012);
  float mid = fbm3(wp.xz * 0.18 + 7.0);
  float streak = vnoise(vec2(dot(wp.xz, vec2(0.8, 0.6)) * 0.9, dot(wp.xz, vec2(-0.6, 0.8)) * 0.08));
  diffuseColor.rgb *= 0.88 + 0.2 * big;
  diffuseColor.rgb *= 0.94 + 0.12 * mid * midK + 0.06 * (streak - 0.5) * midK;
  diffuseColor.rgb *= 1.0 + 0.09 * sandGrain(wp.xz, fine) * midK;
  // Scattered flecks: shell fragments (light) and pebbles (dark), only on beaches and low ground.
  if (fine > 0.05 && wp.y < 6.0) {
    vec2 cell = floor(wp.xz * 3.0);
    float h = hash12(cell);
    vec2 inCell = fract(wp.xz * 3.0) - hash22(cell) * 0.6 - 0.2;
    float dotK = 1.0 - smoothstep(0.03, 0.09, length(inCell));
    if (h > 0.975) diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.92, 0.88, 0.8), dotK * fine);
    else if (h < 0.035) diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 0.45, dotK * fine);
  }
  // Tide line: a ragged band of dried weed and debris just above the reach of the waves.
  float tide = 1.0 - smoothstep(0.0, 0.12, abs(wp.y - 0.62 - 0.12 * vnoise(wp.xz * 0.05)));
  tide *= smoothstep(0.45, 0.7, vnoise(wp.xz * vec2(0.6, 0.25)) + 0.15 * vnoise(wp.xz * 3.0));
  diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.16, 0.14, 0.09), tide * 0.75 * step(wp.y, 2.0));
  // Wet sand below the swash line: darker and more saturated.
  float wet = 1.0 - smoothstep(wetLine(wp.xz) - 0.05, wetLine(wp.xz) + 0.08, wp.y);
  wet = max(wet * 0.85, (1.0 - smoothstep(0.35, 0.9, wp.y)) * 0.35);
  diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.58, 0.55, 0.5), wet * step(-0.2, wp.y));

  // Inside the opened passage: firm, fairly dry floor ("a dry path", 20:77 — appearance is artistic),
  // slightly damp right at the foot of the water walls.
  float hw = corridorHalfWidth(s);
  if (hw > 0.1) {
    float lat = abs(wp.x - corridorCenterX(s));
    float inside = 1.0 - smoothstep(hw - 0.5, hw + 0.5, lat);
    float damp = smoothstep(hw - 4.0, hw - 0.3, lat) * inside;
    diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.72, 0.74, 0.76), damp * 0.7);
  }

  // Submerged ground: the water surface handles absorption; add only a gentle green cast.
  float waterDepth = -wp.y;
  float openHere = 0.0;
  if (hw > 0.1) openHere = 1.0 - smoothstep(hw - 0.2, hw + 0.8, abs(wp.x - corridorCenterX(s)));
  if (waterDepth > 0.0 && openHere < 0.5) {
    float k = 1.0 - exp(-waterDepth * 0.2);
    diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.55, 0.78, 0.76), k);
  }
}
`,Ti=`
{
  vec3 wp = vCrossWorldPos;
  float s = -wp.z;
  float hw = corridorHalfWidth(s);
  // Wet sand mirrors the sky at low angles (a thin film of water).
  {
    float wetK = 1.0 - smoothstep(wetLine(wp.xz) - 0.05, wetLine(wp.xz) + 0.08, wp.y);
    wetK *= step(-0.05, wp.y);
    if (wetK > 0.0) {
      vec3 Vw = normalize(uCameraPos - wp);
      // The water film is uneven: perturb the mirror normal so the sun's glare breaks up.
      vec2 jit = (vec2(vnoise(wp.xz * 1.3), vnoise(wp.xz * 1.3 + 17.0)) - 0.5) * 0.16
               + (vec2(vnoise(wp.xz * 6.0), vnoise(wp.xz * 6.0 + 5.0)) - 0.5) * 0.06;
      vec3 Rw = reflect(-Vw, normalize(vec3(jit.x, 1.0, jit.y)));
      float Fw = 0.02 + 0.98 * pow(1.0 - max(Vw.y, 0.0), 5.0);
      totalEmissiveRadiance += skyColor(Rw, 0.0) * Fw * wetK * 0.55;
    }
  }
  float dayK = clamp(luminance3(uLightColor) * 0.6 + luminance3(uAmbientSky) * 0.5, 0.0, 1.5);
  // Caustic light cast through the water walls onto the passage floor.
  if (hw > 0.1) {
    float lat = abs(wp.x - corridorCenterX(s));
    float inside = 1.0 - smoothstep(hw - 0.5, hw + 0.5, lat);
    float nearWall = smoothstep(hw - 9.0, hw - 0.5, lat) * inside;
    float c = caustic(wp.xz * 0.28, uTime * 0.9);
    totalEmissiveRadiance += vec3(0.25, 0.55, 0.6) * c * nearWall * 0.22 * dayK * wallTopY(s) / WALL_HEIGHT;
  }
  // Shallow water caustics near the shore.
  float depth = -wp.y;
  if (depth > 0.05 && depth < 6.0) {
    float openHere = hw > 0.1 ? 1.0 - smoothstep(hw - 0.2, hw + 0.8, abs(wp.x - corridorCenterX(s))) : 0.0;
    float c = caustic(wp.xz * 0.35 + uWind.xy * uTime * 0.2, uTime * 1.2);
    totalEmissiveRadiance += vec3(0.6, 0.8, 0.75) * c * (1.0 - smoothstep(0.5, 6.0, depth)) * smoothstep(0.05, 0.4, depth) * 0.12 * dayK * (1.0 - openHere);
  }
}
`,Ei=`
{
  vec3 wp = vCrossWorldPos;
  float d = length(wp - uCameraPos);
  float near = 1.0 - smoothstep(25.0, 120.0, d);
  if (near > 0.0) {
    // Wind ripples in sand: a wavy ridge pattern (perpendicular to the wind), stronger on flat ground.
    vec2 q = wp.xz;
    float w = vnoise(q * 0.21) * 7.0 + vnoise(q * 0.9) * 1.5;
    vec2 dir = normalize(vec2(0.8, 0.6) + (vec2(vnoise(q * 0.05), vnoise(q * 0.05 + 9.0)) - 0.5) * 0.8);
    float ph = dot(q, dir) * 2.2 + w;
    float strength = smoothstep(0.35, 0.75, vnoise(q * 0.08 + 2.0));
    vec2 grad = dir * cos(ph) * 0.022 * strength;
    grad += (vec2(vnoise(q * 1.7 + 3.0), vnoise(q * 1.7 - 5.0)) - 0.5) * 0.06;
    float fp = max(fwidth(q.x), fwidth(q.y));
    float fineN = 1.0 - smoothstep(0.03, 0.2, fp);
    grad += (vec2(vnoise(q * 11.0 + 1.0), vnoise(q * 11.0 - 4.0)) - 0.5) * 0.12 * fineN;
    crossWorldNormalOffset = vec3(-grad.x, 0.0, -grad.y) * near;
  }
}
`,Di=`
{
  vec3 wp = vCrossWorldPos;
  float s = -wp.z;
  float hw = corridorHalfWidth(s);
  float wet = 0.0;
  if (hw > 0.1) {
    float lat = abs(wp.x - corridorCenterX(s));
    wet = smoothstep(hw - 3.0, hw - 0.2, lat) * (1.0 - smoothstep(hw - 0.2, hw + 0.6, lat));
  }
  // Wet sand below the swash line.
  wet = max(wet, (1.0 - smoothstep(wetLine(wp.xz) - 0.05, wetLine(wp.xz) + 0.08, wp.y)) * step(-0.05, wp.y));
  roughnessFactor = mix(roughnessFactor, 0.35, wet * 0.8);
}
`,Oi=class e{constructor(t,n){A(this,`mesh`,void 0),A(this,`material`,void 0),this.material=Tr(new ee({vertexColors:!0,roughness:.96,metalness:0,name:`Terrain`}),t,{key:`terrain`,colorFragment:wi,emissiveFragment:Ti,normalFragment:Ei,fragmentPars:yr+Ci,roughnessFragment:Di}),this.mesh=new l(e.buildGeometry(n),this.material),this.mesh.name=`Terrain`,this.mesh.receiveShadow=!0,this.mesh.castShadow=!1,this.mesh.userData.hotspot=`terrain`}static buildGeometry(e){let t=e.terrainSpacing,n=I,r=xi([[-320,320,2.8*t]],1.06,-L,L),i=xi([[-(n+420),-(n-380),3.5*t],[-(n-380),-380,12*t],[-380,470,3.5*t]],1.06,-(n+L),L),a=r.length,o=i.length,s=a*o,c=new Float32Array(s*3),l=new Float32Array(s);for(let e=0;e<o;e++)for(let t=0;t<a;t++){let n=e*a+t,o=r[t],s=i[e],u=U(o,s);l[n]=u,c[n*3]=o,c[n*3+1]=u,c[n*3+2]=s}let u=new Uint8Array(s*3),d=new S;for(let e=0;e<o;e++)for(let t=0;t<a;t++){let n=e*a+t,s=Math.max(0,t-1),c=Math.min(a-1,t+1),f=Math.max(0,e-1),p=Math.min(o-1,e+1),m=(l[e*a+c]-l[e*a+s])/Math.max(.001,r[c]-r[s]),h=(l[p*a+t]-l[f*a+t])/Math.max(.001,i[p]-i[f]),g=Math.hypot(m,h);Si(r[t],i[e],l[n],g,d),u[n*3]=Math.round(O(d.r)*255),u[n*3+1]=Math.round(O(d.g)*255),u[n*3+2]=Math.round(O(d.b)*255)}let f=(a-1)*(o-1)*6,p=s>65535?new Uint32Array(f):new Uint16Array(f),m=0;for(let e=0;e<o-1;e++)for(let t=0;t<a-1;t++){let n=e*a+t,r=n+1,i=n+a,o=i+1;Math.abs(l[n]-l[o])<Math.abs(l[r]-l[i])?(p[m++]=n,p[m++]=i,p[m++]=o,p[m++]=n,p[m++]=o,p[m++]=r):(p[m++]=n,p[m++]=i,p[m++]=r,p[m++]=r,p[m++]=i,p[m++]=o)}let h=new de;return h.setAttribute(`position`,new E(c,3)),h.setAttribute(`color`,new E(u,3,!0)),h.setIndex(new E(p,1)),h.computeVertexNormals(),h.computeBoundingSphere(),h.computeBoundingBox(),h}setQuality(t){let n=this.mesh.geometry;this.mesh.geometry=e.buildGeometry(t),n.dispose()}dispose(){this.mesh.geometry.dispose(),this.material.dispose()}},ki={afternoon:{sun:[34,140],moon:[-30,0],key:[34,140],keyColor:16773338,keyIntensity:3.1,zenith:3105706,horizon:13227228,ground:9340274,glow:16769200,glowIntensity:.6,disc:28,ambientSky:11124700,ambientGround:11901812,hemiIntensity:1.15,fog:13029849,fogDensity:21e-5,stars:0,moonVis:0,clouds:.28,storm:0,exposure:.88,wind:.35,daylight:1},dusk:{sun:[3,235],moon:[12,60],key:[7,235],keyColor:16754286,keyIntensity:1.7,zenith:2305109,horizon:14652259,ground:6113856,glow:16748872,glowIntensity:1,disc:10,ambientSky:7106460,ambientGround:7033153,hemiIntensity:.85,fog:11568751,fogDensity:27e-5,stars:.12,moonVis:.3,clouds:.35,storm:0,exposure:1,wind:.3,daylight:.45},storm:{sun:[22,160],moon:[-30,0],key:[40,160],keyColor:12896720,keyIntensity:.95,zenith:3554635,horizon:6975867,ground:4670783,glow:8224644,glowIntensity:.2,disc:0,ambientSky:8029075,ambientGround:5918789,hemiIntensity:1,fog:6778229,fogDensity:58e-5,stars:0,moonVis:0,clouds:.97,storm:1,exposure:1.1,wind:.95,daylight:.6},night:{sun:[-28,180],moon:[38,-35],key:[38,-35],keyColor:10335210,keyIntensity:.42,zenith:198679,horizon:1450556,ground:593174,glow:1779527,glowIntensity:.1,disc:0,ambientSky:3228794,ambientGround:1448484,hemiIntensity:.42,fog:989227,fogDensity:34e-5,stars:1,moonVis:1,clouds:.12,storm:0,exposure:1.45,wind:.35,daylight:0},predawn:{sun:[-5,14],moon:[20,-70],key:[14,10],keyColor:10268894,keyIntensity:.6,zenith:1122631,horizon:7174819,ground:2303278,glow:14584936,glowIntensity:.65,disc:0,ambientSky:5202324,ambientGround:2829107,hemiIntensity:.65,fog:5069954,fogDensity:3e-4,stars:.45,moonVis:.45,clouds:.2,storm:0,exposure:1.3,wind:.4,daylight:.25},sunrise:{sun:[3.5,14],moon:[10,-80],key:[5,14],keyColor:16757886,keyIntensity:2.3,zenith:3758739,horizon:15708551,ground:6970710,glow:16754788,glowIntensity:1.1,disc:16,ambientSky:10725572,ambientGround:10123874,hemiIntensity:1.15,fog:13740946,fogDensity:24e-5,stars:0,moonVis:.08,clouds:.3,storm:0,exposure:.95,wind:.5,daylight:.75},morning:{sun:[17,32],moon:[-20,0],key:[17,32],keyColor:16770502,keyIntensity:2.9,zenith:4025779,horizon:13949920,ground:8025192,glow:16766628,glowIntensity:.7,disc:24,ambientSky:10927321,ambientGround:10718063,hemiIntensity:1.05,fog:13489884,fogDensity:2e-4,stars:0,moonVis:0,clouds:.25,storm:0,exposure:.9,wind:.4,daylight:1}};function Ai([e,t]){let n=Be(e),r=Be(t);return new C(Math.sin(r)*Math.cos(n),Math.sin(n),-Math.cos(r)*Math.cos(n)).normalize()}function ji(e){let t=new S(e.keyColor).multiplyScalar(e.keyIntensity),n=new S(e.glow).multiplyScalar(e.glowIntensity),r=Ai(e.sun),i=new S(e.glow).lerp(new S(16777215),.5).multiplyScalar(e.disc);return{sun:r,moon:Ai(e.moon),key:Ai(e.key),keyColor:t,zenith:new S(e.zenith),horizon:new S(e.horizon),ground:new S(e.ground),glow:n,disc:i,ambientSky:new S(e.ambientSky),ambientGround:new S(e.ambientGround),fog:new S(e.fog),hemiIntensity:e.hemiIntensity,fogDensity:e.fogDensity,stars:e.stars,moonVis:e.moonVis,clouds:e.clouds,storm:e.storm,exposure:e.exposure,wind:e.wind,daylight:e.daylight}}function Mi(e){return{...e,sun:e.sun.clone(),moon:e.moon.clone(),key:e.key.clone(),keyColor:e.keyColor.clone(),zenith:e.zenith.clone(),horizon:e.horizon.clone(),ground:e.ground.clone(),glow:e.glow.clone(),disc:e.disc.clone(),ambientSky:e.ambientSky.clone(),ambientGround:e.ambientGround.clone(),fog:e.fog.clone()}}function Ni(e,t,n,r){e.sun.copy(t.sun).lerp(n.sun,r).normalize(),e.moon.copy(t.moon).lerp(n.moon,r).normalize(),e.key.copy(t.key).lerp(n.key,r).normalize(),e.keyColor.copy(t.keyColor).lerp(n.keyColor,r),e.zenith.copy(t.zenith).lerp(n.zenith,r),e.horizon.copy(t.horizon).lerp(n.horizon,r),e.ground.copy(t.ground).lerp(n.ground,r),e.glow.copy(t.glow).lerp(n.glow,r),e.disc.copy(t.disc).lerp(n.disc,r),e.ambientSky.copy(t.ambientSky).lerp(n.ambientSky,r),e.ambientGround.copy(t.ambientGround).lerp(n.ambientGround,r),e.fog.copy(t.fog).lerp(n.fog,r);let i=i=>{e[i]=t[i]+(n[i]-t[i])*r};i(`hemiIntensity`),i(`fogDensity`),i(`stars`),i(`moonVis`),i(`clouds`),i(`storm`),i(`exposure`),i(`wind`),i(`daylight`)}var Pi=new S(3108212),Fi=class{constructor(e,t,n){A(this,`shared`,void 0),A(this,`renderer`,void 0),A(this,`keyLight`,void 0),A(this,`hemiLight`,void 0),A(this,`fog`,void 0),A(this,`name`,`morning`),A(this,`from`,void 0),A(this,`to`,void 0),A(this,`cur`,void 0),A(this,`t`,1),A(this,`duration`,0),A(this,`stormOverride`,0),A(this,`tmpFog`,new S),this.shared=e,this.renderer=t,this.cur=ji(ki.morning),this.from=Mi(this.cur),this.to=Mi(this.cur),this.keyLight=new le(16777215,1),this.keyLight.name=`keyLight`,this.hemiLight=new i(16777215,4473924,1),this.hemiLight.name=`hemiLight`,this.fog=new ke(13489884,2e-4),n.fog=this.fog,this.apply(0)}get current(){return this.name}get daylight(){return this.cur.daylight}get wind(){return this.cur.wind}set(e,t=0){this.name=e,this.from=Mi(this.cur),this.to=ji(ki[e]),this.duration=Math.max(0,t),this.t=this.duration>0?0:1,this.duration===0&&Ni(this.cur,this.from,this.to,1)}setStormOverride(e){this.stormOverride=O(e)}update(e,t){this.t<1&&(this.t=Math.min(1,this.t+(this.duration>0?e/this.duration:1)),Ni(this.cur,this.from,this.to,Pe(this.t))),this.apply(t)}apply(e){let t=this.cur,n=this.shared,r=Math.max(t.storm,this.stormOverride);n.uSunDir.value.copy(t.sun),n.uMoonDir.value.copy(t.moon),n.uLightDir.value.copy(t.key),n.uLightColor.value.copy(t.keyColor).multiplyScalar(1-.55*Math.max(0,r-t.storm)),n.uSkyZenith.value.copy(t.zenith),n.uSkyHorizon.value.copy(t.horizon),n.uSkyGround.value.copy(t.ground),n.uSunGlow.value.copy(t.glow),n.uSunDisc.value.copy(t.disc).multiplyScalar(+(t.sun.y>-.02)),n.uMoonVisibility.value=t.moonVis,n.uStarVisibility.value=t.stars*(1-r),n.uAmbientSky.value.copy(t.ambientSky).multiplyScalar(t.hemiIntensity),n.uAmbientGround.value.copy(t.ambientGround).multiplyScalar(t.hemiIntensity),n.uCloudCover.value=Math.max(t.clouds,r*.95),n.uStorm.value=r,n.uWind.value.set(.55,-.83,Math.max(t.wind,r*.9)),this.tmpFog.copy(t.fog).lerp(Pi,e*.3*(.3+.7*t.daylight)),r>t.storm&&this.tmpFog.lerp(new S(6778229),(r-t.storm)*.8);let i=Math.max(t.fogDensity,r*58e-5)*(1-e*.25);n.uFogColor.value.copy(this.tmpFog),n.uFogDensity.value=i,this.fog.color.copy(this.tmpFog),this.fog.density=i,this.keyLight.color.copy(n.uLightColor.value),this.keyLight.intensity=1,this.hemiLight.color.copy(t.ambientSky),this.hemiLight.groundColor.copy(t.ambientGround),this.hemiLight.intensity=t.hemiIntensity*1.6,this.renderer.toneMappingExposure=t.exposure}placeKeyLight(e,t=400){let n=this.shared.uLightDir.value;this.keyLight.target.position.copy(e),this.keyLight.position.copy(e).addScaledVector(n,t),this.keyLight.target.updateMatrixWorld()}},Ii=class{constructor(e){A(this,`object`,new te),A(this,`timeOfDay`,void 0),A(this,`sky`,void 0),A(this,`terrain`,void 0),A(this,`props`,void 0),A(this,`quality`,void 0),A(this,`shadowsEnabled`,void 0),A(this,`focus`,new C),A(this,`corridorFactor`,0),this.quality=e.quality,this.object.name=`Environment`,this.timeOfDay=new Fi(e.shared,e.renderer,e.scene),this.sky=new bi(e.shared),this.terrain=new Oi(e.shared,e.quality),this.props=new yi(e.shared,e.quality),this.object.add(this.sky.mesh,this.terrain.mesh,this.props.group,this.timeOfDay.keyLight,this.timeOfDay.keyLight.target,this.timeOfDay.hemiLight),this.shadowsEnabled=e.quality.shadows,this.configureShadows()}get keyLight(){return this.timeOfDay.keyLight}get pickables(){return this.props.pickables}configureShadows(){let e=this.timeOfDay.keyLight,t=this.shadowsEnabled&&this.quality.shadows;if(e.castShadow=t,t){let t=this.quality.shadowMapSize;e.shadow.mapSize.x!==t&&(e.shadow.mapSize.set(t,t),e.shadow.map?.dispose(),e.shadow.map=null);let n=e.shadow.camera,r=this.quality.level===`high`?110:80;n.left=-r,n.right=r,n.top=r,n.bottom=-r,n.near=10,n.far=900,n.updateProjectionMatrix(),e.shadow.bias=-4e-4,e.shadow.normalBias=.6}}setShadowsEnabled(e){this.shadowsEnabled=e,this.configureShadows()}update(e){this.timeOfDay.update(e.dt>0?e.dt:e.realDt,this.corridorFactor),this.sky.update(e.camera),e.camera.getWorldDirection(this.focus),this.focus.y=0,this.focus.normalize().multiplyScalar(40).add(e.camera.position);let t=this.quality.level===`high`?2:4;this.focus.set(Math.round(this.focus.x/t)*t,Math.round(this.focus.y/t)*t,Math.round(this.focus.z/t)*t),this.timeOfDay.placeKeyLight(this.focus),this.props.update(e.time,1-Math.min(1,this.timeOfDay.daylight*1.6))}setQuality(e){let t=e.terrainSpacing!==this.quality.terrainSpacing,n=e.vegetationScale!==this.quality.vegetationScale||e.level!==this.quality.level;this.quality=e,t&&this.terrain.setQuality(e),n&&this.props.setQuality(e),this.configureShadows()}dispose(){this.sky.dispose(),this.terrain.dispose(),this.props.dispose(),this.timeOfDay.keyLight.shadow.dispose(),this.timeOfDay.keyLight.dispose(),this.timeOfDay.hemiLight.dispose(),this.object.removeFromParent()}},Li={minX:-1400,minZ:-I-900,sizeX:2800,sizeZ:I+1800};function Ri(e=512){let{minX:t,minZ:n,sizeX:r,sizeZ:i}=Li,o=e,s=Math.min(4096,Math.round(e*i/r/4)*4),c=new Uint16Array(o*s);for(let e=0;e<s;e++){let a=n+(e+.5)/s*i;for(let n=0;n<o;n++){let i=t+(n+.5)/o*r;c[e*o+n]=je.toHalfFloat(U(i,a))}}let l=new Oe(c,o,s,u,a);return l.minFilter=m,l.magFilter=m,l.wrapS=_e,l.wrapT=_e,l.generateMipmaps=!1,l.needsUpdate=!0,l.userData.shared=!0,l}function zi(){let{minX:e,minZ:t,sizeX:n,sizeZ:r}=Li;return new ce(e,t,n,r)}function Bi(){let e=new Oe(new Uint8Array([0,0,0,255]),1,1);return e.needsUpdate=!0,e.userData.shared=!0,{uTime:{value:0},uCameraPos:{value:new C},uCorridorFactor:{value:0},uQuality:{value:2},uOpenFront:{value:0},uCloseFront:{value:0},uTurbulence:{value:0},uRipple:{value:new ce(0,0,-1e3,0)},uSunDir:{value:new C(.3,.5,-.8).normalize()},uMoonDir:{value:new C(-.4,.6,.6).normalize()},uLightDir:{value:new C(.3,.5,-.8).normalize()},uLightColor:{value:new S(2.6,2.4,2.1)},uSkyZenith:{value:new S(.12,.28,.62)},uSkyHorizon:{value:new S(.62,.7,.8)},uSkyGround:{value:new S(.35,.38,.42)},uSunGlow:{value:new S(1,.8,.55)},uSunDisc:{value:new S(20,18,15)},uMoonVisibility:{value:0},uStarVisibility:{value:0},uAmbientSky:{value:new S(.45,.55,.7)},uAmbientGround:{value:new S(.35,.3,.25)},uFogColor:{value:new S(.62,.7,.8)},uFogDensity:{value:28e-5},uCloudCover:{value:.2},uStorm:{value:0},uWind:{value:new C(.6,-.8,.3)},uHeightTex:{value:e},uHeightBounds:{value:new ce(-1,-1,2,2)},uFoamTex:{value:e},uRippleTex:{value:e}}}var Vi=`
${X}
${Z}
${vr}

#ifndef CROSSING_WAVES
#define CROSSING_WAVES
// dir.x, dir.y, wavelength, amplitude
const vec4 W0 = vec4(0.20, 0.98, 38.0, 0.30);
const vec4 W1 = vec4(-0.50, 0.87, 21.0, 0.17);
const vec4 W2 = vec4(0.76, 0.65, 13.0, 0.10);
const vec4 W3 = vec4(-0.92, 0.38, 8.0, 0.055);
const vec4 W4 = vec4(0.30, -0.95, 5.5, 0.032);

void addWave(vec4 w, vec2 p, float t, float amp, float phase, inout float h, inout vec2 grad) {
  float k = 6.2831853 / w.z;
  float omega = sqrt(9.81 * k);
  vec2 d = normalize(w.xy);
  float f = k * dot(d, p) - omega * t + phase;
  float a = w.w * amp;
  h += a * sin(f);
  grad += a * k * d * cos(f);
}

/** Wave amplitude multiplier from wind/storm. */
float waveScale() {
  return 0.55 + uWind.z * 0.9 + uStorm * 0.6;
}

/** Base wind waves at xz (world). Returns height; writes gradient (dh/dx, dh/dz). */
float windWaves(vec2 p, float amp, out vec2 grad) {
  float h = 0.0;
  grad = vec2(0.0);
  float t = uTime;
  addWave(W0, p, t, amp, 0.0, h, grad);
  addWave(W1, p, t, amp, 1.7, h, grad);
  addWave(W2, p, t, amp, 4.1, h, grad);
  addWave(W3, p, t, amp, 2.3, h, grad);
  addWave(W4, p, t, amp, 5.9, h, grad);
  return h;
}
#endif

varying vec3 vWorld;
varying vec3 vNormal;
varying float vDepth;
varying float vFoam;
varying float vLat;
varying float vS;
varying float vRidgeK;
varying float vSlope;
varying float vWave;
varying float vSwash;

/** Everything except the wind waves: raised water beside the passage, closing surge, swell, ripple. */
float extraHeight(vec2 p, out float foam) {
  float s = -p.y;
  float lat = abs(p.x - corridorCenterX(s));
  float h = 0.0;
  foam = 0.0;
  if (s > 0.0 && s < PASSAGE_LENGTH) {
    float top = wallTopY(s);
    float hw = corridorHalfWidth(s);
    float rh = ridgeHeight(s, lat);
    h += rh;
    // The heaped water churns: lumpy, boiling surface, strongest on the crest and back slope.
    if (rh > 0.05) {
      float side = sign(p.x - corridorCenterX(s));
      float k = rh / max(top, 1.0);
      float churnV = vnoise3(vec3(p.x * 0.09 - side * uTime * 1.1, p.y * 0.09, uTime * 0.35)) - 0.5;
      h += churnV * 3.2 * k;
    }
    // Foam lip along the crest and on the steep fall-off behind it.
    float edge = lat - hw;
    foam += (1.0 - smoothstep(0.0, 7.0, edge)) * smoothstep(0.5, 3.0, top);
    float o = seaOpen(s);
    // Leading edge of the parting
    foam += smoothstep(0.01, 0.25, o) * (1.0 - smoothstep(0.55, 1.0, o)) * exp(-max(edge, 0.0) / 35.0) * 1.2;
    // Closing surge: a mound of water where the walls meet, plus heavy foam
    float c = seaClose(s);
    float surge = sin(3.14159 * c) * shoreRamp(s);
    h += surge * 7.0 * exp(-lat / 45.0);
    foam += surge * exp(-lat / 70.0) * 1.6;
  }
  // Swell after the waters close
  float window = smoothstep(-60.0, 40.0, s) * (1.0 - smoothstep(PASSAGE_LENGTH - 40.0, PASSAGE_LENGTH + 60.0, s));
  float tb = uTurbulence * window;
  if (tb > 0.0) {
    h += tb * (2.4 * sin(lat * 0.075 - uTime * 1.7) * exp(-lat / 260.0) + 0.9 * sin(s * 0.05 + uTime * 0.9) * exp(-lat / 120.0));
    foam += tb * exp(-lat / 160.0) * 0.9;
  }
  // Ring ripple from the strike point
  if (uRipple.w > 0.0) {
    float age = uTime - uRipple.z;
    float r = length(p - uRipple.xy);
    float front = age * 24.0;
    float ring = exp(-pow((r - front) / 7.0, 2.0)) * uRipple.w * exp(-age * 0.3) * step(0.0, age);
    h += ring * 0.9;
    foam += ring * 0.7;
  }
  return h;
}

void main() {
  vec3 pos = position;
  vec2 p = pos.xz;
  float s = -p.y;
  float lat = abs(p.x - corridorCenterX(s));
  float ground = terrainHeightTex(p);

  // Waves shrink in shallow water and on the raised crest beside the passage.
  float depth0 = -ground;
  float amp = waveScale() * clamp(depth0 / 6.0, 0.12, 1.0);
  float top = wallTopY(s);
  float plateau = top > 0.1 ? ridgeHeight(s, lat) / top : 0.0;
  amp *= 1.0 - 0.8 * plateau;

  vec2 grad;
  float hw = windWaves(p, amp, grad);
  // Swash: small waves arriving on the beaches run up and back down the sand.
  float shallowK = 1.0 - smoothstep(0.0, 2.6, depth0);
  float towardShore = s < PASSAGE_LENGTH * 0.5 ? 1.0 : -1.0;
  float swPhase = dot(p, vec2(0.12, towardShore)) * 0.11 - uTime * 0.85 + vnoise(p * 0.02) * 4.0;
  float swash = pow(0.5 + 0.5 * sin(swPhase), 3.0);
  hw += swash * 0.22 * shallowK * (0.6 + 0.4 * uWind.z);
  grad.y += cos(swPhase) * 0.11 * towardShore * 0.22 * shallowK * 1.5;
  vSwash = swash * shallowK;
  float foam;
  float hx = extraHeight(p, foam);
  float f1;
  float e = 1.5;
  float hxx = extraHeight(p + vec2(e, 0.0), f1);
  float hxz = extraHeight(p + vec2(0.0, e), f1);
  grad += vec2(hxx - hx, hxz - hx) / e;

  pos.y = hw + hx;
  vec4 world = modelMatrix * vec4(pos, 1.0);
  vWorld = world.xyz;
  vNormal = normalize(vec3(-grad.x, 1.0, -grad.y));
  vDepth = pos.y - ground;
  vFoam = clamp(foam, 0.0, 2.0);
  vLat = lat;
  vS = s;
  vRidgeK = top > 0.1 ? clamp(hx / max(top, 1.0), 0.0, 1.0) : 0.0;
  vSlope = length(vec2(hxx - hx, hxz - hx) / e);
  vWave = hw / max(amp * 0.7, 0.05);
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,Hi=`
${X}
${Z}
${vr}
${yr}
${br}
${Cr}
varying vec3 vWorld;
varying vec3 vNormal;
varying float vDepth;
varying float vFoam;
varying float vLat;
varying float vS;
varying float vRidgeK;
varying float vSlope;
varying float vWave;
varying float vSwash;

void main() {
  float hwNow = corridorHalfWidth(vS);
  if (hwNow > 0.0 && vLat < hwNow) discard;

  vec3 toCam = uCameraPos - vWorld;
  float dist = length(toCam);
  vec3 V = toCam / max(dist, 1e-3);
  vec2 p = vWorld.xz;
  float t = uTime;

  // Small-scale ripples (finite differences of moving noise), faded with distance.
  vec3 N = normalize(vNormal);
  float detail = (1.0 - smoothstep(40.0, 700.0, dist)) * step(0.5, uQuality + 0.6);
  if (detail > 0.0) {
    vec2 wdir = uWind.xy;
    vec2 q1 = p * 0.16 + wdir * t * 0.32;
    vec2 q2 = p * 0.47 - wdir * t * 0.55 + 3.1;
    float e = 0.6;
    float n0 = vnoise(q1) * 0.65 + vnoise(q2) * 0.35;
    float nx = vnoise(q1 + vec2(e * 0.16, 0.0)) * 0.65 + vnoise(q2 + vec2(e * 0.47, 0.0)) * 0.35;
    float nz = vnoise(q1 + vec2(0.0, e * 0.16)) * 0.65 + vnoise(q2 + vec2(0.0, e * 0.47)) * 0.35;
    vec2 g = vec2(nx - n0, nz - n0) / e;
    float strength = (0.9 + uWind.z * 1.2) * detail;
    N = normalize(N + vec3(-g.x, 0.0, -g.y) * strength);
  }

  vec3 L = normalize(uLightDir);
  float depth = max(vDepth, 0.0);
  float lightAmt = luminance3(uAmbientSky) * 0.5 + max(L.y, 0.0) * luminance3(uLightColor) * 0.28;

  // --- Foam (computed first: it also shapes the surface relief) -----------------------
  float fn = fbm3(p * 0.33 + vec2(t * 0.04, -t * 0.03));
  // Lacy foam: thin connected filaments, never a milky sheet (from the foam texture).
  vec4 lA = texture2D(uFoamTex, p / 9.0 + vec2(t * 0.012, -t * 0.009));
  vec4 lB = texture2D(uFoamTex, p / 3.1 + vec2(-t * 0.02, t * 0.017) + 0.41);
  float lace = clamp(lA.r * 0.6 + lB.r * 0.55 - 0.15, 0.0, 1.0);
  float shoreBands = (1.0 - smoothstep(0.0, 0.55, depth)) * smoothstep(0.55, 0.95, 0.5 + 0.5 * sin(depth * 9.0 - t * 1.4 + vnoise(p * 0.15) * 5.0));
  float foam = clamp(shoreBands * lace, 0.0, 1.0);
  foam = max(foam, clamp(vFoam * smoothstep(0.3, 0.7, fn + 0.15 * vFoam), 0.0, 1.0));
  // Wind-driven whitecaps on the open sea, broken into lace by the foam texture.
  foam = max(foam, smoothstep(0.75, 1.2, vWave + (fn - 0.5) * 0.6) * (0.25 + 0.75 * uWind.z) * 0.8 * smoothstep(0.25, 0.6, lA.r + 0.2));
  // The heaped water beside the passage: a boiling crest and cascades of white water
  // pouring down its steep back face into the sea.
  float rk = vRidgeK;
  float aerated = 0.0;
  if (rk > 0.005 || vSlope > 0.05) {
    // Cascades: streaks stretched down the local slope, flowing downhill. Two axis-aligned
    // projections are blended by slope direction (like triplanar mapping) so the pattern never folds.
    vec2 down = vNormal.xz;
    float dl = length(down);
    down = dl > 1e-4 ? down / dl : vec2(sign(vWorld.x - corridorCenterX(vS)), 0.0);
    float wX = down.x * down.x;
    float wZ = 1.0 - wX;
    vec2 pa = vec2(vWorld.x * sign(down.x + 1e-4), vWorld.z);
    vec2 pb = vec2(vWorld.z * sign(down.y + 1e-4), vWorld.x);
    // Domain warp breaks the streaks into lumpy, tumbling masses of white water.
    vec2 warp = (vec2(vnoise(p * 0.05 + t * 0.12), vnoise(p * 0.05 - t * 0.1 + 9.0)) - 0.5) * 14.0;
    vec2 qa = pa + warp;
    vec2 qb = pb + warp;
    float f1 = vnoise3(vec3(qa.x * 0.05 - t * 0.9, qa.y * 0.12, t * 0.3)) * wX + vnoise3(vec3(qb.x * 0.05 - t * 0.9, qb.y * 0.12, t * 0.3 + 3.0)) * wZ;
    // Textured white water streaming down the slope (texture v runs downhill).
    vec4 tA = texture2D(uFoamTex, vec2(qa.y / 16.0, qa.x / 16.0 - t * 0.45)) * wX + texture2D(uFoamTex, vec2(qb.y / 16.0, qb.x / 16.0 - t * 0.45)) * wZ;
    vec4 tB = texture2D(uFoamTex, vec2(qa.y / 4.5, qa.x / 4.5 - t * 1.2) + 0.3) * wX + texture2D(uFoamTex, vec2(qb.y / 4.5, qb.x / 4.5 - t * 1.2) + 0.3) * wZ;
    float f2 = tA.r * 0.55 + tB.r * 0.45;
    float f3 = vnoise3(vec3(p * 0.07, t * 0.25));
    float churnF = f1 * 0.45 + f2 * 0.35 + f3 * 0.2;
    // Steep water is aerated white water (like a spillway); the crest boils.
    float steep = smoothstep(0.08, 0.9, vSlope);
    float cover = max(steep * 0.95, smoothstep(0.85, 1.0, rk) * 0.55);
    float ridgeFoam = smoothstep(0.7 - cover * 0.5, 0.82 - cover * 0.35, churnF) * smoothstep(0.0, 0.06, rk + steep * 0.1);
    ridgeFoam *= 0.6 + 0.4 * smoothstep(0.25, 0.7, f2);
    aerated = steep;
    // Where the cascades meet the sea at the foot of the slope.
    float toe = smoothstep(0.003, 0.04, rk) * (1.0 - smoothstep(0.06, 0.22, rk)) * smoothstep(0.35, 0.65, churnF);
    foam = max(foam, max(ridgeFoam, toe));
    N = bumpNormal(vWorld, N, churnF * 3.0 + foam * 1.4, 1.0 - smoothstep(100.0, 900.0, dist));
  }
  foam = clamp(foam, 0.0, 1.0);

  // --- Optics -----------------------------------------------------------------------------
  // Fresnel decides how much of the sky is mirrored; what is not reflected enters the water and
  // is absorbed along the (slanted) path to the sea bed. Output is premultiplied: the sea bed
  // drawn underneath shows through only where light really gets through.
  float cosV = max(dot(N, V), 0.0);
  float F = 0.02 + 0.98 * pow(1.0 - cosV, 5.0);
  F = mix(F, F * 0.6, uStorm);
  F *= 1.0 - 0.6 * aerated; // churning, bubbly water mirrors far less
  vec3 R = reflect(-V, N);
  R.y = abs(R.y) + 0.01;
  vec3 refl = skyColor(R, 0.0);
  float path = depth / max(V.y, 0.12);
  float transmit = exp(-path * 0.3);
  // Light scattered inside the water (colour of the water itself).
  vec3 scatter = mix(vec3(0.03, 0.15, 0.14), vec3(0.003, 0.02, 0.04), 1.0 - exp(-depth * 0.12)) * lightAmt;
  // Tumbling, aerated water glows green-turquoise between the foam (like the walls).
  scatter = mix(scatter, vec3(0.02, 0.17, 0.16) * (lightAmt + 0.05), aerated * 0.85);
  float back = pow(clamp(dot(V, -L) * 0.5 + 0.5, 0.0, 1.0), 3.0);
  float crest = clamp(vWave * 0.25, 0.0, 0.6) + vRidgeK * 0.45;
  scatter += vec3(0.015, 0.16, 0.14) * back * crest * luminance3(uLightColor) * 0.3;
  vec3 colPremul = refl * F + scatter * (1.0 - F) * (1.0 - transmit);
  float alpha = 1.0 - (1.0 - F) * transmit;

  // Sun / moon glitter
  vec3 H = normalize(L + V);
  float ndh = max(dot(N, H), 0.0);
  float spec = pow(ndh, 900.0) * 9.0 + pow(ndh, 90.0) * 0.18;
  colPremul += uLightColor * spec * smoothstep(-0.02, 0.05, L.y) * (1.0 - uStorm * 0.8) * (1.0 - foam);

  // Leading edge of each swash: a thin lacy line of foam sliding up the sand.
  float swashFoam = smoothstep(0.6, 0.95, vSwash) * (1.0 - smoothstep(0.0, 0.25, depth)) * lace;
  float edgeFoam = (1.0 - smoothstep(0.0, 0.12, depth)) * smoothstep(0.4, 0.7, vnoise(p * 3.1 - t * 0.4) * 0.7 + fn * 0.4);
  foam = max(foam, max(swashFoam * 0.9, edgeFoam * 0.8));

  // White water, shaded by its own relief.
  float wrap = clamp(dot(N, L) * 0.5 + 0.5, 0.0, 1.0);
  vec3 foamCol = vec3(0.86, 0.9, 0.92) * (luminance3(uAmbientSky) * (0.45 + 0.4 * wrap) + luminance3(uLightColor) * 0.25 * max(dot(N, L), 0.0) + 0.04);
  float fa = foam * 0.92;
  colPremul = colPremul * (1.0 - fa) + foamCol * fa;
  alpha = alpha * (1.0 - fa) + fa;

  // Feather the very edge of the water against the sand.
  float edgeK = smoothstep(-0.03, 0.06, vDepth);
  colPremul *= edgeK;
  alpha *= edgeK;

  // Fog (the sea bed underneath is fogged by its own material).
  float fogK = clamp(fogFactorExp2(dist), 0.0, 1.0);
  colPremul = colPremul * (1.0 - fogK) + uFogColor * fogK;
  alpha = mix(alpha, 1.0, fogK);
  gl_FragColor = vec4(colPremul, alpha);
  ${xr}
}
`,Ui=class t{constructor(e,n){A(this,`mesh`,void 0),A(this,`material`,void 0),this.material=new _({name:`Ocean`,uniforms:{...e},vertexShader:Vi,fragmentShader:Hi,transparent:!0,depthWrite:!0,premultipliedAlpha:!0}),this.mesh=new l(t.buildGeometry(n),this.material),this.mesh.name=`Ocean`,this.mesh.renderOrder=10,this.mesh.frustumCulled=!1,this.mesh.userData.hotspot=`sea`}static buildGeometry(t){let n=t.waterSpacing,r=I,i=xi([[-240,320,3*n]],1.06,-L,L),a=xi([[-(r+120),-(r-320),3*n],[-(r-320),-320,7.5*n],[-320,120,3*n]],1.06,-(r+L),L);for(let e of[12.7,13,13+pt,r-13-pt,r-13,r-13+.3])a.push(-e);a.sort((e,t)=>e-t);for(let e=a.length-1;e>0;e--)a[e]-a[e-1]<.05&&a.splice(e,1);let o=i.length,s=a.length,c=new Float32Array(o*s*3);for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=(e*o+t)*3;c[n]=i[t],c[n+1]=0,c[n+2]=a[e]}let l=o*s,u=(o-1)*(s-1)*6,d=l>65535?new Uint32Array(u):new Uint16Array(u),f=0;for(let e=0;e<s-1;e++)for(let t=0;t<o-1;t++){let n=e*o+t,r=n+1,i=n+o,a=i+1;d[f++]=n,d[f++]=i,d[f++]=r,d[f++]=r,d[f++]=i,d[f++]=a}let p=new de;return p.setAttribute(`position`,new E(c,3)),p.setIndex(new E(d,1)),p.boundingSphere=new e(new C(0,0,-I/2),L*1.5),p}setQuality(e){let n=this.mesh.geometry;this.mesh.geometry=t.buildGeometry(e),n.dispose()}dispose(){this.mesh.geometry.dispose(),this.material.dispose()}},Wi=22,Gi=class{constructor(e){A(this,`shared`,void 0),A(this,`st`,Vt()),A(this,`ph`,`calm`),A(this,`anim`,null),A(this,`settle`,0),A(this,`time`,0),A(this,`listeners`,new Set),this.shared=e,this.write()}get state(){return this.st}get phase(){return this.ph}get openness(){return Yt(this.st)}get isFullyOpen(){return Xt(this.st)}get animationProgress(){return this.anim?O(this.anim.t):1}onPhaseChange(e){return this.listeners.add(e),()=>this.listeners.delete(e)}setPhase(e){if(e!==this.ph){this.ph=e;for(let t of[...this.listeners])t(e)}}setCalm(){this.anim=null,this.st.openFront=0,this.st.closeFront=0,this.st.turbulence=0,this.settle=0,this.write(),this.setPhase(`calm`)}setOpen(){this.anim=null,this.st.openFront=zt,this.st.closeFront=0,this.st.turbulence=0,this.settle=0,this.write(),this.setPhase(`open`)}open(e=14){(this.ph===`closing`||this.ph===`settling`)&&(this.st.closeFront=0,this.st.openFront=0,this.st.turbulence=0),this.isFullyOpen?this.setPhase(`open`):(this.anim={kind:`open`,t:0,duration:Math.max(.1,e),from:this.st.openFront},this.setPhase(`opening`))}close(e=9){this.ph!==`calm`&&this.ph!==`settling`&&(this.isFullyOpen||(this.st.openFront=zt),this.anim={kind:`close`,t:0,duration:Math.max(.1,e),from:0},this.st.closeFront=0,this.setPhase(`closing`))}triggerRipple(e,t){this.shared.uRipple.value.set(e,t,this.time,1)}update(e,t){this.time=t;let n=this.anim;n?(n.t=Math.min(1,n.t+e/n.duration),n.kind===`open`?(this.st.openFront=n.from+(zt-n.from)*Re(n.t),n.t>=1&&(this.anim=null,this.st.openFront=zt,this.setPhase(`open`))):(this.st.closeFront=Bt*Fe(n.t),this.st.turbulence=Math.max(this.st.turbulence,O(n.t*1.4)),n.t>=1&&(this.anim=null,this.st.openFront=0,this.st.closeFront=0,this.st.turbulence=1,this.settle=0,this.setPhase(`settling`)))):this.ph===`settling`&&(this.settle+=e,this.st.turbulence=1-O(this.settle/Wi),this.st.turbulence<=0&&(this.st.turbulence=0,this.setPhase(`calm`)));let r=this.shared.uRipple.value;r.w>0&&t-r.z>10&&(r.w=0),this.write()}write(){this.shared.uOpenFront.value=this.st.openFront,this.shared.uCloseFront.value=this.st.closeFront,this.shared.uTurbulence.value=this.st.turbulence}dispose(){this.listeners.clear()}},Ki=`
/**
 * Churning water on a wall face. q = (along-wall metres, height metres).
 * Some regions stream downwards, others boil upwards; a slow mask moves the
 * boundary between them so the face never looks static.
 */
float wallTurbFlow(vec2 q, float t, float hi, out float mask) {
  vec3 p = vec3(q.x * 0.035, q.y * 0.04, t * 0.22);
  vec2 w = vec2(vnoise3(p + vec3(0.0, 0.0, 1.3)), vnoise3(p * 1.7 + vec3(5.2, 1.3, 0.0))) - 0.5;
  float down = vnoise3(vec3(q.x * 0.07 + w.x * 2.4, q.y * 0.05 + t * 0.85 + w.y * 2.4, t * 0.3));
  float up = vnoise3(vec3(q.x * 0.07 - w.y * 2.4, q.y * 0.05 - t * 0.6 + w.x * 2.4, t * 0.3 + 7.0));
  mask = smoothstep(0.3, 0.7, vnoise(vec2(q.x * 0.011 + 3.0, t * 0.04)));
  float big = mix(down, up, mask);
  float detail = 0.0;
  if (hi > 0.5) {
    detail = vnoise3(vec3(q.x * 0.23 + w.x * 3.0, q.y * 0.17 + mix(t * 2.2, -t * 1.6, mask), t * 0.6)) - 0.5;
  }
  return big + detail * 0.38;
}
float wallTurb(vec2 q, float t, float hi) {
  float m;
  return wallTurbFlow(q, t, hi, m);
}
`,qi=`
/** Wall point at along-coordinate s, height parameter v (0 floor .. 1 crest). */
vec3 wallPoint(float s, float v, float side) {
  // Heights and widths come from the full-height part of the passage, so the walls
  // stand at full height right up to the end cliffs.
  float sP = s;
  // 0 at the ends of the walls (where they meet the end faces), 1 from 30 m inside.
  float endK = smoothstep(WATER_EDGE_S, WATER_EDGE_S + 30.0, min(sP, PASSAGE_LENGTH - sP));
  s = clamp(s, WATER_EDGE_S + SHORE_RAMP + 0.05, PASSAGE_LENGTH - WATER_EDGE_S - SHORE_RAMP - 0.05);
  float o = seaOpen(s);
  float c = seaClose(s);
  float W0 = PASSAGE_HALF_WIDTH * o;
  float bottomX = W0 * (1.0 - c);
  // While closing, the crest leads: it curls inwards and meets the other side first.
  float lead = smooth01(c * 1.7);
  float topX = W0 * (1.0 - lead) - 5.0 * lead;
  float floorY = passageFloorY(s) - 1.5;
  float topY = wallTopY(s) + 0.8;
  // While closing, the crest heaves up before it falls.
  topY += WALL_HEIGHT * 0.2 * sin(3.14159 * clamp(c * 1.3, 0.0, 1.0)) * shoreRamp(s) * o;
  // Boiling crest line.
  float churn = (vnoise(vec2(s * 0.08 + side * 31.0, uTime * 1.1)) - 0.5) * 3.0 + (vnoise(vec2(s * 0.3, uTime * 2.4)) - 0.5) * 1.2;
  topY += churn * smoothstep(0.85, 1.0, v) * o * shoreRamp(s) * endK;
  float y = mix(floorY, topY, v);
  // Sheer, vertical face (the crest leads only while closing).
  float x = mix(bottomX, topX, smoothstep(0.0, 1.0, v));
  // Churning foot spreading a little into the passage.
  x -= (1.0 - smoothstep(0.0, 0.05, v)) * 2.2 * o * (1.0 - c) * endK;
  // Heaving: large churning bulges in and out of the face.
  float sv = smoothstep(0.0, 0.08, v) * (1.0 - smoothstep(0.93, 1.0, v));
  float heave = (wallTurb(vec2(s + side * 41.0, y), uTime, 0.0) - 0.5) * 6.5;
  heave += sin(s * 0.05 - uTime * 1.3 + side * 1.7 + y * 0.03) * 1.2;
  x += heave * sv * o * (1.0 - c) * endK;
  // Collapse to an invisible line where the sea is not parted.
  float alive = step(0.0008, o * (1.0 - c * c * c));
  y = mix(floorY, y, alive);
  x = mix(0.0, x, alive);
  return vec3(corridorCenterX(sP) + side * x, y, -sP);
}
`,Ji=`
${X}
${Z}
${vr}
${Ki}
${qi}
varying vec3 vWorld;
varying vec3 vNormal;
varying float vS;
varying float vSide;
varying float vTop;
varying float vFloor;
varying float vU;
varying vec3 vAlong;
void main() {
  float s = position.x;
  float v = position.y;
  float side = position.z;
  vec3 P = wallPoint(s, v, side);
  vec3 Ps1 = wallPoint(s + 1.2, v, side);
  vec3 Pv1 = wallPoint(s, min(v + 0.012, 1.0), side);
  vec3 Pv0 = wallPoint(s, max(v - 0.012, 0.0), side);
  vec3 N = cross(Ps1 - P, Pv1 - Pv0);
  N = length(N) > 1e-6 ? normalize(N) * -side : vec3(-side, 0.0, 0.0);
  vNormal = N;
  vWorld = P;
  float sH = clamp(s, WATER_EDGE_S + SHORE_RAMP + 0.05, PASSAGE_LENGTH - WATER_EDGE_S - SHORE_RAMP - 0.05);
  vS = sH;
  vSide = side;
  vTop = wallTopY(sH);
  vFloor = passageFloorY(s);
  vU = s + side * 41.0;
  vAlong = vec3(0.0, 0.0, -1.0);
  gl_Position = projectionMatrix * viewMatrix * vec4(P, 1.0);
}
`,Yi=`
${X}
${Z}
${vr}
${Ki}
${qi}
attribute vec2 aCap;
varying vec3 vWorld;
varying vec3 vNormal;
varying float vS;
varying float vSide;
varying float vTop;
varying float vFloor;
varying float vU;
varying vec3 vAlong;

/**
 * Outline of an end, in (lateral distance from the passage centre, depth d into the sea
 * from the face's base line). u = 0 is the end of the passage wall at d = END_ROUND;
 * the outline turns through a quarter circle of radius END_ROUND to d = 0, then runs
 * straight out across the heaped water.
 */
void capOutline(float u, float W, out float lat, out float d, out float cT, out float sT, out float arcLen) {
  float span = RIDGE_PLATEAU + RIDGE_FALLOFF;
  float R = END_ROUND;
  float arc = 1.5707963 * R;
  float total = arc + span - R;
  float uA = arc / total;
  float th = 1.5707963 * clamp(u / uA, 0.0, 1.0);
  cT = cos(th);
  sT = sin(th);
  lat = W + R - R * cT + max(u - uA, 0.0) * total;
  d = R - R * sT;
  arcLen = u * total;
}

vec3 capPoint(float u, float v, float side, float endDir, out float top, out float floorY) {
  float sWeld = endDir > 0.0 ? WATER_EDGE_S : PASSAGE_LENGTH - WATER_EDGE_S;
  float sBase = sWeld - endDir * END_ROUND;
  float sIn = sWeld + endDir * (SHORE_RAMP + 2.0);
  float o = seaOpen(sIn);
  float c = seaClose(sIn);
  float lat;
  float d;
  float cT;
  float sT;
  float arcLen;
  capOutline(u, corridorHalfWidth(sIn), lat, d, cT, sT, arcLen);
  top = ridgeHeight(sIn, lat) + 0.6;
  float sPt = sBase + endDir * d;
  float cx = corridorCenterX(sPt);
  floorY = min(terrainHeightTex(vec2(cx + side * lat, -sPt)), 0.0) - 1.2;
  // Weld the start of the outline to the end of the passage wall (same function, same points).
  vec3 Wend = wallPoint(sWeld, v, side);
  float weld = 1.0 - smoothstep(0.0, 0.035, u);
  top = mix(top, wallTopY(sIn) + 0.8, weld);
  floorY = mix(floorY, passageFloorY(sIn) - 1.5, weld);
  // Boiling crest line.
  top += (vnoise(vec2(arcLen * 0.09 + endDir * 13.0 + side * 3.0, uTime * 1.1)) - 0.5) * 2.5 * smoothstep(0.85, 1.0, v) * o * (1.0 - weld);
  float y = mix(floorY, top, v);
  lat = mix(lat, side * (Wend.x - cx), weld);
  y = mix(y, Wend.y, weld);
  // The crest rolls over and back into the sea (towards the heaped water behind), so the
  // top meets the raised sea surface instead of ending in a knife edge.
  float Bv = min(END_ROUND, 0.6 * max(top - floorY, 0.0));
  float yr = clamp((y - (top - Bv)) / max(Bv, 1e-3), 0.0, 1.0);
  float roll = 1.0 - sqrt(max(1.0 - yr * yr, 0.0));
  d += roll * (END_ROUND + 0.8) * sT;
  // Heave: churning bulges out of the face (never back into the water behind it).
  float heave = clamp((wallTurb(vec2(arcLen, y), uTime, 0.0) - 0.35) * 4.0, 0.0, 2.6);
  heave += (0.5 + 0.5 * sin(arcLen * 0.07 - uTime * 1.2 + y * 0.04)) * 0.8;
  float sv = smoothstep(0.0, 0.1, v) * (1.0 - smoothstep(0.82, 0.97, v)) * (1.0 - weld);
  heave *= sv * o * (1.0 - c);
  lat -= heave * cT;
  d -= heave * sT;
  float alive = step(0.5, top - 0.6);
  y = mix(floorY, y, alive);
  return vec3(cx + side * lat * alive, y, -(sBase + endDir * d));
}

void main() {
  float u = position.x;
  float v = position.y;
  float side = aCap.x;
  float endDir = aCap.y;
  float top;
  float floorY;
  float t2;
  float f2;
  vec3 P = capPoint(u, v, side, endDir, top, floorY);
  vec3 Pu = capPoint(min(u + 0.004, 1.0), v, side, endDir, t2, f2);
  vec3 Pu0 = capPoint(max(u - 0.004, 0.0), v, side, endDir, t2, f2);
  vec3 Pv = capPoint(u, min(v + 0.008, 1.0), side, endDir, t2, f2);
  vec3 Pv0 = capPoint(u, max(v - 0.008, 0.0), side, endDir, t2, f2);
  float lat;
  float d;
  float cT;
  float sT;
  float arcLen;
  float sWeld = endDir > 0.0 ? WATER_EDGE_S : PASSAGE_LENGTH - WATER_EDGE_S;
  float sIn = sWeld + endDir * (SHORE_RAMP + 2.0);
  capOutline(u, corridorHalfWidth(sIn), lat, d, cT, sT, arcLen);
  // Outward direction of the outline (towards the beach and the passage) in world space.
  vec3 outward = vec3(-side * cT, 0.0, endDir * sT);
  vec3 N = cross(Pu - Pu0, Pv - Pv0);
  N = length(N) > 1e-6 ? normalize(N) : outward;
  if (dot(N, outward) < 0.0) N = -N;
  vNormal = N;
  vWorld = P;
  vS = sIn;
  vSide = side;
  vTop = top;
  vFloor = floorY + 1.2;
  // Texture coordinate and flow direction continue seamlessly from the passage wall.
  vU = sWeld + side * 41.0 - endDir * arcLen;
  vAlong = -endDir * vec3(side * sT, 0.0, endDir * cT);
  gl_Position = projectionMatrix * viewMatrix * vec4(P, 1.0);
}
`,Xi=`
${X}
${Z}
${vr}
${yr}
${br}
${Sr}
${Cr}
${Ki}
varying vec3 vWorld;
varying vec3 vNormal;
varying float vS;
varying float vSide;
varying float vTop;
varying float vFloor;
varying float vU;
varying vec3 vAlong;
uniform float uCalmFlow;

void main() {
  vec3 toCam = uCameraPos - vWorld;
  float dist = length(toCam);
  vec3 V = toCam / max(dist, 1e-3);
  vec3 N0 = normalize(vNormal);
  bool outer = dot(N0, V) < 0.0;
  if (outer) N0 = -N0;

  float t = uTime;
  float y = vWorld.y;
  float s = vS;
  float belowCrest = max(vTop - y, 0.0);
  float aboveFloor = max(y - vFloor, 0.0);
  vec3 L = normalize(uLightDir);
  float sunK = luminance3(uLightColor);
  float skyK = luminance3(uAmbientSky);
  float c = seaClose(s);
  float hiQ = step(0.5, uQuality);
  float near = 1.0 - smoothstep(120.0, 900.0, dist);

  // --- Churning field ----------------------------------------------------------------
  vec2 q = vec2(vU, y);
  float flowMask;
  float turb = wallTurbFlow(q, t, 0.0, flowMask);
  // Water falls down most of the face; in some regions it boils upwards.
  float dir = mix(1.0, -0.65, flowMask);
  float speedK = 1.0 - 0.6 * uCalmFlow;
  // Three scales of foam texture streaming with the water (about 5 m/s). Falling water draws
  // foam out into streaks and curtains, so the texture is stretched along the flow.
  // Mipmapped: crisp up close, no shimmer in the distance.
  float fall = t * dir * speedK;
  vec4 fA = texture2D(uFoamTex, vec2(q.x / 46.0, q.y / 120.0 + fall * 0.042));
  vec4 fB = texture2D(uFoamTex, vec2(q.x / 11.0 + 0.37, q.y / 34.0 + fall * 0.15));
  vec4 fC = texture2D(uFoamTex, vec2(q.x / 3.2 + 0.71, q.y / 8.5 + fall * 0.6));
  float nearC = 1.0 - smoothstep(25.0, 140.0, dist);
  float pattern = fA.r * 0.3 + fB.r * 0.45 + mix(0.45, fC.r, nearC) * 0.25;
  // Where the water is white: heaviest at the crest and the foot, in big churning masses between.
  float cover = smoothstep(0.38, 0.75, turb) * 0.7 + fA.a * 0.2 + 0.1;
  cover = max(cover, smoothstep(vTop - 9.0, vTop + 0.5, y) * 0.95);
  cover = max(cover, (1.0 - smoothstep(vFloor - 1.0, vFloor + 6.0, y)) * 0.9);
  cover = max(cover, c * 1.1); // violent while collapsing
  cover = clamp(cover, 0.0, 1.0);
  float white = smoothstep(1.02 - cover - 0.08, 1.02 - cover + 0.16, pattern);
  // Aerated water around the foam: bubbles mixed into the water make it milky turquoise.
  float aer = smoothstep(1.02 - cover - 0.38, 1.02 - cover + 0.02, pattern) * (1.0 - white);
  // Glassy sheets of falling water in the clear areas (thin streaks of light).
  float sheets = smoothstep(0.55, 0.85, fB.b) * (1.0 - white) * (0.4 + 0.6 * exp(-belowCrest / 35.0)) * step(0.0, dir);

  // Relief: textured ripples and foam that stands proud of the water.
  vec3 rB = texture2D(uRippleTex, vec2(q.x / 9.0, q.y / 9.0 + t * 0.35 * dir * speedK)).xyz * 2.0 - 1.0;
  vec3 rC = texture2D(uRippleTex, vec2(q.x / 2.6 + 0.5, q.y / 2.6 + t * 1.1 * dir * speedK)).xyz * 2.0 - 1.0;
  vec3 up = vec3(0.0, 1.0, 0.0);
  vec3 along = normalize(vAlong - N0 * dot(vAlong, N0));
  vec2 slope = rB.xy * 1.3 + rC.xy * 0.8 * nearC + (vec2(fB.g, fC.g) - 0.5) * (white + aer * 0.5) * 0.9;
  vec3 N = normalize(N0 + along * slope.x + up * slope.y);
  N = bumpNormal(vWorld, N, turb * 2.0, 0.6);

  // --- Lighting ----------------------------------------------------------------------
  float vis = wallShadow(vWorld + N0 * 1.0, L);
  float lightAbove = smoothstep(-0.05, 0.1, L.y);
  float backlit = pow(max(dot(-V, L), 0.0), 2.5) * lightAbove;
  float ndl = max(dot(N, L), 0.0);
  float wrap = max(dot(N, L) * 0.5 + 0.5, 0.0);

  // Water between the foam: deep, translucent blue-green, brighter towards the crest.
  float inLight = exp(-belowCrest * 0.03);
  vec3 deep = vec3(0.002, 0.014, 0.026);
  vec3 lit = vec3(0.02, 0.17, 0.17);
  vec3 water = mix(deep, lit, inLight) * (skyK * 0.75 + 0.1);
  // Interior: suspended bubbles and currents seen through the surface (two parallax layers).
  vec3 ray = -V;
  float cosIn = max(dot(ray, -N0), 0.25);
  vec3 cloud = vec3(0.0);
  for (int i = 0; i < 2; i++) {
    float d = 3.0 + float(i) * 9.0;
    vec3 Qp = vWorld + ray * (d / cosIn);
    float n = vnoise3(vec3(dot(Qp, vAlong) * 0.08, Qp.y * 0.07 - t * 0.5 * (float(i) - 0.5), d * 0.1 + t * 0.15));
    cloud += vec3(0.07, 0.3, 0.27) * smoothstep(0.55, 0.85, n) * exp(-d * 0.06) * exp(-max(vTop - Qp.y, 0.0) * 0.03);
  }
  water += cloud * (skyK * 0.35 + sunK * 0.1) * near;
  water += vec3(0.02, 0.2, 0.17) * inLight * sunK * (0.06 + backlit * 0.5);
  water += vec3(0.03, 0.16, 0.15) * ndl * vis * sunK * 0.25;

  // Foam: bright, self-shadowed white water.
  float foamShade = 0.6 + 0.4 * wrap;
  vec3 foam = vec3(0.9, 0.94, 0.95) * (skyK * 0.85 * foamShade + sunK * 0.38 * ndl * vis + 0.05);
  foam += vec3(0.4, 0.75, 0.7) * backlit * sunK * 0.14 * (1.0 - white * 0.5);
  // Aerated water: milky turquoise, lit through by scattered light.
  vec3 aerCol = vec3(0.17, 0.44, 0.42) * (skyK * 0.6 * foamShade + sunK * 0.2 * wrap * vis + 0.025);
  aerCol += vec3(0.1, 0.4, 0.34) * backlit * sunK * 0.2;
  vec3 col = mix(water, aerCol, aer * 0.85);
  // Thin foam lets the green water glow through.
  col = mix(col, foam, white * (0.7 + 0.3 * smoothstep(0.4, 1.0, white)));
  col += vec3(0.25, 0.45, 0.45) * sheets * (skyK * 0.25 + sunK * 0.12 * (0.3 + backlit));

  // Sky reflection on the wet surface (modest; aerated water reflects less).
  vec3 R = reflect(-V, N);
  R.y = abs(R.y) + 0.02;
  float F = 0.02 + 0.98 * pow(1.0 - max(dot(N, V), 0.0), 5.0);
  float clear = (1.0 - white) * (1.0 - 0.6 * aer);
  col = mix(col, skyColor(R, 0.0) * 0.6, min(F, 0.6) * 0.3 * clear);
  // Sun glints on the rippled surface (tight, sparkling; not a broad plastic sheen).
  vec3 H = normalize(L + V);
  col += uLightColor * pow(max(dot(N, H), 0.0), 400.0) * 1.2 * vis * lightAbove * clear;

  if (outer) col *= 0.75;
  col = applyFog(col, vWorld);
  gl_FragColor = vec4(col, 1.0);
  ${xr}
}
`,Zi=class t{constructor(e,n){A(this,`mesh`,void 0),A(this,`caps`,void 0),A(this,`material`,void 0),A(this,`capMaterial`,void 0),A(this,`calmFlow`,{value:0}),this.material=new _({name:`WaterWalls`,uniforms:{...e,uCalmFlow:this.calmFlow},vertexShader:Ji,fragmentShader:Xi,side:2}),this.mesh=new l(t.buildGeometry(n),this.material),this.mesh.name=`WaterWalls`,this.mesh.renderOrder=20,this.mesh.frustumCulled=!1,this.mesh.castShadow=!1,this.mesh.receiveShadow=!1,this.mesh.userData.hotspot=`waterWalls`,this.capMaterial=new _({name:`WaterWallCaps`,uniforms:{...e,uCalmFlow:this.calmFlow},vertexShader:Yi,fragmentShader:Xi,side:2}),this.caps=new l(t.buildCapGeometry(n),this.capMaterial),this.caps.name=`WaterWallCaps`,this.caps.renderOrder=20,this.caps.frustumCulled=!1,this.caps.userData.hotspot=`waterWalls`}static buildCapGeometry(t){let n=Math.max(16,Math.round(48/t.wallSpacing)),i=Math.max(16,Math.round(40/t.wallSpacing)),a=[],o=[],s=[],c=0;for(let e of[1,-1])for(let t of[-1,1]){for(let r=0;r<=n;r++){let s=(r/n)**1.6;for(let n=0;n<=i;n++)a.push(s,.5-.5*Math.cos(Math.PI*n/i),0),o.push(t,e)}for(let e=0;e<n;e++)for(let t=0;t<i;t++){let n=c+e*(i+1)+t,r=n+1,a=n+i+1,o=a+1;s.push(n,a,r,r,a,o)}c+=(n+1)*(i+1)}let l=new de;return l.setAttribute(`position`,new r(a,3)),l.setAttribute(`aCap`,new r(o,2)),l.setIndex(s),l.boundingSphere=new e(new C(0,0,-I/2),I),l}static buildGeometry(t){let n=Math.max(240,Math.round(I/(2.2*t.wallSpacing))),r=Math.max(18,Math.round(52/t.wallSpacing)),i=[];for(let e=0;e<=r;e++){let t=e/r;i.push(.5-.5*Math.cos(Math.PI*t))}let a=(n+1)*(r+1),o=new Float32Array(a*2*3),s=new Uint32Array(n*r*6*2),c=0,l=0;for(let e of[-1,1]){for(let t=0;t<=n;t++){let a=13+(I-26)*t/n;for(let n=0;n<=r;n++){let s=(c+t*(r+1)+n)*3;o[s]=a,o[s+1]=i[n],o[s+2]=e}}for(let e=0;e<n;e++)for(let t=0;t<r;t++){let n=c+e*(r+1)+t,i=n+1,a=n+r+1,o=a+1;s[l++]=n,s[l++]=a,s[l++]=i,s[l++]=i,s[l++]=a,s[l++]=o}c+=a}let u=new de;return u.setAttribute(`position`,new E(o,3)),u.setIndex(new E(s,1)),u.boundingSphere=new e(new C(0,0,-I/2),I),u}setQuality(e){let n=this.mesh.geometry;this.mesh.geometry=t.buildGeometry(e),n.dispose();let r=this.caps.geometry;this.caps.geometry=t.buildCapGeometry(e),r.dispose()}set visible(e){this.mesh.visible=e,this.caps.visible=e}dispose(){this.mesh.geometry.dispose(),this.material.dispose(),this.caps.geometry.dispose(),this.capMaterial.dispose()}},Qi=class{constructor(e){A(this,`object`,new te),A(this,`sea`,void 0),A(this,`ocean`,void 0),A(this,`walls`,void 0),A(this,`pickables`,[]),A(this,`quality`,void 0),this.quality=e.quality,this.object.name=`Water`,this.sea=new Gi(e.shared),this.ocean=new Ui(e.shared,e.quality),this.walls=new Zi(e.shared,e.quality),this.object.add(this.ocean.mesh,this.walls.mesh,this.walls.caps)}update(e){this.sea.update(e.dt,e.time),this.walls.calmFlow.value=+!!e.reducedMotion,this.walls.visible=this.sea.phase!==`calm`&&this.sea.phase!==`settling`}setQuality(e){e.waterSpacing!==this.quality.waterSpacing&&this.ocean.setQuality(e),e.wallSpacing!==this.quality.wallSpacing&&this.walls.setQuality(e),this.quality=e}dispose(){this.ocean.dispose(),this.walls.dispose(),this.sea.dispose(),this.object.removeFromParent()}},$i=`
${Z}
float hashP(vec2 c, vec2 P) { return hash12(mod(c, P) + 0.17); }
vec2 hash2P(vec2 c, vec2 P) { return hash22(mod(c, P) + 0.31); }
float vnoiseP(vec2 p, vec2 P) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hashP(i, P), hashP(i + vec2(1.0, 0.0), P), u.x),
             mix(hashP(i + vec2(0.0, 1.0), P), hashP(i + vec2(1.0, 1.0), P), u.x), u.y);
}
float fbmP(vec2 uv, float base) {
  float s = 0.0; float a = 0.5; float n = base; float norm = 0.0;
  for (int i = 0; i < 5; i++) { s += a * vnoiseP(uv * n, vec2(n)); norm += a; n *= 2.0; a *= 0.5; }
  return s / norm;
}
/** Periodic Worley noise: x = distance to nearest feature, y = to second nearest. */
vec2 worleyP(vec2 uv, float cells) {
  vec2 p = uv * cells;
  vec2 i = floor(p);
  vec2 f = fract(p);
  float F1 = 8.0;
  float F2 = 8.0;
  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 n = vec2(float(x), float(y));
      vec2 o = hash2P(i + n, vec2(cells));
      vec2 d = n + o - f;
      float dd = dot(d, d);
      if (dd < F1) { F2 = F1; F1 = dd; } else if (dd < F2) { F2 = dd; }
    }
  }
  return sqrt(vec2(F1, F2));
}
`,ea=`
${$i}
varying vec2 vUv;
void main() {
  vec2 uv = vUv;
  float dens = fbmP(uv + 0.13, 4.0);
  // Lace: bright filaments along the borders of foam cells, at two scales.
  vec2 w1 = worleyP(uv, 7.0);
  vec2 w2 = worleyP(uv + 0.37, 19.0);
  float lace1 = 1.0 - smoothstep(0.0, 0.16, w1.y - w1.x);
  float lace2 = 1.0 - smoothstep(0.0, 0.12, w2.y - w2.x);
  // Bubbles: small dark holes inside the foam.
  vec2 w3 = worleyP(uv + 0.71, 52.0);
  float holes = smoothstep(0.12, 0.3, w3.x);
  float patches = smoothstep(0.55, 0.78, dens);
  float foam = clamp((lace1 * 0.65 + lace2 * 0.55) * smoothstep(0.25, 0.6, dens) + patches, 0.0, 1.0);
  foam *= 0.55 + 0.45 * holes;
  float height = foam * 0.7 + (1.0 - w2.x) * 0.3;
  // Streaks of falling sheets: stretched vertically.
  float streak = vnoiseP(vec2(uv.x * 64.0, uv.y * 3.0), vec2(64.0, 3.0)) * 0.7 + vnoiseP(vec2(uv.x * 23.0, uv.y * 2.0 + 0.5), vec2(23.0, 2.0)) * 0.3;
  gl_FragColor = vec4(foam, height, streak, fbmP(uv + 0.61, 2.0));
}
`,ta=`
${$i}
varying vec2 vUv;
float h(vec2 uv) {
  vec2 w = worleyP(uv, 11.0);
  return fbmP(uv, 8.0) * 0.6 + (1.0 - w.x) * 0.25 + vnoiseP(uv * 40.0, vec2(40.0)) * 0.15;
}
void main() {
  float e = 1.0 / 1024.0;
  float h0 = h(vUv);
  float hx = h(vUv + vec2(e, 0.0));
  float hy = h(vUv + vec2(0.0, e));
  vec2 g = vec2(hx - h0, hy - h0) / e * 0.012;
  vec3 n = normalize(vec3(-g, 1.0));
  gl_FragColor = vec4(n.xy * 0.5 + 0.5, h0, 1.0);
}
`,na=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;function ra(e,t,r){let i=new xe(r,r,{type:ye,format:d,generateMipmaps:!0,minFilter:g,magFilter:m,wrapS:ae,wrapT:ae,depthBuffer:!1,stencilBuffer:!1});i.texture.anisotropy=Math.min(8,e.capabilities.getMaxAnisotropy()),i.texture.colorSpace=``;let a=new _({vertexShader:na,fragmentShader:t,depthTest:!1,depthWrite:!1}),o=new l(new c(2,2),a),s=new oe;s.add(o);let u=new n(-1,1,1,-1,0,1),f=e.getRenderTarget(),p=e.toneMapping;return e.toneMapping=0,e.setRenderTarget(i),e.render(s,u),e.setRenderTarget(f),e.toneMapping=p,o.geometry.dispose(),a.dispose(),i}function ia(e,t=1024){let n=ra(e,ea,t),r=ra(e,ta,t);return n.texture.userData.shared=!0,r.texture.userData.shared=!0,{foam:n.texture,ripple:r.texture,dispose(){n.dispose(),r.dispose()}}}var aa=class{constructor(e,t,n){A(this,`renderer`,void 0),A(this,`scene`,void 0),A(this,`camera`,void 0),A(this,`composer`,null),A(this,`bloom`,null),A(this,`width`,1),A(this,`height`,1),this.renderer=e,this.scene=t,this.camera=n}get enabled(){return this.composer!==null}setEnabled(e){if(e===this.enabled)return;if(!e){this.disposeComposer();return}let t=new xe(1,1,{type:a,samples:4,depthBuffer:!0,stencilBuffer:!1}),n=new me(this.renderer,t);n.addPass(new ve(this.scene,this.camera)),this.bloom=new Ee(new T(256,256),.22,.45,1.6),n.addPass(this.bloom),n.addPass(new we),this.composer=n,this.setSize(this.width,this.height)}setSize(e,t){this.width=Math.max(1,e),this.height=Math.max(1,t),this.composer&&(this.composer.setPixelRatio(this.renderer.getPixelRatio()),this.composer.setSize(this.width,this.height))}render(){this.composer?this.composer.render():this.renderer.render(this.scene,this.camera)}disposeComposer(){if(this.composer){for(let e of this.composer.passes)e.dispose();this.composer.renderTarget1.dispose(),this.composer.renderTarget2.dispose(),this.composer=null,this.bloom=null}}dispose(){this.disposeComposer()}},oa={low:{level:`low`,maxPixelRatio:1.25,minPixelRatio:.6,shadows:!1,shadowMapSize:1024,terrainSpacing:2.2,waterSpacing:2,wallSpacing:2,particleScale:.35,crowdCount:160,pursuerCount:90,vegetationScale:.4,heightTexSize:320},medium:{level:`medium`,maxPixelRatio:1.6,minPixelRatio:.75,shadows:!0,shadowMapSize:1024,terrainSpacing:1.5,waterSpacing:1.4,wallSpacing:1.4,particleScale:.65,crowdCount:320,pursuerCount:160,vegetationScale:.7,heightTexSize:448},high:{level:`high`,maxPixelRatio:2,minPixelRatio:.85,shadows:!0,shadowMapSize:2048,terrainSpacing:1,waterSpacing:1,wallSpacing:1,particleScale:1,crowdCount:520,pursuerCount:240,vegetationScale:1,heightTexSize:512}};function sa(e){let t=navigator,n;try{n=window.matchMedia(`(pointer: coarse)`).matches||navigator.maxTouchPoints>0}catch{n=navigator.maxTouchPoints>0}let r=navigator.userAgent||``,i=/Android|iPhone|iPad|iPod|Mobile/i.test(r)||/Macintosh/.test(r)&&navigator.maxTouchPoints>1,a=Math.min(window.screen?.width??1024,window.screen?.height??768)<600;return{touch:n,smallScreen:a,mobileUA:i,lowMemory:typeof t.deviceMemory==`number`&&t.deviceMemory<=4,cores:navigator.hardwareConcurrency||4,dpr:window.devicePixelRatio||1,maxTextureSize:e?e.getParameter(e.MAX_TEXTURE_SIZE):4096}}function ca(e){return e.smallScreen||e.mobileUA&&e.lowMemory?`low`:e.mobileUA||e.touch||e.cores<=4?`medium`:`high`}var la=class{constructor(e=.6){A(this,`minScale`,void 0),A(this,`avg`,1/60),A(this,`cooldown`,2),A(this,`scale`,1),this.minScale=e}reset(){this.scale=1,this.avg=1/60,this.cooldown=2}setMin(e){this.minScale=e,this.scale=Math.max(this.scale,e)}update(e){if(e<=0||e>.5||(this.avg+=(e-this.avg)*.05,this.cooldown-=e,this.cooldown>0))return!1;let t=1/this.avg;return t<42&&this.scale>this.minScale?(this.scale=Math.max(this.minScale,this.scale-.1),this.cooldown=1.5,!0):t>57&&this.scale<1&&(this.scale=Math.min(1,this.scale+.05),this.cooldown=3,!0)}},ua=()=>new Promise(e=>{let t=!1,n=()=>{t||(t=!0,e())};requestAnimationFrame(n),window.setTimeout(n,60)}),da=70,fa=`/`,pa=class{constructor(e){A(this,`opts`,void 0),A(this,`renderer`,void 0),A(this,`post`,null),A(this,`scene`,new oe),A(this,`camera`,new y(da,1,.5,3e4)),A(this,`shared`,Bi()),A(this,`settings`,lr()),A(this,`device`,void 0),A(this,`quality`,oa.medium),A(this,`autoLevel`,`medium`),A(this,`ui`,void 0),A(this,`env`,void 0),A(this,`water`,void 0),A(this,`effects`,void 0),A(this,`crowd`,void 0),A(this,`pursuers`,void 0),A(this,`markers`,void 0),A(this,`input`,void 0),A(this,`collision`,void 0),A(this,`player`,void 0),A(this,`picker`,void 0),A(this,`rig`,void 0),A(this,`director`,void 0),A(this,`audio`,new Ke),A(this,`adaptive`,new la),A(this,`d`,new en),A(this,`mode`,`loading`),A(this,`time`,0),A(this,`last`,0),A(this,`raf`,0),A(this,`running`,!1),A(this,`hoverTimer`,0),A(this,`hoverPos`,null),A(this,`hovered`,null),A(this,`failed`,!1),A(this,`tmpV`,new C),A(this,`tmpV2`,new C),A(this,`pursuerFocus`,new C),A(this,`swarmCentre`,new C(-700,40,1900)),A(this,`debugCam`,null),A(this,`world`,{applySnapshot:e=>{this.env.timeOfDay.set(e.timeOfDay,0),e.sea===`open`?this.water.sea.setOpen():this.water.sea.setCalm(),this.crowd.setFormation(e.crowd,!0),this.pursuers.setFormation(e.pursuers,!0),this.effects.setRain(e.rain,.05),this.effects.setSwarm(e.swarm,.05),this.ui?.showKeyVerse(null)},runEvent:e=>{switch(e.type){case`seaOpen`:this.water.sea.open(e.duration),this.audio.cue(`seaOpen`);break;case`seaClose`:this.water.sea.close(e.duration);break;case`seaCalm`:this.water.sea.setCalm();break;case`seaOpenInstant`:this.water.sea.setOpen();break;case`ripple`:this.water.sea.triggerRipple(e.x,e.z);break;case`strike`:this.water.sea.triggerRipple(e.x,e.z),this.effects.burstStrike(e.x,e.z),this.audio.cue(`strike`);break;case`crowd`:this.crowd.setFormation(e.formation,e.instant);break;case`pursuers`:this.pursuers.setFormation(e.formation,e.instant);break;case`rain`:this.effects.setRain(e.amount,e.fade);break;case`swarm`:this.effects.setSwarm(e.amount,e.fade);break;case`timeOfDay`:this.env.timeOfDay.set(e.name,e.seconds??0);break;case`audio`:this.audio.cue(e.cue);break;case`keyVerse`:this.ui.showKeyVerse(e.ref)}},getFocus:(e,t)=>e===`crowd`?this.crowd.getFocus(t):this.pursuers.getFocus(t),groundHeight:(e,t)=>U(e,t)}),A(this,`actions`,{startGuided:()=>this.startGuided(0),startFree:()=>{this.enterFree({x:-30,z:90,yawDeg:-12}),this.input.touchActive&&this.ui.toast(P(`free.tapHint`)),this.ui.setTouchActive(this.input.touchActive)},resume:()=>{this.updateInputMode(),this.audio.resume()},openPause:()=>{this.ui.openPause(),this.updateInputMode()},restart:()=>{this.water.sea.setCalm(),this.startGuided(0)},exitGuided:()=>this.enterFree(),exploreHere:()=>{let e=this.director.state,t=e.chapterIndex>=0?En[e.chapterIndex]:null;this.enterFree(t?t.exploreSpawn:void 0),this.player.ensureValidPosition()&&this.ui.toast(P(`toast.moved`))},selectChapter:e=>this.startGuided(e),guidedTogglePause:()=>{this.director.togglePause(),this.director.state.paused&&this.speak(null)},guidedNext:()=>this.director.next(),guidedPrev:()=>this.director.prev(),guidedReplay:()=>this.director.replay(),returnToWebsite:()=>window.location.assign(fa),goToViewpoint:e=>{let t=An.find(t=>t.id===e);t&&(t.requiresOpenSea&&!this.water.sea.isFullyOpen?this.ui.toast(P(`free.passageClosed`)):this.player.teleport(t.x,t.z,Be(t.yawDeg),Be(t.pitchDeg)))},freeSea:e=>{this.audio.unlock(),e===`open`?(this.water.sea.open(16),this.audio.cue(`seaOpen`)):e===`calm`?(this.water.sea.setCalm(),this.moveCrowdOutOfSea(),this.player.ensureValidPosition()&&this.ui.toast(P(`toast.moved`))):(this.water.sea.setCalm(),this.moveCrowdOutOfSea(),this.player.teleport(6,60,0,Be(4)),this.water.sea.triggerRipple(B.strikePoint.x,B.strikePoint.z),this.effects.burstStrike(B.strikePoint.x,B.strikePoint.z),this.audio.cue(`strike`),window.setTimeout(()=>{this.water.sea.phase===`calm`&&(this.water.sea.open(16),this.audio.cue(`seaOpen`))},900)),this.ui.setFreeSeaState(this.water.sea.phase)},replaySeaOpening:()=>this.startGuided(Dn),openHotspot:e=>{this.ui.openInfo(e),this.audio.cue(`uiOpen`)},settingsChanged:e=>this.applySettings(e,!1),overlayChanged:()=>{this.ui&&(this.updateInputMode(),this.ui.blocking&&(this.mode===`free`||this.mode===`guided`)?this.audio.suspend():this.audio.resume())},requestPointerLock:()=>this.input.requestPointerLock()}),A(this,`frame`,e=>{if(!this.running)return;this.raf=requestAnimationFrame(this.frame);let t=Math.min(.25,Math.max(0,(e-this.last)/1e3));this.last=e;try{this.tick(t)}catch(e){this.failed||(this.failed=!0,console.error(e),this.running=!1,this.mode=`error`,this.ui.showError(`generic`,String(e)))}}),this.opts=e,st()}async init(){if(this.ui=new fr({root:this.opts.uiRoot,actions:this.actions,settings:this.settings,isTouch:!1,chapters:En,viewpoints:jn,hotspots:kn,websiteUrl:fa}),!this.opts.webgl.ok){this.mode=`error`,this.ui.showError(`webgl`,M().code===`en`?this.opts.webgl.reason:void 0);return}this.ui.setLoading(.03,P(`loading.title`)),await ua();try{this.renderer=new ue({antialias:!0,powerPreference:`high-performance`,stencil:!1,alpha:!1})}catch(e){this.mode=`error`,this.ui.showError(`webgl`,String(e));return}let e=this.renderer.getContext();this.device=sa(e),this.ui.setTouchActive(this.device.touch),this.autoLevel=ca(this.device),this.quality=this.resolveQuality(),this.adaptive.setMin(this.quality.minPixelRatio/this.quality.maxPixelRatio),this.ui.setQualityLabel(P(`settings.quality.${this.autoLevel}`)),this.renderer.toneMapping=4,this.renderer.outputColorSpace=ie,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=1,this.renderer.domElement.setAttribute(`aria-hidden`,`true`),this.opts.viewport.appendChild(this.renderer.domElement),this.post=new aa(this.renderer,this.scene,this.camera),this.post.setEnabled(this.quality.level!==`low`),this.applyPixelRatio(),this.shared.uQuality.value=this.quality.level===`low`?0:this.quality.level===`medium`?1:2,this.ui.setLoading(.12,P(`loading.terrain`)),await ua();let t=Ri(this.quality.heightTexSize);this.shared.uHeightTex.value=t,this.shared.uHeightBounds.value.copy(zi()),this.d.add(()=>t.dispose());let n=ia(this.renderer,this.quality.level===`low`?512:1024);this.shared.uFoamTex.value=n.foam,this.shared.uRippleTex.value=n.ripple,this.d.add(()=>n.dispose()),this.env=new Ii({shared:this.shared,quality:this.quality,renderer:this.renderer,scene:this.scene}),this.env.setShadowsEnabled(this.settings.shadows),this.scene.add(this.env.object),this.ui.setLoading(.45,P(`loading.water`)),await ua(),this.water=new Qi({shared:this.shared,quality:this.quality}),this.scene.add(this.water.object);let r=()=>this.water.sea.state;this.ui.setLoading(.6,P(`loading.people`)),await ua(),this.crowd=new jr({shared:this.shared,quality:this.quality,getSeaState:r}),this.pursuers=new Wr({shared:this.shared,quality:this.quality,getSeaState:r}),this.scene.add(this.crowd.object,this.pursuers.object),this.ui.setLoading(.75,P(`loading.effects`)),await ua(),this.effects=new oi({shared:this.shared,quality:this.quality,getSeaState:r}),this.markers=new gn({shared:this.shared,defs:kn,getSeaState:r}),this.scene.add(this.effects.object,this.markers.object),this.collision=new Qt(r),this.input=new un({element:this.opts.viewport,overlay:this.opts.touchLayer}),this.input.setLookSettings(this.settings.lookSensitivity,this.settings.invertY),this.input.setTouchActive(this.device.touch&&(this.device.mobileUA||this.device.smallScreen)),this.player=new hn(this.camera,this.collision),this.picker=new vn({getSeaState:r,getObjects:()=>[...this.markers.pickables,...this.crowd.pickables,...this.pursuers.pickables,...this.env.pickables],getSunDir:()=>this.shared.uSunDir.value}),this.rig=new xn({groundHeight:(e,t)=>U(e,t),getFocus:(e,t)=>this.world.getFocus(e,t)}),this.rig.reducedMotion=this.settings.reducedMotion,this.director=new On({chapters:En,world:this.world,rig:this.rig}),this.director.autoAdvance=this.settings.autoAdvance,this.wireDirector(),this.wireInput(),this.wirePage(),this.world.applySnapshot({timeOfDay:`sunrise`,sea:`calm`,crowd:`shore`,pursuers:`hidden`,rain:0,swarm:0}),this.player.teleport(-30,90,Be(-12),Be(2)),this.resize(),this.ui.setLoading(.92,P(`loading.effects`)),await ua();try{this.renderer.compile(this.scene,this.camera)}catch{}this.ui.setLoading(1,P(`loading.ready`)),this.applySettings(this.settings,!0),this.ui.hideLoading(),this.setMode(`intro`),this.ui.showIntro(),this.last=performance.now(),this.running=!0,this.raf=requestAnimationFrame(this.frame)}resolveQuality(){let e=oa[this.settings.quality===`auto`?this.autoLevel:this.settings.quality];return{...e,shadows:e.shadows&&this.settings.shadows}}applyPixelRatio(){let e=this.device?.dpr??window.devicePixelRatio??1,t=this.settings.resolutionScale*(this.settings.adaptiveResolution?this.adaptive.scale:1),n=D(Math.min(e,this.quality.maxPixelRatio)*t,.5,3);Math.abs(this.renderer.getPixelRatio()-n)>.01&&(this.renderer.setPixelRatio(n),this.resize())}setMode(e){this.mode=e,this.ui.setMode(e),this.markers?.setVisible(e===`free`),this.updateInputMode(),e!==`free`&&(this.ui.setCrosshair(!1),this.ui.setPointerLockHint(!1))}updateInputMode(){if(!this.input||!this.ui)return;this.ui.blocking||this.mode===`loading`||this.mode===`error`||this.mode===`complete`||this.mode===`intro`?this.input.setMode(`menu`):this.mode===`guided`?this.input.setMode(`cinematic`):this.input.setMode(`free`);let e=this.mode===`free`&&!this.ui.blocking;this.ui.setPointerLockHint(e&&!this.input.pointerLocked&&!this.input.touchActive),this.ui.setCrosshair(e&&this.input.pointerLocked)}startGuided(e){this.audio.unlock(),this.ui.closeInfo(),this.setMode(`guided`),this.director.start(e),this.ui.setChapter(this.director.state.chapterIndex)}enterFree(e){this.audio.unlock(),this.director.stop(),this.speak(null),this.ui.showKeyVerse(null),this.camera.fov!==da&&(this.camera.fov=da,this.camera.updateProjectionMatrix()),e?this.player.teleport(e.x,e.z,Be(e.yawDeg),0):this.player.syncFromCamera(this.camera),this.setMode(`free`),this.ui.setFreeSeaState(this.water.sea.phase)}moveCrowdOutOfSea(){let e=this.crowd.formation;(e===`entering`||e===`crossing`)&&this.crowd.setFormation(`shore`,!0)}applySettings(e,t){let n=this.settings;if(this.settings={...e},ur(this.settings),this.ui.setSettings(this.settings),this.audio.setVolumes({master:e.masterVolume,ambience:e.ambienceVolume,effects:e.effectsVolume,muted:e.muted}),this.input?.setLookSettings(e.lookSensitivity,e.invertY),this.rig&&(this.rig.reducedMotion=e.reducedMotion),this.director&&(this.director.autoAdvance=e.autoAdvance),e.narrationVoice||this.speak(null),this.env){if(!t&&(n.quality!==e.quality||n.shadows!==e.shadows)){let t=this.resolveQuality(),n=t.level!==this.quality.level;this.quality=t,this.shared.uQuality.value=t.level===`low`?0:t.level===`medium`?1:2,n&&(this.post?.setEnabled(t.level!==`low`),this.env.setQuality(t),this.water.setQuality(t),this.effects.setQuality(t)),this.env.setShadowsEnabled(e.shadows),this.adaptive.setMin(t.minPixelRatio/t.maxPixelRatio)}e.adaptiveResolution||this.adaptive.reset(),this.applyPixelRatio()}}wireDirector(){this.director.on(`chapterStart`,({index:e})=>{this.ui.setChapter(e),this.speak(null)}),this.director.on(`narration`,({chapterIndex:e,lineIndex:t})=>{this.ui.showNarration(t),this.settings.narrationVoice&&this.speak(this.ui.narrationLine(e,t))}),this.director.on(`finished`,()=>{this.speak(null),this.mode=`complete`,this.ui.showCompletion(),this.updateInputMode()})}wireInput(){let e=(e,t)=>{let n=this.renderer.domElement.getBoundingClientRect();return{nx:(e-n.left)/n.width*2-1,ny:-((t-n.top)/n.height*2-1)}};this.input.onSelect((t,n)=>{if(this.mode!==`free`&&this.mode!==`guided`||this.ui.blocking)return;this.audio.unlock(),this.input.touchActive&&this.ui.setTouchActive(!0);let{nx:r,ny:i}=e(t,n),a=this.picker.pick(r,i,this.camera);a?(this.ui.openInfo(a.hotspot),this.audio.cue(`uiOpen`)):this.mode===`free`&&!this.input.touchActive&&!this.input.pointerLocked&&this.input.requestPointerLock()}),this.input.onHover((e,t)=>{this.hoverPos=e===null||t===null?null:{x:e,y:t}}),this.input.onPointerLockChange(()=>this.updateInputMode()),this.input.onShortcut(e=>this.onShortcut(e))}onShortcut(e){if(this.mode!==`loading`&&this.mode!==`error`){if(e===`escape`)!this.ui.handleEscape()&&(this.mode===`free`||this.mode===`guided`)&&this.actions.openPause();else if(!(this.ui.blocking&&e!==`mute`))switch(e){case`pause`:(this.mode===`free`||this.mode===`guided`)&&this.actions.openPause();break;case`help`:this.ui.openHelp();break;case`mute`:this.applySettings({...this.settings,muted:!this.settings.muted},!1),this.ui.toast(this.settings.muted?P(`toast.muted`):P(`toast.unmuted`));break;case`chapters`:this.ui.openChapters();break;case`verses`:if(this.mode===`guided`){let e=En[this.director.state.chapterIndex];this.ui.openVerses(e.refs,M().chapters[e.id].title)}else this.ui.openPassages();break;case`interact`:if(this.mode===`free`){let e=this.picker.pick(0,0,this.camera);e&&this.ui.openInfo(e.hotspot)}break;case`skip`:this.mode===`guided`&&this.director.next();break;case`prev`:this.mode===`guided`&&this.director.prev();break;case`replay`:this.mode===`guided`&&this.director.replay();break;case`togglePlay`:this.mode===`guided`&&this.actions.guidedTogglePause()}}}wirePage(){this.d.listen(window,`resize`,()=>this.resize()),this.d.listen(window,`orientationchange`,()=>window.setTimeout(()=>this.resize(),250)),this.d.listen(document,`visibilitychange`,()=>{document.hidden?(this.audio.suspend(),this.speak(null),this.mode===`guided`&&!this.director.state.paused&&this.director.pause()):(this.last=performance.now(),this.ui.blocking||this.audio.resume())}),this.d.listen(window,`pagehide`,()=>this.audio.suspend());let e=this.renderer.domElement;this.d.listen(e,`webglcontextlost`,(e=>{e.preventDefault(),this.running=!1,cancelAnimationFrame(this.raf),this.audio.suspend(),this.mode=`error`,this.ui.showError(`context-lost`)}))}resize(){if(!this.renderer)return;let e=this.opts.viewport.clientWidth||window.innerWidth,t=this.opts.viewport.clientHeight||window.innerHeight;if(this.camera.aspect=e/Math.max(1,t),this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1),this.post?.setSize(e,t),this.effects){let n=this.renderer.getContext(),r=n.getParameter(n.ALIASED_POINT_SIZE_RANGE),i=r?r[1]:128,a=t*this.renderer.getPixelRatio(),o=e*this.renderer.getPixelRatio();this.effects.setViewport(a,this.camera.fov,i,o),this.pursuers.setViewport(a/(2*Math.tan(this.camera.fov*Math.PI/360)),Math.min(i,256),o,a)}}speak(e){let t=typeof window<`u`?window.speechSynthesis:void 0;if(t)try{if(t.cancel(),!e||!this.settings.narrationVoice||this.settings.muted)return;let n=new SpeechSynthesisUtterance(e);n.lang=M().code,n.rate=.95*this.settings.playbackSpeed,n.volume=O(this.settings.masterVolume),t.speak(n)}catch{}}step(e=0,t=30){let n=Math.max(1,Math.round(e*t));for(let e=0;e<n;e++)this.tick(1/t,e===n-1)}tick(e,t=!0){let n=this.mode===`free`||this.mode===`guided`||this.mode===`intro`||this.mode===`complete`,r=this.ui.blocking&&this.mode!==`intro`,i=this.mode===`guided`&&this.director.state.paused,a=this.mode===`guided`?this.settings.playbackSpeed:1,o=!n||r||i?0:Math.min(e*a,.1);this.time+=o;let s=this.input.consume(e);if(this.mode===`guided`){this.director.update(r?0:Math.min(e*a,.1),this.camera);let t=this.director.state,n={chapterIndex:t.chapterIndex,chapterCount:En.length,paused:t.paused,progress:t.duration>0?t.time/t.duration:0,chapterEnded:t.chapterEnded,autoAdvanceIn:this.director.autoAdvanceIn===null?null:this.director.autoAdvanceIn/a,canPrev:t.chapterIndex>0,canNext:t.chapterIndex<En.length-1};this.ui.updateGuided(n)}else this.mode===`free`?(this.player.update(o,s,this.settings.reducedMotion),o>0&&this.player.ensureValidPosition()&&this.ui.toast(P(`toast.moved`))):this.mode===`intro`&&!this.settings.reducedMotion&&(this.player.yaw+=e*.012,this.player.update(0,{moveX:0,moveY:0,run:!1,lookYaw:0,lookPitch:0},!0));let c=this.camera.position;this.shared.uTime.value=this.time,this.shared.uCameraPos.value.copy(c);let l=R(c.z),u=this.water.sea.state,d=l>0&&l<3e3?Gt(l,u):0,f=Math.abs(c.x-V(l)),p=+(d>1&&f<d)*O((Kt(l,u)-c.y)/30);this.shared.uCorridorFactor.value+=(p-this.shared.uCorridorFactor.value)*ze(3,e),this.env.corridorFactor=this.shared.uCorridorFactor.value;let m={dt:o,time:this.time,realDt:e,camera:this.camera,reducedMotion:this.settings.reducedMotion},h=1-Math.min(1,this.env.timeOfDay.daylight*1.6);this.env.timeOfDay.setStormOverride(this.effects.rainAmount),this.effects.setNight(h),this.crowd.setNight(h),this.water.update(m),this.env.update(m),this.effects.update(m),this.crowd.update(m),this.pursuers.update(m),this.markers.update(m),this.mode===`free`?(this.ui.setFreeSeaState(this.water.sea.phase),this.updateHover(e)):this.hovered&&(this.hovered=null,this.markers.setHighlighted(null),this.ui.setHoverLabel(null)),this.updateAudio(e,d,f,l),this.settings.adaptiveResolution&&(this.mode===`free`||this.mode===`guided`)&&o>0&&this.adaptive.update(e)&&this.applyPixelRatio(),t&&this.post?.render()}updateHover(e){if(this.hoverTimer-=e,this.hoverTimer>0||(this.hoverTimer=.12,this.ui.blocking||this.input.touchActive))return;let t=null,n=null;if(this.input.pointerLocked)t=0,n=0;else if(this.hoverPos){let e=this.renderer.domElement.getBoundingClientRect();t=(this.hoverPos.x-e.left)/e.width*2-1,n=-((this.hoverPos.y-e.top)/e.height*2-1)}let r=t===null||n===null?null:this.picker.pick(t,n,this.camera),i=r&&r.distance<4e3?r.hotspot:null;i!==this.hovered&&(this.hovered=i,this.markers.setHighlighted(i)),this.ui.setHoverLabel(i?P(`free.inspect`,{name:M().hotspots[i].title}):null),this.opts.viewport.style.cursor=i&&!this.input.pointerLocked?`pointer`:``}updateAudio(e,t,n,r){let i=this.camera.position,a=1/0,o=0;if(t>1&&r>0&&r<3e3){let e=V(r),s=n<t;a=s?t-n:n-t;let c=e+Math.sign(i.x-e||1)*t;this.camera.getWorldDirection(this.tmpV),this.tmpV2.set(-this.tmpV.z,0,this.tmpV.x).normalize(),o=D((c-i.x)*this.tmpV2.x*.1,-1,1),s&&(o*=.6)}else if(this.water.sea.openness>0){let e=D(r,0,I);a=Math.hypot(i.x-V(e),i.z+e)}let s=Math.min(Math.abs(r-xt(i.x)),Math.abs(St(i.x)-r)),c=O(1-It.reduce((e,t)=>Math.min(e,Math.hypot(t.x-i.x,t.z-i.z)),1/0)/220),l=0;this.pursuers.visibleFraction>.05&&(this.pursuers.getFocus(this.pursuerFocus),l=O(1-i.distanceTo(this.pursuerFocus)/1400)*(.3+.7*this.pursuers.movingFraction)*this.pursuers.visibleFraction),this.camera.getWorldDirection(this.tmpV),this.audio.update({listener:i,forward:this.tmpV,seaOpenness:this.water.sea.openness,distanceToWall:a,wallSide:o,insidePassage:this.shared.uCorridorFactor.value,distanceToShore:s+Math.max(0,i.y-gt-3)*2,daylight:this.env.timeOfDay.daylight,wind:this.env.timeOfDay.wind,nearCamp:c,pursuers:l,turbulence:this.water.sea.state.turbulence,rain:this.effects.rainAmount,swarm:this.effects.swarmAmount*k(3500,600,i.distanceTo(this.swarmCentre)),walkSpeed:this.mode===`free`?this.player.walkIntensity:0,surface:this.mode===`free`?this.player.surface:`none`},e)}dispose(){this.running=!1,cancelAnimationFrame(this.raf),this.speak(null),this.d.dispose(),this.director?.dispose(),this.input?.dispose(),this.markers?.dispose(),this.effects?.dispose(),this.crowd?.dispose(),this.pursuers?.dispose(),this.water?.dispose(),this.env?.dispose(),this.post?.dispose(),this.audio.dispose(),this.ui?.dispose(),this.renderer?.dispose(),this.renderer?.domElement.remove()}};function ma(){try{let e=document.createElement(`canvas`).getContext(`webgl2`,{failIfMajorPerformanceCaveat:!1});if(!e)return{ok:!1,reason:`WebGL 2 is not available in this browser or it has been disabled.`,renderer:``};let t=``,n=e.getExtension(`WEBGL_debug_renderer_info`);return n&&(t=String(e.getParameter(n.UNMASKED_RENDERER_WEBGL))),e.getExtension(`WEBGL_lose_context`)?.loseContext(),{ok:!0,reason:``,renderer:t}}catch(e){return{ok:!1,reason:`WebGL 2 could not be initialised (${String(e)}).`,renderer:``}}}function ha(e){let t=document.getElementById(`ui`)??document.body,n=document.createElement(`div`);n.className=`cos-fatal`;let r=document.createElement(`h1`);r.textContent=`The Crossing of the Sea`;let i=document.createElement(`p`);i.textContent=e;let a=document.createElement(`a`);a.href=`/`,a.textContent=`Return to the main website`,n.append(r,i,a),t.appendChild(n)}async function ga(){let e=ma();await new pa({viewport:document.getElementById(`viewport`),touchLayer:document.getElementById(`touch-controls`),uiRoot:document.getElementById(`ui`),webgl:e}).init()}ga().catch(e=>{console.error(e),ha(`The experience could not start on this device or browser. Please try a recent version of Safari, Chrome, Edge or Firefox with WebGL 2 enabled.`)});