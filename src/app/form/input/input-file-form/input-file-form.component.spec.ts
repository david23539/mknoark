import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {InputFileFormComponent} from './input-file-form.component';

describe('InputFileFormComponent', () => {
  let component: InputFileFormComponent;
  let fixture: ComponentFixture<InputFileFormComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [InputFileFormComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
