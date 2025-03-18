import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilSanteComponent } from './accueil-sante.component';

describe('AccueilSanteComponent', () => {
  let component: AccueilSanteComponent;
  let fixture: ComponentFixture<AccueilSanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccueilSanteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilSanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
