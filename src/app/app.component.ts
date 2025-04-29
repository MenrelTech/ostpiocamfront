import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent,FooterComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ostpiocamfront';
  hidden = true;
  revealmenu(){
    
    if(!this.hidden){
      this.hidden = true;
    }else{
      this.hidden = false;
    }
  }
  hidemenu(){
    this.hidden = true;
  }

  subscribe(e:any){
    console.log(e);
  }

}
