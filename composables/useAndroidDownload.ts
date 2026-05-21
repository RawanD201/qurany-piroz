import { track } from '@vercel/analytics';

/** Direct APK path served from `/public`. */
export const ANDROID_APP_PATH = '/qurany-piroz.apk';

export type AndroidDownloadPlacement = 'hero' | 'footer';

export function useAndroidDownload() {
  function trackAndroidDownload(placement: AndroidDownloadPlacement) {
    track('android_app_download', { placement });
  }

  return {
    ANDROID_APP_PATH,
    trackAndroidDownload,
  };
}
