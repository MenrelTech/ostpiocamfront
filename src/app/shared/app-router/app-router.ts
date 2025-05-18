export const AppRouter = {
  home: '',
  spirituality: 'spiritualite',
  fieldsOfApostolate: "champs d'apostolat",
  news: 'actualite',
  contact: 'contact',
  countdown: 'count-down',
  presentation: 'presentation',
  prolegomena: 'prolegomene',
  infoUser: 'info-user',
  changePassword: 'changer-de-mot-de-passe',
};

export const FieldOfApostolateNestedRouter = {
  spirituality: {
    home: 'spiritualite',
    activities: 'activite',
    about: 'apropos',
    gallery: 'galerie',
    church: "connaissance de l'eglise",
    realization: 'realisation',
  },
  health: {
    home: 'sante',
    about: 'apropos',
    activities: 'activite',
    gallery: 'galerie',
    sime: 'sime-as',
    history: 'historicité',
    generality: 'généralité',
    perspective: 'perspective',
  },
  environnement: {
    home: 'environnement',
    about: 'apropos',
    activities: 'activite',
    gallery: 'galerie',
    history: 'historicité',
  },

  communication: {
    home: 'communication',
    about: 'apropos',
    activities: 'activite',
    gallery: 'galerie',
  },
};

export const AppRouterSpirituality = {
  home: '/spiritualite',
  Activities: '/spiritualite/activite',
  About: '/spiritualite/apropos',
  Gallery: '/spiritualite/galerie',
};

export const AuthRoutes = {
  login: 'connexion',
  register: 'inscription',
  volunteer: 'devenir-benevole',
  partner: 'devenir-partenaire',
  newsLetter: 'news-letter',
};
