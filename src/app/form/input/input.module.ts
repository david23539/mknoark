import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ValidationFormModule} from '../validation-form/validation-form.module';
import {InputDefaultComponent} from './input-default/input-default.component';
import {InputFileFormComponent} from './input-file-form/input-file-form.component';
import {InputFormComponent} from './input-form/input-form.component';

@NgModule({
  declarations: [
    InputFormComponent,
    InputDefaultComponent,
    InputFileFormComponent,
  ],
  imports: [CommonModule, FormsModule, ValidationFormModule],
  exports: [InputFormComponent, InputDefaultComponent, InputFileFormComponent],
})
export class InputModule {}
