import { Component } from "@angular/core";
import { InputFormComponent } from "../../components/input-form/input-form.component";
import { NgFor } from "@angular/common";
import { FormsModule } from '@angular/forms';
import e from "express";


@Component({
  standalone:true,
  templateUrl:"./become-partner.component.html",
  imports: [InputFormComponent,NgFor,FormsModule]
})
export class BecomePartnerComponent{

  partnersTypes = ["Financier","Logistique","Médical","Médias","Autre"]

  organizationName= "";
  contactPerson = "";
  position = "";
  phone = "";
  email = "";
  partnershipType = this.partnersTypes[0];
  proposalMessage = "";
  wantToBeContacted = false;
  presentationFile = "";

  

  submitApplication (event: MouseEvent) : void{
    event.preventDefault();
    let data = new FormData();
    data.append("organizationName", this.organizationName);
    data.append("contactPerson", this.contactPerson);
    data.append("position", this.position);
    data.append("phone", this.phone);
    data.append("email", this.email);
    data.append("partnershipType", this.partnershipType);
    data.append("proposalMessage", this.proposalMessage);
    data.append("wantToBeContacted", this.wantToBeContacted+'');
    data.append("presentationFile", this.presentationFile);
    
    console.log(data);
    (async () =>{
      let response =  await fetch("https://ostpiocamback.enotelco.com/api/partner_applications", {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        body: data,
      });
      console.log(response);
      if (!response.ok) {
          if (response.status !== 400) {
              alert('Echec lors de la soumission du partenariat :' + response.status);
              throw new Error(`HTTP error! status: ${response.status}`);
          }
      }else{
          alert('Votre demande de partenariat a été envoyé avec succès !!');
      }
    })();
  }


}