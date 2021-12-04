import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import {NG_VALUE_ACCESSOR, NgModel} from '@angular/forms';
import {globalConstant} from '../../../utils/constant';
import {ValueAccessorBase} from '../../value-accessor-base';
import {SelectInterface} from '../select-interface';

@Component({
  selector: 'nk-select-default',
  templateUrl: './select-default.component.html',
  styleUrls: ['./select-default.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectDefaultComponent,
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectDefaultComponent extends ValueAccessorBase<string>
  implements DoCheck {
  @ViewChild(NgModel) model: NgModel;
  @ViewChild('textLabel') textLabel: ElementRef;
  @ViewChild('inputText') inputText: ElementRef;
  @ViewChild('select') select: ElementRef;
  @ViewChild('listOptions') list: ElementRef;
  @Input() data: SelectInterface[];
  @Input() label: string;
  public valueSelected: SelectInterface;
  public mouseEnter = false;
  public reverseList: boolean;
  public showList: boolean;
  public dinamicId = (Math.random() * 1000).toFixed(3).toString();
  public temporalValue: any;

  constructor(private _cdr: ChangeDetectorRef) {
    super();
    this.showList = false;
    this.reverseList = false;
  }

  ngDoCheck(): void {
    if (this.valueSelected && this.valueSelected.text) {
      this.inputText.nativeElement.value = this.valueSelected.text;
    }

    if (this.value && !this.temporalValue) {
      this.temporalValue = this.value;
      this.validateData();
    }
    if (this.temporalValue !== this.value) {
      this.temporalValue = this.value;
      this.validateData();
    }
    this._cdr.detectChanges();
  }

  selectItem(valueSelected: SelectInterface): void {
    this.value = valueSelected.value;
    this.valueSelected = valueSelected;
    this.mouseEnter = false;
    this.validated();
  }

  validated() {
    if (this.value) {
      this.textLabel.nativeElement.className =
        globalConstant.FORMS_STYLES.ACTIVE;
    } else {
      this.textLabel.nativeElement.className =
        globalConstant.GENERAL.EMPTY_STRING;
    }
    if (!this.mouseEnter) {
      this.showList = false;
    }
  }

  focusInput() {
    this.textLabel.nativeElement.className = globalConstant.FORMS_STYLES.ACTIVE;
    this.inputText.nativeElement.focus();
  }

  checkPositionList() {
    this.showList = true;
    this.textLabel.nativeElement.className = globalConstant.FORMS_STYLES.ACTIVE;
    const positionSelect = this.select.nativeElement.offsetTop;
    const mediumScreen = window.innerHeight / 2;
    this.reverseList = positionSelect >= mediumScreen;
  }

  mouseIn(e) {
    this.mouseEnter = e;
  }

  private validateData() {
    const result = this.data.find(x => x.value === this.value);
    if (result) {
      this.selectItem(result);
    } else {
      this.value = undefined;
      this.valueSelected = null;
    }
  }
}
