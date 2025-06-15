import { AsyncPipe, NgFor } from "@angular/common";
import { Component } from "@angular/core";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { Observable } from "rxjs";

@Component({
  standalone:true,
  templateUrl:"./perspectives.component.html", 
  imports:[NgFor, TranslateModule, AsyncPipe]
})
export class PerspectivesComponent{

  longPerspectives$!:Observable<string[]>

  constructor(private readonly translate:TranslateService){
    this.longPerspectives$ = this.translate.stream("field-apostolate.health.prospect-page.data");

  }
    trackByPath(_: number, link: string) {
    return link;
  }


}