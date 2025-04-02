import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AproposSanteComponent } from './apropos-sante.component';

describe('AproposSanteComponent', () => {
  let component: AproposSanteComponent;
  let fixture: ComponentFixture<AproposSanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AproposSanteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AproposSanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
