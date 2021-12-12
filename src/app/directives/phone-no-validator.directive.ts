import { Directive } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appPhoneNoValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PhoneNoValidatorDirective,
      multi: true,
    },
  ],
})
export class PhoneNoValidatorDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: any } | null {
    // let value = control.value;
    // if (value === null || value === '') return null;
    // if (!String(value).match(/^\d{11}$/)) {
    //   return { phoneNumberInvalid: true };
    // }
    // return null;

    let nameRegEx = /^\d{11}$/;
    let valid = nameRegEx.test(control.value);
    return control.value < 1 || valid ? null : { phoneNumberInvalid: true };
  }
}
