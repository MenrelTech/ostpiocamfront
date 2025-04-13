import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteSanteComponent } from './activite-sante.component';

describe('ActiviteSanteComponent', () => {
  let component: ActiviteSanteComponent;
  let fixture: ComponentFixture<ActiviteSanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiviteSanteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiviteSanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
