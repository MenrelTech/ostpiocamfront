import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  templateUrl: './input-form.html',
  selector: 'input-form',
  imports: [NgClass],
})
export class InputFormComponent {
  label = input<string | undefined>();
  name = input<string>();
  type = input<string>("text")
}
