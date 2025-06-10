'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d8e8fca2dc0f896fd7cb4cb0031ba249",
".git/config": "3017bf304cfa4d82f8f86017dc096ff6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5570ef765e6bf6f689b3b35e4a062bcf",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ccbe2c69f7a0ffe0a4c05924d5070675",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8d02cc60f5ed27260d130f969663b1a4",
".git/logs/refs/heads/main": "b0db5b5a37b9cc3b63c898c70c6b9407",
".git/logs/refs/remotes/origin/HEAD": "005b290a1db751451c645568bda5312d",
".git/logs/refs/remotes/origin/main": "5562d2d1654824bcaccf81544b7ab98e",
".git/logs/refs/remotes/origin/origin/main": "58dee6cf505e9751adedf49f07bb31f8",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/39cd62df2bf927dee5b6e4217741bcc19fa0e0": "4b54abfdade9b7ed5fbb161da8530029",
".git/objects/05/ca6995a46072790a61315f14894e0f989408d8": "725fad8e9656edcad15535bf8c9801cc",
".git/objects/08/4c80d9a068f9d419328a2007264c5ddc211f3f": "22df01f218e9fb3dc04580056c8da582",
".git/objects/0b/db9716c1bf28b84c563ef6857bce365ed948d2": "1fc386c6a96cf0915796519c46b2087e",
".git/objects/0e/32cc2d7c1e8ff4bc3e53c6538a3c6db1797d93": "6f1e16bc92f69ef0fbcfe300a1b72481",
".git/objects/12/787c4ed5aa75724a5cbc9f6d87dcde545e48e4": "fe8294be8b6dfbcf33b0df3f45df246f",
".git/objects/13/3222529b3053650763c6c3f24ba4b5ceefbe6b": "80ecf548158b75c18783c4125b9b2b0b",
".git/objects/14/d8de1a17fb40de2b1b952b9e42a7ea2a3a23ec": "9553356e3a56059ba02e6bd12d6bbcc3",
".git/objects/1a/0df490d7690dc6274ed697125a8fc10f45c9eb": "292d1fe0eddf92b9e6a28faa398005d3",
".git/objects/1c/80387d2e9a3952be7b92ede903ff1dbd77820c": "e0f42812a65b24ccaa91e2af118f2382",
".git/objects/1d/b298857bc06325749915c1b8b9ae28f3832764": "afe755e4bbf87b13b3ceb84e31514bdb",
".git/objects/2e/633165c9e1007b16579a59c58460de3008fdef": "fbe81d0ff31820be101753ef5ce154d2",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/0d0dc14302230f82664d783b90d450dadb3fd1": "dca6f7a3534b9b9d4247fb8b912035c7",
".git/objects/37/57b4b0b902761a94cb77c3ef3aff08b7b34990": "c523d686489ef5e03512f45933e34bc4",
".git/objects/37/b64aa0bfbb425aac8738231a7760ce9693ff65": "4829f896c68c1bfcd6e62ed0ff287f66",
".git/objects/38/338723cafe2e7f6c17f4c8b9da5b0e5556c7e0": "53e24618d57eebffd55c68a88013635a",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/41/b31459725c38ab093e74f2ad02d1b212b1e333": "9f5aa9aa853cb826ea94b48fa15bb86b",
".git/objects/42/10571ae8136cd0d0b5f20bcb2d111ead01d77f": "83746603cd81ddac3dd61f235bcf1371",
".git/objects/46/33faa9c7c1dc6e0e20e51a46b525d9ab606d8f": "0ea76b0e96932a51955ed780c638b2ab",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/e69b4e5c6ee95ce6eed8e3f0bcdaf44c364479": "bf62387cda36c60e2efa7032d43c2425",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/50/0e3cfc90ddd201532b1abf7407760c171a230f": "58a5b362c7892030933720504ef8ee09",
".git/objects/55/0ddc6c76f7c417b0f178d5407b21394785318f": "54414a1f0a9220214296f5349addb908",
".git/objects/56/973d7b102f7ef334d9ad6adf434ed7bae3e6ee": "a017ce50f923478b77c4e13bd0408cee",
".git/objects/57/02d4765bdd9361d2a163157d900cd6b0d6ee4c": "083224195518f7a03c580326f97428d0",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5d/5920103a764e93967cf43dadcf4b10f1fa09e2": "13d9d83fb94104f9669a101c9c212f57",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6e/b0e18b79130d7e5013df0e2fa804925a9b5f96": "d426379ffd32756cf0caf4782b022a0f",
".git/objects/75/b969ded2bbd4dbd1d4c69611ee0b44d47ef68c": "1aad226a0fb61febbda94cab3a30a802",
".git/objects/82/3e819015a4f05b58e2d020777a42e5cb7d08c8": "f3602a97f0a2779f6243eb8e48ef85a6",
".git/objects/88/0a839da86121fa095783ba1bcb0fa791d00f76": "a87d9fcd9b5317fb379812493a70de73",
".git/objects/8a/1e9f707da4665975c241a4448b5a6784873c34": "eddee0527ec04943e70e69cbb0717d3f",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/542a10da74d9ac3929d196716af3bf2d22fa68": "28b105f8648aca7bdd20856b99b31dd3",
".git/objects/8b/69fe169f054fecc9423d6cd5d14c49463ca873": "ac0c90e02d71d0a02d1f10d58b6eb268",
".git/objects/91/3f5e31cf55cfb0427e593c0dd5dc47c1dbd82a": "c92c733bae5971f1622a08a9a3fbc8f4",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/94/9c26db17163a140f6622d84405efa5a154fda1": "be3dc8b67c940cd6d7b2c7fb84d88351",
".git/objects/9b/faa77181ecb69e4477eb99356e381a68347d3d": "dd8f1578002d55ab3df04a9bfcea7138",
".git/objects/a3/7073cbf87794b59ca9d2a7db1b6788e65ef97d": "e41ec80db6f73a6b936071ffd8202728",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b0/b790412d3fd18e9ffb8c905f76c0e8a059fd8e": "08de471288983cd6b7ab96230218cc0e",
".git/objects/b5/ccd30d51e163880d33ac7adf48ee4775eebede": "fc025d864c0fa86b3e6041b282ea1fb4",
".git/objects/b7/1516fec9c0c1366e97bebfabf6819cfbf4ba41": "c04f9f291592702d1598dbcfe59dcef3",
".git/objects/bd/dc46b1b497b57304b605013b2f316919849584": "808b8fa339f04eb5e4b39aac88bc2a5f",
".git/objects/bf/5f1a2b6f283499cba855550afcc928ad39685e": "ffbdb790181ce24e53cf2bb3b5c471cd",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/cf/fd28bef98fef09f97f757354ad7f22163b5429": "d582600a18b26dcdaef657e180a41510",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e1/6bd7532235368ce5f2026300660f7d6cdbfe71": "fd8d17bcef354aadbf7de6e9b8a8e3a7",
".git/objects/e3/db171b2c8858ae361c75463dfc0535ff743e52": "3887e5e72d5bf881637a1c4448106a0b",
".git/objects/e5/e281d852b18ed3de2742039f473de887085db8": "571cf98bd38fa0dff4d9689f6368c05f",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fd/b63ffdbd6ecaba6a9e66204b71083698b6ba11": "af8ee4da7ef657ef1b7b57c8f6ea4712",
".git/objects/fe/647f34118afec424c4104d1bd8f160e8cf1905": "76c735d6b852c75a9e0fcffda72bd3c9",
".git/objects/pack/pack-4ed4c8eafd268bdbdab5873d1d5a2b2868c06ffb.idx": "ffcb43fea7972177622e5262f70e73e9",
".git/objects/pack/pack-4ed4c8eafd268bdbdab5873d1d5a2b2868c06ffb.pack": "9bfdafb2d38ef137d114ee25a2ecf218",
".git/objects/pack/pack-4ed4c8eafd268bdbdab5873d1d5a2b2868c06ffb.rev": "b9162b6a89f3b6f1034759b4914a1de4",
".git/refs/heads/main": "b7f4c95e59806bce23f8b27e58640b4b",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "b7f4c95e59806bce23f8b27e58640b4b",
".git/refs/remotes/origin/origin/main": "b7f4c95e59806bce23f8b27e58640b4b",
"assets/AssetManifest.bin": "b9963becaf9b50605f254be60f232c64",
"assets/AssetManifest.bin.json": "e030300bd09039c22da935533bb3e3ff",
"assets/AssetManifest.json": "d9da2866eddb6e213e6090ed9543965a",
"assets/assets/certif/fluttercertif.jpg": "2ad43582fb5018a3cc04215c06222410",
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
"flutter_bootstrap.js": "c0c6b1464ea07d28a7c5bcba4fb3d95c",
"icons/Icon-192.png": "422332280e91646bb4f35813e94999b7",
"icons/Icon-512.png": "6499d5f94a686085d1dbcb9ad10cadd5",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ff20c9ba6c35bdda493b6d798cbdc252",
"/": "ff20c9ba6c35bdda493b6d798cbdc252",
"main.dart.js": "ad867d956c47c5a66a60d35c41f49b8e",
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
