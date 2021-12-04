import {TestBed} from '@angular/core/testing';

import {CookieDefaultService} from './cookie-default.service';

describe('CookieDefaultService', () => {
  let service: CookieDefaultService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CookieDefaultService],
    });
    service = TestBed.inject(CookieDefaultService);
  });

  beforeEach(() => {
    let storeMock = {};

    jest.spyOn(localStorage, 'getItem').mockImplementation(key => storeMock[key]);
    jest.spyOn(localStorage, 'setItem').mockImplementation((key, value) => storeMock[key] = value);
    jest.spyOn(localStorage, 'removeItem').mockImplementation(() => {
      storeMock = {};
    });
    localStorage.setItem('lang', 'es');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('show Method', () => {
    const services: CookieDefaultService = TestBed.inject(CookieDefaultService);
    services.showCookie('https://www.google.es');
  });

  it('show Method call double', () => {
    const services: CookieDefaultService = TestBed.inject(CookieDefaultService);
    services.showCookie('https://www.google.es');
    services.showCookie('https://www.google.es');
  });

  it('close Method', () => {
    const services: CookieDefaultService = TestBed.inject(CookieDefaultService);
    services.showCookie('https://www.google.es');
    document.getElementsByClassName('cnt-button-cookie')[0].id =
      'cnt-button-cookie';
    document.getElementById('cnt-button-cookie').click();
  });

  it('redirect Method', () => {
    const services: CookieDefaultService = TestBed.inject(CookieDefaultService);
    services.showCookie('https://www.google.es');
    document.getElementsByClassName('more-info')[0].id = 'more-info';
    document.getElementById('more-info').click();
  });
});
