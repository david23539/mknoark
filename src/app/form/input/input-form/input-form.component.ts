import {Component, ElementRef, Inject, Input, OnInit, Optional, ViewChild,} from '@angular/core';
import {NG_ASYNC_VALIDATORS, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgModel,} from '@angular/forms';
import {filter} from 'rxjs/operators';
import {CookiesService} from '../../../service/cookies/cookies.service';
import {globalConstant} from '../../../utils/constant';
import {ElementBase} from '../../element-base';
import {StateInFormInterface} from '../../interface/state-in-form.interface';
import {ValidationControlService} from '../../service/validation-control.service';

let identifier = 0;
@Component({
  selector: 'nk-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputFormComponent,
      multi: true,
    },
    CookiesService,
  ],
})
export class InputFormComponent extends ElementBase<string> implements OnInit {
  @ViewChild('textLabel') textLabel: ElementRef;
  @Input() public label: string;
  @Input() public type: string;
  @Input() public name: string;
  @Input() public autoComplete: string;
  @Input() public min: number;
  @Input() public max: number;
  @Input() public readonly: boolean;
  @ViewChild(NgModel, { static: true }) model: NgModel;
  public identifier = `form-text-${identifier++}`;
  private _statusValidation: string;

  constructor(
    @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
    @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
    private _validationService: ValidationControlService,
    private _cookieService: CookiesService
  ) {
    super(validators, asyncValidators);
  }

  ngOnInit() {
    if (this.model.model) {
      this.textLabel.nativeElement.className =
        globalConstant.FORMS_STYLES.ACTIVE;
    }

    this.model.statusChanges
      .pipe(filter(status => this._statusValidation !== status))
      .subscribe(status => {
        this._statusValidation = status;
        const states: StateInFormInterface = {
          status,
          model: this.model,
        };
        this._validationService.set(states);
      });
  }
}
