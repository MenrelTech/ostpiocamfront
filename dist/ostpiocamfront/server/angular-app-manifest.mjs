
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
    "route": "/actualite"
  },
  {
    "renderMode": 2,
    "redirectTo": "/champs d'apostolat/spiritualite",
    "route": "/champs d'apostolat"
  },
  {
    "renderMode": 2,
    "redirectTo": "/champs d'apostolat/spiritualite/apropos",
    "route": "/champs d'apostolat/spiritualite"
  },
  {
    "renderMode": 2,
    "route": "/champs d'apostolat/spiritualite/apropos"
  },
  {
    "renderMode": 2,
    "route": "/champs d'apostolat/spiritualite/activite"
  },
  {
    "renderMode": 2,
    "route": "/champs d'apostolat/spiritualite/galerie"
  },
  {
    "renderMode": 2,
    "route": "/champs d'apostolat/spiritualite/connaissance de l'eglise"
  },
  {
    "renderMode": 2,
    "route": "/champs d'apostolat/spiritualite/realisation"
  },
  {
    "renderMode": 2,
    "redirectTo": "/champs d'apostolat/sante/apropos",
    "route": "/champs d'apostolat/sante"
  },
  {
    "renderMode": 2,
    "route": "/champs d'apostolat/sante/apropos"
  },
  {
    "renderMode": 2,
    "route": "/champs d'apostolat/sante/galerie"
  },
  {
    "renderMode": 2,
    "route": "/champs d'apostolat/sante/sime-as"
  },
  {
    "renderMode": 2,
    "route": "/champs d'apostolat/sante/historicité"
  },
  {
    "renderMode": 2,
    "redirectTo": "/champs d'apostolat/communication/apropos",
    "route": "/champs d'apostolat/communication"
  },
  {
    "renderMode": 2,
    "route": "/champs d'apostolat/communication/apropos"
  },
  {
    "renderMode": 2,
    "route": "/champs d'apostolat/communication/activite"
  },
  {
    "renderMode": 2,
    "route": "/champs d'apostolat/communication/galerie"
  },
  {
    "renderMode": 2,
    "redirectTo": "/champs d'apostolat/environnement/apropos",
    "route": "/champs d'apostolat/environnement"
  },
  {
    "renderMode": 2,
    "route": "/champs d'apostolat/environnement/apropos"
  },
  {
    "renderMode": 2,
    "route": "/champs d'apostolat/environnement/activite"
  },
  {
    "renderMode": 2,
    "route": "/champs d'apostolat/environnement/galerie"
  },
  {
    "renderMode": 2,
    "route": "/champs d'apostolat/environnement/historicité"
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
    'index.csr.html': {size: 7541, hash: '99b92bea6f3135bc61dfa8be332f79e5a69da16770f855772e4f189a083c0c63', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1011, hash: '9bc2e7486361976455a742f0476dbc9619f1d20a10cde716e821b87d20b69dde', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'champs d'apostolat/spiritualite/apropos/index.html': {size: 90158, hash: '8ca999cd2b10df6805f1b8991e4123fd82c98715e940155bd6f57b99a68bc43b', text: () => import('./assets-chunks/champs d'apostolat_spiritualite_apropos_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/spiritualite/galerie/index.html': {size: 54515, hash: '90907047349029c4d6301c1f430e85a8bf7b7e2f3e57dd5045b44bc63b87d396', text: () => import('./assets-chunks/champs d'apostolat_spiritualite_galerie_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/spiritualite/activite/index.html': {size: 63019, hash: 'dd5dcb7beb402203282fcb9399af1e3a6777b806094a2a2350f7325686006286', text: () => import('./assets-chunks/champs d'apostolat_spiritualite_activite_index_html.mjs').then(m => m.default)},
    'actualite/index.html': {size: 45986, hash: '8ddab2e61c5c5f1fa5aa8b1b95248dc4e14df7b9c35ee429597cf1666ed2d191', text: () => import('./assets-chunks/actualite_index_html.mjs').then(m => m.default)},
    'index.html': {size: 132734, hash: '5c9b936ec40d7304af3b621d0ca718c6f4ed0d67b4e7c063760fa020992385cf', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'champs d'apostolat/spiritualite/connaissance de l'eglise/index.html': {size: 81712, hash: '9332705e29266508034f62148cdc1710f661f46c84b0cbf659a0a4a5e8244905', text: () => import('./assets-chunks/champs d'apostolat_spiritualite_connaissance de l'eglise_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/spiritualite/realisation/index.html': {size: 51948, hash: '2404e9316e48e72e098d4a84f03e16dfcb12da0a1684987afd25eae00b2e214f', text: () => import('./assets-chunks/champs d'apostolat_spiritualite_realisation_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/sante/apropos/index.html': {size: 79833, hash: 'a8d3dc1a3fda72427e885ab8222a4ccf1bf1fc42f65e51d118b23481da0b4e68', text: () => import('./assets-chunks/champs d'apostolat_sante_apropos_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/sante/historicité/index.html': {size: 58040, hash: '8dc8c02e84cd85a22815b6b59ab1918f2168d1ca9e13f573301cb79d2705792e', text: () => import('./assets-chunks/champs d'apostolat_sante_historicité_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/sante/sime-as/index.html': {size: 79876, hash: '00634c3ae491b5c53eba05b5af313b5c1445d31973f9b9c7346332a22effb0d8', text: () => import('./assets-chunks/champs d'apostolat_sante_sime-as_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/sante/galerie/index.html': {size: 56117, hash: '6a34f39ef5af047bcb00ad1c0d541713d08d930a4edf94b6f41506724824d807', text: () => import('./assets-chunks/champs d'apostolat_sante_galerie_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/environnement/apropos/index.html': {size: 77459, hash: '607b79d6cef351b11883aaa3e1d8646ba59731b407a574a6a3e330e7a0114835', text: () => import('./assets-chunks/champs d'apostolat_environnement_apropos_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/communication/apropos/index.html': {size: 64058, hash: '64c2d2c05c00f8f24e3edd146b94a202b2b7cc1129c3f233f80f03b805f629ac', text: () => import('./assets-chunks/champs d'apostolat_communication_apropos_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/communication/galerie/index.html': {size: 54484, hash: '255f42cf2d0fedb82ee901bba56c10696e70585410dc4b0563917d2754849578', text: () => import('./assets-chunks/champs d'apostolat_communication_galerie_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/communication/activite/index.html': {size: 78068, hash: '190db2631f05f743f12e33695ebdf53820ede5f51e834c7645d3f5bd9a19cf18', text: () => import('./assets-chunks/champs d'apostolat_communication_activite_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 58085, hash: '6f85614aa22c1e5cc726cfeee6b7744ac383ac2b88d20fad927f958353cad025', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/environnement/historicité/index.html': {size: 58591, hash: '179a923495e9cda2efbf5408e0e18d56bdc833f264c97313498ed864502d9a4d', text: () => import('./assets-chunks/champs d'apostolat_environnement_historicité_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/environnement/activite/index.html': {size: 52197, hash: '8ad1b4f16bd8cc651c71403a70c663cc9c075cb68ed364800be2bc6f6a1897cd', text: () => import('./assets-chunks/champs d'apostolat_environnement_activite_index_html.mjs').then(m => m.default)},
    'inscription/index.html': {size: 49060, hash: '13a548e804c6284bddd9090584e27355da9780487fe84a7bd4dd4cb60d8c5487', text: () => import('./assets-chunks/inscription_index_html.mjs').then(m => m.default)},
    'devenir-benevole/index.html': {size: 53740, hash: '290c8ef9c86475a5e2d5c52383cff61e9b53668664d5fdc642941acdc5b18b53', text: () => import('./assets-chunks/devenir-benevole_index_html.mjs').then(m => m.default)},
    'connexion/index.html': {size: 47855, hash: '9bd21da35155a88133d431b94f1e53cdf6274e070996d72cb72ddf73a5fed658', text: () => import('./assets-chunks/connexion_index_html.mjs').then(m => m.default)},
    'count-down/index.html': {size: 46945, hash: '428f128a787da935182131503de7fe976981cb9e6ce38d5387c232fefc0b61f7', text: () => import('./assets-chunks/count-down_index_html.mjs').then(m => m.default)},
    'devenir-partenaire/index.html': {size: 52564, hash: '3a75e9a7e6616afcda92f451829e034d85d119a00a0c2bba7e9b6aa1b29fcf68', text: () => import('./assets-chunks/devenir-partenaire_index_html.mjs').then(m => m.default)},
    'news-letter/index.html': {size: 48041, hash: 'b9a7283c969dff14f78f92d0d0da8fbdaa1f0fe1366d65f1e72f085ce8884e46', text: () => import('./assets-chunks/news-letter_index_html.mjs').then(m => m.default)},
    'info-user/index.html': {size: 46783, hash: '32dc587e77254760d3fe905a6be44acfb996b25db4fe69500759fbf235c7b68a', text: () => import('./assets-chunks/info-user_index_html.mjs').then(m => m.default)},
    'presentation/index.html': {size: 49851, hash: '13a20b815c96b70b8659e378559b4707e25e7f927343755d8a310020d6d0df0b', text: () => import('./assets-chunks/presentation_index_html.mjs').then(m => m.default)},
    'prolegomene/index.html': {size: 49286, hash: 'be2e09890ee6f5f9eb9b4f4f65971482650751c7ebc5bb868db7d73d0bd61b6f', text: () => import('./assets-chunks/prolegomene_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/environnement/galerie/index.html': {size: 54502, hash: '31214cd53aa2312b7e619a50f378d9b32e1a1aef2f60d79d3f01f0db31e82a41', text: () => import('./assets-chunks/champs d'apostolat_environnement_galerie_index_html.mjs').then(m => m.default)},
    'changer-de-mot-de-passe/index.html': {size: 47148, hash: '13419b4605eae93b5a19075cc87bd8111aac5674c22a84c8c932f0f757c29ef7', text: () => import('./assets-chunks/changer-de-mot-de-passe_index_html.mjs').then(m => m.default)},
    'styles-VQFWTXTV.css': {size: 39032, hash: 'tyBuCGcCRo0', text: () => import('./assets-chunks/styles-VQFWTXTV_css.mjs').then(m => m.default)}
  },
};
