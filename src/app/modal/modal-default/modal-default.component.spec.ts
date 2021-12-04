import {ComponentFixture, TestBed} from '@angular/core/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from '../../button/button.module';

import {ModalDefaultComponent} from './modal-default.component';

describe('ModalDefaultComponent', () => {
  let component: ModalDefaultComponent;
  let fixture: ComponentFixture<ModalDefaultComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ModalDefaultComponent],
        imports: [ButtonModule, BrowserAnimationsModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
