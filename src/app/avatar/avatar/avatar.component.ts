import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StatusType } from '../statusType';

@Component({
  selector: 'nk-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  @Input() initials: string;
  @Input() colorBg: string;
  @Input() weight: number;
  @Input() urlImg: string;
  @Input() status: StatusType;
  @Input() notifications: number;
  @Input() isGroup: boolean;
  @Output() selected: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.weight = 40;
  }

  ngOnInit(): void {}

  /**
   * @description send an event with the data shown
   */
  public sendDataSelected() {
    this.selected.emit(this.urlImg || this.initials);
  }
}
