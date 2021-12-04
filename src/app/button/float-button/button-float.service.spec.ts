import {TestBed} from '@angular/core/testing';

import {ButtonFloatService} from './button-float.service';

describe('ButtonFloatService', () => {
  let service: ButtonFloatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButtonFloatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
