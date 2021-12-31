import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ListInterface } from '../interfaces/list-interface';
import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  const mockData: ListInterface[] = [{ icon: 'aa', text: 'prueba' }];
  const mockCollapse = true;
  const mockAnimated = true;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ListComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    component.data = mockData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('test ngAfterView', () => {
    component.collapse = mockCollapse;
    component.animated = mockAnimated;
    component.ngAfterViewInit();
  });
});
