import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { globalConstant } from '../../utils/constant';

@Injectable()
export class CookiesService {
  constructor() {}

  public static setCookie(name: string, value: string, days: number): void {
    const dateNow = new Date();
    dateNow.setHours(dateNow.getHours() + days * 24);
    const expires = `expires=${dateNow.toUTCString()}`;
    let cookie = '';
    if (environment.production) {
      cookie = `${name}=${value};${expires};domain=${globalConstant.HOSTNAME};path=/`;
    } else {
      cookie = `${name}=${value};${expires};path=/`;
    }
    document.cookie = cookie;
  }

  public static getCookie(name: string): string {
    const lengthCookie = `${name}=`.length;
    const nameCookie = `${name}=`;
    if (document.cookie.length > 0) {
      const splitCookies = document.cookie.split(';');
      const matchValue = splitCookies.find(
        item => item.indexOf(nameCookie) !== -1
      );
      if (matchValue) {
        return matchValue.trim().substr(lengthCookie, matchValue.length);
      } else {
        console.warn('No selected lang. View documentation under selector lang');
        return 'en';
      }
    }
    console.warn('No selected lang. View documentation under selector lang');
    return 'en';

  }
}
