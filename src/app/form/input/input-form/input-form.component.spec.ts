import {ElementRef} from '@angular/core';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {FormsModule, RequiredValidator} from '@angular/forms';
import {composeValidators, ValidatorArray} from '../../validate';
import {ValidationMessageComponent} from '../../validation-form/validation-message/validation-message.component';
import {InputFormComponent} from './input-form.component';

describe('InputFormComponent', () => {
  let component: InputFormComponent;
  let fixture: ComponentFixture<InputFormComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [InputFormComponent, ValidationMessageComponent],
        imports: [FormsModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('method OnInit', () => {
    component.model.model = 'a';
    component.textLabel = new ElementRef(component);
    component.ngOnInit();
  });

  it('method abstract validate', () => {
    component.model.control.markAsTouched();
    component.validate();
  });

  it('method abstract writeValue', () => {
    component.writeValue('test');
  });

  it('method abstract registerOnChange', () => {
    component.registerOnChange(({}) => {});
  });

  it('method abstract registerOnTouched', () => {
    component.registerOnTouched(() => {});
  });

  it('method abstract touch', () => {
    component.touch();
  });
  it('variable composeValidators test coverage false', () => {
    const validators: ValidatorArray = [];
    composeValidators(validators);
  });

  it('variable message test coverage', () => {
    const validator = new RequiredValidator();
    validator.registerOnValidatorChange(() => {});
    validator['email'] = 'test';
    validator['minlength'] = {
      requiredLength: 0,
    };
    validator['maxlength'] = {
      requiredLength: 10,
    };
    const message = (v, k) => 'true';
    message(validator, 'required');
    message(validator, 'pattern');
    message(validator, 'minlength');
    message(validator, 'maxlength');
    message(validator, 'email');
    message(validator, 'test');
    validator['test'] = 'test';
    message(validator, 'test');
  });
});
