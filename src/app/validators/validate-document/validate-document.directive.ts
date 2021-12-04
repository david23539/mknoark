import {Directive, forwardRef, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS} from '@angular/forms';
import {CookiesService} from '../../service/cookies/cookies.service';
import {globalConstant} from '../../utils/constant';
import {Literal} from '../../utils/literal';
import {ErrorMessageInterface} from './interface/error-message.interface';
import {ErrorMessageModel} from './model/ErrorMessage.model';
import {typesDocument} from './types/types-document';

@Directive({
  selector: '[validateDocument][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ValidateDocumentDirective),
      multi: true,
    },
  ],
})
export class ValidateDocumentDirective {
  private _validator: (c: AbstractControl) => any;
  private _mesagge: ErrorMessageInterface = new ErrorMessageModel();
  private _lang: string;
  @Input() public set typeDocument(value: typesDocument) {
    this._validator = this._validateDocument(value);
  }

  constructor() {}

  public validate(control: AbstractControl): { [validator: string]: string } {
    return this._validator(control);
  }

  private _validateDocument(value: typesDocument) {
    this._lang = CookiesService.getCookie('lang');
    return (control: AbstractControl): ErrorMessageInterface => {
      switch (value) {
        case globalConstant.TYPES_DOCUMENTS.DNI:
          return this._validateDni(control);
        case globalConstant.TYPES_DOCUMENTS.NIE:
          return this._validateNie(control);
        case globalConstant.TYPES_DOCUMENTS.CIF:
          return this._validateCif(control);
        default:
          this._mesagge.message = Literal[this._lang].NO_SELECTED_TYPE_DOCUMENT;
          return this._mesagge;
      }
    };
  }

  private _validateDni(control: AbstractControl): ErrorMessageInterface {
    const regexp = globalConstant.REGEXP.DNI;
    if (
      control.value?.length === 9 &&
      regexp.test(control.value.toUpperCase())
    ) {
      if (!this._calculateNieAndNif(control.value.toUpperCase())) {
        return this._returnMessageError(Literal.es.DNI);
      } else {
        return null;
      }
    } else {
      return this._returnMessageError(Literal.es.DNI);
    }
  }

  private _validateNie(control: AbstractControl): ErrorMessageInterface {
    const regexp = globalConstant.REGEXP.NIE;
    if (
      control.value?.length === 9 &&
      regexp.test(control.value.toUpperCase())
    ) {
      let controlAux = control.value.toUpperCase();
      const valueControlLetter = controlAux[0].toUpperCase();
      switch (valueControlLetter) {
        case 'X':
          controlAux = controlAux.replace('X', '0');
          break;
        case 'Y':
          controlAux = controlAux.replace('Y', '1');
          break;
        case 'Z':
          controlAux = controlAux.replace('Z', '2');
          break;
        default:
          return this._returnMessageError(Literal.es.NIE);
      }

      if (!this._calculateNieAndNif(controlAux)) {
        return this._returnMessageError(Literal.es.NIE);
      } else {
        return null;
      }
    } else {
      return this._returnMessageError(Literal.es.NIE);
    }
  }

  private _validateCif(control: AbstractControl): ErrorMessageInterface {
    const regexp = globalConstant.REGEXP.CIF;
    if (
      control.value?.length === 9 &&
      regexp.test(control.value.toUpperCase())
    ) {
      const numberToCalculate = control.value.substr(
        1,
        control.value.length - 2
      );
      let sumNumbersPar = 0;
      let sumNumberInpar = 0;
      let sumParcial = 0;
      for (let i = 0; i < numberToCalculate.length; i++) {
        const item = i;
        if ((item + 1) % 2 === 0) {
          const par = parseInt(numberToCalculate.substr(i, 1), 0);
          if (par) {
            sumNumbersPar += par;
          }
        } else {
          const prevImpar = (numberToCalculate.substr(i, 1) * 2).toString();
          if (prevImpar.length > 1) {
            sumNumberInpar +=
              parseInt(prevImpar.substr(0, 1), 0) +
              parseInt(prevImpar.substr(1, 1), 0);
          } else {
            sumNumberInpar += parseInt(prevImpar.substr(0, 1), 0);
          }
        }
      }

      sumParcial =
        10 -
        parseInt((sumNumbersPar + sumNumberInpar).toString().substr(1, 1), 0);
      if (
        globalConstant.DIGIT_CONTROL_DOCUMENT.CIF_KEY_SOCIETY.indexOf(
          control.value[0].toUpperCase()
        ) > -1
      ) {
        if (
          String.fromCharCode(sumParcial + 64) !==
          control.value[control.value.length - 1]
        ) {
          return this._returnMessageError(Literal.es.CIF);
        } else {
          return null;
        }
      } else if (
        globalConstant.DIGIT_CONTROL_DOCUMENT.CIF_KEY_OTHER.indexOf(
          control.value[0].toUpperCase()
        ) > -1 &&
        control.value[control.value.length - 1] !== sumParcial.toString()
      ) {
        return this._returnMessageError(Literal.es.CIF);
      } else {
        if (
          control.value[control.value.length - 1] !==
            (sumParcial < 10
              ? sumParcial.toString()
              : sumParcial.toString().substr(1, 1)) &&
          String.fromCharCode(sumParcial + 64) !==
            control.value[control.value.length - 1]
        ) {
          return this._returnMessageError(Literal.es.CIF);
        } else {
          return null;
        }
      }
    } else if (control.value?.length !== 9) {
      return this._returnMessageError(Literal.es.CIF);
    } else {
      return this._returnMessageError(Literal.es.CIF);
    }
  }

  private _calculateNieAndNif(controlValue: string): boolean {
    const calculateLetter =
      parseInt(controlValue.substr(0, controlValue.length - 1), 0) % 23;
    return !(
      calculateLetter < 0 ||
      calculateLetter > 22 ||
      globalConstant.DIGIT_CONTROL_DOCUMENT.NIE[calculateLetter] !==
        controlValue[controlValue.length - 1]
    );
    return false;
  }

  private _returnMessageError(typeDocument: string): ErrorMessageInterface {
    this._mesagge.message =
      Literal[this._lang].DOCUMENT_INCORRECT + typeDocument;
    return this._mesagge;
  }
}
