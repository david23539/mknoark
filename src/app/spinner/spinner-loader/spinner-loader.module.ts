import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SpinnerLoaderService} from './spinner-loader.service';
import {SpinnerLoaderComponent} from './spinner-loader/spinner-loader.component';

@NgModule({
  declarations: [SpinnerLoaderComponent],
  imports: [CommonModule],
  providers: [SpinnerLoaderService],
  exports: [SpinnerLoaderComponent],
})
export class SpinnerLoaderModule {}
