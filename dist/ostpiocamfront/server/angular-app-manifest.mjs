
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
    "route": "/champs d'apostolat/sante/généralité"
  },
  {
    "renderMode": 2,
    "route": "/champs d'apostolat/sante/sime-as"
  },
  {
    "renderMode": 2,
    "route": "/champs d'apostolat/sante/perspective"
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
    'index.csr.html': {size: 7716, hash: '3b715a84339938e5688aaaa2af89d1316589eee83eca22a8bfdc72314525c7fd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1011, hash: '079110a521cd2d796d514f98b85c5d21ed9c415f26891b7d03febcedca9e1f3b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'champs d'apostolat/spiritualite/apropos/index.html': {size: 263382, hash: '18aa341ea5f1b0fc9c8a8a31bd8b8bda125f0ef3a8d7d19e92303cae012f4860', text: () => import('./assets-chunks/champs d'apostolat_spiritualite_apropos_index_html.mjs').then(m => m.default)},
    'actualite/index.html': {size: 231464, hash: '048200d967533ad80b025d3bee24646b8b4f2736302712c211d5fd9b0dc19391', text: () => import('./assets-chunks/actualite_index_html.mjs').then(m => m.default)},
    'index.html': {size: 317606, hash: '52e6e0362835670ee2eb15a148865b4341035f6e8334162a3b35de82cdebc257', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'champs d'apostolat/spiritualite/activite/index.html': {size: 248780, hash: '8e8c7b9c8f696409dc5336fd90d94f67f93ff91757893f5f27ca44434532f0f0', text: () => import('./assets-chunks/champs d'apostolat_spiritualite_activite_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/spiritualite/galerie/index.html': {size: 240026, hash: 'ae91043356c26b2020fc3368db3367d6c0a804a9dd90a84a3bf0eaa5188c5149', text: () => import('./assets-chunks/champs d'apostolat_spiritualite_galerie_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/spiritualite/connaissance de l'eglise/index.html': {size: 267869, hash: '6baab215d2341158c617c58ac1f140d831019085faafa9e776a412e263a30689', text: () => import('./assets-chunks/champs d'apostolat_spiritualite_connaissance de l'eglise_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/sante/généralité/index.html': {size: 241692, hash: '00da613c921a7d71f2df606528955a89ae710d61ac84e4df6df00b7a71d35099', text: () => import('./assets-chunks/champs d'apostolat_sante_généralité_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/sante/galerie/index.html': {size: 241336, hash: 'a68ac88f355841dc6df0de6054e2958c75b684db901f1ce6fad00817152df370', text: () => import('./assets-chunks/champs d'apostolat_sante_galerie_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/sante/apropos/index.html': {size: 265464, hash: '616ce936a662a63d36eb1698cc3ccc0447d82d1b163f1846a8bc6dc7563c0bc4', text: () => import('./assets-chunks/champs d'apostolat_sante_apropos_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/sante/historicité/index.html': {size: 243313, hash: '960e897062261c91a75b8559578b59223741cde5db6f86005a4dc68f22a463ca', text: () => import('./assets-chunks/champs d'apostolat_sante_historicité_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/sante/perspective/index.html': {size: 239819, hash: '61ca4709c3c5c58bf77798d343f6a05b429b2b1a661ab4ff0bb3100e06ce7ebf', text: () => import('./assets-chunks/champs d'apostolat_sante_perspective_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/sante/sime-as/index.html': {size: 258434, hash: 'fcae2851c1c1ec6964104fe1834ad930c971367140236b1c4398905aba4713e5', text: () => import('./assets-chunks/champs d'apostolat_sante_sime-as_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/communication/apropos/index.html': {size: 249945, hash: '45294cafcf669ea327d4f025bd1d430fcce5d60f97d4c024f16821fc3602d5f4', text: () => import('./assets-chunks/champs d'apostolat_communication_apropos_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/communication/galerie/index.html': {size: 239706, hash: '7f8cccee0e7e97f50aa994bfd818ac9d2b1eea90f74d263c537f55864f2e3225', text: () => import('./assets-chunks/champs d'apostolat_communication_galerie_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/communication/activite/index.html': {size: 248139, hash: 'cd418dccd65fb2c4437508d79199b8904cc1996d018d973edc9d0d6e687e8aac', text: () => import('./assets-chunks/champs d'apostolat_communication_activite_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/environnement/activite/index.html': {size: 237452, hash: 'ed94bfb194d404acc127bbfa11f204b775042fdb66a3f1a297a175c4226cefe6', text: () => import('./assets-chunks/champs d'apostolat_environnement_activite_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/environnement/apropos/index.html': {size: 253936, hash: 'df87afba81065c9862117c2fbe26e54f195a6b45f3d0ebd7ed45724b8ec55039', text: () => import('./assets-chunks/champs d'apostolat_environnement_apropos_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/communication/généralité/index.html': {size: 240674, hash: '9e4aa1053ef27036195ecf96b3572531d0d2ef13df27f67170b1304bdea9f2f6', text: () => import('./assets-chunks/champs d'apostolat_communication_généralité_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/environnement/historicité/index.html': {size: 243848, hash: 'a4083b63dee52c0b1c263c9bcb7eaedf38e2fe97f3423c01b03218e5bde9b1bb', text: () => import('./assets-chunks/champs d'apostolat_environnement_historicité_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 243280, hash: '098bf0e526dff1fb96d6ddc64d411d107aa4a812ec2dbb160c8ea2add589ed19', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/environnement/galerie/index.html': {size: 240012, hash: 'bf9c6e5d67a1eb9424e7cbcbf822593549d4b9fde13cf719e4485604df4650e6', text: () => import('./assets-chunks/champs d'apostolat_environnement_galerie_index_html.mjs').then(m => m.default)},
    'champs d'apostolat/spiritualite/realisation/index.html': {size: 248869, hash: 'a3970ed01cf1cccf0ec3bcd8b30812e94d03234962088be3b942ed8430a6620b', text: () => import('./assets-chunks/champs d'apostolat_spiritualite_realisation_index_html.mjs').then(m => m.default)},
    'connexion/index.html': {size: 233050, hash: '4ff0fbab1f245660cd9b8b5217498abf3e89ff950fea977c0f749c80d89059c3', text: () => import('./assets-chunks/connexion_index_html.mjs').then(m => m.default)},
    'inscription/index.html': {size: 234255, hash: 'db5f6fa153d8fc627e1a890623add58e20aa100671051f03fa73eedbd249ee05', text: () => import('./assets-chunks/inscription_index_html.mjs').then(m => m.default)},
    'devenir-benevole/index.html': {size: 238935, hash: '11faa12052ccfd64bd98cb1efcb8352978438d6e74f0b3c7c11922f09ba9b8ee', text: () => import('./assets-chunks/devenir-benevole_index_html.mjs').then(m => m.default)},
    'news-letter/index.html': {size: 233236, hash: 'd2103905d1ca9bfc849494a224cad85bb0b42f241f12474767f7a18616e8ec31', text: () => import('./assets-chunks/news-letter_index_html.mjs').then(m => m.default)},
    'presentation/index.html': {size: 235158, hash: '70f2c21eb01256b77d5906fceb8428f1606ea60d607247d6a80d35186982ef91', text: () => import('./assets-chunks/presentation_index_html.mjs').then(m => m.default)},
    'count-down/index.html': {size: 232141, hash: '96cbc896a9bdddf45331154adeeba4369330a220f1d790d0f6123769bda6cc56', text: () => import('./assets-chunks/count-down_index_html.mjs').then(m => m.default)},
    'devenir-partenaire/index.html': {size: 237759, hash: '5e9a72d11eba704579f08c688dd5343cc81c9861b6c4390ae05715f0ab21fe22', text: () => import('./assets-chunks/devenir-partenaire_index_html.mjs').then(m => m.default)},
    'info-user/index.html': {size: 231978, hash: '21760a6b30da4b216ae490673449eeb26129073d4155fb629de516c7b64bd2b1', text: () => import('./assets-chunks/info-user_index_html.mjs').then(m => m.default)},
    'changer-de-mot-de-passe/index.html': {size: 232343, hash: '753abe34489007cfdc1953782a8cbd2782aaba9928c7bac26d4a5e4e0eb13eb2', text: () => import('./assets-chunks/changer-de-mot-de-passe_index_html.mjs').then(m => m.default)},
    'prolegomene/index.html': {size: 234598, hash: 'b2c23f2f344330ba5f2ca8af9f5e5b344aea149a002726f9907942f2802659c2', text: () => import('./assets-chunks/prolegomene_index_html.mjs').then(m => m.default)},
    'styles-TROM2EWI.css': {size: 40493, hash: 'ip0zRO+aKoM', text: () => import('./assets-chunks/styles-TROM2EWI_css.mjs').then(m => m.default)}
  },
};
