
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/spiritualite"
  },
  {
    "renderMode": 2,
    "route": "/spiritualite/activite"
  },
  {
    "renderMode": 2,
    "route": "/spiritualite/apropos"
  },
  {
    "renderMode": 2,
    "route": "/spiritualite/galerie"
  },
  {
    "renderMode": 2,
    "route": "/sante"
  },
  {
    "renderMode": 2,
    "route": "/sante/apropos"
  },
  {
    "renderMode": 2,
    "route": "/sante/galerie"
  },
  {
    "renderMode": 2,
    "route": "/sante/activite"
  },
  {
    "renderMode": 2,
    "route": "/environnement"
  },
  {
    "renderMode": 2,
    "route": "/environnement/apropos"
  },
  {
    "renderMode": 2,
    "route": "/environnement/activite"
  },
  {
    "renderMode": 2,
    "route": "/environnement2"
  },
  {
    "renderMode": 2,
    "route": "/actualite"
  },
  {
    "renderMode": 2,
    "route": "/communication"
  },
  {
    "renderMode": 2,
    "route": "/communication/apropos"
  },
  {
    "renderMode": 2,
    "route": "/communication/activite"
  },
  {
    "renderMode": 2,
    "route": "/champs d'apostolat"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/connexion"
  },
  {
    "renderMode": 2,
    "route": "/inscription"
  },
  {
    "renderMode": 2,
    "route": "/devenir-benevole"
  },
  {
    "renderMode": 2,
    "route": "/devenir-partenaire"
  },
  {
    "renderMode": 2,
    "route": "/news-letter"
  },
  {
    "renderMode": 2,
    "route": "/count-down"
  },
  {
    "renderMode": 2,
    "route": "/presentation"
  },
  {
    "renderMode": 2,
    "route": "/prolegomene"
  },
  {
    "renderMode": 2,
    "route": "/info-user"
  },
  {
    "renderMode": 2,
    "route": "/changer-de-mot-de-passe"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7498, hash: 'a017e7d3c5757508a69338ab6d255a4595d36f3d5c38354b2b6599f628d5ea4d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1011, hash: '6ed012d0dcc818f4339b40a607c03d68beafd2269bf11010ac31fa50c06dbcc9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'spiritualite/index.html': {size: 86260, hash: 'a3c5fcff1958be842cc40cf68f74b246a9f1e23a2b23543288815843961f660a', text: () => import('./assets-chunks/spiritualite_index_html.mjs').then(m => m.default)},
    'spiritualite/galerie/index.html': {size: 55984, hash: '3b9e2b7ad886c89c8455d2e85d4410391bb9e7b76e1612ec8cebffc45890d670', text: () => import('./assets-chunks/spiritualite_galerie_index_html.mjs').then(m => m.default)},
    'sante/index.html': {size: 79381, hash: 'bca3309c2500f98c695994d9c35100d6665536d25115b6ccd36e1412d7c1ef10', text: () => import('./assets-chunks/sante_index_html.mjs').then(m => m.default)},
    'sante/apropos/index.html': {size: 55500, hash: '4f0946671e70d1fc32ac8b0672c51a150b9194e23fd9a56deaf824397cc3121f', text: () => import('./assets-chunks/sante_apropos_index_html.mjs').then(m => m.default)},
    'spiritualite/activite/index.html': {size: 80454, hash: 'a05904c45a257e886a9c85f3b97442fcb8d950f1b8c137ba9335fe4129bae1b2', text: () => import('./assets-chunks/spiritualite_activite_index_html.mjs').then(m => m.default)},
    'spiritualite/apropos/index.html': {size: 56776, hash: '9365a9f50ddfadabbef6d1400c0798e9bb6b8c7855a943e6a42efd5cce99d7f2', text: () => import('./assets-chunks/spiritualite_apropos_index_html.mjs').then(m => m.default)},
    'index.html': {size: 142162, hash: '9ed3977dbffee14cf15b03e5495faf82309f357f3cfedf9c7fb76f423ad0fb3d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'sante/galerie/index.html': {size: 54983, hash: '77d3cf94478f751e8d5403414df4868e25ce1aafad58d01de56718f07c4d1e9d', text: () => import('./assets-chunks/sante_galerie_index_html.mjs').then(m => m.default)},
    'sante/activite/index.html': {size: 69942, hash: 'c712af50e1c786a123d9385bfe13d1f27ad8d56b6e4b391042d5765a37785962', text: () => import('./assets-chunks/sante_activite_index_html.mjs').then(m => m.default)},
    'environnement/index.html': {size: 83697, hash: '2f03740d60538bc8bb0354cb263f9138cf9a10a1f6abd00275d029df288915e0', text: () => import('./assets-chunks/environnement_index_html.mjs').then(m => m.default)},
    'environnement/activite/index.html': {size: 69897, hash: '2c296842f12fbcdcf72cc663ebcdf4f831ca8882eae2cf755d460644112f5b09', text: () => import('./assets-chunks/environnement_activite_index_html.mjs').then(m => m.default)},
    'environnement/apropos/index.html': {size: 55568, hash: '70d61e9e15db3367004f9ba80f9ea3ec95856ac824853528e56e6856bfa28131', text: () => import('./assets-chunks/environnement_apropos_index_html.mjs').then(m => m.default)},
    'environnement2/index.html': {size: 81773, hash: 'f292609fecd9d1f25110e511f93ddb6dbb7b12bf599fcbf07bc8dfa9f614085d', text: () => import('./assets-chunks/environnement2_index_html.mjs').then(m => m.default)},
    'communication/index.html': {size: 69487, hash: '2b20afbbe7eb5a824a0eea4dac5adaea442b7f761c510b0e8c5f10ec9204f143', text: () => import('./assets-chunks/communication_index_html.mjs').then(m => m.default)},
    'communication/activite/index.html': {size: 69873, hash: 'a76d54a0b8f5b2b1ac023e5c0774ceb729a8b47bd91578d84093a09e31235056', text: () => import('./assets-chunks/communication_activite_index_html.mjs').then(m => m.default)},
    'communication/apropos/index.html': {size: 55493, hash: '9f9e1bf0af3df64a3ca1b1f22eb726b1bda7aa97a6570b535381a477812bea80', text: () => import('./assets-chunks/communication_apropos_index_html.mjs').then(m => m.default)},
    'actualite/index.html': {size: 65492, hash: '8637d8439eecd8c50431a72c9dff973cc8bd7eab9b0709f27572f4b23296c5ad', text: () => import('./assets-chunks/actualite_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 57728, hash: '634f4f446e941b047924410f81cb735f25499f796f75f303a1fdebfec6435265', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/index.html': {size: 45527, hash: '8cff52f9b224eafbde9a7b8b1f45f8a707a6bea61e10013317d5036eccc4dc2f', text: () => import('./assets-chunks/champs d'apostolat_index_html.mjs').then(m => m.default)},
    'inscription/index.html': {size: 48699, hash: '1324819b4e99fa15f1b4fc2450ced7ffd37829d107184bca037c3c6388cc6990', text: () => import('./assets-chunks/inscription_index_html.mjs').then(m => m.default)},
    'connexion/index.html': {size: 47496, hash: '3968c9c4c94497e62caa5b1885a9e4cfc6f834299a5532f9aef48f3200b5fce7', text: () => import('./assets-chunks/connexion_index_html.mjs').then(m => m.default)},
    'news-letter/index.html': {size: 47552, hash: 'c1eb43f17e43796d1f8753f1efee0861bf7d2b70ec6a3dad9385d51eeba8f2e9', text: () => import('./assets-chunks/news-letter_index_html.mjs').then(m => m.default)},
    'devenir-benevole/index.html': {size: 53383, hash: '8e043c4ddf2dec01707d169312ed8166b2b2ecec0d2435abadc1a0376bf3e4af', text: () => import('./assets-chunks/devenir-benevole_index_html.mjs').then(m => m.default)},
    'count-down/index.html': {size: 46585, hash: 'c2c32927889d2564dd961064dbc621a3c7740871cb23b7e92fed35f36596b213', text: () => import('./assets-chunks/count-down_index_html.mjs').then(m => m.default)},
    'devenir-partenaire/index.html': {size: 52203, hash: '0a6708528a98851a48d923b378e2eae063f58218677d3640ed730ebe1bc0b500', text: () => import('./assets-chunks/devenir-partenaire_index_html.mjs').then(m => m.default)},
    'changer-de-mot-de-passe/index.html': {size: 46787, hash: 'd921a51e9f1a462333bca6e12b370106af77e33bc7a2fbc13901543db9d49f1a', text: () => import('./assets-chunks/changer-de-mot-de-passe_index_html.mjs').then(m => m.default)},
    'presentation/index.html': {size: 49514, hash: 'c8a5f8ec71d21e00375bbd6e04b98813e96e0434b5a23442f1f319c6ca93772b', text: () => import('./assets-chunks/presentation_index_html.mjs').then(m => m.default)},
    'prolegomene/index.html': {size: 48953, hash: 'c62cab198d4a044c5270cb81fcea2631e785a7e1daa78b6c16db449af21356d4', text: () => import('./assets-chunks/prolegomene_index_html.mjs').then(m => m.default)},
    'info-user/index.html': {size: 46435, hash: '9a5222fb6dfb2c85d06f92220e6b54605aea608e84c5b6c45a58cdba1e4d21ff', text: () => import('./assets-chunks/info-user_index_html.mjs').then(m => m.default)},
    'styles-KXWASEYL.css': {size: 38176, hash: '+Jfp8cIEbuc', text: () => import('./assets-chunks/styles-KXWASEYL_css.mjs').then(m => m.default)}
  },
};
