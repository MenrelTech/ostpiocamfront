
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
    "redirectTo": "/champs d'apostolat/sante/apropos",
    "route": "/champs d'apostolat/sante"
  },
  {
    "renderMode": 2,
    "route": "/champs d'apostolat/sante/apropos"
  },
  {
    "renderMode": 2,
    "route": "/champs d'apostolat/sante/activite"
  },
  {
    "renderMode": 2,
    "route": "/champs d'apostolat/sante/galerie"
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
    'index.csr.html': {size: 7498, hash: '1938cb821eb76df10c92b6a2c6988e51376fd5e0a3c67ad127ba55a543360138', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1011, hash: '14609c3ec59ddf56e776cefec7a2164511fadf643fcb496c86f77d5fcd2699e3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'champs d'apostolat/spiritualite/apropos/index.html': {size: 88298, hash: 'f2e3251dc5cacda17b52c335c8b41b4e4eeb832bc1e2ca60dc6356488bc8cef2', text: () => import('./assets-chunks/champs d'apostolat_spiritualite_apropos_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/spiritualite/galerie/index.html': {size: 54375, hash: '2996f4bab5906de7b9b2e6a788fae76c12e203d50557bb27b175c3bc12436e97', text: () => import('./assets-chunks/champs d'apostolat_spiritualite_galerie_index_html.mjs').then(m => m.default)},
    'actualite/index.html': {size: 45898, hash: '70622fdfc0775dc9816b04336118a1fa283e7269502b1641a7646bb91cb44bf5', text: () => import('./assets-chunks/actualite_index_html.mjs').then(m => m.default)},
    'index.html': {size: 135368, hash: '3c4cc6c916b55bff7dc5c8b2c13bd03bded37cda6d2c9381b6865fa242ccdb1b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'champs d'apostolat/spiritualite/connaissance de l'eglise/index.html': {size: 81217, hash: 'd30672978b8b728fcc439745fc276694b6aaccf782e6b3a1fa8347ec218bede5', text: () => import('./assets-chunks/champs d'apostolat_spiritualite_connaissance de l'eglise_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/spiritualite/activite/index.html': {size: 71562, hash: 'c4e204c0a4912ecfee3f622b1ca8a44cc53605be44e47a1ad75aba9a6aff70f7', text: () => import('./assets-chunks/champs d'apostolat_spiritualite_activite_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/sante/activite/index.html': {size: 70711, hash: 'a23e3a06103751176ebe6fe2018a22dd766d014029d64ac671bfb57e39a0b8cd', text: () => import('./assets-chunks/champs d'apostolat_sante_activite_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/sante/apropos/index.html': {size: 80110, hash: '63f029c13512cc745bb5bf4bdcabb14c3b78b441874fd4cccb258dd83018e9a6', text: () => import('./assets-chunks/champs d'apostolat_sante_apropos_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/communication/activite/index.html': {size: 70747, hash: 'ba4bd5927dea05416abbb618843fb68872ec9153adc091053d18668d6706932f', text: () => import('./assets-chunks/champs d'apostolat_communication_activite_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/communication/apropos/index.html': {size: 67394, hash: '975e93b19f6977869678472a6319009d8a716484460a1986068923c5565a9fdd', text: () => import('./assets-chunks/champs d'apostolat_communication_apropos_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/environnement/apropos/index.html': {size: 56315, hash: '05a8c5a3113bf3778974903909307403f6946cbb93e6991044e25fd9b321d2e4', text: () => import('./assets-chunks/champs d'apostolat_environnement_apropos_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/environnement/activite/index.html': {size: 70822, hash: '26e77ed17a58b8fa23323f8eb4ea3bb785165fe3d3819cd393e4f744fd1f6cad', text: () => import('./assets-chunks/champs d'apostolat_environnement_activite_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/sante/galerie/index.html': {size: 55974, hash: '66c3c5d5b73360da3065f9483056fd90b171e29832a2b1694fc2e51d42279abd', text: () => import('./assets-chunks/champs d'apostolat_sante_galerie_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/communication/galerie/index.html': {size: 54347, hash: '423d2efd2d1c4cce58683944c7930aac2c2fefd57e93b70eeec58710cc8c0986', text: () => import('./assets-chunks/champs d'apostolat_communication_galerie_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 57931, hash: '9cd08c4ed95001739870e476aeab895387f74c5b4b38a82000a1e08a310fa496', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'connexion/index.html': {size: 47701, hash: '7da86a0e78745c0ff96483f061071854ffa398a191a257fd98a373d6d8c89665', text: () => import('./assets-chunks/connexion_index_html.mjs').then(m => m.default)},
    'inscription/index.html': {size: 48906, hash: 'aaa1e4396c82ecfb03a841dafb4dd933867a5d168451994dd93fc62699d210e7', text: () => import('./assets-chunks/inscription_index_html.mjs').then(m => m.default)},
    'devenir-benevole/index.html': {size: 53586, hash: '807ff8adf549f8eae1e9407f17aaf4e607477a75559a156212ef9ada09bd94d9', text: () => import('./assets-chunks/devenir-benevole_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/environnement/galerie/index.html': {size: 54362, hash: 'f9bf8d04962eb9dbb0941ffbd19f3c6203ed1e7f144787c8ae81f3ff5ef82018', text: () => import('./assets-chunks/champs d'apostolat_environnement_galerie_index_html.mjs').then(m => m.default)},
    'news-letter/index.html': {size: 47862, hash: '3d3fa6fdf6a7b4227fe884d6678560bc5a15564fa3d322d48e7bab43fc04cfa4', text: () => import('./assets-chunks/news-letter_index_html.mjs').then(m => m.default)},
    'count-down/index.html': {size: 46792, hash: '694406bbb2c69de2b99edccc91d19d7b0413b5955c811f3647a1d35f6cee0446', text: () => import('./assets-chunks/count-down_index_html.mjs').then(m => m.default)},
    'devenir-partenaire/index.html': {size: 52410, hash: '857e6260caed3b606be0d414eceafe18e82b815deeb1113a93cb9b5a7b518950', text: () => import('./assets-chunks/devenir-partenaire_index_html.mjs').then(m => m.default)},
    'presentation/index.html': {size: 49721, hash: '5735594d6d0c817c022917f3557ea8911644ba756a7a0bd16f9e008ed5125bf8', text: () => import('./assets-chunks/presentation_index_html.mjs').then(m => m.default)},
    'info-user/index.html': {size: 46629, hash: '3315d2534685082fa2a8575b58895a9d486f679057f79afb9cfc30d45b5f7e56', text: () => import('./assets-chunks/info-user_index_html.mjs').then(m => m.default)},
    'changer-de-mot-de-passe/index.html': {size: 46994, hash: 'e5bb69397adc1de7cba72bc7bdeccbaa4b89bd06e7fa5c740442a15183aa0e6f', text: () => import('./assets-chunks/changer-de-mot-de-passe_index_html.mjs').then(m => m.default)},
    'prolegomene/index.html': {size: 49156, hash: '4df142be9162a69143ec467b0324f4774320bcdbbef559aa46100b595f029431', text: () => import('./assets-chunks/prolegomene_index_html.mjs').then(m => m.default)},
    'styles-IMLKA6ZJ.css': {size: 38340, hash: 'TtuZjiQ6j6c', text: () => import('./assets-chunks/styles-IMLKA6ZJ_css.mjs').then(m => m.default)}
  },
};
