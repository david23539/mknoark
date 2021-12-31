import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonDefaultComponent } from './button-default/button-default.component';
import { ButtonFloatService } from './float-button/button-float.service';
import { ButtonFloatComponent } from './float-button/button-float/button-float.component';

@NgModule({
  declarations: [ButtonDefaultComponent, ButtonFloatComponent],
  imports: [CommonModule],
  providers: [ButtonFloatService],
  exports: [ButtonDefaultComponent, ButtonFloatComponent],
})
export class ButtonModule {}
