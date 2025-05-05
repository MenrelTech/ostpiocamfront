import { Component } from "@angular/core";
import { InputFormComponent } from "../../components/input-form/input-form.component";
import { NgFor } from "@angular/common";


@Component({
  standalone:true,
  templateUrl:"./become-partner.component.html",
  imports: [InputFormComponent,NgFor]
})
export class BecomePartnerComponent{

  partnersTypes = ["Financier","Logistique","Médical","Médias","Autre"]

}