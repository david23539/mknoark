import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {BrowserIncompatibleComponent} from './browser-incompatible.component';

describe('BrowserIncompatibleComponent', () => {
  let component: BrowserIncompatibleComponent;
  let fixture: ComponentFixture<BrowserIncompatibleComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BrowserIncompatibleComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserIncompatibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
