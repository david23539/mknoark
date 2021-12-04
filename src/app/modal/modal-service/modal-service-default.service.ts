import {ComponentFactory, ComponentFactoryResolver, ComponentRef, Injectable,} from '@angular/core';
import {Observable, Subject, Subscription} from 'rxjs';
import {globalConstant} from '../../utils/constant';
import {ModalConfigurationInterface} from '../modal-configuration.interface';
import {ModalDefaultComponent} from '../modal-default/modal-default.component';
import {ModalComponentInterface} from '../modal-default/modalComponent.interface';
import {ModalInterfaceIN} from '../modalInterface';
import {RamdonClassInterface} from '../ramdon-class.interface';
import {StatusModalInterface} from './status-modal.interface';

@Injectable()
export class ModalServiceDefaultService {
  public _cntModalRef: ComponentRef<ModalDefaultComponent>;
  private readonly _paramsForModal: ModalComponentInterface;
  private _cntModal: ComponentFactory<ModalDefaultComponent>;
  private _subscription: Subscription;
  private _state: StatusModalInterface;
  private _$closeModal = new Subject<StatusModalInterface>();
  constructor(private _componentFactoryResolver: ComponentFactoryResolver) {
    this._paramsForModal = {
      component: null,
      params: null,
    };
  }

  /**
   * @description This method construct and initialize the Modal
   * @param componentClass. Is reference a Class of component show inside modal
   * @param modalInterfaceIN. This param set configuration modal, set viewContentRef
   * and params ComponentInside
   * @return void
   */
  public showModal<T>(
    componentClass: RamdonClassInterface<T>,
    modalInterfaceIN: ModalInterfaceIN
  ): Observable<StatusModalInterface> {
    this._setScrollBody(true);
    if (this._cntModal) {
      this.set({
        close: true,
        submit: false,
        open: false,
      });
      this._closedModal();
    }
    this._cntModal = this._componentFactoryResolver.resolveComponentFactory(
      ModalDefaultComponent
    );
    this._cntModalRef = modalInterfaceIN.component.vieContainerRef.createComponent(
      this._cntModal
    );
    this._cntModalRef = this._initModalComponent(modalInterfaceIN.modal);

    this._subscription = ((
      this._cntModalRef.instance as ModalDefaultComponent
    )).action.subscribe(resp => {
      if (resp.close) {
        this.set({ close: true, submit: false, open: false });
      } else if (resp.submit) {
        this.set({
          submit: true,
          close: false,
          open: false,
        });
      }
      this._closedModal();
      return this._$closeModal.asObservable();
    });
    this._paramsForModal.component = componentClass;
    this._paramsForModal.params = modalInterfaceIN?.component?.paramsComponent;
    ((
      this._cntModalRef.instance as ModalDefaultComponent
    )).customComponent = this._paramsForModal;
    this.set({
      open: true,
      submit: false,
      close: false,
    });
    return this._$closeModal.asObservable();
  }

  /**
   * this method closes the modal
   */
  public closeModal(): void {
    this._closedModal();
  }

  private get(): StatusModalInterface {
    return {
      ...this._state,
    };
  }

  private set(value: StatusModalInterface): void {
    this._state = { ...value };
    this._$closeModal.next(this.get());
  }

  /**
   * @description This method destroy the cnt of modal
   * @private
   * @return void
   */
  private _closedModal(): void {
    this._setScrollBody(false);
    this._cntModalRef.destroy();
    this._cntModal = null;
    this._subscription.unsubscribe();
  }

  /**
   * @description This method set params to component Modal
   * @param modalInterfaceIN configuration modal
   * @private
   * @return ComponentRef<ModalDefaultComponent>
   */
  private _initModalComponent(
    modalInterfaceIN: ModalConfigurationInterface
  ): ComponentRef<ModalDefaultComponent> {
    const keys = Object.keys(modalInterfaceIN);
    keys.forEach((item: string) => {
      (this._cntModalRef.instance as ModalDefaultComponent)[item] =
        modalInterfaceIN[item];
    });
    (this._cntModalRef.instance as ModalDefaultComponent).refreshView();
    return this._cntModalRef;
  }

  /**
   * @description Set scroll to body
   * @param value boolean
   * @private
   * @return void
   */
  private _setScrollBody(value: boolean): void {
    if (value) {
      document.body.style.overflow = globalConstant.GENERAL_STYLES.HIDDEN;
    } else {
      document.body.style.overflow = globalConstant.GENERAL_STYLES.AUTO;
    }
  }
}
