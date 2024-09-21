'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "ff966ab969ba381b900e61629bfb9789",
"index.html": "24147a939af934a092aa8fcfc487f68b",
"/": "24147a939af934a092aa8fcfc487f68b",
"main.dart.js": "0bab8fbea8712f0f3c7e8fca4e82b0de",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0867c3e13649ac4d06fe34b7b3ddce08",
"assets/AssetManifest.json": "8e433a4a1f382fbd44c49e2b8ce8167d",
"assets/NOTICES": "6ce22fbd60dca8b9659732d573ac691b",
"assets/FontManifest.json": "61f50d3e8246faf9db15b23ff1aff6dd",
"assets/AssetManifest.bin.json": "2c5890ea0959576d41bba7bd033e03f5",
"assets/packages/golden_toolkit/fonts/Roboto-Regular.ttf": "ac3f799d5bbaf5196fab15ab8de8431c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/admiralui_flutter/lib/fonts/SFProDisplay-Medium.ttf": "8296fbc23d1d42f2954c7af6698cf579",
"assets/packages/admiralui_flutter/lib/fonts/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/admiralui_flutter/lib/fonts/SFProDisplay-Regular.ttf": "d704bcd64b0f4fa155e6bd7debacc6c4",
"assets/packages/admiralui_flutter/lib/fonts/AdmiralIcons.ttf": "fbc3fdea2606a46d8068997f3ab1ca0b",
"assets/packages/admiralui_flutter/lib/fonts/SF-Pro-Text-Regular.otf": "889036a2b39fca3874479106e080200e",
"assets/packages/admiralui_flutter/lib/fonts/SFProDisplay-Bold.ttf": "4e99e4e132b0bd1ccd4e27596b15df8f",
"assets/packages/admiralui_flutter/lib/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/packages/admiralui_flutter/lib/fonts/SF-Pro-Text-Semibold.otf": "c7276b7b6112abb468a5788ca771d323",
"assets/packages/admiralui_flutter/lib/fonts/SFProDisplay-Semibold.ttf": "962956e157e4687b7c79d1dafb2b9fb0",
"assets/packages/admiralui_flutter/lib/fonts/SF-Pro-Text-Bold.ttf": "4fa6d1f566611c33d2f815f60c426309",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "60f5736db8c606350710c81855f45e26",
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
"assets/assets/version.json": "0ceb4f39071f52c7a2b0c48892f97948",
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
"assets/assets/info/appLogo.png": "0f50bbabb15b4335f55c1bfe3f7e8edd",
"assets/assets/zeroScreen/success.png": "b28c92dca704e8dc872b7e63375310e0",
"assets/assets/templates/padding_template.json": "d00f1e933983be2c5178655bcd24e209",
"assets/assets/templates/big_informer_template.json": "cfbec36ff5651afd43bd39e3a67ecde2",
"assets/assets/templates/chat_created.json": "23f9146a82f7b006e02639aba239eae1",
"assets/assets/templates/buttons_rules_template.json": "f70175e1fb2c4d734839902b421ab1d9",
"assets/assets/templates/double_slider_textfield_template.json": "c3a38e61975e13fac25fee4007bb3974",
"assets/assets/templates/buttons_template.json": "c4e208e3a2eb3522aaaabcd3876ffe85",
"assets/assets/templates/logo_tabs_template.json": "c5737b00ae24ce298919a2a0edd0977f",
"assets/assets/templates/paragraph_template.json": "7fef6945029c8bf07d53413a95355d00",
"assets/assets/templates/calendar_vertical_template.json": "e598327325baf64d986850e1993840b6",
"assets/assets/templates/slider_textfield_template.json": "2290f24560d247cd795ca81755830115",
"assets/assets/templates/primary_buttons_template.json": "6dbb8e8ebea9984734f268622bbdfc68",
"assets/assets/templates/zero_screen_template.json": "609a920561dd3701bcb846631cd74562",
"assets/assets/templates/instruction.txt": "1d9db2cb5ea1c806e5b9d6bd67ae0fff",
"assets/assets/templates/mortage_template.json": "47f94efebfbd84a1dfe7fddd07b4f9b3",
"assets/assets/templates/multiline_textfield_template.json": "b37d38630f0bd9a8dca8a277cc2898fe",
"assets/assets/templates/calendar_horizontal_template.json": "777f004acb6494b469b2f468ba81e301",
"assets/assets/templates/check_box_template.json": "27930750b587cc88f0130ea84733ef8f",
"assets/assets/templates/templates.json": "5b6cf17e7e50d8eb8cce8ab1035ea3b3",
"assets/assets/templates/buttons_column_template.json": "0730a5b7edcb232ace937dc91b19b2c5",
"assets/assets/templates/outline_tabs_template.json": "3d0f6d03d12b2095ec6060b46dacfc24",
"assets/assets/templates/secure_textfield_template.json": "0e3f9805c25ebb5a9e5c4594a2f28011",
"assets/assets/templates/success_registration.json": "5055e9233ed05615ad82149c9f82794f",
"assets/assets/templates/standard_textfield_template.json": "a6802f53357f8c2de8d19b8d7e8b79c8",
"assets/assets/templates/chat_calculator_example.json": "86133ed2bfb7c661cb97d41a84e92de3",
"assets/assets/templates/one_button_template.json": "bcd5c552c0d6bddd1fb30a366c491704",
"assets/assets/templates/secondary_buttons_template.json": "8e4f31d5e8b0a0ed54d4daa4f75adf30",
"assets/assets/templates/small_informer_template.json": "4ece1d4e561ebba9ffc553055fc6ad5b",
"assets/assets/templates/ghost_buttons_template.json": "a1e6a6681ec6126133253313d6deb309",
"assets/assets/templates/tags_template.json": "3bbf26c65002f45174a2c70a6a93e17c",
"assets/assets/templates/radio_buttons_template.json": "06da0343a0a8b32a03fe0510afe0876f",
"assets/assets/templates/title_header_widget_template.json": "f27dc0e9fdedfafefd9005eef51b0aac",
"assets/assets/templates/anketa_form_template.json": "215f1df94c0f8f97626c1fe6a20e5d61",
"assets/assets/templates/accordion_template.json": "29683a928f8a4820d9c858f51f575fa6",
"assets/assets/templates/user_checkbox.json": "75a0e1a8fb333fc35f4015c543a73fdc",
"assets/assets/templates/underline_center_tabs_template.json": "c973b61fa1977a864d0421045f8e3359",
"assets/assets/templates/underline_slider_tabs_template.json": "8b8c872436dd43af294d0354d690c8da",
"assets/assets/templates/standard_tabs_template.json": "f78ef5bedabac23645c6b3bd19ba8f56",
"assets/assets/actionBar/arrowUpOutline.png": "6427f8b701a229a7268e5fffa7f7f197",
"assets/assets/actionBar/arrowDownOutline.png": "ac2cc692de9296f785a4d2f18f6811d3",
"assets/assets/actionBar/moreOutline.png": "7954bc4b8568fb71e6240c19afacd5b3",
"assets/assets/actionBar/union.png": "f0b118f141f5aa8d5c819658caf1e7f5",
"assets/assets/actionBar/closeOutline.png": "7de5530ace363fe76829d5a0d273a126",
"assets/assets/fonts/SFProDisplay-Medium.ttf": "8296fbc23d1d42f2954c7af6698cf579",
"assets/assets/fonts/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/assets/fonts/SFProDisplay-Regular.ttf": "d704bcd64b0f4fa155e6bd7debacc6c4",
"assets/assets/fonts/AdmiralIcons.ttf": "fbc3fdea2606a46d8068997f3ab1ca0b",
"assets/assets/fonts/SF-Pro-Text-Regular.otf": "889036a2b39fca3874479106e080200e",
"assets/assets/fonts/SFProDisplay-Bold.ttf": "4e99e4e132b0bd1ccd4e27596b15df8f",
"assets/assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/fonts/SF-Pro-Text-Semibold.otf": "c7276b7b6112abb468a5788ca771d323",
"assets/assets/fonts/SFProDisplay-Semibold.ttf": "962956e157e4687b7c79d1dafb2b9fb0",
"assets/assets/fonts/SF-Pro-Text-Bold.ttf": "4fa6d1f566611c33d2f815f60c426309",
"assets/assets/currency/china.png": "27824fa30f0ca8b223acf1db8dc1d40a",
"assets/assets/currency/usa.png": "563ce418719391523a7ace1023d113df",
"assets/assets/currency/britain.png": "6e3be734662ae4afeaf913edd1d45e3c",
"assets/assets/currency/european.png": "a4dcd796a33828706c0a284a3ed9cd90",
"assets/assets/onboarding/three.png": "aa33fd78f18e6abe98777c8741c61f1f",
"assets/assets/onboarding/two.png": "9f46ba7cb679dea7d27627e1ed61258e",
"assets/assets/onboarding/one.png": "80f4cc7fd5f58fc8c9bf36e80e7e8201",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
