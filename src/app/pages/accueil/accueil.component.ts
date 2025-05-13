import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselComponent } from '../../carousel/carousel.component';
import { CardtextComponent } from '../../cardtext/cardtext.component';
import { CardimageComponent } from '../../cardimage/cardimage.component';
import { VerticalcardtextComponent } from '../../verticalcardtext/verticalcardtext.component';
import { RdvcardComponent } from '../../rdvcard/rdvcard.component';
import { CommonModule } from '@angular/common';
import { AppRouter } from '../../shared/app-router/app-router';

interface Actualite {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  name: string;
  altMessage: string;
  color: string;
}
interface GrandesDates {
  id: number;
  title: string;
  description: string;
  jour: string;
  mois: string;
  annee: string;
  date: string;
  color: string;
}

@Component({
  selector: 'app-accueil',
  imports: [
    RdvcardComponent,
    CarouselComponent,
    CardtextComponent,
    CardimageComponent,
    VerticalcardtextComponent,
    RouterLink,
    CommonModule
  ],
  standalone: true,
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
})
export class AccueilComponent {
  actualites = signal<Actualite[]>([]);
  grandesDates = signal<GrandesDates[]>([]);


  activityLink = AppRouter.fieldsOfApostolate + '/spiritualite'; 
  healthLink = AppRouter.fieldsOfApostolate + '/sante'; 

  communicationLink = AppRouter.fieldsOfApostolate +  '/communication'; 

  environnementLink = AppRouter.fieldsOfApostolate  +  '/environnement'

  ngOnInit(){; 
    async function getActualities(timeout = 10000) {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), timeout);

      try {
        let response = await fetch("https://ostpiocamback.enotelco.com/api/publications", {
          method: 'GET',
          mode: 'cors',
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/json',
          },
          signal: controller.signal
        });
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
    async function getDate(timeout = 10000) {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), timeout);

      try {
        let response = await fetch("https://ostpiocamback.enotelco.com/api/calendar_events", {
          method: 'GET',
          mode: 'cors',
          cache: 'no-cache',
          headers: {
            'Content-Type': 'application/json',
          },
          signal: controller.signal
        });
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
    getActualities(20000).then((data) => {
      let a = data.member.map((item : any) => {
        let couleur = "#C79100";
        if(item.area == "Environnement"){
          couleur = "#05DE72";
        }else if(item.area == "Santé"){
          couleur = "#FE6467";
        }else if(item.area == "Spiritualité"){
          couleur = "#FCC600";
        }else if(item.area == "Communication"){
          couleur = "#51A1FE";
        }
        let date = "2025-05-10T11:32:21+00:00"
        date.slice(0,10)
        return {
          id: item.id,
          title: item.title,
          description: item.content,
          image: item.publicationAttachments[0] ? "https://ostpiocamback.enotelco.com"+item.publicationAttachments[0].attachmentUrl : "" ,
          date: "Le "+item.createdAt.slice(0,10)+" à "+item.createdAt.slice(11,16),
          name: item.area,
          altMessage : "actu_"+item.title,
          color: couleur,
        };
      });
      
      this.actualites.set([a[0],a[1],a[2],a[3]]);
    }).catch((error) => {
      console.error('Error fetching actualities:', error);
    });
    getDate(20000).then((data) => {
      let a = data.member.map((item : any) => {
        let couleur = "#C79100";
        if(item.title == "Environnement"){
          couleur = "#00C7A0";
        }else if(item.title == "Santé"){
          couleur = "#FF6F61";
        }else if(item.title == "Spiritualité"){
          couleur = "#FF6F61";
        }else if(item.title == "Communication"){
          couleur = "#FF6F61";
        }

        return {
          id: item.id,
          title: item.title,
          description: item.description,
          date: "Le "+item.date.slice(0,10)+" à "+item.date.slice(11,16),
          jour: item.date.slice(8,10),
          mois: item.date.slice(5,7),
          annee: item.date.slice(0,4),
          color: couleur,
        };
      });
      
      this.grandesDates.set([a[0],a[1],a[2],a[3]]);
    }).catch((error) => {
      console.error('Error fetching grandes dates:', error);
    });
  }
}
