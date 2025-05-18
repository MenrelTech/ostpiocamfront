import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NumberedcardtextComponent } from '../../../../../../numberedcardtext/numberedcardtext.component';
import { HealthCarComponent } from "../../../../../../health-car/health-car.component";

@Component({
  standalone: true,
  templateUrl: './health-sime.component.html',
  imports: [
    RouterLink,
    NumberedcardtextComponent,
    RouterLink,
    HealthCarComponent
],
})
export class HealthSimeComponent {
  link = "/champs d'apostolat/sante/historicité";
}
