'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "32d93af2aca035bbaf4d9b7479f56b9a",
"version.json": "ff966ab969ba381b900e61629bfb9789",
"index.html": "b60702fb67813f7796686bae9ef1a893",
"/": "b60702fb67813f7796686bae9ef1a893",
"main.dart.js": "c19a0fa975172b89d8e638db07393943",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0867c3e13649ac4d06fe34b7b3ddce08",
"lib/fonts/SFProDisplay-Medium.ttf": "8296fbc23d1d42f2954c7af6698cf579",
"lib/fonts/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"lib/fonts/SFProDisplay-Regular.ttf": "d704bcd64b0f4fa155e6bd7debacc6c4",
"lib/fonts/AdmiralIcons.ttf": "3b1d0ca9e119b5140ca67cbf7d274c9a",
"lib/fonts/SF-Pro-Text-Regular.otf": "889036a2b39fca3874479106e080200e",
"lib/fonts/SFProDisplay-Bold.ttf": "4e99e4e132b0bd1ccd4e27596b15df8f",
"lib/fonts/MaterialIcons-Regular.otf": "f6a946b6e5afd1ef56b72801f59a5e3a",
"lib/fonts/SF-Pro-Text-Semibold.otf": "c7276b7b6112abb468a5788ca771d323",
"lib/fonts/SFProDisplay-Semibold.ttf": "962956e157e4687b7c79d1dafb2b9fb0",
"lib/fonts/SF-Pro-Text-Bold.ttf": "4fa6d1f566611c33d2f815f60c426309",
"assets/AssetManifest.json": "6da3f7320dd7a3cd961e9ab6d233a188",
"assets/NOTICES": "5fbe26b68f145592d36308f62ebd6edb",
"assets/FontManifest.json": "ebdf5a2adc399d7b829deaa5f8f0723a",
"assets/AssetManifest.bin.json": "d01f43773dd1d8384f380d318b7d29d7",
"assets/packages/golden_toolkit/fonts/Roboto-Regular.ttf": "ac3f799d5bbaf5196fab15ab8de8431c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/admiralui_flutter/lib/fonts/SFProDisplay-Medium.ttf": "8296fbc23d1d42f2954c7af6698cf579",
"assets/packages/admiralui_flutter/lib/fonts/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/admiralui_flutter/lib/fonts/SFProDisplay-Regular.ttf": "d704bcd64b0f4fa155e6bd7debacc6c4",
"assets/packages/admiralui_flutter/lib/fonts/AdmiralIcons.ttf": "b6e58cd67e54694e6df7f9712c9a76a9",
"assets/packages/admiralui_flutter/lib/fonts/SF-Pro-Text-Regular.otf": "889036a2b39fca3874479106e080200e",
"assets/packages/admiralui_flutter/lib/fonts/SFProDisplay-Bold.ttf": "4e99e4e132b0bd1ccd4e27596b15df8f",
"assets/packages/admiralui_flutter/lib/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/packages/admiralui_flutter/lib/fonts/SF-Pro-Text-Semibold.otf": "c7276b7b6112abb468a5788ca771d323",
"assets/packages/admiralui_flutter/lib/fonts/SFProDisplay-Semibold.ttf": "962956e157e4687b7c79d1dafb2b9fb0",
"assets/packages/admiralui_flutter/lib/fonts/SF-Pro-Text-Bold.ttf": "4fa6d1f566611c33d2f815f60c426309",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6557593d4785c80cc00c7ea01dd29bab",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/svg/list.svg": "72a152cd8182d1d004d7c54916180c16",
"assets/assets/svg/draw.svg": "b510003a21c3de54244c047bcd597e5e",
"assets/assets/svg/pageControlls.svg": "f336bf61dc5bc4106db56b2576370801",
"assets/assets/svg/main.svg": "e9531c5eb67d623caa127c49c5a7534a",
"assets/assets/svg/envelope.svg": "1d7011995313e3f593f32854832c4513",
"assets/assets/svg/bottomSheet.svg": "5e341590c3ee4f0cf7eda1413441757a",
"assets/assets/svg/time.svg": "406c92db6a3dd5078267b9880ef7cd7c",
"assets/assets/svg/pin.svg": "7823b54bde4c833e6e349425caa77111",
"assets/assets/svg/radiobuttons.svg": "14f10dda5b8d9ab7f45e1c61f6060404",
"assets/assets/svg/headers.svg": "41d77958e8f3023c7b90625eb6f6975a",
"assets/assets/svg/badges.svg": "6b44c4dcc63dfd78f4f01cb50f12716c",
"assets/assets/svg/scheme.svg": "30659e005fb6846ac392708a0e2f4cdd",
"assets/assets/svg/refresh.svg": "13f3cdf361f1074635f5ff3e4674c48f",
"assets/assets/svg/chat.svg": "2577b2d48a79ffca2066a84467f5afb1",
"assets/assets/svg/gem.svg": "200d8a7a60866c526eac6d59c6649210",
"assets/assets/svg/checkBox.svg": "ee0b13442de700979f7fb0f203cc320c",
"assets/assets/svg/links.svg": "9741353a3c9d7ec75d220e0c8758e846",
"assets/assets/svg/spinner.svg": "1ec885a5ed7091d7806f7a5a8050177a",
"assets/assets/svg/pencil.svg": "dfc57370dab4aa9be0c7e0e0158518c6",
"assets/assets/svg/currency.svg": "0e929b2168005e3151d681d2aeea9b12",
"assets/assets/svg/textBlocks.svg": "c5e5e90216c9938a774877982953780b",
"assets/assets/svg/statusHistory.svg": "12b375bd82ed63cf94d4f5bedb447fc3",
"assets/assets/svg/calendar.svg": "ebeceaba5c07fed6f558dbc053750234",
"assets/assets/tagsChips/russiaFlag.png": "8b739dc55f085163986ced43d2373182",
"assets/assets/tagsChips/close.png": "422e50d161f6cc51c1c08be7925b7dbd",
"assets/assets/card/googlePayBig.png": "29448af47f88286903396965031d0df2",
"assets/assets/card/visa.png": "39614c0d7ad46da0801c2ecc99c98be3",
"assets/assets/card/googlePay.png": "c321cad47d9b7f34ac8b3c3cb2b8d2d0",
"assets/assets/card/applePay.png": "6388bae3c9f705cf59b348f349e4e088",
"assets/assets/card/rnb.png": "63c475fb7b5552a038cba105a8fdc7cb",
"assets/assets/card/appleWallet.png": "595968aed35437516c48685fd9e8dbe3",
"assets/assets/card/masterCard.png": "21b706cc21ce780a48ee14a02f1f9f97",
"assets/assets/card/mir.png": "4bee8c6d8a3836275c252aba5eeefb1b",
"assets/assets/card/visaLabel.png": "a6e631dd87ccdd38ca45e81eedcac3b5",
"assets/assets/chat/Photo.png": "6ba5261e0b7ebf21b95b428374c9127d",
"assets/assets/zeroScreen/success.png": "b28c92dca704e8dc872b7e63375310e0",
"assets/assets/actionBar/arrowUpOutline.png": "660e3a8e64ce44d2305f77e2f1b03611",
"assets/assets/actionBar/arrowDownOutline.png": "ec94784d955726100309ff9393d2297f",
"assets/assets/actionBar/moreOutline.png": "55a45457be4be2c2b65d358626c77446",
"assets/assets/actionBar/union.png": "54a48ae1cc34d489dc41d4d8db619a68",
"assets/assets/actionBar/closeOutline.png": "7c0f7e9b9382e53ddebf7f663c6991ca",
"assets/assets/currency/china.png": "27824fa30f0ca8b223acf1db8dc1d40a",
"assets/assets/currency/usa.png": "563ce418719391523a7ace1023d113df",
"assets/assets/currency/britain.png": "6e3be734662ae4afeaf913edd1d45e3c",
"assets/assets/currency/european.png": "a4dcd796a33828706c0a284a3ed9cd90",
"assets/assets/onboarding/three.png": "aa33fd78f18e6abe98777c8741c61f1f",
"assets/assets/onboarding/two.png": "9f46ba7cb679dea7d27627e1ed61258e",
"assets/assets/onboarding/one.png": "80f4cc7fd5f58fc8c9bf36e80e7e8201",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
