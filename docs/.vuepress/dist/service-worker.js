/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d742e3b7eb7fd5c2584e5e5ce280528c"
  },
  {
    "url": "about.html",
    "revision": "602b3f21c14dcc5543d58165f776070a"
  },
  {
    "url": "assets/css/0.styles.db117e51.css",
    "revision": "e9b871a9c043ae9f2222cab67b2f163c"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.7f06b4e3.woff",
    "revision": "7f06b4e30317f784d61d26686aed0ab2"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.aaf4eee9.ttf",
    "revision": "aaf4eee9fba9907d61c3935e0b6a54ae"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.e78e28b4.woff2",
    "revision": "e78e28b4834954df047e4925e9dbf354"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.021dd4dc.ttf",
    "revision": "021dd4dc61ee5f5cdf315f43b48c094b"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.1e802ca9.woff",
    "revision": "1e802ca9dedc4ed4e3c6f645e4316128"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.4ec58bef.woff2",
    "revision": "4ec58befa687e9752c3c91cd9bcf1bcb"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.7edb53b6.woff2",
    "revision": "7edb53b6693d75b8a2232481eea1a52c"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.d3b46c3a.woff",
    "revision": "d3b46c3a530116933081d9d74e3e9fe8"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.d49f2d55.ttf",
    "revision": "d49f2d55ce4f40f982d8ba63d746fbf9"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.a31e7cba.ttf",
    "revision": "a31e7cba7b7221ebf1a2ae545fb306b2"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.c4c8cab7.woff",
    "revision": "c4c8cab7d5be97b2bb283e531c077355"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.d5b59ec9.woff2",
    "revision": "d5b59ec9764e10f4a82369ae29f3ac58"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.32a5339e.woff2",
    "revision": "32a5339eb809f381a7357ba56f82aab3"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.a48dad4f.ttf",
    "revision": "a48dad4f58c82e38a10da0ceebb86370"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.b7d9c46b.woff",
    "revision": "b7d9c46bff5d51da6209e355cc4a235d"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.22086eb5.woff",
    "revision": "22086eb5d97009c3e99bcc1d16ce6865"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.8e1e01c4.woff2",
    "revision": "8e1e01c4b1207c0a383d9a2b4f86e637"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.9ceff51b.ttf",
    "revision": "9ceff51b3cb7ce6eb4e8efa8163a1472"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.284a17fe.woff2",
    "revision": "284a17fe5baf72ff8217d4c7e70c0f82"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.4c57dbc4.woff",
    "revision": "4c57dbc44bfff1fdf08a59cf556fdab3"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.e8b44b99.ttf",
    "revision": "e8b44b990516dab7937bf240fde8b46a"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.29c86397.ttf",
    "revision": "29c86397e75cdcb3135af8295f1c2e28"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.99be0e10.woff",
    "revision": "99be0e10c38cd42466e6fe1665ef9536"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.e533d5a2.woff2",
    "revision": "e533d5a2506cf053cd671b335ec04dde"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.5c734d78.woff2",
    "revision": "5c734d78610fa35282f3379f866707f2"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.5c94aef4.ttf",
    "revision": "5c94aef490324b0925dbe5f643e8fd04"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.b741441f.woff",
    "revision": "b741441f6d71014d0453ca3ebc884dd4"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.9a2834a9.ttf",
    "revision": "9a2834a9ff8ab411153571e0e55ac693"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.b13731ef.woff",
    "revision": "b13731ef4e2bfc3d8d859271e39550fc"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.d747bd1e.woff2",
    "revision": "d747bd1e7a6a43864285edd73dcde253"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.291e76b8.ttf",
    "revision": "291e76b8871b84560701bd29f9d1dcc7"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.4ad08b82.woff2",
    "revision": "4ad08b826b8065e1eab85324d726538c"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.f0303906.woff",
    "revision": "f0303906c2a67ac63bf1e8ccd638a89e"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.3fb41955.woff",
    "revision": "3fb419559955e3ce75619f1a5e8c6c84"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.6e0830be.woff2",
    "revision": "6e0830bee40435e72165345e0682fbfc"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.7dc027cb.ttf",
    "revision": "7dc027cba9f7b11ec92af4a311372a85"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.4059868e.ttf",
    "revision": "4059868e460d2d2e6be18e180d20c43d"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.727a9b0d.woff",
    "revision": "727a9b0d97d72d2fc0228fe4e07fb4d8"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.fba01c9c.woff2",
    "revision": "fba01c9c6fb2866a0f95bcacb2c187a5"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.2555754a.woff",
    "revision": "2555754a67062cac3a0913b715ab982f"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.5c58d168.ttf",
    "revision": "5c58d168c0b66d2c32234a6718e74dfb"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.d929cd67.woff2",
    "revision": "d929cd671b19f0cfea55b6200fb47461"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.755e2491.woff2",
    "revision": "755e2491f13b5269f0afd5a56f7aa692"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.d12ea9ef.ttf",
    "revision": "d12ea9efb375f9dc331f562e69892638"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.d524c9a5.woff",
    "revision": "d524c9a5b62a17f98f4a97af37fea735"
  },
  {
    "url": "assets/fonts/KaTeX_Size1-Regular.7342d45b.ttf",
    "revision": "7342d45b052c3a2abc21049959fbab7f"
  },
  {
    "url": "assets/fonts/KaTeX_Size2-Regular.eb130dcc.ttf",
    "revision": "eb130dcc661de766c999c60ba1525a88"
  },
  {
    "url": "assets/fonts/KaTeX_Size4-Regular.ad767252.ttf",
    "revision": "ad7672524b64b730dfd176140a8945cb"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.25702356.ttf",
    "revision": "257023560753aeb0b89b7e434d3da17f"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.3fe216d2.woff",
    "revision": "3fe216d2a5f736c560cde71984554b64"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.6cc31ea5.woff2",
    "revision": "6cc31ea5c223c88705a13727a71417fa"
  },
  {
    "url": "assets/img/claw.f886b8d5.svg",
    "revision": "f886b8d5021c8af029e2cd4dea609bcc"
  },
  {
    "url": "assets/img/inline-cache.drawio.64b35eb1.png",
    "revision": "64b35eb1c22041be639a15597b858036"
  },
  {
    "url": "assets/img/specializing-overview.drawio.ebeeb0d5.png",
    "revision": "ebeeb0d5410be9d27fe32f983cd58fbb"
  },
  {
    "url": "assets/js/1.8685bd80.js",
    "revision": "dcf7bcf30a23c931867922969f722a29"
  },
  {
    "url": "assets/js/10.b570f434.js",
    "revision": "5aee03f199147887ad2708c614330c1d"
  },
  {
    "url": "assets/js/12.35bd369b.js",
    "revision": "b27975e94f3ca97e6501edf5f3c345f2"
  },
  {
    "url": "assets/js/13.c5f70937.js",
    "revision": "e7441175ca12276dd6a2d655fead15e8"
  },
  {
    "url": "assets/js/14.67937d98.js",
    "revision": "c68b8b3242c6fa8fa65b653862008b3d"
  },
  {
    "url": "assets/js/15.1a77749c.js",
    "revision": "deca6d9e908b1b630730f674da044568"
  },
  {
    "url": "assets/js/16.ea117a05.js",
    "revision": "67c1fb92ceb01a30d4a1dddff9c06f81"
  },
  {
    "url": "assets/js/17.1a3c8825.js",
    "revision": "126d1720f0663a3557794548867476e4"
  },
  {
    "url": "assets/js/18.7d6d85d1.js",
    "revision": "2ba1994cc90747c55eb46b2ab0f93f22"
  },
  {
    "url": "assets/js/19.ef3dd7d8.js",
    "revision": "a1484e30ef352f3ef33a25fd7e99b649"
  },
  {
    "url": "assets/js/2.70bb5fa4.js",
    "revision": "b8f08d264d98036bcb0fc354aad458b2"
  },
  {
    "url": "assets/js/20.db037fc1.js",
    "revision": "5600d0d3d9540863e225edc37b991761"
  },
  {
    "url": "assets/js/21.36beb9ba.js",
    "revision": "0f77607879ef89e8f8dbf7b3a9eec725"
  },
  {
    "url": "assets/js/22.6e65e477.js",
    "revision": "ef7ba7143e818e9c94ee6781cb46ad6c"
  },
  {
    "url": "assets/js/23.6ddb6722.js",
    "revision": "966db255c65caa16d22b714fd95b6449"
  },
  {
    "url": "assets/js/24.dff14654.js",
    "revision": "bf180589ffbf316c455aadc3a88759d2"
  },
  {
    "url": "assets/js/25.2a9e2be7.js",
    "revision": "81d2bacb98098895404c2e5aad54e7b8"
  },
  {
    "url": "assets/js/26.1213b11d.js",
    "revision": "a627ce0d535c738d16393f27da929375"
  },
  {
    "url": "assets/js/27.064aeebd.js",
    "revision": "821f5a4da5d91eda30c2a5983682af77"
  },
  {
    "url": "assets/js/28.e2bfed61.js",
    "revision": "165cafca634e7965a34fa3c1e0492131"
  },
  {
    "url": "assets/js/29.82cbbd0f.js",
    "revision": "dbae71d1f1880c3cf7d5cb21d98eecdd"
  },
  {
    "url": "assets/js/3.01e6a304.js",
    "revision": "3d238d17d2d2bf3eba84a00a18416e1d"
  },
  {
    "url": "assets/js/4.9eff2442.js",
    "revision": "879494b3cbfbae334de27209d5cae34f"
  },
  {
    "url": "assets/js/5.8398e7e9.js",
    "revision": "73c167dcf502e57fc577eb2fd9dcfc18"
  },
  {
    "url": "assets/js/6.b14b7d1a.js",
    "revision": "de016a33fc282dffe72bb4702f6affd1"
  },
  {
    "url": "assets/js/7.ea6e1e82.js",
    "revision": "3fda1394ae8edbe9897eb026759dac93"
  },
  {
    "url": "assets/js/8.79f4d345.js",
    "revision": "6108bd20be53c4a867cdc875578ffb1c"
  },
  {
    "url": "assets/js/9.c05103f2.js",
    "revision": "57fee48da81e4bd5abc2095a5da9dd7b"
  },
  {
    "url": "assets/js/app.af375268.js",
    "revision": "006fdfc500d468d48a124b2c8feb9a75"
  },
  {
    "url": "avatar.jpg",
    "revision": "8eeebb8345b76b37e02fb9bc6d0230eb"
  },
  {
    "url": "icons/favicon144.png",
    "revision": "34351187312c1a80471c4c21e2047598"
  },
  {
    "url": "icons/favicon152.png",
    "revision": "90c5cedad4928d984deab2fb22bca560"
  },
  {
    "url": "icons/favicon168.png",
    "revision": "2bdfc32cf5a7eb36ee2f24874d2b94e7"
  },
  {
    "url": "icons/favicon192.png",
    "revision": "9255753a710234b3911f3e8d341c6fcf"
  },
  {
    "url": "icons/favicon256.png",
    "revision": "8ece81e372c66c9444863ee422e53d79"
  },
  {
    "url": "icons/favicon48.png",
    "revision": "0e418f58d529de871b7e539f42c93814"
  },
  {
    "url": "icons/favicon72.png",
    "revision": "3fef97ec24cf69afc5231f21f31b56e4"
  },
  {
    "url": "icons/favicon96.png",
    "revision": "0dd3942922f602d95535f5f3f201cf03"
  },
  {
    "url": "index.html",
    "revision": "7280fe3e5dbdc24a74e5922de599dbab"
  },
  {
    "url": "posts/2023/08/27/python311-instruction-specializing.html",
    "revision": "f9c6ef54d154d519e1bccddf61688e44"
  },
  {
    "url": "posts/categories/index.html",
    "revision": "8533cdee48a404f775987334e86724de"
  },
  {
    "url": "posts/categories/做点有趣的.html",
    "revision": "f1d90d5d8985c73915e1c0b9959068af"
  },
  {
    "url": "posts/index.html",
    "revision": "65df801f93275f38098f3055cdbcd04c"
  },
  {
    "url": "posts/tags/ByteCode.html",
    "revision": "db6932913df94ea8881efc1c7f1d03af"
  },
  {
    "url": "posts/tags/index.html",
    "revision": "71a6d919c308ce77e0285c96f33d5ff0"
  },
  {
    "url": "posts/tags/Interpreter.html",
    "revision": "ebdaf1c217e38a1cf4d2b0a186c7d394"
  },
  {
    "url": "posts/tags/Python.html",
    "revision": "c3e8cfe6d9aad184cd6fd08b75643f27"
  },
  {
    "url": "posts/tags/Virtual Machine.html",
    "revision": "96b0110f379d42389a0cb8b387b28243"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
