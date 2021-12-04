import {Directive, forwardRef, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS} from '@angular/forms';
import {CookiesService} from '../../service/cookies/cookies.service';
import {Literal} from '../../utils/literal';

@Directive({
  selector: '[maxSizeFiles][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MaxSizeFileDirective),
      multi: true,
    },
  ],
})
export class MaxSizeFileDirective {
  @Input() maxSizeFiles: number;
  private readonly validator: (c: AbstractControl) => any;
  private readonly lang: string;

  constructor() {
    this.validator = this._checkMaxSize();
    this.lang = CookiesService.getCookie('lang');
  }

  public validate(control: AbstractControl): { [validator: string]: string } {
    return this.validator(control);
  }

  private _checkMaxSize() {
    return (control: AbstractControl) => {
      if (control.value) {
        const files = control.value;
        let sizeTotal = 0;
        for (const file of files) {
          sizeTotal += file.size;
        }
        if (sizeTotal > this.maxSizeFiles) {
          control.setErrors({
            size: Literal[this.lang].FILES_STRONG_ERROR,
          });
          return {
            size: Literal[this.lang].FILES_STRONG_ERROR,
          };
        } else {
          control.setErrors({
            size: null,
          });
        }
      }
    };
  }
}
