import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChild,
} from '@angular/core';
import { CustomColumnInterface } from '../interfaces/custom-column.interface';
import { ItemSelectedInterface } from '../interfaces/item-selected.interface';
import { LegendInterface } from '../interfaces/legend.interface';

@Component({
  selector: 'nk-table-edit',
  templateUrl: './table-edit.component.html',
  styleUrls: ['./table-edit.component.scss'],
})
export class TableEditComponent implements OnInit {
  @ViewChild('colorColumn') colorColumn: QueryList<any>;
  @Input() headTitles: string[];
  @Input() customColumn: CustomColumnInterface[];
  @Input() legend: LegendInterface[];
  @Output() selectedItem: EventEmitter<ItemSelectedInterface>;
  public propertyContent: string[];
  public order: boolean;
  public headerIndex: number;
  private _bodyTable: any[];
  @Input() set bodyTable(value: any[]) {
    if (value) {
      if (value.length > 0) {
        this.propertyContent = Object.keys(value[0]);
      }
      this._bodyTable = value;
    }
  }
  get bodyTable(): any[] {
    return this._bodyTable;
  }

  constructor(private _cdr: ChangeDetectorRef) {
    this.order = false;
    this.headerIndex = -1;
    this.selectedItem = new EventEmitter<ItemSelectedInterface>();
  }
  ngOnInit(): void {
    setInterval(() => {
      this._cdr.markForCheck();
    }, 250);
  }

  getColorColumn(index: number): string {
    if (
      this.customColumn &&
      this.customColumn.length >= index &&
      this.customColumn[index] &&
      this.customColumn[index].numColumn === index + 1
    ) {
      return this.customColumn[index].colorColumn;
    } else {
      return '';
    }
  }

  public orderElement(index: number): void {
    this.order = !this.order;
    const keys = Object.keys(this.bodyTable[0]);
    if (this.order) {
      this._bodyTable.sort((a, b) => {
        if (a[keys[index]][0] < b[keys[index]][0]) {
          return -1;
        }
        if (a[keys[index]][0] > b[keys[index]][0]) {
          return 1;
        }
        return 0;
      });
    } else {
      this._bodyTable.sort((a, b) => {
        if (a[keys[index]][0] < b[keys[index]][0]) {
          return 1;
        }
        if (a[keys[index]][0] > b[keys[index]][0]) {
          return -1;
        }
        return 0;
      });
    }
  }

  public selectItem(item: any): void {
    this.selectedItem.emit({
      item,
      deleted: false,
    });
  }

  public removeItem(item: any) {
    this.selectedItem.emit({
      item,
      deleted: true,
    });
  }
}
