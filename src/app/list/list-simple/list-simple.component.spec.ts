import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ListSimpleComponent } from './list-simple.component';

describe('ListSimpleComponent', () => {
  let component: ListSimpleComponent;
  let fixture: ComponentFixture<ListSimpleComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ListSimpleComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
