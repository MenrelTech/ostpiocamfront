import { Component,signal } from "@angular/core";
import { CardComponent } from "../../../../../../card/card.component";
import { ImgcardtextComponent } from "../../../../../../imgcardtext/imgcardtext.component";
import { NumberedcardtextComponent } from "../../../../../../numberedcardtext/numberedcardtext.component";
import { RdvcardComponent } from "../../../../../../rdvcard/rdvcard.component";

import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';


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
interface Col{
  bg: string,
  color: string,
  hovercolor: string
}

@Component({
  standalone:true,
  templateUrl:"./health-about.component.html",
  imports: [CardComponent, ImgcardtextComponent, NumberedcardtextComponent, RouterLink,CommonModule,RdvcardComponent]
})
export class HealthAboutComponent{
    grandesDates = signal<GrandesDates[]>([]);
  

  link = "/champs d'apostolat/sante/historicité"
  linkGeneralite = "//champs d'apostolat/sante/généralité"
  linkPerspective = "//champs d'apostolat/sante/perspective"
  ngOnInit(){
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