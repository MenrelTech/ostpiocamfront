import { Component, Input,signal } from '@angular/core';
import { VerticalcardtextComponent } from '../../../../../../verticalcardtext/verticalcardtext.component';
import { ImgcardtextComponent } from '../../../../../../imgcardtext/imgcardtext.component';
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
  standalone: true,
  templateUrl: './communication-about.component.html',
  imports: [VerticalcardtextComponent, ImgcardtextComponent,CommonModule],
  styleUrl: './communication-about.component.css',
  selector: 'app-accueil-communication',
})
export class CommunicationAboutComponent {
  actualites = signal<Actualite[]>([]);
  hidden = true;
  hidden2 = true;
  hidden3 = true;
  hidden4 = true;
  currentIndex: number = 0;
  intervalId: any;
  @Input() images: string[] = [
    'images/slide1.jpg',
    'images/slide2.jpg',
    'images/slide3.jpg',
  ];

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

  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  revealmenu() {
    this.hidden = false;
  }
  hidemenu() {
    this.hidden = true;
  }
  revealmenu2() {
    this.hidden2 = false;
  }
  hidemenu2() {
    this.hidden2 = true;
  }
  revealmenu3() {
    this.hidden3 = false;
  }
  hidemenu3() {
    this.hidden3 = true;
  }
  revealmenu4() {
    this.hidden4 = false;
  }
  hidemenu4() {
    this.hidden4 = true;
  }
}
