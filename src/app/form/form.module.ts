import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '../button/button.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { FormDefaultComponent } from './form-default/form-default.component';
import { InputModule } from './input/input.module';
import { SelectModule } from './select/select.module';

@NgModule({
  declarations: [FormDefaultComponent],
  imports: [CommonModule, InputModule, FormsModule, SelectModule, ButtonModule],
  exports: [
    FormDefaultComponent,
    InputModule,
    FormsModule,
    SelectModule,
    ButtonModule,
    CheckboxModule,
  ],
})
export class FormModule {}
