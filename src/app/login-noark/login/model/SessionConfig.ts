export class SessionConfig {
  private _LABEL: string;
  private _NAME: string;

  get LABEL(): string {
    return this._LABEL;
  }

  set LABEL(value: string) {
    this._LABEL = value;
  }

  get NAME(): string {
    return this._NAME;
  }

  set NAME(value: string) {
    this._NAME = value;
  }
}
