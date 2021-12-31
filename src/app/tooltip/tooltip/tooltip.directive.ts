import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';
import { globalConstant } from '../../utils/constant';

@Directive({
  selector: '[nkTooltip]',
})
export class TooltipDirective {
  @Input() nkTooltip: string;
  private _cntTooltip: any;
  constructor(private _render: Renderer2, private _el: ElementRef) {}

  @HostListener('mouseenter')
  public showTooltip(): void {
    if (
      navigator.appVersion.indexOf(globalConstant.PREFIX_DEVICE_DETECT.IOS) ===
        -1 &&
      navigator.appVersion.indexOf(
        globalConstant.PREFIX_DEVICE_DETECT.ANDROID
      ) === -1
    ) {
      this._cntTooltip = this._render.createElement('div');
      this._render.addClass(this._cntTooltip, 'cnt-tooltip');
      this._render.appendChild(
        this._cntTooltip,
        this._render.createText(this.nkTooltip)
      );
      this._render.appendChild(this._el.nativeElement, this._cntTooltip);
    }
  }

  @HostListener('mouseleave', ['$event'])
  public hideTooltip($event: any): void {
    if (this._cntTooltip) {
      this._render.removeChild(this._el.nativeElement, this._cntTooltip);
    }
  }
}
