import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appEmailValidatorDirective]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirectiveDirective,
      multi: true,
    },
  ],
})
export class EmailValidatorDirectiveDirective {
  validate(control: AbstractControl): { [key: string]: any } | null {
    let emailRegEx =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    let valid = emailRegEx.test(control.value);
    return control.value < 1 || valid ? null : { emailInvalid: true };
  }
}
