import { Directive, forwardRef, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[setError][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SetErrorDirective),
      multi: true,
    },
  ],
})
export class SetErrorDirective {
  private validator: (c: AbstractControl) => any;
  constructor() {
    this.validator = this._setErrors();
  }
  @Input() setError(value: string) {
    this._setErrors();
  }

  public validate(control: AbstractControl): { [validator: string]: string } {
    return this.validator(control);
  }

  private _setErrors() {
    return (control: AbstractControl) => {
      if (this.setError) {
        control.setErrors({
          msg: this.setError,
        });
        return {
          msg: this.setError,
        };
      } else if (control.hasError('msg')) {
        control.setErrors({
          msg: null,
        });
        control.updateValueAndValidity();
      }
    };
  }
}
