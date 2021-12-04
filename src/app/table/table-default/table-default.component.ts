import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChild,
} from '@angular/core';
import {CustomColumnInterface} from '../interfaces/custom-column.interface';
import {LegendInterface} from '../interfaces/legend.interface';

@Component({
  selector: 'nk-table-default',
  templateUrl: './table-default.component.html',
  styleUrls: ['./table-default.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableDefaultComponent implements OnInit {
  @ViewChild('colorColumn') colorColumn: QueryList<any>;
  @Input() headTitles: string[];
  @Input() customColumn: CustomColumnInterface[];
  @Input() legend: LegendInterface[];
  public propertyContent: string[];
  private _bodyTable: any[];
  @Input() set bodyTable(value: any[]) {
    if (value !== undefined && value.length !== 0) {
      this.propertyContent = Object.keys(value[0]);
      this._bodyTable = value;
    }
  }

  get bodyTable(): any[] {
    return this._bodyTable;
  }

  constructor(private _cdr: ChangeDetectorRef) {}

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
}
