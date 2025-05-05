import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @Input() events: { evenement: string; date: string }[] = []; // Liste des événements en entrée

  currentMonth: number = new Date().getMonth(); // Mois actuel
  currentYear: number = new Date().getFullYear(); // Année actuelle
  daysInMonth: number[] = []; // Liste des jours du mois
  eventDays: Map<number, string> = new Map(); // Jours avec événements et leurs descriptions

  months: string[] = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  daysOfWeek: string[] = ['L', 'M', 'M', 'J', 'V', 'S', 'D']; // Initiales des jours

  selectedDayDetails: string | null = null; // Détails du jour sélectionné

  ngOnInit(): void {
    this.updateCalendar();
  }

  updateCalendar(): void {
    const daysInCurrentMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    this.daysInMonth = Array.from({ length: daysInCurrentMonth }, (_, i) => i + 1);

    // Mettre à jour les jours avec événements
    this.eventDays.clear();
    this.events
      .filter(event => {
        const eventDate = new Date(event.date);
        return (
          eventDate.getFullYear() === this.currentYear &&
          eventDate.getMonth() === this.currentMonth
        );
      })
      .forEach(event => {
        const day = new Date(event.date).getDate();
        this.eventDays.set(day, event.evenement);
      });
  }

  onMonthChange(event: Event): void {
    this.currentMonth = parseInt((event.target as HTMLSelectElement).value, 10);
    this.updateCalendar();
  }

  onYearChange(event: Event): void {
    this.currentYear = parseInt((event.target as HTMLSelectElement).value, 10);
    this.updateCalendar();
  }

  onDayClick(day: number): void {
    this.selectedDayDetails = this.eventDays.get(day) || `Aucun événement pour le ${day} ${this.months[this.currentMonth]} ${this.currentYear}.`;
  }

  closePopup(): void {
    this.selectedDayDetails = null;
  }
}