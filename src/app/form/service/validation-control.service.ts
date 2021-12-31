import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { globalConstant } from '../../utils/constant';
import { StateFormInterface } from '../interface/state-form.interface';
import { StateInFormInterface } from '../interface/state-in-form.interface';

@Injectable({
  providedIn: 'root',
})
export class ValidationControlService {
  private _state: StateFormInterface;
  private $invalidFormElement = new Subject<StateFormInterface>();

  constructor() {}

  public $getInvalidComponent(): Observable<StateFormInterface> {
    return this.$invalidFormElement.asObservable();
  }

  public set(data: StateInFormInterface): void {
    if (globalConstant.FORM_VALIDATION.VALID === data.status) {
      const states: StateFormInterface = {
        state: true,
        model: data.model,
      };
      this._state = states;
    } else {
      const states: StateFormInterface = {
        state: false,
        model: data.model,
      };
      this._state = states;
    }
    this.$invalidFormElement.next(this.get());
  }

  private get(): StateFormInterface {
    return this._state;
  }
}
