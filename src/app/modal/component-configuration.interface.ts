import { ViewContainerRef } from '@angular/core';
import { ParamsModalInterface } from './modal-service/paramsModal.interface';

export interface ComponentConfigurationInterface {
  paramsComponent?: ParamsModalInterface[];
  vieContainerRef: ViewContainerRef;
}
