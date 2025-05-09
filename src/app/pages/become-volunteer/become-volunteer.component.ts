import { Component } from '@angular/core';
import { InputFormComponent } from '../../components/input-form/input-form.component';
import { NgClass, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  templateUrl: './become-volunteer.component.html',
  imports: [InputFormComponent,NgFor,NgClass,FormsModule],
})
export class BecomeVolunteerComponent {


  domains = ["Spirtualité", 'Santé','Communication','Environnement','Autres']

  disponibilities = ["Ponctuelle", "Regulière","En week end", "A discuter"]


  nom_complet = "";
  email = "";
  city = "";
  age = 0;
  domaine = this.domains[0];
  disponibilite = this.disponibilities[0];
  message = "";
  phone = "";
  agreeToBeContacted = false;

  becomeVolunteer(event: MouseEvent) : void {
    event.preventDefault();
    /*let a = {
      "fullName": this.nom_complet,
      "email": this.email,
      "phone": this.phone,
      "city": this.city,
      "age": this.age,
      "desiredDomain": this.domaine,
      "availability": this.disponibilite,
      "motivation": this.message,
      "agreeToBeContacted": this.agreeToBeContacted
    };*/
    let data = new FormData();
    data.append("fullName", this.nom_complet);
    data.append("email", this.email);
    data.append("phone", this.phone);
    data.append("city", this.city);
    data.append("age", this.age+'');
    data.append("desiredDomain", this.domaine);
    data.append("availability", this.disponibilite);
    data.append("motivation", this.message);
    data.append("agreeToBeContacted", this.agreeToBeContacted+'');
    console.log(data);
    (async () =>{
      let response =  await fetch("https://ostpiocamback.enotelco.com/api/volunteer_applications", {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        body: data,
      });
    
      console.log(response);
      if (!response.ok) {
        alert('Echec lors l\'application :');
        throw new Error(`HTTP error! status: ${response.status}`);
      }else{
          alert('Votre demande a été envoyée avec succès !!');
      }
    }
    )().then((result)=>{
      this.nom_complet = "";
      this.email = "";
      this.phone = "";
      this.city = "";
      this.age = 0;
      this.domaine = this.domains[0];
      this.disponibilite = this.disponibilities[0];
      this.message = "";
    }
    );
  }

}
