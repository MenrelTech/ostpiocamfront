import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiviteEnvironnementComponent } from './activite-environnement.component';

describe('ActiviteEnvironnementComponent', () => {
  let component: ActiviteEnvironnementComponent;
  let fixture: ComponentFixture<ActiviteEnvironnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiviteEnvironnementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiviteEnvironnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
