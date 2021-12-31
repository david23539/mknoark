import { Component, forwardRef, Input, ViewChild } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NgModel,
} from '@angular/forms';
import { ValueAccessorBase } from '../../value-accessor-base';

@Component({
  selector: 'nk-checkbox-default',
  templateUrl: './checkbox-default.component.html',
  styleUrls: ['./checkbox-default.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxDefaultComponent),
      multi: true,
    },
  ],
})
export class CheckboxDefaultComponent extends ValueAccessorBase<string>
  implements ControlValueAccessor {
  @ViewChild(NgModel) model: NgModel;
  @Input() label: string;

  constructor() {
    super();
  }
}
