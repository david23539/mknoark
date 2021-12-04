import {ElementRef, Injectable, Renderer2, RendererFactory2,} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {CookiesService} from '../../service/cookies/cookies.service';
import {globalConstant} from '../../utils/constant';
import {Literal} from '../../utils/literal';
import {CookieInterface} from '../cookie.interface';
import {literalsCookie} from '../literals';

@Injectable()
export class CookieDefaultService {
  private cntCookie: ElementRef;
  private cookie: ElementRef;
  private render: Renderer2;

  private redirectPolicity: string;
  private lang: string;
  private policy: string;

  private state: CookieInterface;
  private mutationState: CookieInterface;
  private $closeCookie = new BehaviorSubject<CookieInterface>(this.get());

  constructor(private renderFactory: RendererFactory2) {
    this.render = this.renderFactory.createRenderer(document.body, null);
    this.mutationState = {
      statusCookie: true,
    };
  }

  /**
   *
   * @param redirect params to redirect view policy
   * @param textPolicy text to view in cookie (optional)
   * @return void
   */
  public showCookie(redirect: string, textPolicy: string = null): void {
    this.lang = CookiesService.getCookie('lang');
    this.redirectPolicity = redirect;
    this.policy = textPolicy;
    if (this.cntCookie) {
      this.render.removeChild(document.body, this.cntCookie);
    }
    this._initCookie();
    this.render.appendChild(document.body, this.cntCookie);
  }

  /**
   * @description Transform a variable in observable
   * @return Observable of type CookieInterface
   */
  public getChangeCookie$(): Observable<CookieInterface> {
    return this.$closeCookie.asObservable();
  }

  /**
   * @description Recover all change of state
   * @return CookieInterface
   */
  private get(): CookieInterface {
    return {
      ...this.state,
    };
  }

  /**
   * @description Set value to state
   * @param value of type CookieInterface
   * @return void
   */
  private set(value: CookieInterface): void {
    this.state = { ...value };
    this.$closeCookie.next(this.get());
  }

  /**
   * @description Create structure of cookie
   * @return void
   */
  private _initCookie(): void {
    this.mutationState.statusCookie = true;
    this.set(this.mutationState);
    this.cntCookie = this.render.createElement('div');
    this.render.addClass(this.cntCookie, 'cnt-cookie');
    this._createBodyCookie();
  }

  /**
   * @description Create body of cookie
   * @private
   * @return void
   */
  private _createBodyCookie(): void {
    this.cookie = this.render.createElement('div');
    this.render.addClass(this.cookie, 'cookie-default');
    const textCookie = this.render.createText(
      this.policy ? this.policy : literalsCookie[this.lang].MSG_SHORT_COOKIE
    );

    const icon = this.render.createElement('div');
    this.render.appendChild(this.cookie, icon);
    this.render.addClass(icon, 'icon-nk-warning');
    this.render.addClass(icon, 'icon-warning');

    const button = this.render.createElement('button');
    const textButton = this.render.createText(Literal[this.lang].ACCEPT);
    this.render.appendChild(button, textButton);
    this.render.addClass(button, 'cnt-button-cookie');
    this.render.listen(button, globalConstant.EVENTS.CLICK, event =>
      this._closeCookie()
    );

    const buttonMoreInfo = this.render.createElement('button');
    const textButtonMoreInfo = this.render.createText(
      Literal[this.lang].MORE_INFO
    );
    this.render.appendChild(buttonMoreInfo, textButtonMoreInfo);
    this.render.addClass(buttonMoreInfo, 'more-info');
    this.render.listen(buttonMoreInfo, globalConstant.EVENTS.CLICK, event =>
      this._toRedirect()
    );

    this.render.appendChild(this.cookie, button);
    this.render.appendChild(this.cookie, buttonMoreInfo);
    this.render.appendChild(this.cookie, textCookie);

    this.render.appendChild(this.cntCookie, this.cookie);
  }

  /**
   * @description Close of cookie and send change of state
   * @private
   * @return void
   */
  private _closeCookie(): void {
    this.render.addClass(this.cntCookie, 'before-closed');
    this.mutationState.statusCookie = false;
    this.set(this.mutationState);
    setTimeout(() => {
      this.render.removeChild(document.body, this.cntCookie);
      this.cntCookie = null;
      this.render.destroy();
    }, 300);
  }

  /**
   * @description Redirect to url in new tab
   * @private
   * @return void
   */
  private _toRedirect(): void {
    window.open(this.redirectPolicity, globalConstant.GENERAL.BLANK);
  }
}
