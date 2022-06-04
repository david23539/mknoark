import { Injectable } from '@angular/core';
import { ColorThemeInterface } from './color-theme.interface';

@Injectable()
export class ChangeColorService {
  constructor() {}

  public setColorTheme(colors: ColorThemeInterface[]): void {
    colors.forEach((item: ColorThemeInterface) => {
      document.documentElement.style.setProperty(
        item.keyVariable,
        item.valueVariable
      );
    });
  }
}
