import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalcardtextComponent } from './verticalcardtext.component';

describe('VerticalcardtextComponent', () => {
  let component: VerticalcardtextComponent;
  let fixture: ComponentFixture<VerticalcardtextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerticalcardtextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticalcardtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
