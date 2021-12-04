import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NavBarDefaultComponent} from './nav-bar-default/nav-bar-default.component';
import {NavSliderComponent} from './nav-slider/nav-slider.component';

@NgModule({
  declarations: [NavSliderComponent, NavBarDefaultComponent],
  imports: [CommonModule],
  exports: [NavSliderComponent, NavBarDefaultComponent],
})
export class NavBarModule {}
