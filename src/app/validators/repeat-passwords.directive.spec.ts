import {RepeatTextDirective} from './repeat-text.directive';
// import {AbstractControl} from '@angular/forms';

describe('RepeatTextDirective', () => {
  let directive;
  // const control: AbstractControl;
  beforeEach(() => {
    directive = new RepeatTextDirective('true');
  });
  it('should create an instance', () => {
    directive = new RepeatTextDirective('true');
    expect(directive).toBeTruthy();
  });

  it('method validPasswords', () => {
    directive.validPasswords();
  });
});
