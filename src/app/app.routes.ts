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
        path: 'spiritualite/apropos',
        component: AproposSpiritualiteComponent
    },
    {
        path: 'sante',
        component: AccueilSanteComponent
    },
    {
        path: 'sante/apropos',
        component: AproposSanteComponent
    },
    {
        path: 'sante/galerie',
        component: GalerieSanteComponent
    },
    {
        path: 'environnement',
        component: AccueilEnvironnementComponent
    },
    {
        path: 'environnement/apropos',
        component: AproposEnvironnementComponent
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
    },
    {
        path: 'communication/apropos',
        component: AproposCommunicationComponent
    }
];
