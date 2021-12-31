import { TestBed } from '@angular/core/testing';

import { SpinnerLoaderService } from './spinner-loader.service';

describe('SpinnerLoaderService', () => {
  let service: SpinnerLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
