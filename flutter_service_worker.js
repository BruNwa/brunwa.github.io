'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "5c1fff4a9b8c9c89834d6749b4890980",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "4fc15f749308ac04064979203248e136",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "353eab28092585171cc61ceba3cb1bd0",
".git/logs/refs/heads/main": "d9f8beb2921ff88981832b046a7f2221",
".git/logs/refs/remotes/origin/main": "367f9e663327bdafbc0dcb91f2ad953e",
".git/objects/00/111a16dabf054844fb5e0299e24c329239a6ba": "0aae1410d5503e3f4f07ea75be41e678",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/03/37c3bd16ad71ac6be2c4ffb3b866d58a275c31": "67d6b7b16d1ab25c5a48397cdd141edf",
".git/objects/03/e736613a750cdd8d4f54bca28844e2d13257cb": "bd840ac16c281d81f004822f55e1db62",
".git/objects/0f/996ba689f4c3e374885b4626bc4b1ccd8e1d84": "9c104d535cf1f5b33e4c850aba87d7ec",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/12/b7b3c40b5c8dd7d90968d43bac7bc673a6c221": "c1ae18fde79c24e596087332de9a1b13",
".git/objects/14/d2b375dc0c2c4aec35b3d9d4bd89d7291c52dd": "ccfdd2e5d5fbb4633b77ee36ca291938",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/22/da92f295453053feebeb792063f598784fbdef": "4cb67fd9310808a7eb4dbe80e71e7796",
".git/objects/23/a5c1edfb68da66010db5741185b3e015da4395": "a772b7cad4b13b7069ec83721f6626f1",
".git/objects/23/a939371a21745acb8f6d0040b55b5b6af5678e": "6fbc87c92d79ae4a7a01e3bb7b6b44ea",
".git/objects/26/6c4c019f57c67c48e5e418437fc0e777dfc609": "94b2e5569e8cfe1bc84764350a2aa30c",
".git/objects/33/8ac32b055a6d0ce2327adeb81fca2eeca6ed1f": "c7f9831742c550558685054612fde40a",
".git/objects/33/ab2bd4301c843a08a7b4dfd96456f476ebf2c7": "bf42654e60a91bca0a7b4a0ed8458668",
".git/objects/34/f28c5cb64fba228d02bbd8e61f5ec732fe5368": "ab6b1e6aa071f64c73c79e9c8d0dda0e",
".git/objects/34/f4ddd4d04b09d17bc7429896797156692ee0de": "6e6584bd03ae76b91408317735aead8a",
".git/objects/36/3727be781215925eb1bf4bf58069c265b224c8": "69543934b9130ba6c382902aa1e08176",
".git/objects/39/56398057ff6bd0110a4da10706e23a36167370": "d1d9ec28c1dd1804a6b8039443c5e7d8",
".git/objects/39/5af49e9a69b8b32106402a7647ced9fa3418ae": "5bd7c210707691ed59204ccbddc96d51",
".git/objects/3b/be8c27453e01ec38d71c9cb1271c8f18cf12cf": "e31c95df4a44635226c5bf0fe5eb5b4f",
".git/objects/3d/1ace5d6350958fb774bf6ecab0745e4506164f": "a77041ef6a485d27a95a0563592ac29a",
".git/objects/3e/6c942233c69f6b30cb8e8cdb4eea44b350586f": "a2e21b1c29619d5ed2b41322316f4ed6",
".git/objects/3f/bf9e4e8afb63388da65a53bfb92504c016dc2f": "b7c736f9a345b68d297ec7e99d6d43a2",
".git/objects/42/42d8f7a6f4b1df89d8e05127af7fa198c14067": "db5fefb767585c29529e9c933e661ad4",
".git/objects/42/8c1409df3887a77c12a75e8c4ab8c1e277ae89": "0de5c031ffa0db2f6280d7ac4c471e4c",
".git/objects/42/a295c887971f9a7000af35e6ca6b26f7f1409b": "d7366ea0e19130dfea759b981c1b9c35",
".git/objects/43/768e8ca4af2b45cd4481026d0909b4dde7da33": "d1f2414ccb55e164b4297b9489703d35",
".git/objects/46/ad715bfcdac3b330b747a3583053cb63b7e29b": "f608343d7d9339801cf4eb469ff51872",
".git/objects/49/2c1ae8e8e11c179cbdb0b77130b13ec6a7fbeb": "55b29c3cca0581a49ef49518b4c12815",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4d/a59ce1a6fd74aaa7fb82b996e27df5cd7f085a": "ff4073ce4aef9fc439e6d2b8839dbe11",
".git/objects/4e/ae52094f6e7fe8e617758f04bad1dee17b5609": "d2d26517e6634dd413333f8d357577b6",
".git/objects/52/a8a42e9fbfd87723de6ad710d68213fc9c82f9": "00ecc0de6524611d82286a2bf9aebefd",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/57/3b6f4ea019d3285353a14390fe114fe9037497": "d11f6cc690a2acb45cc75cd2d8a5ae7c",
".git/objects/57/ae57ee0b7e9a50766dd08bf253675573f9812c": "fac298b0edd8d112d97b53cdcdcca445",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/6140cb3d42ee5a530ac060629326813dc4dc7b": "55f45cb56d01486927222460610ce262",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5d/4bf70e4a9ce47eab54b4178f9e19a3673b3072": "9248223633ec9e32efa19d26b2eb49b0",
".git/objects/5d/90f84c6bc41dffae6e9bc5c6b0c85f0db243e9": "ee57be4b019844167a6bb234eb52d5ea",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/68/fd1bbc2a145c05d3b5b9457f0d87a867ffe58b": "9b64418fe27b1d4152cf55435c8bc176",
".git/objects/6a/22ae506cb119573460b84bd9c13df331e32bdc": "fe821a2dd732c93d25ff692736d0b9f0",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/6c/386928ab4a939bf8d723ae835f2c2132792df2": "3ae26f4ac4926e469da955e76f0d4051",
".git/objects/6d/f47b02b1f31fcacbd408248770787819561abd": "1a0213bbc382957eaa07859875efc1e5",
".git/objects/6f/a69f72acf6cac04c2258c1d127eec7b9aaef38": "33a4452ad77b0e4b5c991f475b7df81b",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/c0f995ee64396f29a3d9ef283b5050f45d6e0f": "aa69ae6032786d8c915bfc9bd1c64c28",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/76/4dbb7c0d06aaa7a963515c848d3f2bc472b2d9": "7422b91c6f4c9403af1f2d72a3bd6f1d",
".git/objects/79/ffa6589c684b5ee9829b33e3d9b6fde53e5f07": "c4a8befe91f8fc0a2e2e43ad7091d22e",
".git/objects/7a/eb58bd1b9436a814a50ee3539d38f7668908c8": "0b0114f1c99b0ed9088d544092449113",
".git/objects/7c/a61ca28f3d068f5c27e876052614158bb3e9b6": "f416513c31aaf7adea2b61f9d149c074",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/337c032e64f2978b3fb9549c86d7f64c99521d": "05d2522f07b691d9e1d5951b36e8f0b4",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/513d94693ae8100315edbb982d7d243f5469f6": "1a977afa8c0dc3ca507a79160ba48a51",
".git/objects/8a/7395a84f1287f11a8042688d14b7f9135811a7": "d14f2487ad050d128b8e75a3ce7f5bd1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/aa1c90375d61f03621a095458fade85ea93b13": "1730241972cb86507a4554ca82482416",
".git/objects/8c/1426df79475972b205c699b676d53e4c00b4f6": "5699d327ef5e5ae53b7498d5b1d30439",
".git/objects/8d/9d8688f5ff2eb33d35077fc43ff1b43e64989c": "adcbf56b2fcb356236d6ee5615e36e42",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/93/fa9ce76ba008fc8e9b3d23173b8d5a81ace871": "fd898b47d359039957d80537de2fa3ac",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/99/f241df101917e673805d78ace47a223fd661d7": "8e87a2aae0c1be6b3d12c630c11f9447",
".git/objects/9d/8c3c1e758ef8711186ae12fb0fd22aaa0f70db": "a391c0384d1cabd19155f2907d961b09",
".git/objects/9e/70be6a9ef052bd26e248428cb4db214663afca": "d5fbd6ae192ce2144bda4b1ab8f84862",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/9f/6a0da704884b1ed269fffa479612f78f209de0": "a1e8c56b2a532d45368b6162499dc4ca",
".git/objects/a0/b40af78adfed8df6905a89b3a9cf175c530e87": "1980e3f55042d5c53f4b9dcfd0c5bba0",
".git/objects/a1/bda67c4d9988c51c38e0da30a9634406e215c2": "9cd0bad77d03bee9fd5acf6f58123cf0",
".git/objects/a3/705ac09fe08d0beb98f45bb7e07d8465865244": "167dad3b868feb220cd17ee6678a3e7d",
".git/objects/aa/413740ad656d79969773c9bc9f56fb5482df65": "405febcdede516e04251b9c531f91b51",
".git/objects/aa/a64192dfd4afc24ffa37b6fc1c5c477a4c94a3": "99f24145b846eee16b42d9718120480d",
".git/objects/ab/b11d3c1e7f10cd6a243e134c12b7442c8a01fc": "2d1abba9daf57a7dd695859159b240f7",
".git/objects/af/03ba3597cdb2fcc04b777ee253ea99f8d9cf22": "a87d6d913b69987e7f928fcd002f9083",
".git/objects/af/7a0325cb46c7bf86f5d671c5e64046370aebc5": "156fb9b3a69a20a315d95a979566ed94",
".git/objects/b1/7c50097b56a642167430d4268485b3222d4d86": "493dea81c8d26f5dd6cbe59d88ccd8d1",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/ea07faa87bdb421c4740afd1a2afe591851fc0": "3b0580802369a96ca998751bb91d74b5",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/bd/3cc9711533de5f65174d2f4990490e8991ae6f": "3ec7ebcd73910afce9210c2597d5a0a4",
".git/objects/be/67410fd0a5aaf22e118ff0dd3be2dcd441f34c": "6b6267f4eaa77a2f3de6d0252bfef1c8",
".git/objects/c5/d2bdc26117c30f5b683b5a79faf78d1472db04": "46aa7902d42df4c7555e44d6e72ed787",
".git/objects/c7/9fe5c80bbc670f2dc3e3d81255f72118c84f3f": "cb265282b12981d097e531a8f5736b50",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cb/8c9c8a4796f8e4d1751d3613f1ed74beb55b7e": "61ae9fbbeba2fe8128369048a3849aa9",
".git/objects/cd/e689b2a764b6ea381b2526a6f707a8dba95a5b": "2669cc82d064e6299afa54a0e924afb1",
".git/objects/cf/c514ec24d58ec41fc7e9755d56757e5b0af4b7": "62ee54285334be94d21c6f78bd1a323a",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/93191fda48448bc6e73e7c7bd8b546207a770b": "fba09072dc3a002204ab1d58ceac1553",
".git/objects/d4/ec7570c6e29e5b85e4975bed0ef4767169673a": "5ee710af1a73af631056b7981a5ceacf",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/a8f07c41f01712e146215c5730797af63959a2": "95f481a943c46d20bb76b9a954c699d4",
".git/objects/d7/becdfb034d843a733b6c30fa3eefc8c108e1c3": "4e680825d863f3a3dc3a66a373b4d617",
".git/objects/db/cd6d08982b4815f718aa0cb81b2d7f7bc7e99f": "a3532e0699a3601ab228937d67d12f6c",
".git/objects/de/e71a306af8b8864b8ef8425c1bdc78572b62f1": "3b60db5d9a58e72739a771cc0da8ea93",
".git/objects/df/7093608a7eb6173529ce9eeeb4d46e3a8290e5": "151239f49193115888a1b60c3a47cefb",
".git/objects/df/d593f5778c688d5ebf6444d4ac606f38e9e1d8": "cf03861ebc602ce6367b11a9c10cce3b",
".git/objects/e0/d209728b1603bb875674acbd64f3610c8c9165": "01804a07f9b49158b2b5496c6ae0f6d3",
".git/objects/e2/6db5dd3dbab6fcdb06f7fd9ab9347ead808f02": "2f6d76624a9dec9c6214eeab0f98202e",
".git/objects/e3/f459fe1375d89ac666c6fe8c050ae4a41ade0a": "ee2525257d15e2768bfd34f8869b568e",
".git/objects/e6/1e8e88bdc98d7edba0ba2a372dfd7b4e5c4b3f": "cdc5a17a6724bfcd899294f948824469",
".git/objects/e7/6ec69a650f1323fe9af6dafc55628ca1afc7e1": "cdc851a64d802b21a07c9e1291833911",
".git/objects/e9/a02d5b93ebe32cb9884d99a07fd8652508a09d": "ff757245cb6ae3078f64a5e5d515e0c8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/6b3ae33dea5ac5f52a7e37c23a324a7471d477": "3ddcee500b05fa21c5f7ab6c0aae2e68",
".git/objects/ee/2f7bf744c86b0166b4374ab609904a5ac82a9d": "e2503cef3d20a509277bb9a8ec71eac3",
".git/objects/f0/00527cc9c20ab912a03634aeb50578d775d667": "0fcbada1a157b211076a0b5dfe4c19ce",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f9/674d82b7ed81dd77061da6879c792c6c051e58": "655df023fbe92bafa37a44d790ed76af",
".git/objects/fc/5519037bab745445f4cce43d8ef6951f69dc71": "57c41cc28cbf294a9334265dd68ee03d",
".git/objects/fd/da798a43d94e96b76e2ef0aeb5858503822f5e": "484789dd1fd63e0974bdc962c79cf7f2",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/main": "9977fc936b756032142b546923b6cef8",
".git/refs/remotes/origin/main": "9977fc936b756032142b546923b6cef8",
"assets/AssetManifest.bin": "05574141aed761b3a7f3a78b72ce1f90",
"assets/AssetManifest.bin.json": "d353cb8f5d9f9532fa379a07a958c999",
"assets/AssetManifest.json": "5fe73b5bde11cd86f3245f8e22296ea4",
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
"assets/assets/images/icons/android.png": "e34149cb39272fb093cae7cbe45aa5f8",
"assets/assets/images/icons/circet.png": "111a4a535999e14ca25f2b048a382c44",
"assets/assets/images/icons/flutter.png": "b25bbe3025f43caf1f019c71617fe922",
"assets/assets/images/icons/fst.png": "8d851a2cb95c51535b6b2bfa8998dc39",
"assets/assets/images/icons/ios.png": "97824076344b5e5739befd5b422cbcdd",
"assets/assets/images/icons/majorel.png": "bb69225a59bc259f093df5e8da672539",
"assets/assets/images/icons/ofppt.png": "660fb0924d573149564f99471a196efa",
"assets/assets/images/icons/pcz.png": "1a9f8bb896bf02820607595ca9c0cd48",
"assets/assets/images/icons/python.png": "7ed7279e46619d48710dca21a38a9c0c",
"assets/assets/images/logo/logo_black.png": "a9367e4eee2b00c71605fd5ab08f9206",
"assets/assets/images/logo/logo_white.png": "b45a55e4305e89b89235dd3d515a1a88",
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
"assets/assets/projects/portfolio.gif": "b87bdac46b3edfb7e35e6cf0f8ba31e1",
"assets/assets/rive/avatar.riv": "87b480e81a7972fce58e58bd354b7ea7",
"assets/assets/rive/bg.riv": "1277066669bf5b22f9a39c6e63948362",
"assets/assets/rive/profile.riv": "28ae1a416ca9b5e8e07a52c5cb1a216e",
"assets/FontManifest.json": "3e9e9f210a58430f9b6e46ae7c9303ef",
"assets/fonts/MaterialIcons-Regular.otf": "0c906912c0f7db8805bb7ea09d9b4f25",
"assets/NOTICES": "daa7a77f3e7f0bf36e2554adbf2aa51b",
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
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "fadc515a0e5e6e3d420cd15fac77bd90",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "434ef0118a9b94459169e172514dd828",
"icons/Icon-192.png": "a2f69431a17380d47c8d90f932e5b9bc",
"icons/Icon-512.png": "81e2f6cfb030e48fc47fb6ad32037418",
"icons/Icon-maskable-192.png": "a2f69431a17380d47c8d90f932e5b9bc",
"icons/Icon-maskable-512.png": "81e2f6cfb030e48fc47fb6ad32037418",
"index.html": "510120590b61e2d30c387d4022ef629e",
"/": "510120590b61e2d30c387d4022ef629e",
"main.dart.js": "529590af85f6f7daebac3226e555bf5e",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
