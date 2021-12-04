import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ButtonFloatComponent} from './button-float.component';

describe('ButtonFloatComponent', () => {
  let component: ButtonFloatComponent;
  let fixture: ComponentFixture<ButtonFloatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonFloatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonFloatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
