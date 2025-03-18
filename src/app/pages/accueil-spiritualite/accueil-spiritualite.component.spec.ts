import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilSpiritualiteComponent } from './accueil-spiritualite.component';

describe('AccueilSpiritualiteComponent', () => {
  let component: AccueilSpiritualiteComponent;
  let fixture: ComponentFixture<AccueilSpiritualiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccueilSpiritualiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilSpiritualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
