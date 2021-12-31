import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ValidationFormModule } from '../../validation-form/validation-form.module';
import { CheckboxFormComponent } from './checkbox-form.component';

describe('CheckboxFormComponent', () => {
  let component: CheckboxFormComponent;
  let fixture: ComponentFixture<CheckboxFormComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CheckboxFormComponent],
        imports: [FormsModule, ValidationFormModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('label with value', () => {
    component.label = 'test';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('span').textContent).toEqual(
      'test'
    );
  });

  it('label without value', () => {
    expect(fixture.nativeElement.querySelector('span').textContent).toEqual('');
  });

  it('validation component no exist', () => {
    fixture.nativeElement.querySelector('input').click();
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector('nk-validation-message')
    ).toBeFalsy();
  });

  it('validation without failure', () => {
    fixture.nativeElement.querySelector('input').click();
    fixture.detectChanges();
    expect(component.model.valid).toBeTruthy();
  });

  it('validation with failure', () => {
    fixture.nativeElement.querySelector('input').click();
    fixture.nativeElement.querySelector('input').click();
    fixture.detectChanges();
    expect(component.model.valid).toBeFalsy();
  });
});
