import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-register-with-reactive-forms',
  templateUrl: './register-with-reactive-forms.component.html',
  styleUrls: ['./register-with-reactive-forms.component.css'],
})
export class RegisterWithReactiveFormsComponent implements OnInit {
  registerform: FormGroup | any;
  user: any;
  userinfo: any;
  constructor(
    private formBuilder: FormBuilder,
    private appservice: AppService
  ) {}

  ngOnInit(): void {
    this.registerform = this.formBuilder.group({
      name: ['', [Validators.required, this.userNameValidator]],

      email: ['', [Validators.required, this.emailValidator]],
      password: ['', Validators.required],
    });
  }
  onRegister(formData: any) {
    this.appservice.Register(formData).subscribe((data) => {
      this.userinfo = data;
      this.user = this.userinfo;
      console.log(this.user);
    });
  }

  userNameValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    let nameRegEx = /^[a-z A-Z][a-z A-Z]+$/i;
    let valid = nameRegEx.test(control.value);
    return control.value < 1 || valid ? null : { userNameInvalid: true };
  }
  emailValidator(control: AbstractControl): { [key: string]: boolean } | null {
    let emailRegEx =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    let valid = emailRegEx.test(control.value);
    return control.value < 1 || valid ? null : { emailInvalid: true };
  }
}
