
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
    'index.csr.html': {size: 7022, hash: '1a6e2295b634aae0224e5a6ac60b4321022f7601772f823f0f93e23467384ab7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1011, hash: 'e7da1140cbf47699c8884739da29abdf2b5916285e129e6142ebdafe22c1b7c6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'champs d'apostolat/spiritualite/apropos/index.html': {size: 321402, hash: '315eb32401b170380c5a419ae33f835710e42f4596d74cd08df9185c6ab446d1', text: () => import('./assets-chunks/champs d'apostolat_spiritualite_apropos_index_html.mjs').then(m => m.default)},
    'actualite/index.html': {size: 255571, hash: '092a0c3cfebf067bee308929a324c4af9ca18ab009f7db9fe47e58a349de437e', text: () => import('./assets-chunks/actualite_index_html.mjs').then(m => m.default)},
    'index.html': {size: 327837, hash: 'f410e1fad3c02992513b00eb38c24985a1d42a3a35608757594741d0c9838ee8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'champs d'apostolat/spiritualite/activite/index.html': {size: 265673, hash: '4a0b60815ff1fb6f4c553e9dd2c3b475f5add293caeb928a83a32a3bc4358860', text: () => import('./assets-chunks/champs d'apostolat_spiritualite_activite_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/spiritualite/realisation/index.html': {size: 248147, hash: 'f0db267a743811388bb8bd3908de08a0a2fc692dc8f008bc56fb018bf0e166b0', text: () => import('./assets-chunks/champs d'apostolat_spiritualite_realisation_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/spiritualite/connaissance de l'eglise/index.html': {size: 267144, hash: 'c3ed92c043760ac3e7a72f939b302c459b05b54849cc9e075b42bae5a7fb2c08', text: () => import('./assets-chunks/champs d'apostolat_spiritualite_connaissance de l'eglise_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/spiritualite/galerie/index.html': {size: 245659, hash: '584f680337cc5f381ab816afc5a588ef6235f35e3d4694e8fd561d027f422371', text: () => import('./assets-chunks/champs d'apostolat_spiritualite_galerie_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/sante/historicité/index.html': {size: 242588, hash: '9d47c62834dc792230f52167cae328834ee166cfe61d4953c4550a121162ed7e', text: () => import('./assets-chunks/champs d'apostolat_sante_historicité_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/sante/sime-as/index.html': {size: 457543, hash: '7f1c9d5ba18d8464bcf1b4c75bf9b45d9e10a50b045e09640a77440728d296f0', text: () => import('./assets-chunks/champs d'apostolat_sante_sime-as_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/sante/generalités/index.html': {size: 240982, hash: 'a19e5eee0f4132617ef429ded8f438f74ca0ea490b9a0ba7eceb712a900fbfa9', text: () => import('./assets-chunks/champs d'apostolat_sante_generalités_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/sante/apropos/index.html': {size: 267151, hash: '08ddebc75620199a465eb183d2487b65853f601de99f2d1ffc6d2b014115bb29', text: () => import('./assets-chunks/champs d'apostolat_sante_apropos_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/sante/galerie/index.html': {size: 240611, hash: '6d1a541d0225bbe5825aa1ad2cc5d7cb8e326750e0ccd70ab6b33252631b6260', text: () => import('./assets-chunks/champs d'apostolat_sante_galerie_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/sante/perspective/index.html': {size: 239583, hash: '81cd6b19504b431bc850c0247476d754b11539bde4e80cd351c78c74d88fcba8', text: () => import('./assets-chunks/champs d'apostolat_sante_perspective_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/communication/généralité/index.html': {size: 239949, hash: '493ae5d1bce2bc60ba011c0bdc94ddfa32cced61b83caf3ef1184ad29df56bf8', text: () => import('./assets-chunks/champs d'apostolat_communication_généralité_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/environnement/apropos/index.html': {size: 456790, hash: 'cc815df6d4543933caf38249389d80cdd1ed8ac044d837730aebea53d423eb8a', text: () => import('./assets-chunks/champs d'apostolat_environnement_apropos_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/environnement/activite/index.html': {size: 236724, hash: 'ebee02637096e078ce141b13173ce46034a9094470bf0fabd3efc678332a22f7', text: () => import('./assets-chunks/champs d'apostolat_environnement_activite_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/communication/apropos/index.html': {size: 249850, hash: '6d79355eacb412983e597dabe8d9c797f0bad778ec958e47a8687f0219c46a3d', text: () => import('./assets-chunks/champs d'apostolat_communication_apropos_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/communication/activite/index.html': {size: 247411, hash: '9c7e6d66486242561bb48bc5faa7ff5f0a82b7db4430083ffbdeb331056b2e36', text: () => import('./assets-chunks/champs d'apostolat_communication_activite_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/communication/galerie/index.html': {size: 238934, hash: '7abdaf41be0718d2379380be81493bb283d34bcdd55049c975db7b991b8d7a70', text: () => import('./assets-chunks/champs d'apostolat_communication_galerie_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 242555, hash: '2ff46205afcf421288502a0a06ccf477a2704f44fecafb89b4be08e3ada1a077', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'connexion/index.html': {size: 232325, hash: '8743b793aeb0f9a9d6de2f61c6f18a91006a0940518864ed821ee9c64c9f614b', text: () => import('./assets-chunks/connexion_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/environnement/historicité/index.html': {size: 243253, hash: '25c1d8701e6ff33b713acd1c418690f1034732194f1f2fbe23b91094362ac014', text: () => import('./assets-chunks/champs d'apostolat_environnement_historicité_index_html.mjs').then(m => m.default)},
    'devenir-partenaire/index.html': {size: 237034, hash: '876e73f727c28fc4bfe7705e8280d8909954c1e55afb81948f9ab5539844f982', text: () => import('./assets-chunks/devenir-partenaire_index_html.mjs').then(m => m.default)},
    'inscription/index.html': {size: 233530, hash: 'fbf8bed184493e43cf8bb9e7fe750dede633a0a86d7fdd9a9e92070f27a64a4d', text: () => import('./assets-chunks/inscription_index_html.mjs').then(m => m.default)},
    'devenir-benevole/index.html': {size: 238210, hash: 'cff034b046cd873f1281e3a2dadd84a054dfe818fc84cfe5598746a6cb7e11b4', text: () => import('./assets-chunks/devenir-benevole_index_html.mjs').then(m => m.default)},
    'count-down/index.html': {size: 231415, hash: 'b9954d7c48de39921f15b6cf17badaccf89b28f62be8d08bb63533d043cdc30c', text: () => import('./assets-chunks/count-down_index_html.mjs').then(m => m.default)},
    'news-letter/index.html': {size: 232511, hash: 'b5c8a813365d54f371b126398b095bbc5c153f1b8af7364f0a47050f26a454b9', text: () => import('./assets-chunks/news-letter_index_html.mjs').then(m => m.default)},
    'presentation/index.html': {size: 234433, hash: '742a61cefd0633dbe3279c4b649cdaa466aaf220a5e06ac638b86ec652eabc98', text: () => import('./assets-chunks/presentation_index_html.mjs').then(m => m.default)},
    'changer-de-mot-de-passe/index.html': {size: 231618, hash: '6588544ecdaec83b3cbf3487e20abdfaf1a9bbefbecf6f0e40cc75d57fa02126', text: () => import('./assets-chunks/changer-de-mot-de-passe_index_html.mjs').then(m => m.default)},
    'info-user/index.html': {size: 231253, hash: '775b14b0e9c77becac632a804f8fa967aa2791ada032316e54b5e8804db87b03', text: () => import('./assets-chunks/info-user_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/environnement/galerie/index.html': {size: 239284, hash: '14d348b3439bcaf181e9f252845e01c4d3c066314d716809f278572b1d4c237a', text: () => import('./assets-chunks/champs d'apostolat_environnement_galerie_index_html.mjs').then(m => m.default)},
    'prolegomene/index.html': {size: 233873, hash: 'b133e4c42176b634d8ce84a88eea3fda92e1312b7d6ca3a0e84c6ab849d2f7a6', text: () => import('./assets-chunks/prolegomene_index_html.mjs').then(m => m.default)},
    'styles-CRHWOJV3.css': {size: 36530, hash: 'uEQ1RvKz8Bo', text: () => import('./assets-chunks/styles-CRHWOJV3_css.mjs').then(m => m.default)}
  },
};
