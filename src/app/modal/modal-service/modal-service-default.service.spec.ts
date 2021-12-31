import { TestBed } from '@angular/core/testing';

import { ModalServiceDefaultService } from './modal-service-default.service';

describe('ModalServiceDefaultService', () => {
  let service: ModalServiceDefaultService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalServiceDefaultService],
    });
    service = TestBed.inject(ModalServiceDefaultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
