import {RepeatTextDirective} from './repeat-text.directive';
// import {AbstractControl} from '@angular/forms';

describe('RepeatTextDirective', () => {
  let directive;
  // const control: AbstractControl;
  beforeEach(() => {
    directive = new RepeatTextDirective('prueba', 'true');
  });
  it('should create an instance', () => {
    directive = new RepeatTextDirective('prueba', 'true');
    expect(directive).toBeTruthy();
  });

  it('method validPasswords', () => {
    directive.validPasswords();
  });
});
