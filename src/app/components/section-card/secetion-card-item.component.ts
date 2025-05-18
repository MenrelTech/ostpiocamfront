

// Fichier: item-list.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul class="list-disc font-(family-name:--chakraregular) list-outside ms-8">
      <li *ngFor="let item of items">{{ item }}</li>
    </ul>
  `
})
export class ItemSectionComponent {
  @Input() items: string[] = [];
}