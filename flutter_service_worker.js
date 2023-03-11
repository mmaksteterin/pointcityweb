'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon-16x16.png": "9876586253114fd3f6586fe98b7f9f2e",
"version.json": "39f714a1f5bf51d0e7bf057783089f5f",
"favicon.ico": "8382e5065d0645a6dcae2669fa700aeb",
"index.html": "621a04d8b746521e3b1c306678063916",
"/": "621a04d8b746521e3b1c306678063916",
"android-chrome-192x192.png": "6d4efce685db8ee4bdd0d4eb96fa99dd",
"apple-touch-icon.png": "536cdc6c52ef8553d96f661af992bc55",
"main.dart.js": "263c57f5ff0aba49020fefab458e0f4b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"android-chrome-512x512.png": "bfe0dda398c4982f8e6139884b1bbb0e",
"site.webmanifest": "b9aa277fcfc34c31db6c7a7ea3469b8c",
"manifest.json": "d57781ae8858133021378e448b4d7ec8",
"mstile-150x150.png": "0084aa66ca31818741153cb6d13189f2",
"assets/AssetManifest.json": "40f7fabb99584ebab3c383b7732dcd22",
"assets/NOTICES": "72e1ce07d63c18c27a279704bf412850",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/shaders/ink_sparkle.frag": "8d762d346394a1043aa182c09e508ba0",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/user_profile.png": "632050ed77d190c9cb58b5fb5cc3c73b",
"assets/assets/images/pointText.svg": "13a7729fd3bfd390afe76d0c745042cf",
"assets/assets/images/pdf_2.svg": "7a31512300fd5b4023ed4039e24821ea",
"assets/assets/images/pdf_3.svg": "e14f5f1a6a33c9b89a01b3c3bacbd995",
"assets/assets/images/pdf_1.svg": "4225fea14518a981e0a4118660fbd74e",
"assets/assets/images/reports.svg": "9d2c4acda966388c34f86a461cc6dcc1",
"assets/assets/images/user_image.png": "df92eab4a0f4fb2868da04875d7b63af",
"assets/assets/images/icon_awesome_edit.svg": "32e8cab7bd6f189e4eede03f1af1a071",
"assets/assets/images/reportsPic.svg": "4bfd25b08daac190e2cedee70c702eff",
"assets/assets/images/eat_tmp.png": "c7a13388d78eb3a2c207f0775a8780a5",
"assets/assets/images/orderPic.svg": "a7a38ee3a717bbc3a544a51bf416068a",
"assets/assets/images/imagePointCityString.png": "137c50f12287a08a25d159764b7e463c",
"assets/assets/images/background_1.png": "8a071e4b811dc27b1a051fe3048442ba",
"assets/assets/images/icon_material_cancel.svg": "2d7cf2dbf8b648f558d6c9ec1e3ec328",
"assets/assets/images/helpPic.svg": "d3c745dbbf3a53b7ca8f5a83e9e4e606",
"assets/assets/images/settingsPic.svg": "dda9ce53019fbd29a62467786a9179a3",
"assets/assets/images/itemsPic.svg": "6c00d07096490686d486de58fa8bb39d",
"assets/assets/images/computa_hacka.png": "c26d8208eb5dfdc4075cc9cade0d7d78",
"assets/assets/images/myBuisnessPic.svg": "2a208f299a928cbe903c6b03d45ecedd",
"assets/assets/images/ordersPic.svg": "6a55a02dcf4a78b76222b5f6b8f58b04",
"assets/assets/images/point_city_logo.png": "a26b889da59998a7b3a3d0a8f549db4d",
"assets/assets/icons/search.svg": "3574f8651f69bb21cd9300051d80b875",
"assets/assets/icons/check-square.svg": "0d701c8d3ced3b06dfbfc7294cbbe5d0",
"assets/assets/icons/home.svg": "f8a46f278cf1bb63170f0fc2a18f01e3",
"assets/assets/icons/inbox.svg": "9362c79d9d2e4c3cf7468b84c501b346",
"assets/assets/icons/file-text.svg": "27229938bd8f5616f9eba26ae4dc902c",
"assets/assets/icons/update.svg": "1db050d1475e964c4782a90634cde71f",
"assets/assets/icons/check.svg": "88edacd322cceff2d32ad2325becc3d3",
"assets/assets/icons/hard-drive.svg": "af054f695ad009a8a0ab08530f414730",
"assets/assets/icons/smile.svg": "7cbbe9ab2c658e2546f5ea7039838139",
"assets/assets/icons/notification_yes.svg": "d106dab6714af91db2a7e53dc10d227a",
"assets/assets/icons/paperclip.svg": "424c0187d6de5689ae5e2d22d451399a",
"assets/assets/icons/box.svg": "225e9ac91c27074be2bd9f11390205fc",
"assets/assets/icons/send.svg": "69c03ebeeaea9ea0d833d1d3a1e0de5f",
"assets/assets/icons/trash.svg": "d8945612393e53db6d6456a23a71679e",
"assets/assets/icons/star.svg": "758537fee30d5dea022cd93ae9c3ee7e",
"assets/assets/icons/message-square.svg": "71183c91deae326f9d56a718c2d8b23a",
"assets/assets/icons/edit.svg": "d894eede23aa2c3fd6f39d3df04b5f1d",
"assets/assets/icons/credit-card.svg": "2110cfe8783aeb4876afd253abb120dc",
"assets/assets/icons/print_icon.png": "eb7a9740dd2000c22bd571c749ea6ab6",
"assets/assets/icons/more-vertical.svg": "c858da9fd5aaffdfc615b9c2be8e15fd",
"assets/assets/icons/calendar.svg": "4bfc3bd4107f37181a1c9f1d91872c95",
"assets/assets/icons/add_green_container.svg": "96c6c6219988aabfe9907b7c1df015c4",
"assets/assets/icons/avatar.svg": "0878085bd341d8ff69a45081b6e140a9",
"browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"favicon-32x32.png": "617f01bcf68cde9b94b69ad1712e83ca"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
