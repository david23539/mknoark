import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ImageModule} from './image/image.module';
import {LoginModule} from './login/login.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, LoginModule, ImageModule],
  exports: [LoginModule, ImageModule],
})
export class LoginNoarkModule {}
