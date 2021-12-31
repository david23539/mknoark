import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ValidationMessageComponent } from '../../validation-form/validation-message/validation-message.component';
import { CookiesService } from '../../../service/cookies/cookies.service';
import { InputFileFormComponent } from './input-file-form.component';

describe('InputFileFormComponent', () => {
  let component: InputFileFormComponent;
  let fixture: ComponentFixture<InputFileFormComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [InputFileFormComponent, ValidationMessageComponent],
        imports: [FormsModule],
        providers: [CookiesService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFileFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    jest.spyOn(CookiesService, 'getCookie').mockReturnValue('es');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
