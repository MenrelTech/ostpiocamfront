import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NumberedcardtextComponent } from '../../../../../../numberedcardtext/numberedcardtext.component';
import { HealthCarComponent } from "../../../../../../health-car/health-car.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  standalone: true,
  templateUrl: './health-sime.component.html',
  imports: [
    RouterLink,
    NumberedcardtextComponent,
    RouterLink,
    HealthCarComponent,
    TranslateModule
],
})
export class HealthSimeComponent {
  link = "/champs d'apostolat/sante/historicité";
}
