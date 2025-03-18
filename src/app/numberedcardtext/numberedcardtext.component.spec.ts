import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberedcardtextComponent } from './numberedcardtext.component';

describe('NumberedcardtextComponent', () => {
  let component: NumberedcardtextComponent;
  let fixture: ComponentFixture<NumberedcardtextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberedcardtextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberedcardtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
