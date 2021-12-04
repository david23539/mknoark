import {Injectable} from '@angular/core';
import {globalConstant} from '../../utils/constant';

@Injectable()
export class CheckIosService {
  constructor() {}

  public checkIos(): boolean {
    return (
      navigator.appVersion.indexOf(globalConstant.PREFIX_DEVICE_DETECT.IOS) > -1
    );
  }
}
