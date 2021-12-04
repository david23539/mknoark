import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormModule} from '../../../form/form.module';
import {ValidatorsModule} from '../../../validators/validators.module';
import {DataForm} from '../model/DataForm';
import {LoginComponent} from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LoginComponent],
        imports: [ValidatorsModule, FormModule],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('set Input data', () => {
    component.lang = 'es';
  });

  it('login method', () => {
    const data: DataForm = new DataForm();
    component.login(data);
  });
});
