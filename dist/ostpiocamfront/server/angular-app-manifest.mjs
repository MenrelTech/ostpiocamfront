
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
    "route": "/champs d'apostolat/sante/perspective"
  },
  {
    "renderMode": 2,
    "route": "/champs d'apostolat/sante/generalités"
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
    "route": "/champs d'apostolat/communication/généralité"
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
    'index.csr.html': {size: 7681, hash: '276cf0be0d039ba2daac92f8dddd22dae239e5e80d5caa272917096df6d63e27', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1062, hash: '70ba7974d74555cd60515e45938fe1beccd1073f6a0a6418749f97796b7e2ff0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'champs d'apostolat/spiritualite/apropos/index.html': {size: 287673, hash: '9c9b7b125976ac5c544f26b5da512b49f5acd47fcc61384b6eb25a20ffd68be3', text: () => import('./assets-chunks/champs d'apostolat_spiritualite_apropos_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/spiritualite/activite/index.html': {size: 241213, hash: 'ae1d559e986d1a30c117732fe9e7be7e959696d67c0c17230ac7096a2e0e0222', text: () => import('./assets-chunks/champs d'apostolat_spiritualite_activite_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/spiritualite/connaissance de l'eglise/index.html': {size: 242778, hash: 'ca8b56724ddcbe932a0bc46cdd3664cbe943e94d3759d2cdb8c8e5923b641d00', text: () => import('./assets-chunks/champs d'apostolat_spiritualite_connaissance de l'eglise_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/spiritualite/realisation/index.html': {size: 212241, hash: '8d5897829e93a5349bd47f34ecadce28d2cea48a4a4b1651cdaad7fd34841fde', text: () => import('./assets-chunks/champs d'apostolat_spiritualite_realisation_index_html.mjs').then(m => m.default)},
    'index.html': {size: 309765, hash: '83472027563f194b5019574d1b1fc39a13dd1ab81f107ff224ad0f42561c6bfd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'champs d'apostolat/spiritualite/galerie/index.html': {size: 215065, hash: 'a07b6df026340f4e4493746aa9b2fb8042498b8afc41adc9ed357c88f0986aa8', text: () => import('./assets-chunks/champs d'apostolat_spiritualite_galerie_index_html.mjs').then(m => m.default)},
    'actualite/index.html': {size: 247857, hash: 'b5ffe3ca60b1b509147fdb2321d4e08f67d45b9da88e69254a36103fce363931', text: () => import('./assets-chunks/actualite_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/sante/sime-as/index.html': {size: 426186, hash: '1bdfa710e47cdcc74a0921e0ae1076a27d9de18449ca337d5ba6f8530b29826b', text: () => import('./assets-chunks/champs d'apostolat_sante_sime-as_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/sante/perspective/index.html': {size: 213619, hash: '3367110d1865c2c0e9267d6e5328eeee6d4d2c0d69b341ab90bbd8b12f244535', text: () => import('./assets-chunks/champs d'apostolat_sante_perspective_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/sante/historicité/index.html': {size: 212165, hash: 'ceb19600eb07a001cf8089d54958df9737d16e23023610e8b76305c0837765f1', text: () => import('./assets-chunks/champs d'apostolat_sante_historicité_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/sante/generalités/index.html': {size: 212164, hash: '7c2ff2ce0270bb238677b52c289b67e7c3adaed91cd15eda8387c9af2e86b9d0', text: () => import('./assets-chunks/champs d'apostolat_sante_generalités_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/sante/apropos/index.html': {size: 222528, hash: '6073b0dc4b16944717fbc075ed59972f96dc5222cbf68e707b8705be782c9402', text: () => import('./assets-chunks/champs d'apostolat_sante_apropos_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/sante/galerie/index.html': {size: 216356, hash: '60c9d80c881f4551f254b4cbf105f3c1b232a69931dd4ef2bc78edb96b0d75c9', text: () => import('./assets-chunks/champs d'apostolat_sante_galerie_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/communication/généralité/index.html': {size: 212175, hash: 'e2faf34ac42b724fa26caed155e5b2b05885a740c16e50e3e070e9f608600e9e', text: () => import('./assets-chunks/champs d'apostolat_communication_généralité_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/environnement/apropos/index.html': {size: 429491, hash: '6e491dec0777dd1112db7751dc449a394e82326643e3a85b8fb7bf33cbcbc7ca', text: () => import('./assets-chunks/champs d'apostolat_environnement_apropos_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/environnement/activite/index.html': {size: 212514, hash: '2e69120b7c7a3b40b7e546d7279857a261d0f3829581adee963f58582a345e50', text: () => import('./assets-chunks/champs d'apostolat_environnement_activite_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/communication/apropos/index.html': {size: 223980, hash: 'd4594b271e503ba78dde518ed18db0fabdbe8deb37aba385e48d84332885c3e2', text: () => import('./assets-chunks/champs d'apostolat_communication_apropos_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/environnement/historicité/index.html': {size: 219002, hash: '02998e3636813d32adbab317da0084ff6f033abe52ce628456e06229b2bbfc67', text: () => import('./assets-chunks/champs d'apostolat_environnement_historicité_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 225308, hash: 'a42c872f79a5f1e86b787d6c21e126117bb897336dbebe312fffdf5c90701f89', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'connexion/index.html': {size: 215123, hash: '4290240573d4a3b2c7b339970555e09254bed542adc4ca31fe5e5bfe0386f059', text: () => import('./assets-chunks/connexion_index_html.mjs').then(m => m.default)},
    'inscription/index.html': {size: 216328, hash: 'e7dadffddca5d82f72e08b5b2e633f41a33bf668feb03663b6ad9b98b6798d39', text: () => import('./assets-chunks/inscription_index_html.mjs').then(m => m.default)},
    'devenir-benevole/index.html': {size: 220845, hash: 'b0f42f2108a6100d6549924a1270f5fcc2692eddbcdb52b7dd6e9c42409ec77f', text: () => import('./assets-chunks/devenir-benevole_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/communication/galerie/index.html': {size: 215190, hash: '7a2ee105e53bbc0640d6a4739f2e393a6a89c2d7b0a974bd2cc268fa1ee16f38', text: () => import('./assets-chunks/champs d'apostolat_communication_galerie_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/environnement/galerie/index.html': {size: 215102, hash: '8a72f6c191f9c9dc22c6a40aa21467d2a36a1c1f0fe856a9097bb1d0df820726', text: () => import('./assets-chunks/champs d'apostolat_environnement_galerie_index_html.mjs').then(m => m.default)},
    'count-down/index.html': {size: 214181, hash: 'c87be6ac89b8d41b5fd8171215c306925f63dfe2231b9554835fb7b3639b477d', text: () => import('./assets-chunks/count-down_index_html.mjs').then(m => m.default)},
    'news-letter/index.html': {size: 215322, hash: '8c332d5aa9d01b9cbba947025d7aec2e0d1387046bc65da25ffbd4f73048e87a', text: () => import('./assets-chunks/news-letter_index_html.mjs').then(m => m.default)},
    'devenir-partenaire/index.html': {size: 219779, hash: 'c622d91ef3313e06bed46cf5eee73342f083f4bef9c4e103419bc11be7892d29', text: () => import('./assets-chunks/devenir-partenaire_index_html.mjs').then(m => m.default)},
    'prolegomene/index.html': {size: 213590, hash: '5817570948fc0527c1788baa2a728b871e554d54ed6e77b4c89808a6b824702b', text: () => import('./assets-chunks/prolegomene_index_html.mjs').then(m => m.default)},
    'info-user/index.html': {size: 214064, hash: 'aa316a076e920afc43e4e55533f328494401ac826c106fae2cf43c9cf9eba378', text: () => import('./assets-chunks/info-user_index_html.mjs').then(m => m.default)},
    'presentation/index.html': {size: 213925, hash: '5fcb228111a68fb8525d87997bcde3b6a6bb9dcb206010b26a3f0a1e86bc63a3', text: () => import('./assets-chunks/presentation_index_html.mjs').then(m => m.default)},
    'changer-de-mot-de-passe/index.html': {size: 214428, hash: '862e2e721da672c4b7ebce890bb15253141775b7649677a132c1215eb426d32e', text: () => import('./assets-chunks/changer-de-mot-de-passe_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/communication/activite/index.html': {size: 230028, hash: '54bf0da48dd289492eb9f5fae20e7ef075d1a48c87e8fe976af65dbfd1fa31fc', text: () => import('./assets-chunks/champs d'apostolat_communication_activite_index_html.mjs').then(m => m.default)},
    'styles-M6F23JGL.css': {size: 39341, hash: 'LCTJGNDG4bU', text: () => import('./assets-chunks/styles-M6F23JGL_css.mjs').then(m => m.default)}
  },
};
