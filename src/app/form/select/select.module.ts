import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ListModule} from '../../list/list.module';
import {ValidationFormModule} from '../validation-form/validation-form.module';
import {SelectDefaultComponent} from './select-default/select-default.component';
import {SelectFormComponent} from './select-form/select-form.component';
import {SelectLangComponent} from './select-lang/select-lang.component';

@NgModule({
  declarations: [
    SelectDefaultComponent,
    SelectFormComponent,
    SelectLangComponent,
  ],
  imports: [CommonModule, FormsModule, ListModule, ValidationFormModule],
  exports: [SelectDefaultComponent, SelectFormComponent, SelectLangComponent],
})
export class SelectModule {}
