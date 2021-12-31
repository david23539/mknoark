import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  QueryList,
  ViewChild,
} from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Subject } from 'rxjs';
import { delay, filter, takeUntil } from 'rxjs/operators';
import { globalConstant } from '../../utils/constant';
import { StateFormInterface } from '../interface/state-form.interface';
import { ValidationControlService } from '../service/validation-control.service';

@Component({
  selector: 'nk-form-default',
  templateUrl: './form-default.component.html',
  styleUrls: ['./form-default.component.scss'],
})
export class FormDefaultComponent implements AfterViewInit, OnDestroy {
  @ViewChild(NgForm) public form: NgForm;
  @Output() send = new EventEmitter();
  @Input() textButton: string;
  @Input() isLoading: boolean;
  @Input() pristine: boolean;
  public typeButtom: string;
  private _models: QueryList<NgModel>;
  private _destroy$: Subject<StateFormInterface>;
  @ContentChildren(NgModel, { descendants: true }) public set models(
    value: QueryList<NgModel>
  ) {
    this._models = value;
    if (this.form) {
      const ngContentModel = value.toArray();
      ngContentModel.forEach(model => {
        this.form.addControl(model);
      });
    }
  }

  constructor(
    private _validationService: ValidationControlService,
    private _cdr: ChangeDetectorRef
  ) {
    this.typeButtom = globalConstant.COLOR_TYPES.DISABLED;
    this._destroy$ = new Subject<StateFormInterface>();
  }

  ngAfterViewInit(): void {
    this._cdr.detectChanges();

    const ngContentModel = this._models.toArray();
    ngContentModel.forEach(model => {
      this.form.addControl(model);
    });
    this.updateModelValidation();
  }

  updateModelValidation(): void {
    this._validationService
      .$getInvalidComponent()
      .pipe(
        filter(res => res !== undefined),
        delay(0),
        takeUntil(this._destroy$)
      )
      .subscribe(validation => {
        this.form.form.get(validation.model.name)?.updateValueAndValidity();
        this._cdr.detectChanges();
      });
  }

  sendData(data: any): void {
    if (this.form.valid) {
      this.send.emit({
        data,
      });
    }
  }

  ngOnDestroy(): void {
    this._destroy$.unsubscribe();
  }
}
