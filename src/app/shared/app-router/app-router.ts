export const AppRouter = {
  home: '',
  spirituality: 'spiritualite',
  fieldsOfApostolate: "champs d'apostolat",
  news: 'actualite',
  contact: 'contact',
  countdown:"count-down", 
  presentation:"presentation",
  prolegomena:"prolegomene", 
  infoUser:"info-user",
  changePassword:"changer-de-mot-de-passe"
};


export const FieldOfApostolateNestedRouter = {
  spirituality:{
    home: 'spiritualite',
    activities: 'activite',
    about: 'apropos',
    gallery: 'galerie', 
    church:"connaissance de l'eglise"
  }, 
  health:{
    home: '/sante',
    Activities: '/sante/activite',
    About: '/sante/apropos',
    Gallery: '/sante/galerie',
  }, 
  environnement:{
    home: '/environnement',
    Activities: '/environnement/activite',
    About: '/environnement/apropos',
    Gallery: '/environnement/galerie',
  }, 

  communication:{
    home: '/communication',
    Activities: '/communication/activite',
    About: '/communication/apropos',
    Gallery:'/communication/galerie',

  }


}

export const AppRouterSpirituality = {
  home: '/spiritualite',
  Activities: '/spiritualite/activite',
  About: '/spiritualite/apropos',
  Gallery: '/spiritualite/galerie',
};


export const AuthRoutes = {
  login:"connexion", 
  register:"inscription", 
  volunteer:"devenir-benevole",
  partner:"devenir-partenaire", 
  newsLetter:"news-letter"
}