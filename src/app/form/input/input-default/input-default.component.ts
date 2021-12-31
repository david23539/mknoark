import {
  Component,
  DoCheck,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, NgModel } from '@angular/forms';
import { globalConstant } from '../../../utils/constant';
import { ValueAccessorBase } from '../../value-accessor-base';

@Component({
  selector: 'nk-input-default',
  templateUrl: './input-default.component.html',
  styleUrls: ['./input-default.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputDefaultComponent,
      multi: true,
    },
  ],
})
export class InputDefaultComponent extends ValueAccessorBase<any>
  implements DoCheck {
  @Input() public label: string;
  @Input() public type: string;
  @Input() public readonly: boolean;
  @ViewChild(NgModel, { static: true }) model: NgModel;
  @ViewChild('textLabel') textLabel: ElementRef;
  @ViewChild('inputText') inputText: ElementRef;
  public idRandom = (Math.random() * 1000).toFixed(3);

  constructor() {
    super();
  }

  validated() {
    if (this.model.model) {
      this.textLabel.nativeElement.className =
        globalConstant.FORMS_STYLES.ACTIVE;
    } else {
      this.textLabel.nativeElement.className =
        globalConstant.GENERAL.EMPTY_STRING;
    }
  }

  focusInput() {
    this.textLabel.nativeElement.className = globalConstant.FORMS_STYLES.ACTIVE;
    this.inputText.nativeElement.focus();
  }

  ngDoCheck(): void {
    if (this.model.model) {
      this.textLabel.nativeElement.className =
        globalConstant.FORMS_STYLES.ACTIVE;
    }
  }
}
