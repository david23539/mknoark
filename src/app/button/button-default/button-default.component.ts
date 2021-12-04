import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import {globalConstant} from '../../utils/constant';

@Component({
  selector: 'nk-button-default',
  templateUrl: './button-default.component.html',
  styleUrls: ['./button-default.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonDefaultComponent implements AfterViewInit {
  @ViewChild('button') button: ElementRef;
  /*
   * este input recibe un string de los siguientes tipos
   * success
   * danger
   * warning
   * default
   * disabled
   * */
  @Input() noShadow: boolean;

  /*
   * esta propiedad nos permite poner el boton flotante
   * esquina inferior derecha del primer padre con
   * posición relativa
   * */
  @Input() float: boolean;

  private type: string;

  private _isLoading: boolean;

  /**
   * Propiedad que indica que el componente esta esperando respuesta
   */
  @Input() set isLoading(value: boolean) {
    this._isLoading = value;
    if (this.button) {
      this.setLoadingButton();
    }
  }

  get isLoading() {
    return this._isLoading;
  }

  @Input() set typeButton(value: string) {
    this.type = value;
    if (this.button) {
      this.setStyleButton(this.typeButton);
    }
  }
  get typeButton() {
    return this.type;
  }
  constructor(private rendered: Renderer2) {}

  ngAfterViewInit(): void {
    if (this.float) {
      this.rendered.addClass(
        this.button.nativeElement,
        globalConstant.COLOR_TYPES.FLOAT
      );
      this.setLoadingButton();
    }

    this.setStyleButton(this.typeButton);
    this.setLoadingButton();
  }

  private setLoadingButton() {
    if (this.isLoading === true) {
      this.rendered.setAttribute(
        this.button.nativeElement,
        globalConstant.COLOR_TYPES.DISABLED,
        null
      );
      if (this.typeButton !== globalConstant.COLOR_TYPES.DISABLED) {
        this.rendered.addClass(
          this.button.nativeElement,
          globalConstant.COLOR_TYPES.LOADING
        );
      }
    } else if (
      this.isLoading === false &&
      this.typeButton !== globalConstant.COLOR_TYPES.DISABLED
    ) {
      this.rendered.removeAttribute(
        this.button.nativeElement,
        globalConstant.COLOR_TYPES.DISABLED
      );
      this.rendered.removeClass(
        this.button.nativeElement,
        globalConstant.COLOR_TYPES.LOADING
      );
    }
  }

  private setStyleButton(style: string) {
    switch (style) {
      case globalConstant.COLOR_TYPES.SUCCESS:
        this.resetStyleButton();
        this.rendered.addClass(
          this.button.nativeElement,
          globalConstant.COLOR_TYPES.SUCCESS
        );
        break;
      case globalConstant.COLOR_TYPES.WARNING:
        this.resetStyleButton();
        this.rendered.addClass(
          this.button.nativeElement,
          globalConstant.COLOR_TYPES.WARNING
        );
        break;
      case globalConstant.COLOR_TYPES.DANGER:
        this.resetStyleButton();
        this.rendered.addClass(
          this.button.nativeElement,
          globalConstant.COLOR_TYPES.DANGER
        );
        break;
      case globalConstant.COLOR_TYPES.DEFAULT:
        this.resetStyleButton();
        this.rendered.addClass(
          this.button.nativeElement,
          globalConstant.COLOR_TYPES.DEFAULT
        );
        break;
      case globalConstant.COLOR_TYPES.INFO:
        this.resetStyleButton();
        this.rendered.addClass(
          this.button.nativeElement,
          globalConstant.COLOR_TYPES.INFO
        );
        break;
      case globalConstant.COLOR_TYPES.DISABLED:
        this.resetStyleButton();
        this.rendered.setAttribute(
          this.button.nativeElement,
          globalConstant.COLOR_TYPES.DISABLED,
          null
        );
        this.rendered.addClass(
          this.button.nativeElement,
          globalConstant.COLOR_TYPES.DISABLED
        );
        break;
      default:
        break;
    }

    if (this.noShadow) {
      this.rendered.addClass(
        this.button.nativeElement,
        globalConstant.COLOR_TYPES.NO_SHADOW
      );
      this.setLoadingButton();
    }
    this.setLoadingButton();
  }

  private resetStyleButton() {
    this.button.nativeElement.className = globalConstant.GENERAL.EMPTY_STRING;
    this.rendered.removeAttribute(
      this.button.nativeElement,
      globalConstant.COLOR_TYPES.DISABLED
    );
  }
}
