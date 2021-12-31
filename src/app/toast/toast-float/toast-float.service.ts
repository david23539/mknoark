import {
  ElementRef,
  Injectable,
  Renderer2,
  RendererFactory2,
} from '@angular/core';
import { globalConstant } from '../../utils/constant';
import { TypeToast } from '../types';

@Injectable({
  providedIn: 'root',
})
export class ToastFloatService {
  private cntToast: ElementRef;
  private toast: ElementRef;
  private render: Renderer2;

  constructor(private renderFactory: RendererFactory2) {
    this.render = this.renderFactory.createRenderer(document.body, null);
  }

  public showToast(type: TypeToast = 'info', text: string): void {
    if (!this.cntToast) {
      this.initToast(type, text);
      this.render.appendChild(document.body, this.cntToast);
    } else {
      this.createNewToast(type, text);
    }

    if (this.toast) {
      this.closeToast(null, this.toast);
    }
  }

  private clearData(): void {
    this.cntToast = null;
    this.toast = null;
  }

  /**
   *
   * @param type tipo de notificacion
   * @param textParam el texto que mostrara la notificaion
   */
  private initToast(type: string, textParam: string): void {
    this.cntToast = this.render.createElement('div');
    this.render.addClass(this.cntToast, 'cnt-toast');
    this.createNewToast(type, textParam);
  }

  /**
   *
   * @param type show type of toast
   * @param textParam text inherit
   * generate toast
   */
  private createNewToast(type: string, textParam: string) {
    this.toast = this.render.createElement('div');
    this.render.addClass(this.toast, 'toast-float');
    this.setIconByTypeToast(type);
    this.render.appendChild(this.toast, this.generateCrossClose());

    // genera un span para mostrar texto
    const parraf = this.render.createElement('span');
    const text = this.render.createText(textParam);
    this.render.appendChild(parraf, text);
    this.render.appendChild(this.toast, parraf);

    // se setea dentro de CNT
    this.render.appendChild(this.cntToast, this.toast);
  }

  /**
   * @description stablish a type of toast and create div icon with icon
   * @param type stablish a class of toast
   */
  private setIconByTypeToast(type: string) {
    const icon = this.render.createElement('div');
    this.render.appendChild(this.toast, icon);

    switch (type) {
      case 'info':
        this.render.addClass(this.toast, globalConstant.COLOR_TYPES.INFO);
        this.render.addClass(icon, 'icon-nk-information');
        this.render.addClass(icon, 'icon');
        break;
      case 'success':
        this.render.addClass(this.toast, globalConstant.COLOR_TYPES.SUCCESS);
        this.render.addClass(icon, 'icon-nk-success');
        this.render.addClass(icon, 'icon');
        break;
      case 'warning':
        this.render.addClass(this.toast, globalConstant.COLOR_TYPES.WARNING);
        this.render.addClass(icon, 'icon-nk-warning');
        this.render.addClass(icon, 'icon');
        break;
      case 'error':
        this.render.addClass(this.toast, globalConstant.COLOR_TYPES.DANGER);
        this.render.addClass(icon, 'icon-nk-danger');
        this.render.addClass(icon, 'icon');
        break;
      default:
        this.render.addClass(this.toast, globalConstant.COLOR_TYPES.INFO);
        this.render.addClass(icon, 'icon-nk-information');
        break;
    }
  }

  /**
   * generate de cross close
   */
  private generateCrossClose(): ElementRef {
    const cross = this.render.createElement('div');
    this.render.addClass(cross, 'icon-nk-cross');
    this.render.listen(cross, globalConstant.EVENTS.CLICK, event =>
      this.closeToast(event)
    );
    return cross;
  }

  /**
   *
   * @param event es el seleccionado con la X
   * @param element es el autocerrado de la notificacion
   * @return void
   *
   */
  private closeToast(event: any, element: ElementRef = null): void {
    if (event) {
      // si nos llega por pulsar la X del toast
      const toast = event.path[1];
      this.render.addClass(toast, 'before-closed');
      this.deleteDom(toast);
    } else {
      // si nos llega por el timeout del show
      this.deleteDom(element);
    }
  }

  private deleteDom(toastToClose: ElementRef): void {
    setTimeout(() => {
      this.render.removeChild(this.cntToast, toastToClose); // esto elimina solo el toast dejando el cnt

      try {
        this.render.selectRootElement('.toast-float'); // este control elimina el CNT
      } catch (e) {
        this.render.removeChild(document.body, this.cntToast);
        this.clearData();
      }
    }, 3000);
  }
}
