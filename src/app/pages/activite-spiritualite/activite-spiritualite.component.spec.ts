import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteSpiritualiteComponent } from './activite-spiritualite.component';

describe('ActiviteSpiritualiteComponent', () => {
  let component: ActiviteSpiritualiteComponent;
  let fixture: ComponentFixture<ActiviteSpiritualiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiviteSpiritualiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiviteSpiritualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
