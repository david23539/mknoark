import {Directive, forwardRef, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators,} from '@angular/forms';

@Directive({
  selector: '[numberMin][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => NumberMinDirective),
      multi: true,
    },
  ],
})
export class NumberMinDirective implements Validator {
  private _validator: ValidatorFn;
  @Input() set numberMin(value: string) {
    this._validator = Validators.min(parseInt(value, 10));
  }

  constructor() {}

  validate(control: AbstractControl): { [validator: string]: string } {
    return this._validator(control);
  }
}
