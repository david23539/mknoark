import {TestBed} from '@angular/core/testing';

import {ValidationControlService} from './validation-control.service';

describe('ValidationControlService', () => {
  let service: ValidationControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidationControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
