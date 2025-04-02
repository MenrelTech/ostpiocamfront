import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AproposSpiritualiteComponent } from './apropos-spiritualite.component';

describe('AproposSpiritualiteComponent', () => {
  let component: AproposSpiritualiteComponent;
  let fixture: ComponentFixture<AproposSpiritualiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AproposSpiritualiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AproposSpiritualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
