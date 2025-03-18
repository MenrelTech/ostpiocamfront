import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselsecondComponent } from './carouselsecond.component';

describe('CarouselsecondComponent', () => {
  let component: CarouselsecondComponent;
  let fixture: ComponentFixture<CarouselsecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselsecondComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselsecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
