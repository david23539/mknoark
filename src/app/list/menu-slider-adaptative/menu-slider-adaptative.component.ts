import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewContainerRef,
} from '@angular/core';
import {globalConstant} from '../../utils/constant';
import {ListInterface} from '../interfaces/list-interface';
import {MenuInterface} from '../interfaces/menu.interface';

@Component({
  selector: 'nk-menu-slider-adaptative',
  templateUrl: './menu-slider-adaptative.component.html',
  styleUrls: ['./menu-slider-adaptative.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuSliderAdaptativeComponent implements OnInit {
  @Input() data: ListInterface[];
  @Input() set status(value: boolean) {
    this._status = value;
    this.active = false;
    if (this.iosBrowser) {
      this.selectedItem = -1;
    }
  }
  @Output() redirectItem: EventEmitter<string> = new EventEmitter<string>();
  @Output() isOpen: EventEmitter<boolean> = new EventEmitter<boolean>();
  public selectedItem: number;
  public iosBrowser: boolean;
  public isMobile: boolean;
  public active: boolean;
  public subSelectedItem: number;
  private _status: boolean;
  private _positionsSelected: MenuInterface;

  public get statusMenu(): boolean {
    return this._status;
  }
  constructor(private _viewContent: ViewContainerRef) {
    this._positionsSelected = {
      menuPosition: -1,
      subMenuPosition: -1,
    };
    this.active = false;
  }

  ngOnInit(): void {
    this.iosBrowser =
      navigator.appVersion.indexOf(globalConstant.PREFIX_DEVICE_DETECT.IOS) >
      -1;
    this.isMobile =
      navigator.appVersion.indexOf(globalConstant.PREFIX_DEVICE_DETECT.IOS) >
        -1 ||
      navigator.appVersion.indexOf(
        globalConstant.PREFIX_DEVICE_DETECT.ANDROID
      ) > -1;
  }

  /**
   * @public
   * Show or hide of menu
   * @param index
   * @return void
   */
  public showSubmenu(index: number): void {
    if (this._status) {
      if (index === this.selectedItem) {
        if (!this.isMobile && !this.iosBrowser) {
          this.selectedItem = -1;
        } else if (this.iosBrowser) {
          this.selectedItem = this._positionsSelected.menuPosition;
          this.subSelectedItem = this._positionsSelected.subMenuPosition;
        }
        this.active = false;
      } else {
        this.selectedItem = index;
        this.active = true;
        if (this.selectedItem !== this._positionsSelected.menuPosition) {
          this.subSelectedItem = -1;
        } else {
          this.subSelectedItem = this._positionsSelected.subMenuPosition;
        }
      }
    }
  }

  /**
   * @description redirect direct if item no have data
   * @public
   * @param route string
   * @return void
   */
  public redirectTo(route: string): void {
    this.redirectItem.emit(route);
    this.isOpen.emit(false);
    this.selectedItem = -1;
  }

  /**
   * @description method mark subselected intem
   * @public
   * @param subindex number
   * @return void
   */
  public subItemSelected(subindex: number): void {
    this.subSelectedItem = subindex;
    this.active = false;
    this._status = false;
    this._savePositionSelected();
  }

  /**
   * @description method save last position selected
   * @private
   * @return void
   */
  private _savePositionSelected(): void {
    this._positionsSelected = {
      menuPosition: this.selectedItem,
      subMenuPosition: this.subSelectedItem,
    };
  }
}
