import {Component, Input, OnInit} from '@angular/core';
import {DataBrowserRecommendationInterface} from '../data-browser-recommendation.interface';
import {literal} from '../literals';

@Component({
  selector: 'nk-browser-enabled',
  templateUrl: './browser-incompatible.component.html',
  styleUrls: ['./browser-incompatible.component.scss'],
})
export class BrowserIncompatibleComponent implements OnInit {
  @Input() textWarning: string;
  @Input() set lang(value: string) {
    this._setLanguage(value);
  }
  @Input() set browserAvailable(value: DataBrowserRecommendationInterface[]) {
    this._dataBrowserRecommendation = value;
  }
  public title: string;
  public recommendationText: string;
  private _dataBrowserRecommendation: DataBrowserRecommendationInterface[];

  get dataBrowserRecommendation(): DataBrowserRecommendationInterface[] {
    return this._dataBrowserRecommendation;
  }

  constructor() {}

  ngOnInit(): void {}

  public redirectTo(value: string): void {
    window.open(value, '_blank');
  }

  private _setLanguage(lang: string) {
    this.title = literal[lang].BROWSER_INCOMPATIBLE;
    this.recommendationText = literal[lang].BROWSER_RECOMMENDATION;
  }
}
