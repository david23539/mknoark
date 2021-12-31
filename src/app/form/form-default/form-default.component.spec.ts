import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '../../button/button.module';
import { FormDefaultComponent } from './form-default.component';

describe('FormDefaultComponent', () => {
  let component: FormDefaultComponent;
  let fixture: ComponentFixture<FormDefaultComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [FormDefaultComponent],
        imports: [FormsModule, ButtonModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('method in test AfterInit', () => {
    component.ngAfterViewInit();
  });

  it('method sendData and Form dirty', () => {
    const data = {};
    component.sendData(data);
    expect(component.form.dirty).toBeFalsy();
  });

  it('method sendData and Form pristine', () => {
    expect(component.form.pristine).toBeTruthy();
  });
});
