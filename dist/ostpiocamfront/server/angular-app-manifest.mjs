
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
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6197, hash: 'bd3e79672c8ac3a299d28d690da6f764696b6250421650f16cd69598fadeff01', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1011, hash: '0d7b30412a6198592f4bf35f5455159c59c40da4a46bff84fdb0afb6af606846', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'spiritualite/index.html': {size: 65722, hash: 'a2761922ca3b6bf2b720cdb390161e1a8876978868786314169c3199ae1e3d95', text: () => import('./assets-chunks/spiritualite_index_html.mjs').then(m => m.default)},
    'index.html': {size: 113567, hash: '01453ee53a12c112ef69d9066c741589ae33e62ecd638850fa40807460dd11fb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'spiritualite/galerie/index.html': {size: 35375, hash: '44c2ebd174315a1b704fb65c1313e2f81ede5724f4380bfe70f079add472b51c', text: () => import('./assets-chunks/spiritualite_galerie_index_html.mjs').then(m => m.default)},
    'sante/index.html': {size: 58655, hash: 'a3a63c32c0a0930327781d32942fcec88b49f41bbfff4a313c1402892e4ae212', text: () => import('./assets-chunks/sante_index_html.mjs').then(m => m.default)},
    'sante/galerie/index.html': {size: 34244, hash: '508ea373e0af683cbaf599f209923b2eacceb7148fde662144c535ca3a908170', text: () => import('./assets-chunks/sante_galerie_index_html.mjs').then(m => m.default)},
    'spiritualite/activite/index.html': {size: 58729, hash: '56ff255ebca7cc96e8bb2b4fbff969bd60fcd3798dae7a7d57604ca9f22f8b70', text: () => import('./assets-chunks/spiritualite_activite_index_html.mjs').then(m => m.default)},
    'sante/apropos/index.html': {size: 34761, hash: '14f1d21c73b12815315875cc0deb6b6e4b613e87931ba69784ee5d74301df103', text: () => import('./assets-chunks/sante_apropos_index_html.mjs').then(m => m.default)},
    'spiritualite/apropos/index.html': {size: 36167, hash: 'cd28afcb27e21c0debb6c1f24f54056d6c0c445e0cf0a466033da85ab3b88fb7', text: () => import('./assets-chunks/spiritualite_apropos_index_html.mjs').then(m => m.default)},
    'environnement/apropos/index.html': {size: 34827, hash: '8ef364c9afe6e6b636e8964f689b1c1601c3accba99ddf002773873405ea7caf', text: () => import('./assets-chunks/environnement_apropos_index_html.mjs').then(m => m.default)},
    'sante/activite/index.html': {size: 49212, hash: '359ade8b1bb3cbc06c1f6a92a1c7cf48509cb27cfaef778d62c09c4857ee86a7', text: () => import('./assets-chunks/sante_activite_index_html.mjs').then(m => m.default)},
    'environnement/index.html': {size: 62971, hash: '148d0a1f6eeba75509569e735c806717a33e383662f6c59b38d9e4a50e847628', text: () => import('./assets-chunks/environnement_index_html.mjs').then(m => m.default)},
    'environnement/activite/index.html': {size: 49171, hash: '5da4c0ad1563390f784b3aeea58c2e6df7a89bd220ad7018465bfc0980ef968e', text: () => import('./assets-chunks/environnement_activite_index_html.mjs').then(m => m.default)},
    'environnement2/index.html': {size: 61067, hash: 'f9a6c725e82c762e8c12e87974cad8fa3e2fbbf6d4d6d811b31d96c62df012d7', text: () => import('./assets-chunks/environnement2_index_html.mjs').then(m => m.default)},
    'communication/index.html': {size: 48737, hash: 'd09497e722ab7f360168caccc95ec07ca64dfdc3aa27898201fd6f6ee728d32d', text: () => import('./assets-chunks/communication_index_html.mjs').then(m => m.default)},
    'actualite/index.html': {size: 44937, hash: '4dfc2c098879d47c6442f1cf7e815d36810cda645eb543824c6947ccce02955b', text: () => import('./assets-chunks/actualite_index_html.mjs').then(m => m.default)},
    'communication/apropos/index.html': {size: 34752, hash: 'f4239fde26dc2f5c03585080a5bcc16b70a9908184c649dc2110800cad7e69fb', text: () => import('./assets-chunks/communication_apropos_index_html.mjs').then(m => m.default)},
    'communication/activite/index.html': {size: 49143, hash: '638ec59a04507088cdfe4ca7b2be9b8dc17e1856b45c3b2bb22c6a377154984d', text: () => import('./assets-chunks/communication_activite_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/index.html': {size: 24759, hash: 'cdcc9b647f8e116f824c34b958b488447816104a651b9896515e8994ec61bb38', text: () => import('./assets-chunks/champs d'apostolat_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 27433, hash: 'f98ff65729eb5915beb54ec354e9c971e606302d8ff476d330358e8ea1fe755a', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'connexion/index.html': {size: 26262, hash: '91051ce75f6e4c171e4eeaac70f471c2aea90afc61234b28b0157cd3f029aa60', text: () => import('./assets-chunks/connexion_index_html.mjs').then(m => m.default)},
    'inscription/index.html': {size: 27523, hash: 'debc18cb82213fdd859258e9ecbcc2735cf0c4eb784374b7b9a62d700b2e8660', text: () => import('./assets-chunks/inscription_index_html.mjs').then(m => m.default)},
    'devenir-partenaire/index.html': {size: 30003, hash: '10f4ae35db49bce30372052e42385f4336ca7f6fa703a9bd6193634fc46dec37', text: () => import('./assets-chunks/devenir-partenaire_index_html.mjs').then(m => m.default)},
    'news-letter/index.html': {size: 26862, hash: 'f1ae85268c433eba8afab8f0353ba144548f789c6d4ddfb27dd6ef4fa1df11f9', text: () => import('./assets-chunks/news-letter_index_html.mjs').then(m => m.default)},
    'devenir-benevole/index.html': {size: 31132, hash: '0a3bd7278cb5b57b69a47f36f401adec526459dc6292005225d991451e40aad4', text: () => import('./assets-chunks/devenir-benevole_index_html.mjs').then(m => m.default)},
    'count-down/index.html': {size: 25848, hash: 'c060ce83b4f67167a83340384fe75e03deb9e0a470ba34227376106d0b66d603', text: () => import('./assets-chunks/count-down_index_html.mjs').then(m => m.default)},
    'styles-GPUAIRXA.css': {size: 32557, hash: 'luyzhmheZog', text: () => import('./assets-chunks/styles-GPUAIRXA_css.mjs').then(m => m.default)}
  },
};
