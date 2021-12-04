import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {CardDefaultComponent} from './card-default.component';

describe('CardDefaultComponent', () => {
  let component: CardDefaultComponent;
  let fixture: ComponentFixture<CardDefaultComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CardDefaultComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('set Scroll', () => {
    component.scroll = true;
    const containClass = 'card-scroll';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.card').classList).toContain(
      containClass
    );
  });

  it('not Scroll', () => {
    expect(fixture.nativeElement.querySelector('.card').className).toEqual(
      'card'
    );
  });

  it('set spaceBottom 1', () => {
    component.spaceBottom = 1;
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector('.card').style.marginBottom
    ).toEqual('1rem');
  });

  it('set spaceBottom 0', () => {
    component.spaceBottom = null;
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector('.card').style.marginBottom
    ).toEqual('0px');
  });

  it('set max-height 1', () => {
    component.height = 1;
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector('.card').style.maxHeight
    ).toEqual('calc(100vh - 1rem)');
  });

  it('set max-height 0', () => {
    component.height = null;
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector('.card').style.maxHeight
    ).toEqual('auto');
  });
});
