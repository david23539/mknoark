import {
  ElementRef,
  Injectable,
  Renderer2,
  RendererFactory2,
} from '@angular/core';
import { globalConstant } from '../../utils/constant';

@Injectable({
  providedIn: 'root',
})
export class SpinnerLineService {
  private render: Renderer2;
  private cntSpinner: ElementRef;
  private spinner: ElementRef;

  constructor(private renderFactory: RendererFactory2) {
    this.render = this.renderFactory.createRenderer(document.body, null);
  }

  public showSpinner(time: number = 3000) {
    this.initSpinner();
    this.render.appendChild(document.body, this.cntSpinner);
    setTimeout(() => {
      this.render.addClass(this.spinner, globalConstant.COLOR_TYPES.WARNING);
    }, time);
  }

  public showError() {
    if (this.spinner) {
      this.render.removeClass(this.spinner, globalConstant.COLOR_TYPES.WARNING);
      this.render.addClass(this.spinner, globalConstant.COLOR_TYPES.ERROR);
      setTimeout(() => {
        if (this.cntSpinner) {
          this.render.removeChild(document.body, this.cntSpinner);
        }
        this.initStatus();
      }, 5000);
    }
  }

  public showSuccess() {
    if (this.spinner && this.cntSpinner) {
      this.render.removeClass(this.spinner, globalConstant.COLOR_TYPES.WARNING);
      this.render.addClass(this.spinner, globalConstant.COLOR_TYPES.SUCCESS);
      setTimeout(() => {
        if (this.cntSpinner) {
          this.render.removeChild(document.body, this.cntSpinner);
        }
        this.initStatus();
      }, 5000);
    }
  }

  private initSpinner() {
    if (!this.cntSpinner) {
      this.cntSpinner = this.render.createElement('div');
      this.render.addClass(this.cntSpinner, 'cnt-spinner');
      this.spinner = this.render.createElement('div');
      this.render.addClass(this.spinner, 'spinner');
      this.render.appendChild(this.cntSpinner, this.spinner);
    }
  }

  private initStatus() {
    this.spinner = null;
    this.cntSpinner = null;
  }
}
