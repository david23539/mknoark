import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {CookiesService} from '../../../service/cookies/cookies.service';
import {globalConstant} from '../../../utils/constant';
import {SelectInterface} from '../select-interface';

@Component({
  selector: 'nk-select-lang',
  templateUrl: './select-lang.component.html',
  styleUrls: ['./select-lang.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectLangComponent implements OnInit {
  @ViewChild('inputTextLang', { static: true }) inputText: ElementRef;

  @ViewChild('select') select: ElementRef;
  @Input() public data: SelectInterface[];
  @Output() setLang = new EventEmitter<string>();
  public reverseList: boolean;
  public mouseEnter = false;
  public showList: boolean;
  constructor() {
    this.showList = false;
    this.reverseList = false;
  }
  @Input() set lang(value: string) {
    this._setLang(value);
  }

  private static _setLangToHtml(lang: string): void {
    document.getElementsByTagName('html')[0].setAttribute('lang', lang);
  }

  ngOnInit() {
    if (CookiesService.getCookie('lang')) {
      this._validateSelect(CookiesService.getCookie('lang'));
    } else {
      this._validateSelect(globalConstant.GENERAL.LANG_DEFAULT);
    }
  }

  mouseIn(e) {
    this.mouseEnter = e;
  }

  selectItem(valueSelected: SelectInterface): void {
    this.inputText.nativeElement.value = valueSelected.text;
    SelectLangComponent._setLangToHtml(valueSelected.value);
    this.mouseEnter = false;
    CookiesService.setCookie('lang', valueSelected.value, 365);
    this.setLang.emit(valueSelected.value);
  }

  checkPositionList() {
    this.showList = true;
    const positionSelect = this.select.nativeElement.offsetTop;
    const mediumScreen = window.innerHeight / 2;
    this.reverseList = positionSelect >= mediumScreen;
  }

  validated() {
    if (!this.mouseEnter) {
      this.showList = false;
    }
  }

  private _validateSelect(value: string) {
    const result = this.data.find(x => x.value === value );
    if (result) {
      this.selectItem(result);
    } else {
      this.inputText.nativeElement.value = undefined;
    }
  }

  private _setLang(lang) {
    for (const item of this.data) {
      if (item.value === lang) {
        this.selectItem(item);
      }
    }
  }
}
