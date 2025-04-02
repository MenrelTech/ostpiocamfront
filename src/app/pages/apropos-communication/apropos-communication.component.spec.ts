import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AproposCommunicationComponent } from './apropos-communication.component';

describe('AproposCommunicationComponent', () => {
  let component: AproposCommunicationComponent;
  let fixture: ComponentFixture<AproposCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AproposCommunicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AproposCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
