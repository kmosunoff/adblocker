# v1.20.4 (Thu Mar 25 2021)

#### :bug: Bug Fix

- build(deps-dev): bump sinon from 9.2.4 to 10.0.0 ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### :nut_and_bolt: Dependencies

- build(deps-dev): bump sinon from 9.2.4 to 10.0.0 [#1790](https://github.com/cliqz-oss/adblocker/pull/1790) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 1

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])

---

# v1.20.3 (Sat Feb 27 2021)

#### :bug: Bug Fix

- build(deps): bump @types/chrome from 0.0.132 to 0.0.133 ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.131 to 0.0.132 ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.130 to 0.0.131 ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### :house: Internal

- Update copyright notices [#1715](https://github.com/cliqz-oss/adblocker/pull/1715) ([@remusao](https://github.com/remusao))

#### :nut_and_bolt: Dependencies

- build(deps): bump @types/chrome from 0.0.132 to 0.0.133 [#1703](https://github.com/cliqz-oss/adblocker/pull/1703) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.131 to 0.0.132 [#1694](https://github.com/cliqz-oss/adblocker/pull/1694) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.130 to 0.0.131 [#1689](https://github.com/cliqz-oss/adblocker/pull/1689) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 2

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])
- Rémi ([@remusao](https://github.com/remusao))

---

# v1.20.1 (Tue Feb 16 2021)

#### :bug: Bug Fix

- build(deps): bump @types/chrome from 0.0.129 to 0.0.130 ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.128 to 0.0.129 ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### :nut_and_bolt: Dependencies

- build(deps): bump @types/chrome from 0.0.129 to 0.0.130 [#1671](https://github.com/cliqz-oss/adblocker/pull/1671) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.128 to 0.0.129 [#1621](https://github.com/cliqz-oss/adblocker/pull/1621) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 1

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])

---

# v1.20.0 (Thu Jan 21 2021)

### Release Notes

#### Initial support for extended CSS selectors (a.k.a. procedural filters) ([#1574](https://github.com/cliqz-oss/adblocker/pull/1574))

Add initial support for extended CSS selectors (a.k.a. procedural filters) as well as the `:remove()` modifier for element hiding rules (note: the already supported `:style` modified now also works with extended CSS selectors). The following new pseudo-classes are implemented: `:has` (and its alias `:if`), `:has-text` (both string and RegExp literals), and `:not` (whenever its argument is also an extended selector, otherwise fallback to native implementation).

Caveats:
* Loading of extended css filters is disabled by default and needs to be toggled using the `loadExtendedSelectors` option while [initializing the blocker instance](https://github.com/cliqz-oss/adblocker/blob/3361723138f40c3cb96b4c6e611f2b030f75d891/packages/adblocker-webextension-example/background.ts#L61).
* These news selectors are currently only supported by `WebExtensionBlocker` (support for Puppeteer, Electron and Playwright is not planned at this time but help from the community would be greatly appreciated).

Miscellaneous changes:
* Removal of unused `injectCSSRule` helper.
* Replace Closure compiler by Terser.

---

#### :rocket: New Feature

- Initial support for extended CSS selectors (a.k.a. procedural filters) [#1574](https://github.com/cliqz-oss/adblocker/pull/1574) ([@remusao](https://github.com/remusao))

#### :bug: Bug Fix

- build(deps): bump @types/chrome from 0.0.127 to 0.0.128 ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### :nut_and_bolt: Dependencies

- build(deps): bump @types/chrome from 0.0.127 to 0.0.128 [#1561](https://github.com/cliqz-oss/adblocker/pull/1561) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 2

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])
- Rémi ([@remusao](https://github.com/remusao))

---

# v1.19.0 (Wed Dec 16 2020)

#### :bug: Bug Fix

- build(deps): bump @types/chrome from 0.0.126 to 0.0.127 ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @rollup/plugin-node-resolve from 10.0.0 to 11.0.0 ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### :nut_and_bolt: Dependencies

- build(deps): bump @types/chrome from 0.0.126 to 0.0.127 [#1506](https://github.com/cliqz-oss/adblocker/pull/1506) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @rollup/plugin-node-resolve from 10.0.0 to 11.0.0 [#1478](https://github.com/cliqz-oss/adblocker/pull/1478) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 1

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])

---

# v1.18.7 (Tue Nov 24 2020)

#### :nail_care: Polish

- Fix with newer Typescript + cleanups [#1466](https://github.com/cliqz-oss/adblocker/pull/1466) ([@remusao](https://github.com/remusao))

#### Authors: 1

- Rémi ([@remusao](https://github.com/remusao))

---

# v1.18.4 (Sun Nov 01 2020)

#### :bug: Bug Fix

- build(deps): bump @types/chrome from 0.0.125 to 0.0.126 ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @rollup/plugin-node-resolve from 9.0.0 to 10.0.0 ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.124 to 0.0.125 ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.123 to 0.0.124 ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### :nut_and_bolt: Dependencies

- build(deps): bump @types/chrome from 0.0.125 to 0.0.126 [#1380](https://github.com/cliqz-oss/adblocker/pull/1380) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @rollup/plugin-node-resolve from 9.0.0 to 10.0.0 [#1373](https://github.com/cliqz-oss/adblocker/pull/1373) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @types/node from 14.11.8 to 14.11.10 [#1351](https://github.com/cliqz-oss/adblocker/pull/1351) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.124 to 0.0.125 [#1349](https://github.com/cliqz-oss/adblocker/pull/1349) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @types/sinon-chai from 3.2.4 to 3.2.5 [#1303](https://github.com/cliqz-oss/adblocker/pull/1303) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.123 to 0.0.124 [#1302](https://github.com/cliqz-oss/adblocker/pull/1302) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 1

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])

---

# v1.18.3 (Tue Sep 15 2020)

#### :bug: Bug Fix

- build(deps): bump @types/chrome from 0.0.122 to 0.0.123 ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### :nut_and_bolt: Dependencies

- build(deps): bump puppeteer from 5.2.1 to 5.3.0 [#1269](https://github.com/cliqz-oss/adblocker/pull/1269) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @types/node from 14.10.0 to 14.10.1 [#1268](https://github.com/cliqz-oss/adblocker/pull/1268) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.122 to 0.0.123 [#1267](https://github.com/cliqz-oss/adblocker/pull/1267) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 1

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])

---

# v1.18.0 (Mon Aug 24 2020)

#### :bug: Bug Fix

- build(deps): bump ts-node from 8.10.2 to 9.0.0 ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump typescript from 3.9.7 to 4.0.2 ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @rollup/plugin-node-resolve from 8.4.0 to 9.0.0 ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.121 to 0.0.122 ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### :nut_and_bolt: Dependencies

- build(deps): bump ts-node from 8.10.2 to 9.0.0 [#1208](https://github.com/cliqz-oss/adblocker/pull/1208) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump typescript from 3.9.7 to 4.0.2 [#1202](https://github.com/cliqz-oss/adblocker/pull/1202) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @rollup/plugin-node-resolve from 8.4.0 to 9.0.0 [#1181](https://github.com/cliqz-oss/adblocker/pull/1181) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.121 to 0.0.122 [#1118](https://github.com/cliqz-oss/adblocker/pull/1118) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.120 to 0.0.121 [#1103](https://github.com/cliqz-oss/adblocker/pull/1103) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 1

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])

---

# v1.17.0 (Sun Jul 12 2020)

#### :bug: Bug Fix

- build(deps-dev): bump @types/mocha from 7.0.2 to 8.0.0 ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.119 to 0.0.120 ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### :nut_and_bolt: Dependencies

- build(deps-dev): bump @types/mocha from 7.0.2 to 8.0.0 [#1079](https://github.com/cliqz-oss/adblocker/pull/1079) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @types/jsdom from 12.2.4 to 16.2.3 [#885](https://github.com/cliqz-oss/adblocker/pull/885) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.119 to 0.0.120 [#1074](https://github.com/cliqz-oss/adblocker/pull/1074) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 1

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])

---

# v1.16.1 (Wed Jul 08 2020)

#### :bug: Bug Fix

- build(deps): bump @types/chrome from 0.0.118 to 0.0.119 ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.117 to 0.0.118 ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.116 to 0.0.117 ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.115 to 0.0.116 ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.114 to 0.0.115 ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump mocha from 7.2.0 to 8.0.1 ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### :nut_and_bolt: Dependencies

- build(deps): bump @types/chrome from 0.0.118 to 0.0.119 [#1063](https://github.com/cliqz-oss/adblocker/pull/1063) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.117 to 0.0.118 [#1057](https://github.com/cliqz-oss/adblocker/pull/1057) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.116 to 0.0.117 [#1021](https://github.com/cliqz-oss/adblocker/pull/1021) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.115 to 0.0.116 [#1009](https://github.com/cliqz-oss/adblocker/pull/1009) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @remusao/smaz-generate from 1.8.0 to 1.9.0 [#997](https://github.com/cliqz-oss/adblocker/pull/997) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.114 to 0.0.115 [#995](https://github.com/cliqz-oss/adblocker/pull/995) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump mocha from 7.2.0 to 8.0.1 [#986](https://github.com/cliqz-oss/adblocker/pull/986) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 1

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])

---

# v1.16.0 (Wed Jun 10 2020)

#### :bug: Bug Fix

- build(deps-dev): bump @ampproject/rollup-plugin-closure-compiler ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### :nut_and_bolt: Dependencies

- build(deps-dev): bump @ampproject/rollup-plugin-closure-compiler from 0.25.2 to 0.26.0 [#956](https://github.com/cliqz-oss/adblocker/pull/956) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 1

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])

---

# v1.15.0 (Sat May 23 2020)

#### :bug: Bug Fix

- build(deps): bump @types/chrome from 0.0.113 to 0.0.114 ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @rollup/plugin-node-resolve from 7.1.3 to 8.0.0 ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.112 to 0.0.113 ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.111 to 0.0.112 ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.110 to 0.0.111 ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.109 to 0.0.110 ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.108 to 0.0.109 ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.107 to 0.0.108 ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### :nut_and_bolt: Dependencies

- build(deps): bump @types/chrome from 0.0.113 to 0.0.114 [#909](https://github.com/cliqz-oss/adblocker/pull/909) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @rollup/plugin-node-resolve from 7.1.3 to 8.0.0 [#907](https://github.com/cliqz-oss/adblocker/pull/907) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/puppeteer from 2.1.0 to 3.0.0 [#899](https://github.com/cliqz-oss/adblocker/pull/899) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.112 to 0.0.113 [#898](https://github.com/cliqz-oss/adblocker/pull/898) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.111 to 0.0.112 [#881](https://github.com/cliqz-oss/adblocker/pull/881) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.110 to 0.0.111 [#877](https://github.com/cliqz-oss/adblocker/pull/877) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.109 to 0.0.110 [#875](https://github.com/cliqz-oss/adblocker/pull/875) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.108 to 0.0.109 [#873](https://github.com/cliqz-oss/adblocker/pull/873) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.107 to 0.0.108 [#865](https://github.com/cliqz-oss/adblocker/pull/865) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 1

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])

---

# v1.14.4 (Wed May 06 2020)

#### :bug: Bug Fix

- build(deps): bump @types/chrome from 0.0.106 to 0.0.107 ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### :nut_and_bolt: Dependencies

- build(deps): bump @types/chrome from 0.0.106 to 0.0.107 [#843](https://github.com/cliqz-oss/adblocker/pull/843) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 1

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])

---

# v1.14.3 (Mon May 04 2020)

#### :bug: Bug Fix

- build(deps-dev): bump rollup-plugin-sourcemaps from 0.5.0 to 0.6.1 ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.104 to 0.0.106 ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### :nut_and_bolt: Dependencies

- build(deps-dev): bump rollup-plugin-sourcemaps from 0.5.0 to 0.6.1 [#830](https://github.com/cliqz-oss/adblocker/pull/830) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.104 to 0.0.106 [#813](https://github.com/cliqz-oss/adblocker/pull/813) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 1

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])

---

# v1.14.2 (Tue Apr 21 2020)

#### :bug: Bug Fix

- build(deps-dev): bump @ampproject/rollup-plugin-closure-compiler ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.103 to 0.0.104 ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### :nut_and_bolt: Dependencies

- build(deps-dev): bump @ampproject/rollup-plugin-closure-compiler from 0.24.0 to 0.25.0 [#766](https://github.com/cliqz-oss/adblocker/pull/766) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps): bump @types/chrome from 0.0.103 to 0.0.104 [#751](https://github.com/cliqz-oss/adblocker/pull/751) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 1

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])

---

# v1.14.1 (Thu Apr 09 2020)

### Release Notes

_From #746_

* Make sure that all unsupported procedural selectors from cosmetic filters are dropped to ensure that we only inject valid CSS selectors.
* Fix matching of `domain=` option for domain filters in cases where specified domain is a subdomain instead of full hostname or full domain.
* Fix partyness detection for requests without a valid domain (but having a valid hostname). This fixes matching against localhost request (for instance).
* Fix engine updates stress test which allows to replay all day-to-day diffs since the beginning of times... (currently about a year) and make sure that all updates work and resulting engine is byte-identical with diff-update or full initialization.
* Fix script to analyze size of serialized engines for all presets as well as all kinds of compression (i.e. none, gzip and brotli). This allows to keep track of final size after small-strings compression was applied.

---

#### :nail_care: Polish

- Fix domain options with subdomains and more... [#746](https://github.com/cliqz-oss/adblocker/pull/746) ([@remusao](https://github.com/remusao))

#### Authors: 1

- Rémi ([@remusao](https://github.com/remusao))

---

# v1.14.0 (Wed Apr 08 2020)

### Release Notes

_From #738_

* Add `guessRequestTypeFromUrl` config option to all blocker classes which allows to automatically guess the type of network requests based on their URLs. This can be useful for cases where the type is either not available or not accurately inferred (e.g. when requests have time 'other').
* Fix a case where `PuppeteerBlocker` could show an async unhandled exception in console when trying to remove blocked iframes in pages.
* Fix redirection to binary resources (i.e. base64 encoded). An issue caused these resources to be corrupted which means that redirected resources were not valid (e.g. invalid PNG image).
* Redirection to local resources has been improved and will now always succeed thanks to a system of fallback. More types are also available for redirection.
* Improve API of blocker classes (i.e. PuppeteerBlocker, ElectronBlocker and WebExtensionBlocker) to allow creating custom blocking logic of resources using: `blockScripts`, `blockImages`, `blockMedias`, `blockFrames`, `blockFonts`, and `blockStyles`. These helpers can be called on any existing blocker instance, or on a new one created with the `empty()` static method.
* Add initial DSL (Domain Specific Language) to create blocking rules with a high-level API. This is used behind the scene to implement the new blocking methods now exposed by blocker instances. This new DSL should be considered alpha-quality and the API will likely change (and break) in the future. It might also be extended to handle hiding rules (a.k.a cosmetic filters).
* Fix behavior of `NetworkFilter#toString` which should now return a better pretty-printed version of the original filters whenever the `debug` option was false (in which case some information about the original raw string is lost and the string version needs to be inferred back).
* Implement handling of data: URLs. This means that the Request abstraction will now treat them as valid requests and that their type should always be inferred correctly. Moreover, the matching of data: URLs will now only take into account the prefix and ignore anything following the ',' separator.
* Requests with empty domain will not be treated as third-party anymore (this should not happen in the wild and was mostly impacting our unit tests).

---

#### :rocket: New Feature

- Various improvements [#738](https://github.com/cliqz-oss/adblocker/pull/738) ([@remusao](https://github.com/remusao))

#### Authors: 1

- Rémi ([@remusao](https://github.com/remusao))

---

# v1.13.1 (Fri Apr 03 2020)

#### :house: Internal

- Move from jest to mocha + chai [#682](https://github.com/cliqz-oss/adblocker/pull/682) ([@remusao](https://github.com/remusao))

#### :memo: Documentation

- Fix line break in CHANGELOG.md [#691](https://github.com/cliqz-oss/adblocker/pull/691) ([@remusao](https://github.com/remusao))

#### :nut_and_bolt: Dependencies

- build(deps-dev): bump @types/sinon from 7.5.2 to 9.0.0 [#702](https://github.com/cliqz-oss/adblocker/pull/702) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 2

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])
- Rémi ([@remusao](https://github.com/remusao))

---

# v1.13.0 (Mon Mar 30 2020)

### Release Notes

_From #690_

PuppeteerBlocker is now more powerful and will be able to better block ads on most websites. Firstly, a bug was fixed which prevented injection of cosmetics in the main frame of pages. Secondly, PuppeteerBlocker will now monitor the DOM for changes to make sure that ads which load later are still "handled" (if you know what I mean). Lastly, PuppeteerBlocker is now able to look for advertisement iframes and remove them from the DOM completely, no more blank spaces left unattended...

---

#### :rocket: New Feature

- Fix PuppeteerBlocker and enable blocking of frames and DOM monitoring. [#690](https://github.com/cliqz-oss/adblocker/pull/690) ([@remusao](https://github.com/remusao))

#### Authors: 1

- Rémi ([@remusao](https://github.com/remusao))

---

# v1.12.3 (Sat Mar 28 2020)

#### :nut_and_bolt: Dependencies

- build(deps): bump @types/chrome from 0.0.102 to 0.0.103 [#671](https://github.com/cliqz-oss/adblocker/pull/671) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 1

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])

---

# v1.10.1 (Wed Mar 25 2020)

#### :bug: Bug Fix

- Abstract DOM monitoring away and fix #573 [#657](https://github.com/cliqz-oss/adblocker/pull/657) ([@remusao](https://github.com/remusao))

#### Authors: 1

- Rémi ([@remusao](https://github.com/remusao))

---

# v1.10.0 (Wed Mar 25 2020)

#### :nut_and_bolt: Dependencies

-  [#653](https://github.com/cliqz-oss/adblocker/pull/653) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#629](https://github.com/cliqz-oss/adblocker/pull/629) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#617](https://github.com/cliqz-oss/adblocker/pull/617) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#587](https://github.com/cliqz-oss/adblocker/pull/587) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#586](https://github.com/cliqz-oss/adblocker/pull/586) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#560](https://github.com/cliqz-oss/adblocker/pull/560) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#577](https://github.com/cliqz-oss/adblocker/pull/577) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
-  [#552](https://github.com/cliqz-oss/adblocker/pull/552) ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 1

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])

---

# v1.9.2 (Wed Feb 26 2020)

#### :bug: Bug Fix

- build(deps): bump @types/chrome from 0.0.96 to 0.0.97

Bumps [@types/chrome](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/HEAD/types/chrome) from 0.0.96 to 0.0.97.
- [Release notes](https://github.com/DefinitelyTyped/DefinitelyTyped/releases)
- [Commits](https://github.com/DefinitelyTyped/DefinitelyTyped/commits/HEAD/types/chrome)

Signed-off-by: dependabot-preview[bot] <support@dependabot.com>  ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 1

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])

---

# v1.9.0 (Thu Feb 20 2020)

#### :bug: Bug Fix

- build(deps): bump @types/chrome from 0.0.95 to 0.0.96

Bumps [@types/chrome](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/HEAD/types/chrome) from 0.0.95 to 0.0.96.
- [Release notes](https://github.com/DefinitelyTyped/DefinitelyTyped/releases)
- [Commits](https://github.com/DefinitelyTyped/DefinitelyTyped/commits/HEAD/types/chrome)

Signed-off-by: dependabot-preview[bot] <support@dependabot.com>  ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))
- build(deps-dev): bump @ampproject/rollup-plugin-closure-compiler

Bumps [@ampproject/rollup-plugin-closure-compiler](https://github.com/ampproject/rollup-plugin-closure-compiler) from 0.21.0 to 0.22.2.
- [Release notes](https://github.com/ampproject/rollup-plugin-closure-compiler/releases)
- [Commits](https://github.com/ampproject/rollup-plugin-closure-compiler/compare/v0.21.0...v0.22.2)

Signed-off-by: dependabot-preview[bot] <support@dependabot.com>  ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 1

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])

---

# v1.8.0 (Wed Feb 12 2020)

#### :bug: Bug Fix

- build(deps): bump @types/chrome from 0.0.94 to 0.0.95

Bumps [@types/chrome](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/HEAD/types/chrome) from 0.0.94 to 0.0.95.
- [Release notes](https://github.com/DefinitelyTyped/DefinitelyTyped/releases)
- [Commits](https://github.com/DefinitelyTyped/DefinitelyTyped/commits/HEAD/types/chrome)

Signed-off-by: dependabot-preview[bot] <support@dependabot.com>  ([@dependabot-preview[bot]](https://github.com/dependabot-preview[bot]))

#### Authors: 1

- [@dependabot-preview[bot]](https://github.com/dependabot-preview[bot])
