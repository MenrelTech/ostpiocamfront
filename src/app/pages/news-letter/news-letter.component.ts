import { Component } from "@angular/core";
import { InputFormComponent } from "../../components/input-form/input-form.component";
import { FormsModule } from '@angular/forms';

@Component({
standalone:true,
  templateUrl:"./news-letter.component.html",
  imports:[InputFormComponent,FormsModule],
})
export class NewLetterComponent{

  subscriberEmail = '';

  subscribe() {
    if (this.subscriberEmail) {
      // Appel service d'inscription
      console.log('Subscribed:', this.subscriberEmail);
      let data = {
        "email" : this.subscriberEmail
      };
      (async () =>{
        let response =  await fetch("https://ostpiocamback.enotelco.com/api/newletter_subscriptions", {
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
          alert('Echec lors de la subscription à la newsletter :' + response.status);
          throw new Error(`HTTP error! status: ${response.status}`);
        }else{
            alert('Subscription à la newsletter reussie !!');
        }
      })().then((result)=>{
        this.subscriberEmail = '';
      });
    }
  }

}