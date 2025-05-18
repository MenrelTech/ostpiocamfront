import { Component } from '@angular/core';
import { NumberedcardtextComponent } from '../../../../../../numberedcardtext/numberedcardtext.component';
import { TitlecardtextComponent } from '../../../../../../titlecardtext/titlecardtext.component';
import { CardComponent } from '../../../../../../card/card.component';
import { RouterLink } from '@angular/router';
import { OrganigrammeComponent } from '../../../../../../organigramme/organigramme.component';
import { SectionCardComponent } from '../../../../../../components/section-card/section-card.component';
import { ItemSectionComponent } from '../../../../../../components/section-card/secetion-card-item.component';

@Component({
  standalone: true,
  templateUrl: './spirituality-about.component.html',
  imports: [
    NumberedcardtextComponent,
    TitlecardtextComponent,
    CardComponent,
    RouterLink,
    OrganigrammeComponent,
    SectionCardComponent,
    ItemSectionComponent,
  ],
})
export class SpiritualityAboutComponent {
  realizationPath = "/champs d'apostolat/spiritualite/realisation";

  spirituelItems: string[] = [
    'Organisation des Conférences-Débats dont les thématiques ont pour problématique la Foi',
    'Organisation des Célébrations Eucharistiques',
    'Organisation des séances quotidiennes de prières',
    "Promotion et défense de la Cause à travers des Echanges et communications permanents sur la Vie et l'œuvre de l'Illustre Homme",
  ];

  humanItems: string[] = [
    'Accompagnement des Campagnes de Don Bénévole et Volontaire de Sang sur le terrain',
    'Aides diverses aux Vulnérabilités',
  ];

  sports: string[] = [
    'Organisation des Kermesses et jeux divers',
    'Initiation des rencontres sportives entre Jeunes et les Chrétiens de tous les bords',
  ];

  cultural: string[] = [
    'Projections des films documentaires sur les Saints, sans oublier la Vie et l’Œuvre de Saint PADRE PIO,',
    'Tests d’intelligence sur la Parole de DIEU, les Saints, la Vie et l’œuvre de Saint PADRE PIO',
  ];
}
