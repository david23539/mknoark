import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {globalConstant} from '../../utils/constant';

@Component({
  selector: 'nk-navbar-default',
  templateUrl: './nav-bar-default.component.html',
  styleUrls: ['./nav-bar-default.component.scss'],
})
export class NavBarDefaultComponent implements OnInit {
  @Input() title: string;
  @Input() zIndex: number;
  @Input() noFixed: boolean;
  @Output() statusMenu = new EventEmitter();

  public version: string;
  private _deployMenu = false;
  @Input() set stateMenu(value: boolean) {
    this._deployMenu = value;
  }
  get deployMenu(): boolean {
    return this._deployMenu;
  }

  constructor() {}

  public controlStateMenu(state: boolean): boolean {
    this._deployMenu = !state;
    return false;
  }

  ngOnInit() {
    this.version = globalConstant.GENERAL.VERSION;
  }
}
