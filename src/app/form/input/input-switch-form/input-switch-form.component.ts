import {Component, Inject, Input, OnDestroy, OnInit, Optional, ViewChild} from '@angular/core';
import {NG_ASYNC_VALIDATORS, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgModel} from '@angular/forms';
import {ValidationControlService} from '../../service/validation-control.service';
import {ElementBase} from '../../element-base';
import {StateInFormInterface} from '../../interface/state-in-form.interface';

@Component({
  selector: 'nk-input-switch-form',
  templateUrl: './input-switch-form.component.html',
  styleUrls: ['./input-switch-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputSwitchFormComponent,
      multi: true,
    },
  ],
})
export class InputSwitchFormComponent extends ElementBase<any> implements OnInit, OnDestroy {
  @ViewChild(NgModel, { static: true }) model: NgModel;
  @Input() name: string;

  constructor(
    @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
    @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
    private _validationService: ValidationControlService,

  ) {
    super(validators, asyncValidators);


  }

  ngOnInit(): void {
    this.model.statusChanges
      .subscribe(status => {
        const states: StateInFormInterface = {
          status,
          model: this.model,
        };
        this._validationService.set(states);
      });
  }

  ngOnDestroy(): void {
    const states: StateInFormInterface = {
      status: 'null',
      model: this.model,
    };
    this._validationService.set(states);
  }

}
