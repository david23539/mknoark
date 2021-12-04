import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ListSimpleComponent} from './list-simple/list-simple.component';
import {ListComponent} from './list/list.component';
import {MenuSliderAdaptativeComponent} from './menu-slider-adaptative/menu-slider-adaptative.component';

@NgModule({
  declarations: [
    ListComponent,
    ListSimpleComponent,
    MenuSliderAdaptativeComponent,
  ],
  imports: [CommonModule],
  exports: [ListComponent, ListSimpleComponent, MenuSliderAdaptativeComponent],
})
export class ListModule {}
