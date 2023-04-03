import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ButtonFloatService } from './button/float-button/button-float.service';
import { SpinnerLoaderService } from './spinner/spinner-loader/spinner-loader.service';
import { SelectOptionInterface } from './msg-chat/select-option.interface';

@Component({
  selector: 'nk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  @Output() dataOut: EventEmitter<boolean>;
  public showBlock = false;
  constructor(
  ) {

  }

  ngOnInit(): void {
    this.showBlock = true;
  }


}

export class AppComponent2 implements OnInit {
  @Input() data: boolean;
  public showBlock2 = false;

  constructor(
  ) {

  }

  ngOnInit(): void {

  }


}
