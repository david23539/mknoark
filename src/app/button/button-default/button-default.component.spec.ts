import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { globalConstant } from '../../utils/constant';

import { ButtonDefaultComponent } from './button-default.component';

describe('ButtonDefaultComponent', () => {
  let component: ButtonDefaultComponent;
  let fixture: ComponentFixture<ButtonDefaultComponent>;
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ButtonDefaultComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngaAfterView', () => {
    component.float = true;
    component.ngAfterViewInit();
    expect(component.button.nativeElement.classList).toContain(
      globalConstant.COLOR_TYPES.FLOAT
    );
    component.typeButton = 'success';
    component.ngAfterViewInit();
    expect(component.button.nativeElement.classList).toContain(
      globalConstant.COLOR_TYPES.SUCCESS
    );
    component.typeButton = 'danger';
    component.ngAfterViewInit();
    expect(component.button.nativeElement.classList).toContain(
      globalConstant.COLOR_TYPES.DANGER
    );
    component.typeButton = 'warning';
    component.ngAfterViewInit();
    expect(component.button.nativeElement.classList).toContain(
      globalConstant.COLOR_TYPES.WARNING
    );
    component.typeButton = 'default';
    component.ngAfterViewInit();
    expect(component.button.nativeElement.classList).toContain(
      globalConstant.COLOR_TYPES.DEFAULT
    );
    component.typeButton = 'disabled';
    component.ngAfterViewInit();
    expect(component.button.nativeElement.classList).toContain(
      globalConstant.COLOR_TYPES.DISABLED
    );
  });

  it('set isLoading true props', () => {
    component.isLoading = true;
    expect(component.isLoading).toBe(true);
  });

  it('set isLoading false props', () => {
    component.isLoading = false;
    expect(component.isLoading).toBe(false);
  });

  it('expect typeButton', () => {
    component.typeButton = 'info';
    expect(component.typeButton).toEqual('info');
  });

  it('expect typeButton Null', () => {
    expect(component.typeButton).toBeUndefined();
  });
});
