import {AbstractControl, AsyncValidatorFn, Validator, ValidatorFn, Validators,} from '@angular/forms';
import {of} from 'rxjs';
import {CookiesService} from '../service/cookies/cookies.service';
import {Literal} from '../utils/literal';

export interface ValidationResult {
  [validator: string]: string | boolean | any;
}

export type AsyncValidatorArray = Array<Validator | AsyncValidatorFn>;

export type ValidatorArray = Array<Validator | ValidatorFn>;

const normalizeValidator = (
  validator: Validator | ValidatorFn
): ValidatorFn | AsyncValidatorFn => {
  const func = (validator as Validator).validate.bind(validator);
  if (typeof func === 'function') {
    return (c: AbstractControl) => func(c);
  } else {
    return validator as ValidatorFn | AsyncValidatorFn;
  }
};
export const composeValidators = (
  validators: ValidatorArray
): AsyncValidatorFn | ValidatorFn => {
  if (validators == null || validators.length === 0) {
    return null;
  }
  return Validators.compose(validators.map(normalizeValidator));
};

export const validate = (
  validators: ValidatorArray,
  asyncValidators: AsyncValidatorArray
) => (control: AbstractControl) => {
    const synchronousValid = () => composeValidators(validators)(control);

    if (asyncValidators) {
      const asyncValidator = composeValidators(asyncValidators);

      return asyncValidator(control).map(v => {
        const secondary = synchronousValid();
        if (secondary || v) {
          // compose async and sync validator results
          return Object.assign({}, secondary, v);
        }
      });
    }

    if (validators) {
      return of(synchronousValid());
    }

    return of(null);
  };

export const message = (validator: ValidationResult, key: string): string => {
  const minlength = validator.minlength;
  const maxlength = validator.maxlength;
  const minNumber = validator.min;
  const maxNumber = validator.max;
  const language = CookiesService.getCookie('lang');

  // const language = ;
  switch (key) {
    case 'required':
      return Literal[language].PLEASE_ENTER_VALUE;
    case 'pattern':
      return Literal[language].VALUE_DO_NOT_MATCH;
    case 'minlength':
      return Literal[language].VALUE_MIN + minlength.requiredLength;
    case 'maxlength':
      return Literal[language].VALUE_MAX + maxlength.requiredLength;
    case 'email':
      return Literal[language].VALUE_EMAIL;
    case 'min':
      return Literal[language].MIN_NUMBER + minNumber.min;
    case 'max':
      return Literal[language].MAX_NUMBER + maxNumber.max;
  }

  switch (typeof validator[key]) {
    case 'string':
      return validator[key] as string;
    default:
      return `Validation failed: ${key}`;
  }
};
