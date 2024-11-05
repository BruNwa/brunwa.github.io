'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "349a2dc61226f0a1a5dcf829735e1656",
"assets/AssetManifest.bin.json": "18baff489ace33e5e21055b69d67fe5a",
"assets/AssetManifest.json": "f6bf76f58afb058e99f2708c459f6a8e",
"assets/assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/assets/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/assets/fonts/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/assets/images/certifications/1.jpeg": "94d0cef16ac16320c486ab56be46976a",
"assets/assets/images/certifications/2.jpeg": "528c70df9cc909f014bb337be9d8b81d",
"assets/assets/images/certifications/3.jpeg": "1015fc291677badf72e9e664d59b4961",
"assets/assets/images/certifications/4.jpeg": "c97e29cb42bf7481a562230ca2d3f3cc",
"assets/assets/images/certifications/5.jpeg": "4a339fd53013eb3d8f6be3ccf2a2c1cf",
"assets/assets/images/certifications/6.jpeg": "80e514196b07d7491760795ec5778432",
"assets/assets/images/certifications/8.jpeg": "0715aee597f2bc2e3367112361b9df2e",
"assets/assets/images/certifications/9.png": "9a20466456d219dfc91374a666fbb3f0",
"assets/assets/images/icons/android.png": "e34149cb39272fb093cae7cbe45aa5f8",
"assets/assets/images/icons/circet.png": "111a4a535999e14ca25f2b048a382c44",
"assets/assets/images/icons/flutter.png": "b25bbe3025f43caf1f019c71617fe922",
"assets/assets/images/icons/fst.png": "8d851a2cb95c51535b6b2bfa8998dc39",
"assets/assets/images/icons/ios.png": "97824076344b5e5739befd5b422cbcdd",
"assets/assets/images/icons/majorel.png": "bb69225a59bc259f093df5e8da672539",
"assets/assets/images/icons/mthree.png": "19158ce9225c3b89b0b4e6d4aa0c6ea4",
"assets/assets/images/icons/ofppt.png": "660fb0924d573149564f99471a196efa",
"assets/assets/images/icons/pcz.png": "1a9f8bb896bf02820607595ca9c0cd48",
"assets/assets/images/icons/python.png": "7ed7279e46619d48710dca21a38a9c0c",
"assets/assets/images/logo/logo_black.png": "a9367e4eee2b00c71605fd5ab08f9206",
"assets/assets/images/logo/logo_white.png": "b45a55e4305e89b89235dd3d515a1a88",
"assets/assets/images/menu/about.png": "ba514301b69d730334296b9dd7f4aede",
"assets/assets/images/menu/career.png": "b3cd8059f44ec6b4d9ce63a5df1b1c31",
"assets/assets/images/menu/contact.png": "d3f8d386da086fbc370e98ccfd4ceaca",
"assets/assets/images/menu/home.png": "ce629ad7bf094111f0f28e60b0b10992",
"assets/assets/images/menu/project.png": "de5baee71a077c6797bdfe153f28447a",
"assets/assets/images/skills/1.png": "256e71d7267d7164de8bb972bd27d1fb",
"assets/assets/images/skills/10.png": "54b5a13c92b42709a4304a8794d7ed59",
"assets/assets/images/skills/11.png": "adf9740ed32dca36b2315241cd40bdc4",
"assets/assets/images/skills/12.png": "d7e95c0d967b27fd6a4157763576b873",
"assets/assets/images/skills/2.png": "05783528ba3c4829c784910b1b5d0097",
"assets/assets/images/skills/3.png": "a319ddfd0ff3a893079bb09c906a5857",
"assets/assets/images/skills/4.png": "f0f4d0e80f111640d64633b29f9d03b7",
"assets/assets/images/skills/5.png": "1e5310530081530f5fd4c8e82a8b6018",
"assets/assets/images/skills/6.png": "6950e399109d9076d43be2a449a71146",
"assets/assets/images/skills/7.png": "05ad9861dc052829382d8ae68eb53233",
"assets/assets/images/skills/8.png": "a53b57327e214b81b4d825715a92e276",
"assets/assets/images/skills/9.png": "8a77f23fc1355f7f149998a6039cd6ba",
"assets/assets/projects/aimgame.gif": "8ecdab49b816265561f2e71d6f3e6a3f",
"assets/assets/projects/computerVision.jpeg": "e7dbe6e53fa224e5faf10ca230538d73",
"assets/assets/projects/docker.png": "93262e818b9ab51059584bbe0b70ab65",
"assets/assets/projects/emp.gif": "a998156b5bc7fc8b28b6ee0ce432132b",
"assets/assets/projects/emp.mp4": "4c9e6f23094fdcb95b382a41102661cc",
"assets/assets/projects/fileMana.gif": "22bc2891c0fef459f8d515073d1453ed",
"assets/assets/projects/lib.gif": "9fbf5d0e4133c942135307ca4135a062",
"assets/assets/projects/linux.png": "474256bc5afb82d14381800e320a4557",
"assets/assets/projects/mysql.png": "4c1d8974cd7c9010c855cf5a8f6a0a43",
"assets/assets/projects/portfolio.gif": "f8ea67f9e95e6c68c66eb7232e05fce4",
"assets/assets/rive/avatar.riv": "c0c6d3367aeed8bdc785c3342bc93795",
"assets/assets/rive/bg.riv": "1277066669bf5b22f9a39c6e63948362",
"assets/assets/rive/profile.riv": "28ae1a416ca9b5e8e07a52c5cb1a216e",
"assets/assets/rive/scroll.riv": "9fda5308379a3a2e390d9362b6614a8c",
"assets/FontManifest.json": "3e9e9f210a58430f9b6e46ae7c9303ef",
"assets/fonts/MaterialIcons-Regular.otf": "0c906912c0f7db8805bb7ea09d9b4f25",
"assets/NOTICES": "7fcd16cb77a6e530e913e283ba95352f",
"assets/packages/awesome_snackbar_content/assets/back.svg": "ba1c3aebba280f23f5509bd42dab958d",
"assets/packages/awesome_snackbar_content/assets/bubbles.svg": "1df6817bf509ee4e615fe821bc6dabd9",
"assets/packages/awesome_snackbar_content/assets/types/failure.svg": "cb9e759ee55687836e9c1f20480dd9c8",
"assets/packages/awesome_snackbar_content/assets/types/help.svg": "7fb350b5c30bde7deeb3160f591461ff",
"assets/packages/awesome_snackbar_content/assets/types/success.svg": "6e273a8f41cd45839b2e3a36747189ac",
"assets/packages/awesome_snackbar_content/assets/types/warning.svg": "cfcc5fcb570129febe890f2e117615e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "485630d94ee723b114ad27d0df3fc4eb",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "a2f69431a17380d47c8d90f932e5b9bc",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "3afa418d3a97b63325e96f31e22e4a12",
"icons/Icon-192.png": "a2f69431a17380d47c8d90f932e5b9bc",
"icons/Icon-512.png": "81e2f6cfb030e48fc47fb6ad32037418",
"icons/Icon-maskable-192.png": "a2f69431a17380d47c8d90f932e5b9bc",
"icons/Icon-maskable-512.png": "81e2f6cfb030e48fc47fb6ad32037418",
"index.html": "510120590b61e2d30c387d4022ef629e",
"/": "510120590b61e2d30c387d4022ef629e",
"main.dart.js": "e96e481ee4b69cce551a96811a42cfb5",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "60a71d692c6e6a566ef45d00a046e4e4"};
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
