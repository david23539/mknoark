import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'nk-banner-default',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  @Input() textBanner: string;
  @Input() iconBanner: string;
  @Input() colorBanner: string;
  constructor() {}

  ngOnInit(): void {}
}
