import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TableDefaultComponent } from './table-default/table-default.component';
import { TableEditComponent } from './table-edit/table-edit.component';

@NgModule({
  declarations: [TableDefaultComponent, TableEditComponent],
  imports: [CommonModule],
  exports: [TableDefaultComponent, TableEditComponent],
})
export class TableModule {}
