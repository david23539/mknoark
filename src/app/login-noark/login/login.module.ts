import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormModule} from '../../form/form.module';
import {ValidatorsModule} from '../../validators/validators.module';
import {LoginComponent} from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, ValidatorsModule, FormModule],
  exports: [LoginComponent],
})
export class LoginModule {}
