import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appUserNameValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: UserNameValidatorDirective,
      multi: true,
    },
  ],
})
export class UserNameValidatorDirective {
  validate(control: AbstractControl): { [key: string]: any } | null {
    let nameRegEx = /^[a-z A-Z][a-z A-Z]+$/i;
    let valid = nameRegEx.test(control.value);
    return control.value < 1 || valid ? null : { userNameInvalid: true };
  }
}
