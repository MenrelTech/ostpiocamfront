import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilCommunicationComponent } from './accueil-communication.component';

describe('AccueilCommunicationComponent', () => {
  let component: AccueilCommunicationComponent;
  let fixture: ComponentFixture<AccueilCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccueilCommunicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
