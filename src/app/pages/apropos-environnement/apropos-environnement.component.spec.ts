import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AproposEnvironnementComponent } from './apropos-environnement.component';

describe('AproposEnvironnementComponent', () => {
  let component: AproposEnvironnementComponent;
  let fixture: ComponentFixture<AproposEnvironnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AproposEnvironnementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AproposEnvironnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
