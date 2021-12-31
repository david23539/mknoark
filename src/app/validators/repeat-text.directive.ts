import { Attribute, Directive, forwardRef, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { CookiesService } from '../service/cookies/cookies.service';
import { Literal } from '../utils/literal';

@Directive({
  selector: '[validateEqual][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => RepeatTextDirective),
      multi: true,
    },
  ],
})
export class RepeatTextDirective {
  @Input() validateEqual: any;
  private validator: (C: AbstractControl) => any;
  constructor(@Attribute('reverse') public reverse: string) {
    this.validator = this.validPasswords();
  }
  validPasswords() {
    return (control: AbstractControl) => {
      if (!this.isReverse) {
        const value = control.value;
        if (value && value !== this.validateEqual) {
          control.setErrors({
            equal: Literal[CookiesService.getCookie('lang')].NO_MATCH_PASSWORD,
          });
          return {
            equal: Literal[CookiesService.getCookie('lang')].NO_MATCH_PASSWORD,
          };
        } else if (control.hasError('equal')) {
          control.setErrors({ equal: null });
          control.updateValueAndValidity();
        }
      }
    };
  }
  private get isReverse(): boolean {
    if (!this.reverse) {
      return false;
    } else {
      return true;
    }
  }
  validate(control: AbstractControl): { [validator: string]: string } {
    return this.validator(control);
  }
}
