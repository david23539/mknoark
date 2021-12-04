import {NgModel} from '@angular/forms';

import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

import {AsyncValidatorArray, message, validate, ValidationResult, ValidatorArray,} from './validate';

import {ValueAccessorBase} from './value-accessor-base';

export abstract class ElementBase<T> extends ValueAccessorBase<T> {
  protected abstract model: NgModel;

  constructor(
    private validators: ValidatorArray,
    private asyncValidators: AsyncValidatorArray
  ) {
    super();
  }

  validate(): Observable<ValidationResult> {
    if (
      this.model &&
      (this.model.control.touched ||
        this.model.control.dirty ||
        this.model.value)
    ) {
      return validate(
        this.validators,
        this.asyncValidators
      )(this.model.control);
    } else {
      return of(null);
    }
  }

  get invalid(): Observable<boolean> {
    return this.validate().pipe(
      map(v => Object.keys(v || {}).length > 0)
    );
  }

  get failures(): Observable<Array<string>> {
    return this.validate().pipe(
      map(v => Object.keys(v).map(k => message(v, k))));
  }
}
