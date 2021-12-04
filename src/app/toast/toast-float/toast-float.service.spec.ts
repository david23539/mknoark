import {TestBed} from '@angular/core/testing';

import {ToastFloatService} from './toast-float.service';

describe('ToastFloatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToastFloatService = TestBed.inject(ToastFloatService);
    expect(service).toBeTruthy();
  });

  it('show Method', () => {
    const service: ToastFloatService = TestBed.inject(ToastFloatService);
    service.showToast('info', 'probando');
    service.showToast('success', 'probando');
    service.showToast('error', 'probando');
    service.showToast('warning', 'probando');
    service.showToast(null, 'probando');
  });
});
