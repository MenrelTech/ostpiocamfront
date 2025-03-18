import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgcardtextComponent } from './imgcardtext.component';

describe('ImgcardtextComponent', () => {
  let component: ImgcardtextComponent;
  let fixture: ComponentFixture<ImgcardtextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgcardtextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImgcardtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
