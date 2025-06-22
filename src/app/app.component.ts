import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    TranslateModule,
  ],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'ostpiocamfront';
  hidden = true;

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID)
    private platformId: Object
  ) {
    // Configuration de base dans le constructeur
    this.translate.addLangs(['fr', 'en']);
    this.translate.setDefaultLang('fr');
  }

  ngOnInit() {
    this.initializeLanguage();
  }

  private initializeLanguage() {
    let lang = 'fr'
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('lang');

      if (savedLang) {
        // Utilise la langue enregistrée
        this.translate.use(savedLang);
      } else {
        // Sinon, détecte la langue du navigateur
        const browserLang = this.translate.getBrowserLang();
        const fallback = 'fr';
        const supportedLangs = ['fr', 'en'];

        // Si langue supportée, on l'utilise, sinon fallback
        const langToUse = supportedLangs.includes(browserLang || '')
          ? browserLang!
          : fallback;

        this.translate.use(langToUse);
        localStorage.setItem('lang', langToUse);
      }
    }

    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }

  revealmenu() {
    this.hidden = !this.hidden;
  }

  hidemenu() {
    this.hidden = true;
  }

  subscribe(e: any) {
    console.log(e);
  }
}
