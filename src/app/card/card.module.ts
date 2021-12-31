import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardBottomComponent } from './card-bottom/card-bottom.component';
import { CardDefaultComponent } from './card-default/card-default.component';

@NgModule({
  declarations: [CardDefaultComponent, CardBottomComponent],
  imports: [CommonModule],
  exports: [CardDefaultComponent, CardBottomComponent],
})
export class CardModule {}
