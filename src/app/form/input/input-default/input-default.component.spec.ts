import { ElementRef } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { InputDefaultComponent } from './input-default.component';

describe('InputDefaultComponent', () => {
  let component: InputDefaultComponent;
  let fixture: ComponentFixture<InputDefaultComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [InputDefaultComponent],
        imports: [FormsModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('methods Valids true', () => {
    component.model.control.setValue('probando');
    component.model.model = 'a';
    component.textLabel = new ElementRef(component);
    component.validated();
  });

  it('method valid false', () => {
    component.textLabel = new ElementRef(component);
    component.validated();
  });

  it('method DoCheck', () => {
    component.textLabel = new ElementRef(component);
    component.model.model = 'test';
    component.ngDoCheck();
  });
});
