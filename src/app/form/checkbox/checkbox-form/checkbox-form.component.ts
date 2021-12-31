import { Component, Inject, Input, Optional, ViewChild } from '@angular/core';
import {
  NG_ASYNC_VALIDATORS,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgModel,
} from '@angular/forms';
import { ElementBase } from '../../element-base';

@Component({
  selector: 'nk-checkbox-form',
  templateUrl: './checkbox-form.component.html',
  styleUrls: ['./checkbox-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CheckboxFormComponent,
      multi: true,
    },
  ],
})
export class CheckboxFormComponent extends ElementBase<any> {
  @ViewChild(NgModel, { static: true }) model: NgModel;
  @Input() label: string;

  constructor(
    @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
    @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>
  ) {
    super(validators, asyncValidators);
  }
}
