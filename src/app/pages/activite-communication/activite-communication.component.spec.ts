import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteCommunicationComponent } from './activite-communication.component';

describe('ActiviteCommunicationComponent', () => {
  let component: ActiviteCommunicationComponent;
  let fixture: ComponentFixture<ActiviteCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiviteCommunicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiviteCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
