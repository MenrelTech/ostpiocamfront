
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-card',
  standalone: true,
  imports: [],
  template: `
    <div class="h-full w-full">
      <div class="relative h-max bg-[#FCE589] min-h-[250px] p-4 lg:w-full rounded-[15px]">
        <div class="w-full top-2 mx-auto content-center justify-center items-center flex">
          <p class="w-[92%] h-[65px] font-(family-name:--arimabold) rounded-[15px] bg-[#664500] text-[#FFF3CD] justify-center text-center font-bold text-[25px] content-center flex items-center">
            {{ title }}
          </p>
        </div>
        
        <div class="mt-4">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `
})
export class SectionCardComponent {
  @Input() title: string = '';
}


