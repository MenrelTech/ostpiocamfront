import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilEnvironnementComponent } from './accueil-environnement.component';

describe('AccueilEnvironnementComponent', () => {
  let component: AccueilEnvironnementComponent;
  let fixture: ComponentFixture<AccueilEnvironnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccueilEnvironnementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilEnvironnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
