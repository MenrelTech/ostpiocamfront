import { Component } from "@angular/core";
import { InputFormComponent } from "../../components/input-form/input-form.component";
import { RouterLink } from "@angular/router";


@Component({
  standalone:true,
  templateUrl:"./register.component.html",
  imports: [InputFormComponent, RouterLink]
})
export class RegisterComponent{


}