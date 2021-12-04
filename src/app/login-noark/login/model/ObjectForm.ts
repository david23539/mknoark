export class ObjectForm {
  private _username: string;
  private _password: string;
  private _session: boolean;

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get session(): boolean {
    return this._session;
  }

  set session(value: boolean) {
    this._session = value;
  }
}
