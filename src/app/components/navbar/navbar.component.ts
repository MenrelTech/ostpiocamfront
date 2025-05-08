import { NgFor, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive,RouterOutlet } from '@angular/router';
import { AppRouter } from '../../shared/app-router/app-router';

export interface NavLink {
  label: string;
  path: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive, NgFor, NgClass],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  links: NavLink[] = [
    { label: 'Accueil', path: AppRouter.home },
    { label: 'Àctualités', path: AppRouter.news },
    // { label: "Champs d'apostolat", path: AppRouter.fieldsOfApostolate },
    { label: 'Spiritualités', path: AppRouter.spirituality },
    { label: 'Contact', path: AppRouter.contact },
  ];

  isOpen = false;

  hidemenu(event:any) {
    event.stopPropagation();
    this.isOpen = false;
  }
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  handleNavigation() {
    this.isOpen = false
  }
}
