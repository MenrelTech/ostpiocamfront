import {
  NgFor,
  NgClass,
  NgIf,
  AsyncPipe,
  isPlatformBrowser,
} from '@angular/common';
import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  signal,
  OnInit,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

export interface Submenu {
  label: string;
  path: string;
}

export interface NavLink {
  label: string;
  path: string;
  subMenu: Submenu[];
}

export interface NavbarTraduction {
  label: string;
  subMenu: string[];
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgFor,
    NgClass,
    NgIf,
    TranslateModule,
    AsyncPipe,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('slideInOut', [
      state(
        'open',
        style({
          height: '*',
          opacity: 1,
          visibility: 'visible',
        })
      ),
      state(
        'closed',
        style({
          height: '0px',
          opacity: 0,
          visibility: 'hidden',
        })
      ),
      transition('open <=> closed', [animate('250ms ease-in-out')]),
    ]),
  ],
})
export class NavbarComponent implements AfterViewInit {
  @ViewChild('navLinks') navLinksContainer!: ElementRef;

  isOpen = false;
  activeSubmenu: NavLink | null = null;
  mobileActiveSubmenu: NavLink | null = null;
  navWidth: string = '100%';
  currentLang: string;
  email = signal<string | undefined>(undefined);
  links$!: Observable<NavLink[]>;

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID)
    private platformId: Object
  ) {
    this.links$ = this.translate.stream('links');
    this.currentLang =
      this.translate.currentLang || this.translate.getDefaultLang();
  }

  ngOnInit() {
    this.getInfo()
      .then((data) => {
        this.email.set(data.email);
      })
      .catch((error) => {
        console.error('Error Checking status user', error);
      });
  }

  trackByPath(_: number, link: NavLink) {
    return link.path;
  }

  async getInfo() {
    let response = await fetch('https://ostpiocamback.enotelco.com/api/me', {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${window.sessionStorage.getItem('token')}`,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      let data = await response.json();

      return data;
    }
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

  switchLanguage(lang: 'fr' | 'en') {
    this.translate.use(lang);
    this.currentLang = lang;

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', lang);
    }
  }
}

/* links: NavLink[] = [
    {
      label: 'Accueil',
      path: AppRouter.home,
      subMenu: [
        { label: 'Présentation', path: '' },
        { label: 'Actualité', path: 'actualite' },
        { label: 'Prolégomènes', path: 'prolegomene' },
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
      label: "Champs d'Apostolat",
      path: AppRouter.fieldsOfApostolate,
      subMenu: [
        {
          label: 'Spiritualité',
          path: AppRouter.fieldsOfApostolate + '/spiritualite',
        },
        {
          label: 'Santé',
          path: AppRouter.fieldsOfApostolate + '/sante',
        },
        {
          label: 'Communication',
          path: AppRouter.fieldsOfApostolate + '/communication',
        },
        {
          label: 'Environnement',
          path: AppRouter.fieldsOfApostolate + '/environnement',
        },
      ],
    },
    // { label: 'Spiritualités', path: AppRouter.spirituality },
    {
      label: 'Actualités',
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
          label: 'Souscrire à la Newsletter',
          path: 'news-letter',
        },
        {
          label: 'Nous contacter',
          path: 'contact',
        },
      ],
    },
  ];*/
