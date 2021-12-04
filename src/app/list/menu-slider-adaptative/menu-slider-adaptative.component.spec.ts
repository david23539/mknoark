import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {MenuSliderAdaptativeComponent} from './menu-slider-adaptative.component';

describe('MenuSliderAdaptativeComponent', () => {
  let component: MenuSliderAdaptativeComponent;
  let fixture: ComponentFixture<MenuSliderAdaptativeComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [MenuSliderAdaptativeComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSliderAdaptativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
