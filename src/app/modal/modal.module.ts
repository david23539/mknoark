import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from '../button/button.module';
import {ModalDefaultComponent} from './modal-default/modal-default.component';

@NgModule({
  declarations: [ModalDefaultComponent],
  imports: [CommonModule, BrowserAnimationsModule, ButtonModule],
  exports: [ModalDefaultComponent],
})
export class ModalModule {}
