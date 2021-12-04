import {Directive, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS} from '@angular/forms';
import {CookiesService} from '../service/cookies/cookies.service';
import {Literal} from '../utils/literal';

@Directive({
  selector: '[validateTrue][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => CheckedDirective),
      multi: true,
    },
  ],
})
export class CheckedDirective {
  private validator: (c: AbstractControl) => any;
  private lang: string;
  constructor() {
    this.validator = this.validatorTrue();
  }

  public validate(control: AbstractControl): { [validator: string]: string } {
    return this.validator(control);
  }

  private validatorTrue() {
    return (control: AbstractControl) => {
      const value = control.value;
      this.lang = CookiesService.getCookie('lang');
      if (!value) {
        return {
          validator: Literal[this.lang].VALUE_CHECKED,
        };
      }
    };
  }
}
