// field-of-apostolate.component.ts
import { Component } from '@angular/core';
import { AsyncPipe, NgClass, NgFor } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

interface SubMenuItem {
  label: string;
  link: string;
}

interface MainMenuItem {
  label: string;
  path: string;
  color: string;
  subItems: SubMenuItem[];
}

@Component({
  selector: 'app-field-of-apostolate',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    NgFor,
    NgClass,
    TranslateModule,
    AsyncPipe,
  ],
  templateUrl: './filed-of-apostolate.component.html',
})
export class FieldOfApostolateComponent {
  activeMenuIndex: number | null = null;
  menus$!: Observable<MainMenuItem[]>;

  constructor(private translate: TranslateService) {
    this.menus$ = this.translate.stream('field-apostolate.menus');
  }

  trackByPath(_: number, link: MainMenuItem) {
    return link.path;
  }

  showSubMenu(index: number) {
    this.activeMenuIndex = index;
  }

  hideSubMenu() {
    this.activeMenuIndex = null;
  }
}

/*
  menus: MainMenuItem[] = 
  
  [
    {
      label: 'Spiritualité',
      path: '/spiritualite',
      color: 'yellow',
      subItems: [
        { label: 'À propos de nous', link: "/champs d'apostolat/spiritualite/apropos" },
        { label: 'Activités', link: "/champs d'apostolat/spiritualite/activite" },
        { label: "Connaissance de l'Église", link: "/champs d'apostolat/spiritualite/connaissance de l'eglise" },
        { label: 'Galerie photos', link: "/champs d'apostolat/spiritualite/galerie" },
      ],
    },
    {
      label: 'Santé',
      path: '/sante',
      color: 'red',
      subItems: [
        { label: 'St Pio BRSF', link: "/champs d'apostolat/sante/apropos" },
        // { label: 'Activités', link: "/champs d'apostolat/sante/activite" }
        { label: 'SIME AS', link: "/champs d'apostolat/sante/sime-as" },
        { label: 'Galerie photos', link: "/champs d'apostolat/sante/galerie" },
      ],
    },
    {
      label: 'Communication',
      path: '/communication',
      color: 'blue',
      subItems: [
        { label: 'À propos de nous', link: "/champs d'apostolat/communication/apropos" },
        { label: 'Activités', link: "/champs d'apostolat/communication/activite"},
        { label: 'Galerie photos', link: "/champs d'apostolat/communication/galerie"  },
      ],
    },
    {
      label: 'Environnement',
      path: '/environnement',
      color: 'green',
      subItems: [
        { label: 'À propos de nous', link:"/champs d'apostolat/environnement/apropos" },
        { label: 'Activités', link: "/champs d'apostolat/environnement/activite" },
        { label: 'Galerie photos', link:"/champs d'apostolat/environnement/galerie" },
      ],
    },
  ];
*/
