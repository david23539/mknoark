import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {ListModule} from '../../../list/list.module';
import {ValidationFormModule} from '../../validation-form/validation-form.module';
import {SelectDefaultComponent} from './select-default.component';

describe('SelectDefaultComponent', () => {
  let component: SelectDefaultComponent;
  let fixture: ComponentFixture<SelectDefaultComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SelectDefaultComponent],
        imports: [ListModule, ValidationFormModule, FormsModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
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

  it('method doCheck', () => {
    const data = {
      value: 'a',
      text: 'b',
    };
    const listData = [];
    listData.push(data);
    component.valueSelected = data;
    component.value = 'z';
    component.data = listData;
    component.ngDoCheck();
  });
});
