import { Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ActualiteComponent } from './pages/actualite/actualite.component';
import { FieldOfApostolateComponent } from './pages/fields-of-apostolate/filed-of-apostolate.component';
import {
  AppRouter,
  AuthRoutes,
  FieldOfApostolateNestedRouter,
} from './shared/app-router/app-router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { BecomeVolunteerComponent } from './pages/become-volunteer/become-volunteer.component';
import { BecomePartnerComponent } from './pages/become-partner/become-partner.component';
import { NewLetterComponent } from './pages/news-letter/news-letter.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CountDownComponent } from './pages/count-down/count-down.component';
import { PresentationComponent } from './pages/presentations/presentation.component';
import { ProlegomenaComponent } from './pages/prolegomene/prolegomene.component';
import { InfoUserComponent } from './pages/info-user/info-user.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { SpiritualityComponent } from './pages/fields-of-apostolate/pages/spirituality/spirituality.component';
import { SpiritualityAboutComponent } from './pages/fields-of-apostolate/pages/spirituality/pages/about/spirituality-about.component';
import { SpiritualityGalleryComponent } from './pages/fields-of-apostolate/pages/spirituality/pages/galerie/spirituality-galery.component';
import { SpiritualityActivitiesComponent } from './pages/fields-of-apostolate/pages/spirituality/pages/activities/spirituality-activities.component';
import { SpiritualityChurchComponent } from './pages/fields-of-apostolate/pages/spirituality/pages/church/spirituality-church.component';
import { HealthComponent } from './pages/fields-of-apostolate/pages/health/health.component';
import { HealthAboutComponent } from './pages/fields-of-apostolate/pages/health/pages/about/health-about.component';
import { HealthGalleryComponent } from './pages/fields-of-apostolate/pages/health/pages/gallery/health-gallery.component';
import { CommunicationComponent } from './pages/fields-of-apostolate/pages/communication/communication.component';
import { CommunicationActivitiesComponent } from './pages/fields-of-apostolate/pages/communication/pages/activities/communication-activities.component';
import { CommunicationAboutComponent } from './pages/fields-of-apostolate/pages/communication/pages/about/communication-about.component';
import { CommunicationGalleryComponent } from './pages/fields-of-apostolate/pages/communication/pages/gallery/communication-gallery.component';
import { CommunicationGeneralityComponent } from './pages/fields-of-apostolate/pages/communication/pages/generality/communication-generality.component';
import { EnvironnementAboutComponent } from './pages/fields-of-apostolate/pages/environnement/pages/about/environnement-about.component';
import { EnvironnementActivitiesComponent } from './pages/fields-of-apostolate/pages/environnement/pages/activities/environnement-activities.component';
import { EnvironnementComponent } from './pages/fields-of-apostolate/pages/environnement/environnement.component';
import { EnvironnementGalleryComponent } from './pages/fields-of-apostolate/pages/environnement/pages/gallery/environnement-gallery.component';
import { EnvironnementHistoryComponent } from './pages/fields-of-apostolate/pages/environnement/pages/history/environnement-history.component';
import { HealthSimeComponent } from './pages/fields-of-apostolate/pages/health/pages/sime/health-sime.component';
import { HealthHistoryComponent } from './pages/fields-of-apostolate/pages/health/pages/history/health-history.component';
import { HealthGeneralityComponent } from './pages/fields-of-apostolate/pages/health/pages/generality/health-generality.component';
import { HealthPerspectiveComponent } from './pages/fields-of-apostolate/pages/health/pages/perspective/health-perspective.components';
import { SpiritualityRealizationComponent } from './pages/fields-of-apostolate/pages/spirituality/pages/realisation/spirituality-realisation.component';

export const routes: Routes = [
  {
    path: '',
    component: AccueilComponent,
  },
  {
    path: 'actualite',
    component: ActualiteComponent,
  },
  {
    path: AppRouter.fieldsOfApostolate,
    component: FieldOfApostolateComponent,
    children: [
      { path: '', redirectTo: 'spiritualite', pathMatch: 'full' },
      {
        path: FieldOfApostolateNestedRouter.spirituality.home,
        component: SpiritualityComponent,
        children: [
          {
            path: '',
            redirectTo: FieldOfApostolateNestedRouter.spirituality.about,
            pathMatch: 'full',
          },
          {
            path: FieldOfApostolateNestedRouter.spirituality.about,
            component: SpiritualityAboutComponent,
          },
          {
            path: FieldOfApostolateNestedRouter.spirituality.activities,
            component: SpiritualityActivitiesComponent,
          },
          {
            path: FieldOfApostolateNestedRouter.spirituality.gallery,
            component: SpiritualityGalleryComponent,
          },
          {
            path: FieldOfApostolateNestedRouter.spirituality.church,
            component: SpiritualityChurchComponent,
          },
          {
            path:FieldOfApostolateNestedRouter.spirituality.realization,
            component:SpiritualityRealizationComponent
          }
        ],
      },

      {
        path: FieldOfApostolateNestedRouter.health.home,
        component: HealthComponent,
        children: [
          {
            path: '',
            redirectTo: FieldOfApostolateNestedRouter.health.about,
            pathMatch: 'full',
          },
          {
            path: FieldOfApostolateNestedRouter.health.about,
            component: HealthAboutComponent,
          },
          {
            path: FieldOfApostolateNestedRouter.health.gallery,
            component: HealthGalleryComponent,
          },
          {
            path: FieldOfApostolateNestedRouter.health.generality,
            component: HealthGeneralityComponent,
          },
          {
            path:FieldOfApostolateNestedRouter.health.sime,
            component:HealthSimeComponent
          },
          {
            path:FieldOfApostolateNestedRouter.health.perspective,
            component:HealthPerspectiveComponent
          },
          {
            path:FieldOfApostolateNestedRouter.health.history,
            component:HealthHistoryComponent
          }
          

        ],
      },  

      {
        path: FieldOfApostolateNestedRouter.communication.home,
        component: CommunicationComponent,
        children:[
          {
            path: '',
            redirectTo: FieldOfApostolateNestedRouter.communication.about,
            pathMatch: 'full',
          },
          {
            path:FieldOfApostolateNestedRouter.communication.about, 
            component:CommunicationAboutComponent
          },
          {
            path:FieldOfApostolateNestedRouter.communication.activities, 
            component:CommunicationActivitiesComponent
          },
          {
            path:FieldOfApostolateNestedRouter.communication.gallery, 
            component:CommunicationGalleryComponent
          },
          {
            path:FieldOfApostolateNestedRouter.communication.generality, 
            component:CommunicationGeneralityComponent
          },
        ]
      },

      {
        path: FieldOfApostolateNestedRouter.environnement.home,
        component: EnvironnementComponent,
        children:[
          {
            path: '',
            redirectTo: FieldOfApostolateNestedRouter.environnement.about,
            pathMatch: 'full',
          },
          {
            path:FieldOfApostolateNestedRouter.environnement.about, 
            component:EnvironnementAboutComponent
          },
          {
            path:FieldOfApostolateNestedRouter.environnement.activities, 
            component:EnvironnementActivitiesComponent
          },
          {
            path:FieldOfApostolateNestedRouter.environnement.gallery, 
            component:EnvironnementGalleryComponent
          }, 
          {
            path:FieldOfApostolateNestedRouter.environnement.history,
            component:EnvironnementHistoryComponent
          }
        ]
      },
    ],
  },

  {
    path: AppRouter.contact,
    component: ContactComponent,
  },

  {
    path: AuthRoutes.login,
    component: LoginComponent,
  },

  {
    path: AuthRoutes.register,
    component: RegisterComponent,
  },
  {
    path: AuthRoutes.volunteer,
    component: BecomeVolunteerComponent,
  },
  {
    path: AuthRoutes.partner,
    component: BecomePartnerComponent,
  },
  {
    path: AuthRoutes.newsLetter,
    component: NewLetterComponent,
  },
  {
    path: AppRouter.countdown,
    component: CountDownComponent,
  },

  {
    path: AppRouter.presentation,
    component: PresentationComponent,
  },
  {
    path: AppRouter.prolegomena,
    component: ProlegomenaComponent,
  },

  {
    path: AppRouter.infoUser,
    component: InfoUserComponent,
  },

  {
    path: AppRouter.changePassword,
    component: ChangePasswordComponent,
  },
];
