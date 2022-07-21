import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPlainComponent } from './form-plain.component';

describe('FormPlainComponent', () => {
  let component: FormPlainComponent;
  let fixture: ComponentFixture<FormPlainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPlainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPlainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
