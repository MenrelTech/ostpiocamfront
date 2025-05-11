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
   infoUser = signal<User>({
      id: 0,
      firstName: "Noel",
      lastName: "Simo",
      phoneNumber: "644553322",
      createdAt: "10/10/2023",
      comments: [],
      email: "Noel@gmail.com",
   });
   ngOnInit(){
      async function getInfo() {
        let response = await fetch("https://ostpiocamback.enotelco.com/api/me", {
          method: 'GET',
          mode: 'cors',
          cache: 'no-cache',
          headers: {
              'Content-Type': 'application/json',
              'authorization': `Bearer ${window.sessionStorage.getItem('token')}`,
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
         this.infoUser.set({
            id: data.id,
            firstName: data.first_name,
            lastName: data.last_name,
            phoneNumber: data.phone_number,
            createdAt: data.createdAt,
            comments: data.comments,
            email: data.email,
         });
         console.log(data);
        }).catch((error) => {
        console.error('Error fetching User information:', error);
      });
    }
}