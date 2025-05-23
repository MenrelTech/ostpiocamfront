import { NgIf } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-imgcardtext',
  imports: [NgIf],
  templateUrl: './imgcardtext.component.html',
  styleUrl: './imgcardtext.component.css',
})
export class ImgcardtextComponent {
  role = input.required<string>();
  image = input.required<string>(); // image en entrée
  alt_message = input<string>();
  name = input.required<string>();
  subRole = input<string| undefined>("")
}
