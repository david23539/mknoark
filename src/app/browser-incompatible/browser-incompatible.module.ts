import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BannerModule } from '../banner/banner.module';
import { BrowserIncompatibleComponent } from './browser-incompatible/browser-incompatible.component';

@NgModule({
  declarations: [BrowserIncompatibleComponent],
  imports: [CommonModule, BannerModule],
  exports: [BrowserIncompatibleComponent],
})
export class BrowserIncompatibleModule {}
