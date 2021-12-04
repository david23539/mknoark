import {ElementBase} from "./element-base";
import {NgModel} from "@angular/forms";
import {AsyncValidatorArray, ValidatorArray} from "./validate";

class ElementBaseTest extends ElementBase<string> {
  protected model: NgModel;
  constructor() {
    let vali: ValidatorArray;
    let asyncValidatror: AsyncValidatorArray;
    super(vali, asyncValidatror);
  }
}

describe('ElementBase', () => {
  it('should create', () => {
    const valueAccesor = new ElementBaseTest();
    valueAccesor.type = '';
  });
});
