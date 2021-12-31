import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ListModule } from '../../../list/list.module';
import { ValidationFormModule } from '../../validation-form/validation-form.module';
import { SelectFormComponent } from './select-form.component';

describe('SelectFormComponent', () => {
  let component: SelectFormComponent;
  let fixture: ComponentFixture<SelectFormComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SelectFormComponent],
        imports: [ListModule, ValidationFormModule, FormsModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('method selectItem', () => {
    const data = {
      value: 'a',
      text: 'b',
    };

    component.selectItem(data);
  });

  it('method validated', () => {
    component.validated();
  });

  it('method focusInput', () => {
    component.focusInput();
  });

  it('method checkPositionList', () => {
    component.checkPositionList();
  });

  it('method mouseIn', () => {
    component.mouseIn(true);
  });
});
