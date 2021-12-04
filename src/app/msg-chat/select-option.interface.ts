import {TypeActionType} from './types/type-action.type';

export interface SelectOptionInterface {
  text: string;
  index: number;
  author: string;
  time: string;
  action: TypeActionType;
}
