import {ValueAccessorBase} from './value-accessor-base';

class ValueAccessorBaseTest extends ValueAccessorBase<string> {
  constructor() {
    super();
  }
}

describe('ValueAccessorBase', () => {
  it('should create', () => {
    const valueAccesor = new ValueAccessorBaseTest();
    valueAccesor.type = '';
  });
});
