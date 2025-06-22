
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
    'index.csr.html': {size: 7073, hash: 'f9eb0152899d2391149aa781ed5c11b6cf166d74b089033ce5ed7410167aaacf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1062, hash: '05b572874043c1cf2a447b6ffa4ec7b1e8db30bddabffe7739ef2370eb97ec1e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'champs d'apostolat/spiritualite/apropos/index.html': {size: 287036, hash: '6ec0143871102d2eea81518e779205a15dacfd84832e16015be6811b1dc659e8', text: () => import('./assets-chunks/champs d'apostolat_spiritualite_apropos_index_html.mjs').then(m => m.default)},
    'actualite/index.html': {size: 212837, hash: '232c435e40921887fa03cec0bdf44ed57dbfbf10b8bafc0508f91e8f4ac3d8d4', text: () => import('./assets-chunks/actualite_index_html.mjs').then(m => m.default)},
    'index.html': {size: 289835, hash: '414242231db0fc05073c95f0a9bcb0e8f1e3f2e647cc558165e2cfccf8c7b3ae', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'champs d'apostolat/spiritualite/realisation/index.html': {size: 211604, hash: 'fb25a033040d5d45de55603ef40c9407da1931431c376a756c0483d72e49fda5', text: () => import('./assets-chunks/champs d'apostolat_spiritualite_realisation_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/spiritualite/connaissance de l'eglise/index.html': {size: 242141, hash: 'e4cfd1f31a81b3ce2c8fd3cc80448497ad0b725a225e895cb13a31e5e37ca124', text: () => import('./assets-chunks/champs d'apostolat_spiritualite_connaissance de l'eglise_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/sante/galerie/index.html': {size: 215769, hash: '3f2e778a47f8e3f26c32913a3b895d922ecde53c980aeb5d21352c263c301fd8', text: () => import('./assets-chunks/champs d'apostolat_sante_galerie_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/sante/apropos/index.html': {size: 221733, hash: '5f7e4d6a09fee14a21eaca36784b0097a673436f1653061ac16a2d80800fbf4c', text: () => import('./assets-chunks/champs d'apostolat_sante_apropos_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/sante/historicité/index.html': {size: 211607, hash: '02087d685a8d9af7470f162dcdb2f1dd088d447b8a11c9dc822e0d4d91023d9a', text: () => import('./assets-chunks/champs d'apostolat_sante_historicité_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/sante/sime-as/index.html': {size: 425628, hash: '9a33bf934de166d72bee1a2b20887c70159fda9c8d9518594d61e8bae3d96cc3', text: () => import('./assets-chunks/champs d'apostolat_sante_sime-as_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/spiritualite/activite/index.html': {size: 222006, hash: '070a7cc874650fa43f92f61e281e0ef0090d270c39ad740b831530ed08fc0acd', text: () => import('./assets-chunks/champs d'apostolat_spiritualite_activite_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/sante/perspective/index.html': {size: 212982, hash: 'e9ee3e00088eff6f0621c88ed7cf1e8b2ce97497edb34801b76ee4d3ad4a9299', text: () => import('./assets-chunks/champs d'apostolat_sante_perspective_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/sante/generalités/index.html': {size: 211606, hash: '51272a64c90ed2b310a3cd9e92f61a4259682612129428c0c9aac5efc89b0d19', text: () => import('./assets-chunks/champs d'apostolat_sante_generalités_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/spiritualite/galerie/index.html': {size: 214478, hash: '05a16fbb4293597fdb47fcf366e22a4435e8eecaaae88ac2614b7b459af01982', text: () => import('./assets-chunks/champs d'apostolat_spiritualite_galerie_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/communication/apropos/index.html': {size: 223393, hash: '40c83a84165669d2cce471b1bd84cb8845a97c3f6ad3d8e2293e3856f21620fe', text: () => import('./assets-chunks/champs d'apostolat_communication_apropos_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/communication/galerie/index.html': {size: 214603, hash: '556e37bb8afe81f3bf7c187099839c25bcaec620de0eaa540918741e4fe9b20b', text: () => import('./assets-chunks/champs d'apostolat_communication_galerie_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/communication/généralité/index.html': {size: 211617, hash: '292fb678c6bf2ffcfec8f8e80a6ec14ce58d0fd7f09c5485b04d137f1af8c1cc', text: () => import('./assets-chunks/champs d'apostolat_communication_généralité_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/communication/activite/index.html': {size: 222449, hash: '98591eab8c60d4acac59db64c7a56490e0e6a87c6ef33b14bb195c674e163d1c', text: () => import('./assets-chunks/champs d'apostolat_communication_activite_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/environnement/activite/index.html': {size: 211798, hash: 'cdbb4f9a4fda308e28e1a335622b92084832dcd266359f38a647822bb9913161', text: () => import('./assets-chunks/champs d'apostolat_environnement_activite_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/environnement/apropos/index.html': {size: 428933, hash: '3ac017cc84b740e4a6d0ceaf1bbddc59674917e1e321e027be94073e5fd18040', text: () => import('./assets-chunks/champs d'apostolat_environnement_apropos_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/environnement/historicité/index.html': {size: 218365, hash: '703413ea5bd0135ad1936db193bcbd17706cf400f002b630572571e75008d6a1', text: () => import('./assets-chunks/champs d'apostolat_environnement_historicité_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/environnement/galerie/index.html': {size: 214386, hash: '5cbc707a01d17156d8f6861e4e7bb258da884d81821fac79eb40821edf6d839f', text: () => import('./assets-chunks/champs d'apostolat_environnement_galerie_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 224671, hash: '48718ef1dbc9fbbd3ba5bac30fd805ef21a8295884dd10ad2442f0dc37e38ece', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'connexion/index.html': {size: 214486, hash: '2719a1563a21b5f448beb1f7708d1425b552efb5bc2ae47ce42dc5b478655c8b', text: () => import('./assets-chunks/connexion_index_html.mjs').then(m => m.default)},
    'inscription/index.html': {size: 215691, hash: 'cb9f6dd1914963eb14aa865c1f6201b238a6f0c724aee7dc2cd075c9bf858777', text: () => import('./assets-chunks/inscription_index_html.mjs').then(m => m.default)},
    'devenir-benevole/index.html': {size: 220208, hash: '60bea137a3727bda7af13f9167fa35d3d9bf6c64cf5173e7a09597e3ad35646e', text: () => import('./assets-chunks/devenir-benevole_index_html.mjs').then(m => m.default)},
    'news-letter/index.html': {size: 214656, hash: 'b18c29dd2d7a61a6abeffdd078bb39471efad41dc71ac30f1fc328efbed036e3', text: () => import('./assets-chunks/news-letter_index_html.mjs').then(m => m.default)},
    'devenir-partenaire/index.html': {size: 219142, hash: '7c98f7de9975a2c04a713dd97faece3ef8fc805bef0d2fab7bb92332aa088b74', text: () => import('./assets-chunks/devenir-partenaire_index_html.mjs').then(m => m.default)},
    'count-down/index.html': {size: 213544, hash: '12095c5587eccf79d1aaf828637d2ecfdd58fe60d28fa082b7aba4ab8615d077', text: () => import('./assets-chunks/count-down_index_html.mjs').then(m => m.default)},
    'info-user/index.html': {size: 213427, hash: '599082021b63222abb91b0ea843f771e95c1ae1df9881c185428443d418518b1', text: () => import('./assets-chunks/info-user_index_html.mjs').then(m => m.default)},
    'presentation/index.html': {size: 213288, hash: '0371dca16d2bc6581543e74cec039ad75baf7245a3d5ef7efb6302c87eec48e4', text: () => import('./assets-chunks/presentation_index_html.mjs').then(m => m.default)},
    'prolegomene/index.html': {size: 212953, hash: '569c25b42fde34cb323c152fe9406616e9aa2b2605def30a21fa70e2d370aff4', text: () => import('./assets-chunks/prolegomene_index_html.mjs').then(m => m.default)},
    'changer-de-mot-de-passe/index.html': {size: 213791, hash: '03f39ff3d65a6ec4c0d7e061c4f9d0f41b20e90940734035776a928d94333f98', text: () => import('./assets-chunks/changer-de-mot-de-passe_index_html.mjs').then(m => m.default)},
    'styles-KT2LWW77.css': {size: 36869, hash: 'XhI6cWf3IQ4', text: () => import('./assets-chunks/styles-KT2LWW77_css.mjs').then(m => m.default)}
  },
};
