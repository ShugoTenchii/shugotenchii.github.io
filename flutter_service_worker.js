'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d8e8fca2dc0f896fd7cb4cb0031ba249",
".git/config": "3017bf304cfa4d82f8f86017dc096ff6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7bc59f2bb6acae5efdb8e4339d645d10",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a97946a3cd2f44c85f946807384b0937",
".git/logs/refs/heads/main": "50a568e33712676fa421c884b1d4c5a5",
".git/logs/refs/heads/master": "c661f55c3c846caebee82f1b5c157f2c",
".git/logs/refs/remotes/origin/main": "b6aee832b3334d8d57feaa7467c3cd60",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/03/39cd62df2bf927dee5b6e4217741bcc19fa0e0": "4b54abfdade9b7ed5fbb161da8530029",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/13893a7f23f258f987cc1dc1031e7af684e286": "067cdf22cf68d3d02da47416d6069e55",
".git/objects/09/305fbbdd58056975c12f72f284278e8d87740c": "cfba1feaf4ebf1487741a7e548ede5e7",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0b/db9716c1bf28b84c563ef6857bce365ed948d2": "1fc386c6a96cf0915796519c46b2087e",
".git/objects/10/2de65dc9ed651dd2e1ab2f4bf6099636177fd1": "4c2cd8540b156c50e7f3aeb2d485bdd8",
".git/objects/11/e4f512c84a70b185755ba7a50d037840174ec2": "f206a7832b53eef45ea720c63083d278",
".git/objects/12/de6068fd9cc21cb3e9e8dabc038b50b6b9ee22": "e8b5083b14136dcaf6cd2d054eec1c99",
".git/objects/14/d8de1a17fb40de2b1b952b9e42a7ea2a3a23ec": "9553356e3a56059ba02e6bd12d6bbcc3",
".git/objects/17/fe4bce4df89a31c64749429f03a0d0060b00a8": "0dabdb69d0a25c9bf819e300bc727e03",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/b298857bc06325749915c1b8b9ae28f3832764": "afe755e4bbf87b13b3ceb84e31514bdb",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/24/6805f5a4d2fb6c222f3baa061b240776db4276": "e6e4ee3c1861c4d44bc4d3922b9b71c0",
".git/objects/25/8ac9a623b30712f8df95f8d0986116fbb50d15": "6c77709e2536be4789c9c19eee0bd3e7",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/27/49d5ec0291253c8dd7b94be831df422c26523e": "f7759d8f014efa9a49e9ed6497f93eeb",
".git/objects/31/8da2b9cb509dbd8052049b15d467c6b27dc390": "fa7ce06c3d5e6f72a2d06566b721c072",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/36/20ef18909a16aa7383bac7d111b11089e7f854": "01058f36b03fb1923df45772dea16352",
".git/objects/36/65884f89a6b2a7bd77dbc06703f4399f22d6d7": "a52f799dd26c72bf0ad028fa1c8c85ff",
".git/objects/37/57b4b0b902761a94cb77c3ef3aff08b7b34990": "c523d686489ef5e03512f45933e34bc4",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/b64aa0bfbb425aac8738231a7760ce9693ff65": "4829f896c68c1bfcd6e62ed0ff287f66",
".git/objects/37/fd311994d521d27646aa5eba17e654b20a9031": "6c44e6218c2dac2e812cdf7ead518a08",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/43/895d211230bed33f4bdb1973ee2cae573ec044": "8fc303e8e9d6ccffd98dec8d806561f4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/1103789e4bda6e70239b76446fbdc21d6424c1": "fe5b03764031f1947da62d83d3bc54cc",
".git/objects/57/02d4765bdd9361d2a163157d900cd6b0d6ee4c": "083224195518f7a03c580326f97428d0",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/59/e3204a76691794c251542e261281e7b8a0d5c6": "7d6790a8fd14f4dbf10fe2c2be4ba333",
".git/objects/5a/13bd5a18e506d22647433b1980295ce67bcebe": "50b077c2b68b737800ac0d99a322b746",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/64/d18cc60e29a1ea920e2ff3556103a675dc02e3": "332dea6f012a2797f011f0f6f26cddad",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/6918b809a41d8368f002003db56ef98a35afef": "5892e3485281b6ecc1d5a0b22bef0fd9",
".git/objects/6f/80050fb482dabdcff23524b9aac07da6688245": "1591e0febe26e105c336be2dac95f461",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/23ff3b2f53a4b0517b466dd6ecbfe951f4770d": "5fb057a868e084785a545febe5c1e80b",
".git/objects/71/c4e759ce0d57f7de2618da49a2bea6276c8c96": "b35f3714b8638957042da045d293e0f3",
".git/objects/78/34a7070c5fc42619cd90490dce4c89d24e0308": "1e53f8651a0c52feee96752bd3bce5fb",
".git/objects/7a/a938f8a26d4e68fa697866646c99114d726189": "141789d35537bc3a40fae6c4264fcba3",
".git/objects/88/0a839da86121fa095783ba1bcb0fa791d00f76": "a87d9fcd9b5317fb379812493a70de73",
".git/objects/8a/1e9f707da4665975c241a4448b5a6784873c34": "eddee0527ec04943e70e69cbb0717d3f",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/542a10da74d9ac3929d196716af3bf2d22fa68": "28b105f8648aca7bdd20856b99b31dd3",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/98/b70b5690e269fe7e303622315c53bd9aba7285": "418ef39c167daa7a25438f12ffa860df",
".git/objects/9a/fd8f83ad60fceee3d89f8979557f12f36c3f05": "0541df4e732871ae8570aec48f8849e0",
".git/objects/9b/faa77181ecb69e4477eb99356e381a68347d3d": "dd8f1578002d55ab3df04a9bfcea7138",
".git/objects/9e/9cf459e2dd017b1cf1ae48becf79b1ebdfe19e": "ca49dd2dba39a080b378ff22f91eee60",
".git/objects/a3/7073cbf87794b59ca9d2a7db1b6788e65ef97d": "e41ec80db6f73a6b936071ffd8202728",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/aa/27ed2fb65e2f64cef8e134285b39f8bc765a62": "f6484c2703e22cfc8f988ec159c03a99",
".git/objects/ac/f974382d766216310a25bb75a1d38370eeb946": "aadafaa402dfe1186237f64fed4b1294",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/bdbc3d58da97a50c27375e5ede166c3d666303": "53b816d4716e1178a35430d9ae246a2b",
".git/objects/b4/6203d11370879d87d23d43324e1a2f92da70fb": "1dd7dc23b2928587784831bbd1ffe8f3",
".git/objects/b5/ccd30d51e163880d33ac7adf48ee4775eebede": "fc025d864c0fa86b3e6041b282ea1fb4",
".git/objects/b7/1516fec9c0c1366e97bebfabf6819cfbf4ba41": "c04f9f291592702d1598dbcfe59dcef3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c0/a4c5f873171dfcef4995e3e2395a308d20b1d0": "1d918d26d7aa0bda8fe0b148fadedffc",
".git/objects/c7/e44adf67b6c70ba124bbff06148c6c4daa6da9": "967dd4367b07dacc81a94d06a44b57a7",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/cc/ce1b430fd858e335083b02bb5749680af01cdd": "9276ef03cf63106a08c8cba997259e27",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/13f8a0bfe5a4641dee259a41ea44d4dbee9556": "e3fda53e6829ec6870401fcb3eeb5cc4",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e1/96174f4be1866430a71e6d9901dd8ec9a76d92": "634299c8e81169835ddd174694ec29d9",
".git/objects/e2/fdc9c0da82fb3cea8ee7d07b82562310aba8bb": "0695e1f1f98f32e63230f9849842d9e1",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f4/273abc47ec3f9a1fa9840d25534515943a5b56": "7a258e1ace73f9f56d0c0b36d011e677",
".git/objects/f5/4b0f289de41e5c5946845ff1bc34fb9dc6735a": "9eda3411edce5a1faa2948304be44ad4",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/6130903cad5960a85a3387c40a472c95e66fe2": "dca92cdae871f198c7420ee99994c3ca",
".git/objects/f9/5584a43a32306f1b541cd7e94b936bb75bde59": "38397b7370afe115c8de7ba9b5175899",
".git/objects/fb/7791ee274486840b2a9d57aea6daa1a4b8b8ee": "cae00791f270b8dc09111a8ffd74473d",
".git/objects/fe/cacef39b75c2aef164c0a14402251920f341f4": "68d4080000efba6633861dc33cfa026c",
".git/refs/heads/main": "89de53741c42a0c53af010b24baf9841",
".git/refs/heads/master": "2300b9708948deb450f952a0ba55431e",
".git/refs/remotes/origin/main": "89de53741c42a0c53af010b24baf9841",
"assets/AssetManifest.bin": "c0d7ecd7ffe2e4c9a2eb7b800ae97e6a",
"assets/AssetManifest.bin.json": "b04c2b28a9dd4586646a25fcd603a7a1",
"assets/AssetManifest.json": "437ea694b5f43b4e59dd1cea57d01417",
"assets/assets/CV.pdf": "6b8f2543f8a923bbcc40ee7d2c016099",
"assets/assets/CV.png": "2e2890cfc5ca7a29433c633172619f51",
"assets/assets/dark.png": "c587a9ab6b97d09d62fd7f513a8f5b51",
"assets/assets/dart.png": "31976ff22bb0bd0ce18da966097ac742",
"assets/assets/firebase.png": "44b31b544b9ca3c736788200b4fd120d",
"assets/assets/flutter-logo.png": "8a50b602aa79b19775c22d02a290f51f",
"assets/assets/logoeasy.png": "0f5f6a6ab705570dc67286aaaa149a73",
"assets/assets/white.png": "9306cae69fee043d1344d899f3884ddf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "55ec239094a5d0e4e2f79c50d2cb9b0d",
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
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "db3024800236e2b8308ea1c91c2f4f25",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "9ce0538016ef9c032e369a1ed52fd58d",
"icons/Icon-192.png": "422332280e91646bb4f35813e94999b7",
"icons/Icon-512.png": "6499d5f94a686085d1dbcb9ad10cadd5",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c4031f27b928f94f560bf58e4eec880d",
"/": "c4031f27b928f94f560bf58e4eec880d",
"main.dart.js": "c01d1bde53855636206a50624956040b",
"manifest.json": "95a7633b66f20c67172d3e7266db3b29",
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
