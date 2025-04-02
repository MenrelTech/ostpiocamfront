import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerieSanteComponent } from './galerie-sante.component';

describe('GalerieSanteComponent', () => {
  let component: GalerieSanteComponent;
  let fixture: ComponentFixture<GalerieSanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalerieSanteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalerieSanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
