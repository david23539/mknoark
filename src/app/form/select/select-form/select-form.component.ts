import {
  ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  Inject,
  Input,
  Optional,
  ViewChild,
} from '@angular/core';
import {
  NG_ASYNC_VALIDATORS,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgModel,
} from '@angular/forms';
import { globalConstant } from '../../../utils/constant';
import { ElementBase } from '../../element-base';
import { SelectInterface } from '../select-interface';

@Component({
  selector: 'nk-select-form',
  templateUrl: './select-form.component.html',
  styleUrls: ['./select-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectFormComponent,
      multi: true,
    },
  ],
})
export class SelectFormComponent extends ElementBase<string>
  implements DoCheck {
  @ViewChild(NgModel) model: NgModel;
  @ViewChild('textLabel') textLabel: ElementRef;
  @ViewChild('inputTextForm') inputText: ElementRef;
  @ViewChild('select') select: ElementRef;
  @Input() data: SelectInterface[];
  public labelText: string;
  @Input() set label(value: string) {
    this.labelText = value;
    this._cdr.detectChanges();
  }
  public valueSelected: SelectInterface;
  public reverseList: boolean;
  public mouseEnter = false;
  public showList: boolean;
  public dinamicId = (Math.random() * 1000).toFixed(3).toString();
  public temporalValue: any;

  constructor(
    @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
    @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
    private _cdr: ChangeDetectorRef
  ) {
    super(validators, asyncValidators);
    this.showList = false;
    this.labelText = '';
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
      this._cdr.detectChanges();
    }
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
