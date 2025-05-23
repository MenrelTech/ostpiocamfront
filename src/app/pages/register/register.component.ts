import { Component } from "@angular/core";
import { InputFormComponent } from "../../components/input-form/input-form.component";
import { RouterLink,RouterOutlet } from "@angular/router";
import { FormsModule } from '@angular/forms';

@Component({
  standalone:true,
  templateUrl:"./register.component.html",
  imports: [InputFormComponent, RouterLink,FormsModule,RouterOutlet]
})
export class RegisterComponent{

  firstName = '';
  lastName = '';
  telephone = '';
  email = '';
  password = '';
  async createUser (event : MouseEvent) {
    event.preventDefault();
    let data = {
      "firstName": this.firstName,
      "lastName" : this.lastName,
      "email" : this.email,
      "phoneNumber" : this.telephone,
      "password" : this.password
    };
    console.log(data);
    let response = await fetch("https://ostpiocamback.enotelco.com/api/register", {
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
            alert('Echec lors de la creation de l\'utilisateur :' + response.status);
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        alert('Utilisateur  déjà  existant ! Changez vos informations');
    }else{
        alert('Votre compte à été crée avec succès !!');
        window.location.href = '/';
    }
  }


}