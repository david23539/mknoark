import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BreadcrumbComponent } from './breadcrumb.component';

describe('BreadcrumbComponent', () => {
  let component: BreadcrumbComponent;
  let fixture: ComponentFixture<BreadcrumbComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BreadcrumbComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('method setSelectedActive', () => {
    component.setSelectedActive(2);
  });

  it('method setActive', () => {
    component.active = 2;
  });

  it('method stepActive', () => {
    const data = component.stepActive;
  });

  it('method setSelectedActive', () => {
    component.blockSteps = true;
    (component as any)._active = 2;
    component.setSelectedActive(2);
  });
});
