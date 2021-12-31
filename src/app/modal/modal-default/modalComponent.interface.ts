import { ParamsModalInterface } from '../modal-service/paramsModal.interface';
import { RamdonClassInterface } from '../ramdon-class.interface';

export interface ModalComponentInterface {
  component: RamdonClassInterface<any>;
  params?: ParamsModalInterface[];
}
