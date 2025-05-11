import { Component,signal } from "@angular/core";
import { CommonModule } from '@angular/common';

interface Galerie {
  id: 1,
  title: string,
  description: string,
  photos: [
    {
      id: 1,
      image: string,
      imageUrl: string,
      caption: string,
      createdAt: string
    }
  ],
  createdAt: string,
}

@Component({
  standalone: true,
  templateUrl: './environnement-gallery.component.html',
  imports: [CommonModule],
})
export class EnvironnementGalleryComponent{
  galeries = signal<Galerie[]>([]);
  ngOnInit(){
    async function getGalerie(timeout = 10000) {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), timeout);

      try {
        let response = await fetch("https://ostpiocamback.enotelco.com/api/galleries", {
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
    getGalerie(20000).then((data) => {
      let a = data.member.map((item : any) => {
      return {
        id: item.id,
        title: item.title,
        description: item.description,
        photos: item.photos.map((photo: any) => ({
          id: photo.id,
          image: photo.image,
          imageUrl: "https://ostpiocamback.enotelco.com"+photo.imageUrl,
          caption: photo.caption,
          createdAt: photo.createdAt
        })),
        createdAt: item.createdAt

      };
    });
    
    this.galeries.set(a);
    console.log(a[0].photos[0].imageUrl);
    }).catch((error) => {
      console.error('Error fetching galleries:', error);
    });
  }
}