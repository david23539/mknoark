import { Directive, forwardRef, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { CookiesService } from '../../service/cookies/cookies.service';
import { Literal } from '../../utils/literal';

@Directive({
  selector: '[maxNumberFiles][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MaxNumberFilesDirective),
      multi: true,
    },
  ],
})
export class MaxNumberFilesDirective {
  @Input() maxNumberFiles: number;
  private readonly validator: (c: AbstractControl) => any;
  private readonly lang: string;

  constructor() {
    this.validator = this._checkNumberFilesUpload();
    this.lang = CookiesService.getCookie('lang');
  }

  public validate(control: AbstractControl): { [validator: string]: string } {
    return this.validator(control);
  }

  private _checkNumberFilesUpload() {
    return (control: AbstractControl) => {
      if (control.value && control.value.length > this.maxNumberFiles) {
        control.setErrors({
          numberFiles:
            Literal[this.lang].UPLOAD_MAX_FILES +
            this.maxNumberFiles +
            Literal[this.lang].FILES_LITERAL,
        });
        return {
          numberFiles:
            Literal[this.lang].UPLOAD_MAX_FILES +
            this.maxNumberFiles +
            Literal[this.lang].FILES_LITERAL,
        };
      }
    };
  }
}
