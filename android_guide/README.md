# android_guide

The Play Protect screenshots shown inside the install sheet on Android
(`../android-install-guide.js`).

The filenames below are hardcoded in that file, in this order, one per numbered step of the
"ئەگەر «Play Protect» ڕێگری لە دامەزراندنەکە کرد" section. Add a file under the exact name and
it appears under its step; anything missing removes itself, so the written steps stay correct
either way.

| File | Step | The phone screen it shows |
|---|---|---|
| `01-settings-search.jpg` | ١ | Settings search results for "Play Protect" — the screen headed **Results (6)**, listing *Security and privacy* → *Google Play Protect* / *App security*. |
| `02-app-security.jpg` | ٢ | The **App security** screen, with *App protection* and *Google Play Protect* listed and the *Google Play Protect* row circled. |
| `03-play-protect-gear.jpg` | ٤ | The **Play Protect** screen ("No harmful apps found", *Scan* button), with the ⚙ settings icon circled at the top right. |
| `04-play-protect-settings.jpg` | ٥ | The **Play Protect settings** screen, with the *Scan apps with Play Protect* and *Improve harmful app detection* toggles circled. |

Steps ٣, ٦ and ٧ have no screenshot — ٣ is a tap on a row that `02` already points at, and the
last two happen outside Settings.

## Notes for replacing them

* Keep the red circles. They are what makes each screenshot readable at the ~200px width the
  sheet renders them at.
* Crop to the part of the screen the step is about. `01` and `02` are already cropped; the two
  full-height ones are fine as they are.
* Keep them small — every reader on a phone downloads them before the APK. The sheet shows
  them ~200px wide, so the 1080px originals are far larger than they need to be. If you
  change a file's extension, update `shot(...)` in `../android-install-guide.js` to match.
