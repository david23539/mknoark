import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output,} from '@angular/core';
import {CookiesService} from '../../../service/cookies/cookies.service';
import {globalConstant} from '../../../utils/constant';
import {Literal} from '../../../utils/literal';
import literal from '../../literals';
import DataFormInterface from '../interfaces/DataForm.interface';
import {FormConfigInterface} from '../interfaces/FormConfig.interface';
import {DataForm} from '../model/DataForm';
import {FormConfig} from '../model/FormConfig';

@Component({
  selector: 'nk-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  @Input() isLoading: boolean;
  @Output() sendDataForm = new EventEmitter();
  @Input() redirectRegister: string;
  @Input() redirectRecover: string;
  @Input() logo: string;
  @Output() statusErrorChange = new EventEmitter();
  public title: string;
  public register: string;
  public recover: string;
  public keepSession: string;
  public autoUserName: string;

  public autoUserPassword: string;

  public errorLogin: string;

  public textLogin: string;

  public objectForm: FormConfigInterface = new FormConfig();

  public formData: DataFormInterface = new DataForm();
  private _lang: string;
  @Input() set lang(value: string) {
    this._lang = value;
    this.translateText(this._lang);
  }
  get lang(): string {
    return this._lang;
  }
  @Input() set statusError(value: boolean) {
    this.setWrongLoginErrors(value);
  }

  constructor() {}

  ngOnInit(): void {
    this.initConfigForm();
    this.formData.data.username = globalConstant.GENERAL.EMPTY_STRING;
    this.formData.data.password = globalConstant.GENERAL.EMPTY_STRING;
    this.formData.data.session = globalConstant.GENERAL.FALSE;
    this.autoUserName = globalConstant.FORMS.AUTO_COMPLETE_USERNAME;
    this.autoUserPassword = globalConstant.FORMS.AUTO_COMPLETE_PASSWORD;
  }

  public login(data: DataForm): void {
    this.sendDataForm.emit(data);
  }

  public redirectToRecover() {
    if (this.redirectRecover) {
      window.location.href = this.redirectRecover;
    }
  }

  public redirectToRegister() {
    if (this.redirectRegister) {
      window.location.href = this.redirectRegister;
    }
  }

  public setWrongLoginErrors(status): void {
    this.statusErrorChange.emit(status);
    if (status) {
      this.errorLogin =
        Literal[CookiesService.getCookie('lang')].USER_PASS_INCORRECT;
    } else {
      this.errorLogin = null;
    }
  }

  private translateText(lang: string): void {
    this.title = literal[lang].startSession;
    this.textLogin = literal[lang].loginTextButton;
    this.objectForm.USER.LABEL = literal[lang].username;
    this.objectForm.PASS.LABEL = literal[lang].password;
    this.register = literal[lang].register;
    this.recover = literal[lang].recoverPassword;
    this.objectForm.SESSION.LABEL = literal[lang].keepSession;
  }
  private initConfigForm(): void {
    this.objectForm.PASS.MAX_LENGTH = globalConstant.FORMS.MAX_LENGTH;
    this.objectForm.USER.MAX_LENGTH = globalConstant.FORMS.MAX_LENGTH;
    this.objectForm.PASS.MIN_LENGTH = globalConstant.FORMS.MIN_LENGTH;
    this.objectForm.USER.NAME = globalConstant.FORMS.NAME_USERNAME;
    this.objectForm.USER.PATTERN = globalConstant.REGEXP.ONLY_ALPHANUMERIC;
    this.objectForm.USER.TYPE = globalConstant.FORMS.TYPE_TEXT;
    this.objectForm.PASS.NAME = globalConstant.FORMS.NAME_PASSWORD;
    this.objectForm.PASS.PATTERN =
      globalConstant.REGEXP.EXCLUDE_SPECIAL_CHARACTER;
    this.objectForm.PASS.TYPE = globalConstant.FORMS.TYPE_PASSWORD;
    this.objectForm.SESSION.NAME = globalConstant.FORMS.NAME_SESSION;
  }
}
