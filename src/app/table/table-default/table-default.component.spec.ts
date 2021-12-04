import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {TableDefaultComponent} from './table-default.component';

describe('TableDefaultComponent', () => {
  let component: TableDefaultComponent;
  let fixture: ComponentFixture<TableDefaultComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TableDefaultComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getCustomColor false', () => {
    component.getColorColumn(1);
  });

  it('getCustomColor true', () => {
    component.customColumn = [
      {
        numColumn: 1,
        colorColumn: 'red',
      },
    ];
    component.getColorColumn(0);
  });

  it('bodyTable set', () => {
    component.bodyTable = [
      {
        valu1: 'value1',
      },
    ];
  });
});
