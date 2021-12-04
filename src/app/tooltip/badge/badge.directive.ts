import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[nkBadge]',
})
export class BadgeDirective {
  private _cntBadge: any;

  @Input() set nkBadge(value: number) {
    this._showBadge(value);
  }

  constructor(private _el: ElementRef, private _render: Renderer2) {}

  private _showBadge(badges: number): void {
    if (badges || badges === 0) {
      if (this._cntBadge) {
        this._render.removeChild(this._el?.nativeElement, this._cntBadge);
      }
      this._cntBadge = this._render.createElement('div');
      this._render.addClass(this._cntBadge, 'cnt-badge');
      const cntText = this._render.createElement('span');
      if (badges < 100) {
        const text = this._render.createText(badges.toString());
        this._render.appendChild(cntText, text);
      }
      this._render.appendChild(this._cntBadge, cntText);
      this._render.appendChild(this._el?.nativeElement, this._cntBadge);
    } else if (this._cntBadge) {
      this._render.removeChild(this._el?.nativeElement, this._cntBadge);
      this._render.destroy();
    }
  }
}
