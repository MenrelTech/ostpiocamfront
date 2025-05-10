import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CarouselComponent } from '../../carousel/carousel.component';
import { CardtextComponent } from '../../cardtext/cardtext.component';
import { CardimageComponent } from '../../cardimage/cardimage.component';
import { VerticalcardtextComponent } from '../../verticalcardtext/verticalcardtext.component';
import { RdvcardComponent } from '../../rdvcard/rdvcard.component';
import { CountDownComponent } from '../count-down/count-down.component';
import { CommonModule } from '@angular/common';

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
  ngOnInit(){
    async function getActualities() {
      let response = await fetch("https://ostpiocamback.enotelco.com/api/publications", {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {   
        throw new Error(`HTTP error! status: ${response.status}`);          
      }else{
        let data = await response.json();
        
        return data;
      }
    }
    getActualities().then((data) => {
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
          description: item.content,
          image: item.publicationAttachments[0] ? item.publicationAttachments[0].attachmentUrl : "" ,
          date: item.createdAt,
          name: item.title,
          altMessage : "actu_"+item.title,
          color: couleur,
        };
      });
      
      this.actualites.set([a[0],a[1],a[2],a[3]]);
    }).catch((error) => {
      console.error('Error fetching actualities:', error);
    });
  }
}
