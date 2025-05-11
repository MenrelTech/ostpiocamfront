import { Component } from "@angular/core";
import { InputFormComponent } from "../../components/input-form/input-form.component";
import { RouterOutlet,RouterLink,RouterLinkActive } from "@angular/router";
import { FormsModule } from '@angular/forms';

@Component({
  imports: [InputFormComponent,RouterOutlet,RouterLink,RouterLinkActive,FormsModule], 
  standalone:true, 
  selector:"app-login",
  templateUrl:'./login.component.html'
})
export class LoginComponent{
  email = '';
  password = '';
  async getUserInfos () {

    let data = {
      "email": this.email,
      "password": this.password
    };
    let response = await fetch("https://ostpiocamback.enotelco.com/api/login_check", {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    console.log(response);
    if (!response.ok) {
        if (response.status !== 400) {
            alert('Echec lors de la connexion');
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        alert('Utilisateur  déjà  existant ! Changez vos informations');
    }else{
      let data = await response.json();
      return data;
    }
  }
  userLogin (event : MouseEvent) {
    event.preventDefault();
    this.getUserInfos().then((data) => {
      let token =  data.token ;
      window.sessionStorage.setItem('token',token);
      alert('Vous êtes maintenant connecté !!');
      window.location.assign("http://localhost:4200/");
    });
  }

}