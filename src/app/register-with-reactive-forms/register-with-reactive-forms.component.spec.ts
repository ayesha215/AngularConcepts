import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterWithReactiveFormsComponent } from './register-with-reactive-forms.component';

describe('RegisterWithReactiveFormsComponent', () => {
  let component: RegisterWithReactiveFormsComponent;
  let fixture: ComponentFixture<RegisterWithReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterWithReactiveFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterWithReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
