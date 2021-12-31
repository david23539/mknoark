import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NavBarDefaultComponent } from './nav-bar-default.component';

describe('NavBarDefaultComponent', () => {
  let component: NavBarDefaultComponent;
  let fixture: ComponentFixture<NavBarDefaultComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NavBarDefaultComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('method controlStateMenu', () => {
    component.controlStateMenu(true);
  });

  it('input data', () => {
    component.stateMenu = true;
  });
});
