import { Component } from "@angular/core";
import { InputFormComponent } from "../../components/input-form/input-form.component";


@Component({
  imports: [InputFormComponent], 
  standalone:true, 
  selector:"app-login",
  templateUrl:'./login.component.html'
})
export class LoginComponent{

}