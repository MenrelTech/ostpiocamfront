import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlecardtextComponent } from './titlecardtext.component';

describe('TitlecardtextComponent', () => {
  let component: TitlecardtextComponent;
  let fixture: ComponentFixture<TitlecardtextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitlecardtextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitlecardtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
