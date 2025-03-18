import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardaddressComponent } from './cardaddress.component';

describe('CardaddressComponent', () => {
  let component: CardaddressComponent;
  let fixture: ComponentFixture<CardaddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardaddressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
