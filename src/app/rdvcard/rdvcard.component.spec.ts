import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvcardComponent } from './rdvcard.component';

describe('RdvcardComponent', () => {
  let component: RdvcardComponent;
  let fixture: ComponentFixture<RdvcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RdvcardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdvcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
