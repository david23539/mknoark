import {TestBed} from '@angular/core/testing';

import {SpinnerLineService} from './spinner-line.service';

describe('SpinnerLineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpinnerLineService = TestBed.inject(SpinnerLineService);
    expect(service).toBeTruthy();
  });

  it('showSpinner method', () => {
    const service: SpinnerLineService = TestBed.inject(SpinnerLineService);
    service.showSpinner();
  });

  it('showError method', () => {
    const service: SpinnerLineService = TestBed.inject(SpinnerLineService);
    service.showSpinner();
    spyOn(window, 'setTimeout');
    service.showError();
    expect(setTimeout).toHaveBeenCalled();
  });

  it('showSuccess method', () => {
    const service: SpinnerLineService = TestBed.inject(SpinnerLineService);
    service.showSpinner();
    service.showSuccess();
  });
});
