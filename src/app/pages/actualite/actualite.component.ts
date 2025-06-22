import { Component, signal } from '@angular/core';
import { CardtextComponent } from '../../cardtext/cardtext.component';
import { CommonModule } from '@angular/common';
import cardActualityComponent from '../../cardActuality/cardActuality.component';
import { VerticalcardtextComponent } from '../../verticalcardtext/verticalcardtext.component';
import { TranslateModule } from '@ngx-translate/core';
interface Actualite {
  originaldate: string | number | Date;
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  originalDate: string;
  name: string;
  altMessage: string;
  color: string;
} 
@Component({
  selector: 'app-actualite',
  imports: [CommonModule,cardActualityComponent,TranslateModule],
  templateUrl: './actualite.component.html',
  styleUrl: './actualite.component.css'
})
export class ActualiteComponent {
  actualites = signal<Actualite[]>([]);

  ngOnInit(){
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
    getActualities(20000).then((data) => {
      let a = data.member.map((item : any) => {
        let couleur = "#C79100";
        if(item.area == "Environnement"){

          couleur = "#05DE72";
        }else if(item.area == "Santé"){

          couleur = "#FE6467";
        }else if(item.area == "Spiritualité"){

          couleur = "#FCC600";
        }
        let date = "2025-05-10T11:32:21+00:00"
        date.slice(0,10)
        return {
          id: item.id,
          title: item.title,
          description: item.content,
          image: item.publicationAttachments[0] ? "https://ostpiocamback.enotelco.com"+item.publicationAttachments[0].attachmentUrl : "" ,
          date: "Le "+item.createdAt.slice(0,10)+" à "+item.createdAt.slice(11,16),
          originalDate: item.createdAt,
          name: item.area,
          altMessage : "actu_"+item.title,
          color: couleur,
        };
      });
      a.sort((a: Actualite, b: Actualite) => new Date(b.originaldate).getTime() - new Date(a.originaldate).getTime());
      this.actualites.set(a);
    }).catch((error) => {
      console.error('Error fetching actualities:', error);
    });

  }
}
