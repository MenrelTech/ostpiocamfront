import { Component, signal } from '@angular/core';
import { NumberedcardtextComponent } from '../../../../../../numberedcardtext/numberedcardtext.component';
import { RouterLink } from '@angular/router';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { HealthCarComponent } from '../../../../../../health-car/health-car.component';
import { RdvcardComponent } from '../../../../../../rdvcard/rdvcard.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

interface GrandesDates {
  id: number;
  title: string;
  description: string;
  jour: string;
  mois: string;
  annee: string;
  date: string;
  color: Col;
}
interface Col {
  bg: string;
  color: string;
  hovercolor: string;
}
@Component({
  standalone: true,
  templateUrl: './health-about.component.html',
  imports: [
    NumberedcardtextComponent,
    RouterLink,
    NgFor,
    HealthCarComponent,
    NumberedcardtextComponent,
    RouterLink,
    CommonModule,
    NgFor,
    RdvcardComponent,
    TranslateModule,
    AsyncPipe,
  ],
})
export class HealthAboutComponent {
  genralityLink = "/champs d'apostolat/sante/generalités";
  perspectivesLink = "/champs d'apostolat/sante/perspective";
  missions$!: Observable<string[]>;
  actions$!:Observable<string[]>;
  values$!:Observable<string[]>;
  perspectives$!:Observable<string[]>

  constructor(private readonly translate: TranslateService) {
    this.missions$ = this.translate.stream('field-apostolate.health.missions.data');
    this.actions$ = this.translate.stream('field-apostolate.health.level-action.actions'); 
    this.values$ = this.translate.stream('field-apostolate.health.our-values.values');
    this.perspectives$ = this.translate.stream('field-apostolate.health.prospects.data')
  }

  trackByPath(_: number, link: string) {
    return link;
  }

  grandesDates = signal<GrandesDates[]>([]);

  link = "/champs d'apostolat/sante/historicité";
  linkGeneralite = "/champs d'apostolat/sante/généralité";
  linkPerspective = "/champs d'apostolat/sante/perspective";
  ngOnInit() {
    async function getDate(timeout = 10000) {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), timeout);

      try {
        let response = await fetch(
          'https://ostpiocamback.enotelco.com/api/calendar_events',
          {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
              'Content-Type': 'application/json',
            },
            signal: controller.signal,
          }
        );
        clearTimeout(id);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          let data = await response.json();
          return data;
        }
      } catch (error) {
        clearTimeout(id);
        throw error;
      }
    }
    getDate(20000)
      .then((data) => {
        let a = data.member.map((item: any) => {
          let couleur = '#C79100';
          if (item.title == 'Environnement') {
            couleur = '#00C7A0';
          } else if (item.title == 'Santé') {
            couleur = '#FF6F61';
          } else if (item.title == 'Spiritualité') {
            couleur = '#FF6F61';
          } else if (item.title == 'Communication') {
            couleur = '#FF6F61';
          }

          return {
            id: item.id,
            title: item.title,
            description: item.description,
            date:
              'Le ' + item.date.slice(0, 10) + ' à ' + item.date.slice(11, 16),
            jour: item.date.slice(8, 10),
            mois: item.date.slice(5, 7),
            annee: item.date.slice(0, 4),
            color: couleur,
          };
        });

        this.grandesDates.set([a[0], a[1], a[2], a[3]]);
      })
      .catch((error) => {
        console.error('Error fetching grandes dates:', error);
      });
  }
}
