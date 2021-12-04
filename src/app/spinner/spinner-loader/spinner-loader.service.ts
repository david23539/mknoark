import {
  ApplicationRef,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
  Injector,
} from '@angular/core';
import {timer} from 'rxjs';
import {SpinnerLoaderComponent} from './spinner-loader/spinner-loader.component';

@Injectable({
  providedIn: 'root',
})
export class SpinnerLoaderService {
  private _cntSpinner: ComponentFactory<SpinnerLoaderComponent>;
  private _cntSpinnerRef: ComponentRef<SpinnerLoaderComponent>;
  constructor(
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _appRef: ApplicationRef,
    private _injector: Injector
  ) {}
  private static _getRootNode(refComponent: ComponentRef<any>): HTMLElement {
    return (refComponent.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
  }

  public showSpinner<T>(urlLogo: string, text: string): void {
    if (!this._cntSpinner) {
      this._cntSpinner = this._componentFactoryResolver.resolveComponentFactory(
        SpinnerLoaderComponent
      );
      this._cntSpinnerRef = this._cntSpinner.create(this._injector);
      this._appRef.attachView(this._cntSpinnerRef.hostView);
      this._appRef.components[0].location.nativeElement.appendChild(
        SpinnerLoaderService._getRootNode(this._cntSpinnerRef)
      );
      if (urlLogo) {
        this._cntSpinnerRef.instance.urlLogo = urlLogo;
      }
      this._cntSpinnerRef.instance.textLoading = text;
    } else {
      if (urlLogo) {
        this._cntSpinnerRef.instance.urlLogo = urlLogo;
      }
      this._cntSpinnerRef.instance.textLoading = text;
    }
  }

  public closeSpinner(): void {
    if (this._cntSpinnerRef && this._appRef) {
      this._cntSpinnerRef.instance.close = true;
      timer(300).subscribe(() => {
        this._appRef.detachView(this._cntSpinnerRef.hostView);
        this._cntSpinner = null;
        this._cntSpinnerRef = null;
      });
    }
  }
}
