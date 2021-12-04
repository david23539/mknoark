import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {BadgeDirective} from './badge/badge.directive';
import {TooltipDirective} from './tooltip/tooltip.directive';

@NgModule({
  declarations: [TooltipDirective, BadgeDirective],
  imports: [CommonModule],
  exports: [TooltipDirective, BadgeDirective],
})
export class TooltipModule {}
