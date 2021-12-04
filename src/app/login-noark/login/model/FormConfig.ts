import {PassConfInterface} from '../interfaces/PassConf.interface';
import {SessionConfigInterface} from '../interfaces/SessionConfig.interface';
import {UserConfigInterface} from '../interfaces/UserConfig.interface';
import {PassConfig} from './PassConfig';
import {SessionConfig} from './SessionConfig';
import {UserConfig} from './UserConfig';

export class FormConfig {
  private _USER: UserConfigInterface = new UserConfig();
  private _PASS: PassConfInterface = new PassConfig();
  private _SESSION: SessionConfigInterface = new SessionConfig();

  get USER(): UserConfigInterface {
    return this._USER;
  }

  set USER(value: UserConfigInterface) {
    this._USER = value;
  }

  get PASS(): PassConfInterface {
    return this._PASS;
  }

  set PASS(value: PassConfInterface) {
    this._PASS = value;
  }

  get SESSION(): SessionConfigInterface {
    return this._SESSION;
  }

  set SESSION(value: SessionConfigInterface) {
    this._SESSION = value;
  }
}
