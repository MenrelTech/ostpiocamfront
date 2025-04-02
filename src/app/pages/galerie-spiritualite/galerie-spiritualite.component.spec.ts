import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerieSpiritualiteComponent } from './galerie-spiritualite.component';

describe('GalerieSpiritualiteComponent', () => {
  let component: GalerieSpiritualiteComponent;
  let fixture: ComponentFixture<GalerieSpiritualiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalerieSpiritualiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalerieSpiritualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
