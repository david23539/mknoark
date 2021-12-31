import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CheckboxDefaultComponent } from './checkbox-default.component';

describe('CheckboxDefaultComponent', () => {
  let component: CheckboxDefaultComponent;
  let fixture: ComponentFixture<CheckboxDefaultComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CheckboxDefaultComponent],
        imports: [FormsModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxDefaultComponent);
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
    component.label = null;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('span').textContent).toEqual('');
  });

  it('input with value', () => {
    fixture.nativeElement.querySelector('input').click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('input').checked).toEqual(true);
  });

  it('input without value', () => {
    expect(fixture.nativeElement.querySelector('input').checked).toEqual(false);
  });
});
