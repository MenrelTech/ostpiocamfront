import { Routes } from '@angular/router';
import { AccueilSpiritualiteComponent } from './pages/accueil-spiritualite/accueil-spiritualite.component';
import { AccueilSanteComponent } from './pages/accueil-sante/accueil-sante.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AccueilEnvironnementComponent } from './pages/accueil-environnement/accueil-environnement.component';
import { ActiviteSpiritualiteComponent } from './pages/activite-spiritualite/activite-spiritualite.component';
import { ActualiteComponent } from './pages/actualite/actualite.component';
import { EnvironnementComponent } from './pages/environnement/environnement.component';
import { AccueilCommunicationComponent } from './pages/accueil-communication/accueil-communication.component';
import { AproposSanteComponent } from './pages/apropos-sante/apropos-sante.component';
import { AproposCommunicationComponent } from './pages/apropos-communication/apropos-communication.component';
import { AproposEnvironnementComponent } from './pages/apropos-environnement/apropos-environnement.component';
import { AproposSpiritualiteComponent } from './pages/apropos-spiritualite/apropos-spiritualite.component';
import { GalerieSanteComponent } from './pages/galerie-sante/galerie-sante.component';
import { GalerieSpiritualiteComponent } from './pages/galerie-spiritualite/galerie-spiritualite.component';
import { ActiviteSanteComponent } from './pages/activite-sante/activite-sante.component';
import { ActiviteCommunicationComponent } from './pages/activite-communication/activite-communication.component';
import { ActiviteEnvironnementComponent } from './pages/activite-environnement/activite-environnement.component';
import { FieldOfApostolateComponent } from './pages/fields-of-apostolate/filed-of-apostolate.component';
import { AppRouter, AuthRoutes } from './shared/app-router/app-router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { BecomeVolunteerComponent } from './pages/become-volunteer/become-volunteer.component';
import { BecomePartnerComponent } from './pages/become-partner/become-partner.component';
import { NewLetterComponent } from './pages/news-letter/news-letter.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: AccueilComponent,
  },

  {
    path: 'spiritualite',
    component: AccueilSpiritualiteComponent,
  },
  {
    path: 'spiritualite/activite',
    component: ActiviteSpiritualiteComponent,
  },
  {
    path: 'spiritualite/apropos',
    component: AproposSpiritualiteComponent,
  },
  {
    path: 'spiritualite/galerie',
    component: GalerieSpiritualiteComponent,
  },
  {
    path: 'sante',
    component: AccueilSanteComponent,
  },
  {
    path: 'sante/apropos',
    component: AproposSanteComponent,
  },
  {
    path: 'sante/galerie',
    component: GalerieSanteComponent,
  },
  {
    path: 'sante/activite',
    component: ActiviteSanteComponent,
  },
  {
    path: 'environnement',
    component: AccueilEnvironnementComponent,
  },
  {
    path: 'environnement/apropos',
    component: AproposEnvironnementComponent,
  },
  {
    path: 'environnement/activite',
    component: ActiviteEnvironnementComponent,
  },
  {
    path: 'environnement2',
    component: EnvironnementComponent,
  },
  {
    path: 'actualite',
    component: ActualiteComponent,
  },
  {
    path: 'communication',
    component: AccueilCommunicationComponent,
  },
  {
    path: 'communication/apropos',
    component: AproposCommunicationComponent,
  },
  {
    path: 'communication/activite',
    component: ActiviteCommunicationComponent,
  },
  {
    path: AppRouter.fieldsOfApostolate,
    component: FieldOfApostolateComponent,
  },

  {
    path:AppRouter.contact,
    component:ContactComponent
  },

  {
    path: AuthRoutes.login,
    component: LoginComponent,
  },

  {
    path: AuthRoutes.register,
    component:RegisterComponent
  }, 
  {
    path:AuthRoutes.volunteer, 
    component:BecomeVolunteerComponent
  }, 
  {
    path:AuthRoutes.partner, 
    component:BecomePartnerComponent
  },
  {
    path:AuthRoutes.newsLetter, 
    component:NewLetterComponent
  }
];
