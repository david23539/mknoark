import { Directive, forwardRef, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  Validator,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Directive({
  selector: '[numberMax][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => NumberMaxDirective),
      multi: true,
    },
  ],
})
export class NumberMaxDirective implements Validator {
  private _validator: ValidatorFn;
  @Input() set numberMax(value: string) {
    this._validator = Validators.max(parseInt(value, 10));
  }
  constructor() {}

  validate(control: AbstractControl): { [validator: string]: string } {
    return this._validator(control);
  }
}
