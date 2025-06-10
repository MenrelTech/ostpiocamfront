
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
    'index.csr.html': {size: 7630, hash: '390b8ee0069134f9d82540607d126ad1752fde9202270f4c187a7e6bce59e4fd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1011, hash: '3af1b548e72e9a27dd5c11d12707180fdc562c7acc9afb0a58d516f0dbe07e94', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'champs d'apostolat/spiritualite/apropos/index.html': {size: 322039, hash: '426ba9f81099e23a133363c889ed0e0d1736609f2bb6c952a614c379b825e1c9', text: () => import('./assets-chunks/champs d'apostolat_spiritualite_apropos_index_html.mjs').then(m => m.default)},
    'actualite/index.html': {size: 231376, hash: 'a797093905edff2779598ac3cba251cfb10b5ea54a3140a54c18b2081ed9c9a3', text: () => import('./assets-chunks/actualite_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/spiritualite/connaissance de l'eglise/index.html': {size: 267683, hash: 'a40db995a8bf301fed2028ec2b24f0655570c5814f872e6db2c4cf6768fa99e1', text: () => import('./assets-chunks/champs d'apostolat_spiritualite_connaissance de l'eglise_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/spiritualite/realisation/index.html': {size: 248784, hash: '1d1581af5fcc265ef15a3275927bd35e0a08e8ae9e64846e000d3db42fa99d54', text: () => import('./assets-chunks/champs d'apostolat_spiritualite_realisation_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/spiritualite/galerie/index.html': {size: 239935, hash: '85c5c1e7075936a433458daf5d3224814d99aac45746932b75da7485c93895d9', text: () => import('./assets-chunks/champs d'apostolat_spiritualite_galerie_index_html.mjs').then(m => m.default)},
    'index.html': {size: 320628, hash: '383232a893bc613e3f41b1aecbf6669d6e441f2cd8002b2b0b2e258bfb989e64', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'champs d'apostolat/sante/sime-as/index.html': {size: 458180, hash: '78cb633efdd2aada3fb4306d7f48b3057450cdffb6e20224c0d7e4eb5d678d97', text: () => import('./assets-chunks/champs d'apostolat_sante_sime-as_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/spiritualite/activite/index.html': {size: 258246, hash: 'e0d7aaf63ce50ed31a0eb9a7211d6a407c42ce39c922a77c7fd660ffac3d8456', text: () => import('./assets-chunks/champs d'apostolat_spiritualite_activite_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/sante/historicité/index.html': {size: 243228, hash: '62cc264962f4782869186d3ed6c59a73dfbf1ef211a0df5d7f288956cec3abf0', text: () => import('./assets-chunks/champs d'apostolat_sante_historicité_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/sante/apropos/index.html': {size: 267791, hash: '22343fc5a37db5247ef0f98b8bfbaf1820aa5af56b7b9132a8e6ab30f4f9cb65', text: () => import('./assets-chunks/champs d'apostolat_sante_apropos_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/sante/generalités/index.html': {size: 241619, hash: 'b32a32894eef7caf31d607e3ff4319ac177e7779e24551da3207f97d84d1acea', text: () => import('./assets-chunks/champs d'apostolat_sante_generalités_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/sante/perspective/index.html': {size: 240220, hash: '18ceb46247f9a20fbe60dd58d8612578aaca8b0c35eb797ef4c3add6fbbd622d', text: () => import('./assets-chunks/champs d'apostolat_sante_perspective_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/sante/galerie/index.html': {size: 241245, hash: 'fcb0745238552c8672b6208948c3c904b91ac06e6b616a4ee0027114346c5f38', text: () => import('./assets-chunks/champs d'apostolat_sante_galerie_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/communication/généralité/index.html': {size: 240586, hash: '143c850d5762d93ca54ea687a66e4a245e7c50ea6cb3c789038e4ed3e612dd41', text: () => import('./assets-chunks/champs d'apostolat_communication_généralité_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/environnement/apropos/index.html': {size: 457427, hash: '95b3016b192a09dbb7fdda24c01dbbe997f482c7d97764eb19d086a07a311859', text: () => import('./assets-chunks/champs d'apostolat_environnement_apropos_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/environnement/activite/index.html': {size: 237361, hash: '6fc04cd1dc89a007f5dfbfb715e25d64c793c1154e71cfdf6c09829aef09ccea', text: () => import('./assets-chunks/champs d'apostolat_environnement_activite_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/communication/galerie/index.html': {size: 239568, hash: '08d64665c44db3c41651df5fb9a4c883b27327b038ad7222ac7632c788d656dc', text: () => import('./assets-chunks/champs d'apostolat_communication_galerie_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/environnement/historicité/index.html': {size: 243887, hash: '09bd0e88f39a3792c936f9b7660d430cfe9454b28df3a9fd04fa7428eeca2bd0', text: () => import('./assets-chunks/champs d'apostolat_environnement_historicité_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 243192, hash: 'e2d26a98a2c636c3ca6c6e030dcdb84843ded26ece4d3a9d9a6775b3154c3272', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'connexion/index.html': {size: 232962, hash: '1862bbcc79c3865001081d45315a3e0b7f4ec8284aa839e54179b0e570467fce', text: () => import('./assets-chunks/connexion_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/environnement/galerie/index.html': {size: 239921, hash: 'b81797f56c5811ed7e1002b6c41c9b10e58619117bf6652b31dce2105c4e3bda', text: () => import('./assets-chunks/champs d'apostolat_environnement_galerie_index_html.mjs').then(m => m.default)},
    'devenir-benevole/index.html': {size: 238847, hash: 'db94d606956388cf0ef0f1b45aa92ec3fecfb07b8f54fe6436083c749ff2a108', text: () => import('./assets-chunks/devenir-benevole_index_html.mjs').then(m => m.default)},
    'inscription/index.html': {size: 234167, hash: 'caa97f2e26ad7f7e1031108c098f9e05a97b298098498d64ac0f5232bbf53327', text: () => import('./assets-chunks/inscription_index_html.mjs').then(m => m.default)},
    'news-letter/index.html': {size: 233148, hash: 'fee99396a100ce163c6dc5516336ff904a51b875622620d1087d99dc18d9f08d', text: () => import('./assets-chunks/news-letter_index_html.mjs').then(m => m.default)},
    'devenir-partenaire/index.html': {size: 237671, hash: '9942e905e17a4b080a2bcabea38e071e6f68d0c44bc4e956c5e5cd149a4e3fdc', text: () => import('./assets-chunks/devenir-partenaire_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/communication/apropos/index.html': {size: 250487, hash: '2127b1c5738d7551d985a505b6f59528244fbdd002048839de0109a4a0b2aa3f', text: () => import('./assets-chunks/champs d'apostolat_communication_apropos_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/communication/activite/index.html': {size: 263422, hash: 'e1875ffc6d33561c9a69410ce64bc6494100936b4798b0beb3a74deed49d08da', text: () => import('./assets-chunks/champs d'apostolat_communication_activite_index_html.mjs').then(m => m.default)},
    'presentation/index.html': {size: 235070, hash: 'faefa0904eafc32dbc02ef0d8dd7ce6f361f46cc41c7fb2606d5810a4d976f5c', text: () => import('./assets-chunks/presentation_index_html.mjs').then(m => m.default)},
    'prolegomene/index.html': {size: 234510, hash: 'e6fe4d44446f73f185a6f1499658d4adcca2f0929422c4590c262833ee5c767e', text: () => import('./assets-chunks/prolegomene_index_html.mjs').then(m => m.default)},
    'count-down/index.html': {size: 232051, hash: '19a5db3722f691cd65d203a547d0cdf3eb7a4bbbf119d92b2bc4313546a8908d', text: () => import('./assets-chunks/count-down_index_html.mjs').then(m => m.default)},
    'info-user/index.html': {size: 231890, hash: '727eb5339ca049c457e0cc2649da3fd5624d94bb056eae8be9626996468b541a', text: () => import('./assets-chunks/info-user_index_html.mjs').then(m => m.default)},
    'changer-de-mot-de-passe/index.html': {size: 232255, hash: '047f9e57968af93a3579e20f1000bd96dd61906e68241eca6d25a0a1f6ca1f53', text: () => import('./assets-chunks/changer-de-mot-de-passe_index_html.mjs').then(m => m.default)},
    'styles-FRGWYLDG.css': {size: 39148, hash: '8nxsZocW2bU', text: () => import('./assets-chunks/styles-FRGWYLDG_css.mjs').then(m => m.default)}
  },
};
