import { TestBed } from '@angular/core/testing';

import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { ButtonFloatService } from './button-float.service';
import { ButtonFloatComponent } from './button-float/button-float.component';

describe('ButtonFloatService', () => {
  let service: ButtonFloatService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonFloatComponent],
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [ButtonFloatComponent],
      },
    });
    service = TestBed.inject(ButtonFloatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('method showButtonFloat', () => {
    (service as any)._cntFloatButton = true;
    service.showButtonFloat('');
  });

  it('method closeFloatButton', () => {
    (service as any)._cntFloatButtonRef = {
      instance: {
        clickedEvent: {
          unsubscribe: () => ({}),
        },
      },
    };
    (service as any)._appRef = {
      detachView: () => ({}),
    };
    service.closeFloatButton();
  });

  it('method get', () => {
    (service as any).get();
  });

  it('method setButtonData', () => {
    (service as any)._cntFloatButtonRef = {
      instance: {
        clickedEvent: {
          unsubscribe: () => ({}),
        },
      },
      create: () => ({}),
    };
    (service as any)._appRef = {
      detachView: () => ({}),
      attachView: () => ({}),
      components: [
        {
          location: {
            nativeElement: {
              appendChild: () => ({}),
            },
          },
        },
      ],
    };
    (service as any).setButtonData('', true);
  });

  it('method _getRootNode', () => {
    const data = (service as any)._getRootNode;
  });
});
