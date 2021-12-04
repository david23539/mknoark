import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {NavSliderInterface} from '../interfaces/nav-slider-interface';
import {NavSliderComponent} from './nav-slider.component';

describe('NavSliderComponent', () => {
  let component: NavSliderComponent;
  let fixture: ComponentFixture<NavSliderComponent>;
  const dataMock: NavSliderInterface = {
    name: '',
    logo: 'logo',
    notification: '',
    avatar: '',
  };

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NavSliderComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSliderComponent);

    component = fixture.componentInstance;
    component.data = dataMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    const element = fixture.debugElement.nativeElement;
    const header = element.querySelector('span').textContent;
    expect(header).toBe('logo');
    expect(component).toBeTruthy();
  });
});
