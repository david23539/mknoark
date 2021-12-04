export class PassConfig {
  private _NAME: string;
  private _LABEL: string;
  private _TYPE: string;
  private _PATTERN: RegExp;
  private _MAX_LENGTH: string;
  private _MIN_LENGTH: string;

  get NAME(): string {
    return this._NAME;
  }

  set NAME(value: string) {
    this._NAME = value;
  }

  get LABEL(): string {
    return this._LABEL;
  }

  set LABEL(value: string) {
    this._LABEL = value;
  }

  get TYPE(): string {
    return this._TYPE;
  }

  set TYPE(value: string) {
    this._TYPE = value;
  }

  get PATTERN(): RegExp {
    return this._PATTERN;
  }

  set PATTERN(value: RegExp) {
    this._PATTERN = value;
  }

  get MAX_LENGTH(): string {
    return this._MAX_LENGTH;
  }

  set MAX_LENGTH(value: string) {
    this._MAX_LENGTH = value;
  }

  get MIN_LENGTH(): string {
    return this._MIN_LENGTH;
  }

  set MIN_LENGTH(value: string) {
    this._MIN_LENGTH = value;
  }
}
