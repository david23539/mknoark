import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { timer } from 'rxjs';
import { animationModal } from '../animationModal';
import { ModalComponentInterface } from './modalComponent.interface';

@Component({
  selector: 'nk-modal-default',
  animations: [animationModal],
  templateUrl: './modal-default.component.html',
  styleUrls: ['./modal-default.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalDefaultComponent {
  @ViewChild('body', { read: ViewContainerRef, static: true })
  body: ViewContainerRef;
  @Input() headerText: string;
  @Input() optional: boolean;
  @Input() dismissible: boolean;
  @Input() backHolder: boolean;
  @Input() buttonCancel: boolean;
  @Input() buttonSubmit: boolean;
  @Input() textButtonCancel: string;
  @Input() textButtonSubmit: string;
  @Input() zIndex: number;
  @Output() action = new EventEmitter();

  @Input() set customComponent(value: ModalComponentInterface) {
    this._setComponentInside(value);
  }

  constructor(
    private _componentFactoryResolver: ComponentFactoryResolver,
    private _cdr: ChangeDetectorRef
  ) {}

  /**
   * @description This method capture key ESC event and close the modal
   * @public
   * @return void
   */
  @HostListener('document:keydown.escape')
  public dismissibleModal(): void {
    if (this.dismissible) {
      this.closed();
    }
  }

  /**
   * @description Return conditional z-index
   * @public
   * @return string
   */
  public getZIndex(): string {
    return this.zIndex?.toString() ?? '3';
  }

  /**
   * @description This method emit a value close=true. This notification, mark the modal to close
   * @public
   * @return void
   */
  public closed(): void {
    this.action.emit({
      close: true,
    });
  }

  /**
   * @description This method emit a value submit=true. This notification, mark the modal to submit
   * @public
   * @return void
   */
  public submit(): void {
    this.action.emit({
      submit: true,
    });
  }

  /**
   * @description This ,method refresh an update to View
   * @return void
   * @public
   */
  public refreshView(): void {
    this._cdr.markForCheck();
    timer(300).subscribe(() => {
      this._cdr.detectChanges();
    });
  }

  /**
   * @description Add params to component pass to params
   * @param componentClass is a reference to class of component mount inside and your parameters
   * @private
   * @return void
   */
  private _setComponentInside<T>(
    componentClass: ModalComponentInterface
  ): void {
    this.body.clear();
    const component = this._componentFactoryResolver.resolveComponentFactory(
      componentClass.component
    );
    const componentRef = this.body.createComponent(component);
    if (componentClass.params?.length) {
      componentClass.params.forEach(item => {
        componentRef.instance[item.key] = item.value;
      });
    }
  }
}
