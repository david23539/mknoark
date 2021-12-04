import {Component, OnInit} from '@angular/core';
import {ButtonFloatService} from './button/float-button/button-float.service';
import {SpinnerLoaderService} from './spinner/spinner-loader/spinner-loader.service';
import {SelectOptionInterface} from './msg-chat/select-option.interface';

@Component({
  selector: 'nk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public color: string;
  cont: number;
  data: any;
  constructor(
    private _spinnerLoader: SpinnerLoaderService,
    private buttonServiuce: ButtonFloatService
  ) {
    this.cont = 0;
    this.data = {};
  }

  ngOnInit(): void {
  }

  show() {
    this.buttonServiuce.showButtonFloat('icon-nk-plus' , this.color).subscribe(() => {
    });
  }

  selectOption($event: SelectOptionInterface) {
    console.log($event);
  }
}
