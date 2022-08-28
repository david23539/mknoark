import { Component, OnInit } from '@angular/core';
import { ButtonFloatService } from './button/float-button/button-float.service';
import { SpinnerLoaderService } from './spinner/spinner-loader/spinner-loader.service';
import { SelectOptionInterface } from './msg-chat/select-option.interface';
import { ChangeColorService } from './change-color/change-color.service';

@Component({
  selector: 'nk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public color: string;
  cont: number;
  data: any;
  rememberEmail: any;
  email: any;
  constructor(
    private _spinnerLoader: SpinnerLoaderService,
    private buttonServiuce: ButtonFloatService,
    private _colorService: ChangeColorService
  ) {
    this.cont = 0;
    this.data = {};
  }

  ngOnInit(): void {
    this._colorService.setColorTheme([
      {
        keyVariable: '--primary-color',
        valueVariable: 'red',
      },
    ]);
  }

  show() {
    this.buttonServiuce
      .showButtonFloat('icon-nk-plus', this.color)
      .subscribe(() => {});
  }

  selectOption($event: SelectOptionInterface) {
    console.log($event);
  }
}
