import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TooltipModule } from '../tooltip/tooltip.module';
import { AvatarComponent } from './avatar/avatar.component';

@NgModule({
  declarations: [AvatarComponent],
  imports: [CommonModule, TooltipModule],
  exports: [AvatarComponent],
})
export class AvatarModule {}
