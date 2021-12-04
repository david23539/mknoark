import {CheckedDirective} from './checked.directive';

describe('CheckedDirective', () => {
  let directive;
  beforeEach(() => {
    directive = new CheckedDirective();
  });

  it('should create an instance', () => {
    directive = new CheckedDirective();
    expect(directive).toBeTruthy();
  });

  xit('method validChecked', () => {
    directive.validatorTrue();
  });
});
