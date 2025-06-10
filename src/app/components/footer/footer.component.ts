// src/app/shared/footer.component.ts
import { Component, OnInit, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AsyncPipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

interface FooterLink {
  label: string;
  path: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgFor,
    FormsModule,
    TranslateModule,
    AsyncPipe,
  ],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  usefulLinks$!: Observable<FooterLink[]>;
  apostolatLinks$!: Observable<FooterLink[]>;

  constructor(private translate: TranslateService) {
    this.usefulLinks$ = this.translate.stream('footer.usefulLinks');
    this.apostolatLinks$ = this.translate.stream('footer.apostolatLinks');
  }

  subscriberEmail = '';

  trackByPath(_: number, link: FooterLink) {
    return link.path;
  }

  subscribe() {
    if (this.subscriberEmail) {
      let data = {
        email: this.subscriberEmail,
      };
      (async () => {
        let response = await fetch(
          'https://ostpiocamback.enotelco.com/api/newletter_subscriptions',
          {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          }
        );

        console.log(response);
        if (!response.ok) {
          alert(
            'Echec lors de la subscription à la newsletter :' + response.status
          );
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          alert('Subscription à la newsletter reussie !!');
        }
      })().then((result) => {
        this.subscriberEmail = '';
      });
    }
  }
}

/*
  usefulLinks: FooterLink[] = [
    { label: 'Accueil', path: '' },
    { label: 'Actualités', path: 'actualites' },
    { label: 'Nous contacter', path: 'contact' },
    { label: 'Faire un don', path: 'don' },
  ];

  apostolatLinks: FooterLink[] = [
    { label: 'Santé', path: 'sante' },
    { label: 'Spiritualité', path: 'spiritualite' },
    { label: 'Environnement', path: 'environnement' },
    { label: 'Communication', path: 'communication' },
  ];
*/
