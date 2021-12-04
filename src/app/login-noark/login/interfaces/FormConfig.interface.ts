import {PassConfInterface} from './PassConf.interface';
import {SessionConfigInterface} from './SessionConfig.interface';
import {UserConfigInterface} from './UserConfig.interface';

export interface FormConfigInterface {
  USER: UserConfigInterface;
  SESSION: SessionConfigInterface;
  PASS: PassConfInterface;
}
