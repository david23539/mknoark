import {ObjectFormInterface} from '../interfaces/ObjectForm.interface';
import {ObjectForm} from './ObjectForm';

export class DataForm {
  private _data: ObjectFormInterface = new ObjectForm();

  get data(): ObjectFormInterface {
    return this._data;
  }

  set data(value: ObjectFormInterface) {
    this._data = value;
  }
}
