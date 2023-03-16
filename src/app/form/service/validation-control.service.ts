import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {globalConstant} from '../../utils/constant';
import {StateFormInterface} from '../interface/state-form.interface';
import {StateInFormInterface} from '../interface/state-in-form.interface';

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
      this._state = {
        state: true,
        model: data.model,
      };
    } else if(data.status === 'null') {
      this._state = {
        state: 'null',
        model: data.model,
      };
    } else {
      this._state = {
        state: false,
        model: data.model,
      };
    }
    this.$invalidFormElement.next(this.get());
  }

  private get(): StateFormInterface {
    return this._state;
  }
}
