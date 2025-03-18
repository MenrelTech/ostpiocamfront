import { Component,computed,input } from '@angular/core';

@Component({
  selector: 'app-qcm',
  imports: [],
  templateUrl: './qcm.component.html',
  styleUrl: './qcm.component.css'
})
export class QcmComponent {

  numero_question = input.required<number>();
  bareme = input.required<number>();
  pourcentage = computed(()=> this.numero_question() / this.bareme() * 100);
}
