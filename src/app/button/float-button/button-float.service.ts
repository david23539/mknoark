import {
  ApplicationRef,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
  Injector,
  OnDestroy
} from '@angular/core';
import {Observable, of, Subject, timer} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {ButtonFloatComponent} from './button-float/button-float.component';


@Injectable({
  providedIn: 'root'
})
export class ButtonFloatService implements OnDestroy {
  private _cntFloatButton: ComponentFactory<ButtonFloatComponent>;
  private _cntFloatButtonRef: ComponentRef<ButtonFloatComponent>;
  private _state: boolean;
  private _$clickedButton = new Subject<any>();
  private _unsubscribe: Subject<any> = new Subject<any>();
  constructor(
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _appRef: ApplicationRef,
    private _injector: Injector
  ) { }
  private static _getRootNode(refComponent: ComponentRef<any>): HTMLElement {
    return (refComponent.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
  }

  /**
   * @description event that occurs when the service is removed
   */
  ngOnDestroy(): void {
    this._unsubscribe.next();
    this._unsubscribe.unsubscribe();
  }


  /**
   * @description Show floating button
   * @param icon
   * @param bgColor
   */
  public showButtonFloat<T>(icon: string, bgColor?: string): Observable<boolean> {
    let isExist = false;
    if (this._cntFloatButton) {
      isExist = true;
      this.closeFloatButton();
    }
    return this.setButtonData(icon, isExist, bgColor);
  }

  /**
   * @description close the floating button
   */
  public closeFloatButton(): void {
    if (this._cntFloatButtonRef && this._appRef) {
      this._cntFloatButtonRef.instance.clickedEvent.unsubscribe();
      this._appRef.detachView(this._cntFloatButtonRef.hostView);
      this._cntFloatButton = null;
      this._cntFloatButtonRef = null;
    }
  }

  private get(): boolean {
    return this._state;
  }

  private set(value: boolean) {
    this._state = value;
    this._$clickedButton.next(this.get());
  }

  /**
   * @description create the button
   * @param icon
   * @param isExist
   * @param bgColor
   * @private
   */
  private setButtonData(icon: string, isExist: boolean, bgColor?: string): Observable<boolean> {
    this._cntFloatButton = this._componentFactoryResolver.resolveComponentFactory(
      ButtonFloatComponent
    );
    timer(0).subscribe(() => {
      this._cntFloatButtonRef = this._cntFloatButton.create(this._injector);
      this._appRef.attachView(this._cntFloatButtonRef.hostView);
      if (!this._appRef.components[0]) {
        throw new Error('Button service launched before rendering starts');
      }
      this._appRef.components[0].location.nativeElement.appendChild(
        ButtonFloatService._getRootNode(this._cntFloatButtonRef)
      );
      this._cntFloatButtonRef.instance.icon = icon;
      this._cntFloatButtonRef.instance.bgColor(bgColor);
      this._cntFloatButtonRef.instance.clickedEvent
        .pipe(
          takeUntil(this._unsubscribe)
        )
        .subscribe((res) => {
          this.set(true);
        });
    });
    return !isExist ? this._$clickedButton.asObservable() : of();
  }
}
