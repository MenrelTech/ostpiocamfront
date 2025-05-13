import { Component,signal } from "@angular/core";
import { CardaddressComponent } from "../../../../../../cardaddress/cardaddress.component";
import { RdvcardComponent } from "../../../../../../rdvcard/rdvcard.component";
import { CalendarComponent } from "../../../../../../calendar/calendar.component";
import { CommonModule } from '@angular/common';

interface Activite {
  id: number;
  name: string;
  location: string,
  startAt: string,
  endAt: string,
  createdAt: string,
  type: {
    id: number,
    label: string,
    description: string
  },
  description: string,
  contact: string
} 
interface Rapport {
  id: number,
  title: string,
  description: string,
  report: string,
  reportUrl: string,
  publishedAt: string
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
interface EventCalendar {
  evenement: string;
  date : string;
}

@Component({
  standalone:true, 
  templateUrl:"./spirituality-activities.component.html",
  imports: [CardaddressComponent,CommonModule, RdvcardComponent, CalendarComponent]
})
export class SpiritualityActivitiesComponent{
  activites = signal<Activite[]>([]);
  rapport = signal<Rapport[]>([]);
  eventCalendar = signal<EventCalendar[]>([]);
  grandesDates = signal<GrandesDates[]>([]);
  grandesDates2 = signal<GrandesDates[]>([]);
  ngOnInit(){
    async function getActivites(timeout = 10000) {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), timeout);

      try {
        let response = await fetch("https://ostpiocamback.enotelco.com/api/activities", {
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
    getActivites(20000).then((data) => {
      let a = data.member.map((item : any) => {
        return {
          id: item.id,
          name: item.name,
          description: item.description,
          location: item.location,
          startAt: item.startAt,
          endAt: item.endAt,
          createdAt: item.createdAt,
          type: {
            id: item.type.id,
            label: item.type.label,
            description: item.type.description
          },
          contact: item.contact
        };
      });
      
      this.activites.set(a);
    }).catch((error) => {
      console.error('Error fetching activities:', error);
    });
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
      let a : GrandesDates[]  = data.member.map((item : any) => {
        let couleur = "#C79100";
        if(item.area == "Environnement"){
          couleur = "#00C7A0";
        }else if(item.area == "Santé"){
          couleur = "#FF6F61";
        }else if(item.area == "Spiritualité"){
          couleur = "#FF6F61";
        }else if(item.area == "Communication"){
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
      this.grandesDates.set([a[0],a[1],a[2]]);
      this.grandesDates2.set([a[a.length - 1],a[a.length-2],a[a.length-3]]);
      this.eventCalendar.set(a.map((values,index) => 
        {
          return {
            "date": values.annee+"-"+values.mois+"-"+values.jour,
            "evenement": values.title,
          }
        }
    ));
    }).catch((error) => {
      console.error('Error fetching grandes dates:', error);
    });
    async function getReports(timeout = 10000) {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), timeout);

      try {
        let response = await fetch("https://ostpiocamback.enotelco.com/api/activity_reports", {
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
    getReports(20000).then((data) => {
      let a = data.member.map((item : any) => {
        return {
          id: item.id,
          title: item.title,
          description: item.description,
          report : item.report,
          reportUrl : item.reportUrl,
          publishedAt : item.publishedAt.slice(0,10)
        };
      });
      this.rapport.set([a[a.length - 1],a[a.length - 2],a[a.length - 3]]);
    }).catch((error) => {
      console.error('Error fetching reports:', error);
    });

  }
}