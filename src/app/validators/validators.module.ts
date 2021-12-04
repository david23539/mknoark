import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CheckedDirective} from './checked.directive';
import {MaxNumberFilesDirective} from './max-number-files/max-number-files.directive';
import {MaxSizeFileDirective} from './max-size-file/max-size-file.directive';
import {NumberMaxDirective} from './NumberMax/number-max.directive';
import {NumberMinDirective} from './numberMin.directive';
import {RepeatTextDirective} from './repeat-text.directive';
import {SetErrorDirective} from './set-error/set-error.directive';
import {ValidateDocumentDirective} from './validate-document/validate-document.directive';

@NgModule({
  declarations: [
    RepeatTextDirective,
    CheckedDirective,
    NumberMinDirective,
    NumberMaxDirective,
    ValidateDocumentDirective,
    SetErrorDirective,
    MaxSizeFileDirective,
    MaxNumberFilesDirective,
  ],
  imports: [CommonModule],
  exports: [
    RepeatTextDirective,
    CheckedDirective,
    NumberMinDirective,
    NumberMaxDirective,
    ValidateDocumentDirective,
    SetErrorDirective,
    MaxSizeFileDirective,
    MaxNumberFilesDirective,
  ],
})
export class ValidatorsModule {}
