# بەستەرە ڕاستەوخۆکان / Deep links

`qurany-piroz.com` is what makes a shared verse or a shared quiz invite open **inside the
app** instead of on this website's front page. Two link shapes exist, and both apps
(the Swift iOS app and the Flutter app) build and parse exactly these:

| Link | Opens |
| --- | --- |
| `https://qurany-piroz.com/ayat/<surat>/<ayat>` | that verse, in the Quran tab |
| `https://qurany-piroz.com/quiz/<CODE>` | the online-quiz lobby for that invite code, already joined |

Always the apex domain, never `www` — a Universal Link only fires on the exact host that
served the association file without a redirect.

## What is in this repo for it

```
.well-known/apple-app-site-association   iOS Universal Links
.well-known/assetlinks.json              Android App Links
ayat.html  quiz.html                     the pages a link falls back to
deeplink.css  open-in-app.js  surats.js  shared by those two pages
vercel.json                              /ayat/* and /quiz/* rewrites + JSON content types
```

The two HTML pages are only ever seen when the app did **not** take the link: no app
installed, a desktop browser, or an in-app webview (chat apps) where Universal Links don't
fire. They name what the link pointed at, offer the platform's download, and offer one
button that hands the same destination to the app over the `quranipiroz://` custom scheme —
which needs no association and works whenever the app is installed.

`surats.js` is generated from the app's own `Quran.db`, so the verse page can name the surat
and reject a verse number past the end of it:

```
sqlite3 -json Quran.db "SELECT CAST(suratNum AS INTEGER) n, arSuratName ar, soraniSuratName ku, totalVerseNum t FROM Surats ORDER BY n;"
```

## One-time setup outside this repo

**iOS.** The App ID `5YY9H4RAS5.com.hevie.quranPiroz` needs the **Associated Domains**
capability enabled in the Apple Developer portal, and the provisioning profile regenerated
afterwards. Without it iOS never even fetches the association file, and every link opens
Safari instead. The entitlement itself is already in the app
(`قورئانی پیرۆز.entitlements`).

Only the iOS app is listed in the association file, because it is the only one shipped on
iOS. If the Flutter app is ever released on the App Store too, add
`5YY9H4RAS5.com.alandkawaali.quraniPirozPartukiXwda` to `appIDs` — but note that when two
installed apps claim the same path, which one iOS picks is not something you control.

**Android.** `assetlinks.json` lists two SHA-256 fingerprints:

| Fingerprint starting | Key |
| --- | --- |
| `56:5E:5D:…` | the Android **debug** key that signs the APK released today |
| `B3:B6:5C:…` | `~/upload-keystore.jks`, for when release signing is switched over |

The debug key is there because `android/app/build.gradle.kts` still has
`signingConfig = signingConfigs.getByName("debug")` in its release block, so that is what
actually signed `qurany-piroz.apk`. Once the release build is wired to `key.properties`,
drop the `56:5E:…` line — and until then, be aware that a debug key is a weaker thing to
grant a domain to than a real release key. Nothing breaks if verification fails, by the way:
the fallback page's "open in the app" button still gets the reader in, it just costs them
one extra tap.

## Checking it works

```
curl -sI https://qurany-piroz.com/.well-known/apple-app-site-association   # 200, application/json, no redirect
curl -s  https://qurany-piroz.com/.well-known/assetlinks.json | python3 -m json.tool
curl -sI https://qurany-piroz.com/ayat/2/255                              # 200
curl -sI https://qurany-piroz.com/quiz/K7F2                               # 200
```

Apple's own validator: `https://app-site-association.cdn-apple.com/a/v1/qurany-piroz.com`
(this is the CDN copy iOS actually reads; it can lag your deploy by up to 24h).

Google's: `https://digitalassetlinks.googleapis.com/v1/statements:list?source.web.site=https://qurany-piroz.com&relation=delegate_permission/common.handle_all_urls`

On a device: `adb shell pm verify-app-links --re-verify com.alandkawaali.qurani_piroz_partuki_xwda`
then `adb shell pm get-app-links com.alandkawaali.qurani_piroz_partuki_xwda`.
