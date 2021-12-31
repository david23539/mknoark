import { ControlValueAccessor } from '@angular/forms';

export abstract class ValueAccessorBase<T> implements ControlValueAccessor {
  public type: string;

  private innerValue: any;
  private changed = new Array<(value: any) => void>();
  private touched = new Array<() => void>();

  get value(): any {
    return this.innerValue;
  }

  set value(value: any) {
    if (this.innerValue !== value) {
      if (this.type === 'number' && Number(value)) {
        this.innerValue = Number(value);
        this.changed.forEach(f => f(Number(value)));
      } else {
        this.innerValue = value;
        this.changed.forEach(f => f(value));
      }
    }
  }

  writeValue(value: any) {
    this.innerValue = value;
  }

  registerOnChange(fn: (value: any) => void) {
    this.changed.push(fn);
  }

  registerOnTouched(fn: () => void) {
    this.touched.push(fn);
  }

  touch() {
    this.touched.forEach(f => f());
  }
}
