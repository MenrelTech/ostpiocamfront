// field-of-apostolate.component.ts
import { Component } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

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
  imports: [RouterLink, RouterOutlet, NgFor,NgClass],
  templateUrl: './filed-of-apostolate.component.html',

})
export class FieldOfApostolateComponent {
  activeMenuIndex: number | null = null;

  menus: MainMenuItem[] = [
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
        { label: 'À propos de nous', link: "/champs d'apostolat/sante/apropos" },
        { label: 'Activités', link: "/champs d'apostolat/sante/activite" },
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
        { label: 'Galerie photos', link:"/champs d'apostolat//environnement/galerie" },
      ],
    },
  ];

  showSubMenu(index: number) {
    this.activeMenuIndex = index;
  }

  hideSubMenu() {
    this.activeMenuIndex = null;
  }
}