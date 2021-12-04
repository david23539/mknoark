import {Component, Input, OnInit} from '@angular/core';
import {globalConstant} from '../../../utils/constant';

@Component({
  selector: 'nk-spinner-loader',
  templateUrl: './spinner-loader.component.html',
  styleUrls: ['./spinner-loader.component.scss'],
})
export class SpinnerLoaderComponent implements OnInit {
  @Input() textLoading: string;
  @Input() urlLogo: string;
  @Input() close: boolean;
  constructor() {
    this.urlLogo = globalConstant.URL_LOGO;
  }

  ngOnInit(): void {}
}
