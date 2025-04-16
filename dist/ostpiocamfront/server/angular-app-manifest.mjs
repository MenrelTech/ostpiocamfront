
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
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5069, hash: '21518e2b5ec4d800b90bce4e65afb03c23e10945e3260103a19ec458c56a3a41', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1062, hash: '641fa4e99de436f3baaf7388869cc2a6e53ed111f4dd3a71318ccdef1ab36a29', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'spiritualite/index.html': {size: 56978, hash: 'a0ac7645f0e9c19c1bfeea26c2a8a4905f51b2b0a8e48445e8100d98c357693d', text: () => import('./assets-chunks/spiritualite_index_html.mjs').then(m => m.default)},
    'index.html': {size: 73802, hash: 'e3a043553961dfc923cb8725521e8de4d22d526ea52ec35199af2c29a86058f8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'spiritualite/activite/index.html': {size: 44143, hash: '62a3f46855014e7378a2b41aadd95cac8d7361c2a20c3cf9041eec4057ed96aa', text: () => import('./assets-chunks/spiritualite_activite_index_html.mjs').then(m => m.default)},
    'spiritualite/apropos/index.html': {size: 30011, hash: '6b63897e6b98d2677e1614fe607637431fac9a2d39e4a768480306eae0c8b6b6', text: () => import('./assets-chunks/spiritualite_apropos_index_html.mjs').then(m => m.default)},
    'spiritualite/galerie/index.html': {size: 30011, hash: '4337f57baad53f1176b00953cd9c162a0156e61d921eebc74f7e54e826b1e0cc', text: () => import('./assets-chunks/spiritualite_galerie_index_html.mjs').then(m => m.default)},
    'sante/apropos/index.html': {size: 29926, hash: '8c097609ace960bf767b1f0eb77c4e33cf2a2416b8c79fc4ea359fb446db75bb', text: () => import('./assets-chunks/sante_apropos_index_html.mjs').then(m => m.default)},
    'sante/index.html': {size: 54403, hash: '0d027b7e3c8ab3bebf042838c4d0f2f5d8fefd180161f9f3acab6ea7ba2a8e37', text: () => import('./assets-chunks/sante_index_html.mjs').then(m => m.default)},
    'sante/galerie/index.html': {size: 29410, hash: 'e1a6235170a9d9c9ba8318a02360be928e2342cc5b27b3425f9d288f1ceb2250', text: () => import('./assets-chunks/sante_galerie_index_html.mjs').then(m => m.default)},
    'environnement/index.html': {size: 54542, hash: '5be2e39ebbee843751cd1b59866c0841adad1835442d6a364fad1ac48f206600', text: () => import('./assets-chunks/environnement_index_html.mjs').then(m => m.default)},
    'sante/activite/index.html': {size: 43981, hash: '4c45329db83f034b6a222ea78210adaff86af72fad67856f9c1614be954f3e58', text: () => import('./assets-chunks/sante_activite_index_html.mjs').then(m => m.default)},
    'actualite/index.html': {size: 28501, hash: '34445baa3a414c330d893c974c443fc490920ef441cb8adb2d2a21b16619d5c4', text: () => import('./assets-chunks/actualite_index_html.mjs').then(m => m.default)},
    'environnement/apropos/index.html': {size: 29991, hash: 'bbaa5cc31e49cf924f2d81143ec6379d1152d0a31072b4284167224e1683ba00', text: () => import('./assets-chunks/environnement_apropos_index_html.mjs').then(m => m.default)},
    'environnement/activite/index.html': {size: 43940, hash: '4512918c0b3dddbff54b51a0c4ea7365114316f496cb735784174171be73d9cb', text: () => import('./assets-chunks/environnement_activite_index_html.mjs').then(m => m.default)},
    'communication/apropos/index.html': {size: 29919, hash: '916a09333172fa37885e62550cbfc51b835061fa9ebe475b4fe8128f591d5475', text: () => import('./assets-chunks/communication_apropos_index_html.mjs').then(m => m.default)},
    'communication/index.html': {size: 43302, hash: '4154624ed694cecd67f52189e2e6a0ecd5450574692129babb8f1fdff48a998a', text: () => import('./assets-chunks/communication_index_html.mjs').then(m => m.default)},
    'communication/activite/index.html': {size: 43912, hash: '4393846b412b74c9e940b163aa5d5dd7a0779d5addc2f1812dd3c69c331141f4', text: () => import('./assets-chunks/communication_activite_index_html.mjs').then(m => m.default)},
    'environnement2/index.html': {size: 52525, hash: 'a801b90a8ee3ee08c8dc5e6d1c690741d18367b58d2c94cc81143967062af39a', text: () => import('./assets-chunks/environnement2_index_html.mjs').then(m => m.default)},
    'styles-GBQQ6YIQ.css': {size: 22365, hash: 'lt6SksnvsuE', text: () => import('./assets-chunks/styles-GBQQ6YIQ_css.mjs').then(m => m.default)}
  },
};
