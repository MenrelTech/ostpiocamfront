import { NgFor, NgClass, NgIf } from '@angular/common';
import { Component, ViewChild, ElementRef, AfterViewInit, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AppRouter } from '../../shared/app-router/app-router';
import { trigger, transition, style, animate, state } from '@angular/animations';

export interface Submenu {
  label: string;
  path: string;
}

export interface NavLink {
  label: string;
  path: string;
  subMenu: Submenu[];
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgFor, NgClass, NgIf],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('slideInOut', [
      state('open', style({
        height: '*',
        opacity: 1,
        visibility: 'visible'
      })),
      state('closed', style({
        height: '0px',
        opacity: 0,
        visibility: 'hidden'
      })),
      transition('open <=> closed', [
        animate('250ms ease-in-out')
      ]),
    ]),
  ]
})
export class NavbarComponent implements AfterViewInit {
  @ViewChild('navLinks') navLinksContainer!: ElementRef;
  
  links: NavLink[] = [
    {
      label: 'Accueil',
      path: AppRouter.home,
      subMenu: [
        { label: 'Presentation', path: '' },
        { label: 'Actualité', path: 'actualite' },
        { label: 'Prolegomenes', path: 'prolegomene' },
        { label: 'Nos prestataires', path: 'nos-prestataire' },
        {
          label: 'Fondateurs & Responsable',
          path: 'fondateurs&responsable',
        },
        {
          label: 'Les grandes dates',
          path: 'grandes-dates',
        },
        {
          label: "Champs d'Apostolats",
          path: "champs d'apostolat",
        },
        {
          label: 'Nos perspectives',
          path: 'nos-perspectives',
        },
      ],
    },
    {
      label: 'Àctualités',
      path: AppRouter.news,
      subMenu: [
        { label: 'A la une ', path: 'a-la-une' },
        { label: 'Communiqués & interviews', path: 'communiqués-interviews' },
        { label: "Rapport d'activités", path: "rapport-d'activités" },
        {
          label: 'Archives',
          path: 'archives',
        },
      ],
    },
    {
      label: "Champs d'apostolat",
      path: AppRouter.fieldsOfApostolate,
      subMenu: [
        {
          label: 'Spiritualités',
          path: AppRouter.fieldsOfApostolate + '/spiritualite',
        },
        {
          label: 'Sante',
          path: AppRouter.fieldsOfApostolate + '/sante',
        },
        {
          label: 'Communication',
          path: AppRouter.fieldsOfApostolate +  '/communication',
        },
        {
          label: 'Environnement',
          path: AppRouter.fieldsOfApostolate  +  '/environnement',
        },
      ],
    },
    // { label: 'Spiritualités', path: AppRouter.spirituality },
    {
      label: 'Contact',
      path: AppRouter.contact,
      subMenu: [
        {
          label: 'Devenir bénévole',
          path: 'devenir-benevole',
        },
        {
          label: 'Devenir partenaire',
          path: 'devenir-partenaire',
        },
        {
          label: 'Souscrire a la news letter',
          path: 'news-letter',
        },
        {
          label: 'Nous contactez',
          path: 'contact',
        },
      ],
    },
  ];

  isOpen = false;
  activeSubmenu: NavLink | null = null;
  mobileActiveSubmenu: NavLink | null = null;
  navWidth: string = '100%';

  email = signal<string| undefined>(undefined)

  ngOnInit() {
    console.log('Navbar rendered');
    async function getInfo() {
      let response = await fetch("https://ostpiocamback.enotelco.com/api/me", {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${window.sessionStorage.getItem('token')}`,
        },
      });
      if (!response.ok) {   
        throw new Error(`HTTP error! status: ${response.status}`);          
      }else{
        let data = await response.json();
        
        return data;
      }
    }
    getInfo().then((data) => {
      this.email.set(data.email);
      console.log(data);
     }).catch((error) => {
     console.error('Error Checking status user', error);
   });
  }

  ngAfterViewInit() {
    if (this.navLinksContainer) {
      setTimeout(() => {
        this.navWidth = `${this.navLinksContainer.nativeElement.offsetWidth}px`;
      });
    }
  }

  hidemenu(event: any) {
    event.stopPropagation();
    this.isOpen = false;
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  handleNavigation() {
    this.isOpen = false;
    this.activeSubmenu = null;
    this.mobileActiveSubmenu = null;
  }
  
  showSubmenu(link: NavLink) {
    this.activeSubmenu = link;
  }
  
  hideSubmenu() {
    this.activeSubmenu = null;
  }
  
  toggleMobileSubmenu(link: NavLink) {
    this.mobileActiveSubmenu = this.mobileActiveSubmenu === link ? null : link;
  }
}