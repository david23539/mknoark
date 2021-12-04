import {ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewChild,} from '@angular/core';

@Component({
  selector: 'nk-image-login',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageComponent {
  @ViewChild('image_background', { static: true }) imgBgr: ElementRef;
  @Input() set urlImage(value: string) {
    this._setImageBackground(value);
  }
  @Input() textPromotion: string;
  @Input() showInMobile: boolean;
  public isMobile: boolean;
  constructor(private render: Renderer2) {}

  private _setImageBackground(urlImage: string): void {
    this.render.setStyle(
      this.imgBgr.nativeElement,
      'background-image',
      `url(${urlImage})`
    );
  }
}
