import { Routes } from '@angular/router';
import { AccueilSpiritualiteComponent } from './pages/accueil-spiritualite/accueil-spiritualite.component';
import { AccueilSanteComponent } from './pages/accueil-sante/accueil-sante.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AccueilEnvironnementComponent } from './pages/accueil-environnement/accueil-environnement.component';
import { ActiviteSpiritualiteComponent } from './pages/activite-spiritualite/activite-spiritualite.component';
import { ActualiteComponent } from './pages/actualite/actualite.component';
import { EnvironnementComponent } from './pages/environnement/environnement.component';
import { AccueilCommunicationComponent } from './pages/accueil-communication/accueil-communication.component';

export const routes: Routes = [
    {
        path: '',
        component: AccueilComponent,
        
    },
    {
        path: 'spiritualite',
        component: AccueilSpiritualiteComponent
    },
    {
        path: 'spiritualite/activite',
        component: ActiviteSpiritualiteComponent
    },
    {
        path: 'sante',
        component: AccueilSanteComponent
    },
    {
        path: 'environnement',
        component: AccueilEnvironnementComponent
    },
    {
        path: 'environnement2',
        component: EnvironnementComponent
    },
    {
        path: 'actualite',
        component: ActualiteComponent
    },
    {
        path: 'communication',
        component: AccueilCommunicationComponent
    }
];
