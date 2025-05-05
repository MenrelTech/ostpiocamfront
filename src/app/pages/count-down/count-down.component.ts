import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  standalone: true,
  templateUrl: './count-down.component.html',
  selector: 'app-count-down'
})
export class CountDownComponent implements OnInit, OnDestroy {
  currentDate: Date = new Date();

  private intervalId: any;

  ngOnInit(): void {
    // Vérifiez si l'environnement est un navigateur
    if (typeof window !== 'undefined') {
      this.intervalId = setInterval(() => {
        this.currentDate = new Date();
      }, 1000);
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}