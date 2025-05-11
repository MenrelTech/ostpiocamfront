import { Component, signal } from "@angular/core";
import { ImgcardtextComponent } from "../../imgcardtext/imgcardtext.component";

interface User {
   id: number;
   firstName: string;
   lastName: string;
   phoneNumber: string;
   createdAt: string;
   comments: Object[];
   email: string;
 }

@Component({
   templateUrl:"./info-user.component.html", 
   imports:[ImgcardtextComponent]
})
export class InfoUserComponent{
   /*infoUser = signal<User>({
      id: 0,
      firstName: "",
      lastName: "",
      phoneNumber: "",
      createdAt: "",
      comments: [],
      email: "",
   });
   ngOnInit(){
      async function getInfo() {
        let response = await fetch("https://ostpiocamback.enotelco.com/api/me", {
          method: 'GET',
          mode: 'cors',
          cache: 'no-cache',
          headers: {
              'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {   
          throw new Error(`HTTP error! status: ${response.status}`);          
        }else{
          let data = await response.json();
          
          return data;
        }
      }
      getInfo().then((data) => {
         this.infoUser.set(data);
        }).catch((error) => {
        console.error('Error fetching User information:', error);
      });
    }*/
}