'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2c1ed6b6fd85bb5e207a897f6d22c37a",
"assets/AssetManifest.bin.json": "b930d1177a2731d43a751f6cc51283f9",
"assets/AssetManifest.json": "81c9bda780f022054c19c997500fa7ac",
"assets/assets/CV.pdf": "6b8f2543f8a923bbcc40ee7d2c016099",
"assets/assets/CV.png": "2e2890cfc5ca7a29433c633172619f51",
"assets/assets/dark.png": "c587a9ab6b97d09d62fd7f513a8f5b51",
"assets/assets/dart.png": "31976ff22bb0bd0ce18da966097ac742",
"assets/assets/firebase.png": "44b31b544b9ca3c736788200b4fd120d",
"assets/assets/flutter-logo.png": "8a50b602aa79b19775c22d02a290f51f",
"assets/assets/logoeasy.png": "0f5f6a6ab705570dc67286aaaa149a73",
"assets/assets/skill_icon/androidstudio.svg": "591af9f809fd3c2f8d9da7487b3a19a2",
"assets/assets/skill_icon/angular.svg": "d8504aa75385681668462b2038a74c9d",
"assets/assets/skill_icon/cooking.svg": "463792efa38ddae2d97d93b7e9f64c6d",
"assets/assets/skill_icon/csharp.svg": "d311cc16ce12ad6d28e46250a82cc906",
"assets/assets/skill_icon/dart.svg": "92974b2449f737099360ddd29c5407e8",
"assets/assets/skill_icon/en.svg": "cb28ae3f47a5261c53300f0f536bd9e6",
"assets/assets/skill_icon/filezilla.svg": "b7d049a13cbda68a040dcce08d11a4d6",
"assets/assets/skill_icon/flutter.svg": "7627c5c94c259fd9a67e352e42bef133",
"assets/assets/skill_icon/fr.svg": "348ad62f3469cdf68fae460f38fbb05a",
"assets/assets/skill_icon/game.svg": "2dd8ef696ee1bf1a2bf49a140cb03b20",
"assets/assets/skill_icon/git.svg": "b81fae7f6e0d4156c89104dbc648e51a",
"assets/assets/skill_icon/html.svg": "3860c4a5e4f0719aca4d139aedeb91b5",
"assets/assets/skill_icon/japan.svg": "ac5b479cc4cea794271429e85c6fa3ad",
"assets/assets/skill_icon/Java.svg": "8cec15fedaea5cd03b4e598a3563aa44",
"assets/assets/skill_icon/laravel.svg": "6a98c0eb1097015242de178a47e470fb",
"assets/assets/skill_icon/mysql.svg": "3cd295d4ffe2d77dcacaf100a6ba7cc5",
"assets/assets/skill_icon/pc.svg": "ce4eee513c5eb754bc1340185ecf162a",
"assets/assets/skill_icon/php.svg": "bc5fb163f1a184b35df7dbf276c7f40e",
"assets/assets/skill_icon/xcode.svg": "fc921cdefa1b7bd647ecb257eae62962",
"assets/assets/white.png": "9306cae69fee043d1344d899f3884ddf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "b372ee163f6fe749f5b6563023df046a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "db3024800236e2b8308ea1c91c2f4f25",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "9a5a13fa1f6f6c187a371df0c431778f",
"icons/Icon-192.png": "422332280e91646bb4f35813e94999b7",
"icons/Icon-512.png": "6499d5f94a686085d1dbcb9ad10cadd5",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "564fca83541e600823265b3f98670f25",
"/": "564fca83541e600823265b3f98670f25",
"main.dart.js": "f4fd7b226968098deecf35fc9dccc9fc",
"manifest.json": "01b2fe4a57cee068c7f6823566a40793",
"version.json": "14f002d7769f2b678dc9e6f7e06c50d2"};
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
