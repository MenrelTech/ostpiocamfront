import { Component } from '@angular/core';
import { InputFormComponent } from '../../components/input-form/input-form.component';
import { NgClass, NgFor } from '@angular/common';

@Component({
  standalone: true,
  templateUrl: './become-volunteer.component.html',
  imports: [InputFormComponent,NgFor,NgClass],
})
export class BecomeVolunteerComponent {


  domains = ["Spirtualité", 'Santé','Communication','Environnement','Autres']

  disponibilities = ["Ponctuelle", "Regulière","En week end", "A discuter"]
}
