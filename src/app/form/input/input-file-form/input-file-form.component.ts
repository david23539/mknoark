import {
  Component,
  ElementRef,
  Inject,
  Input,
  OnInit,
  Optional,
  ViewChild,
} from '@angular/core';
import {
  NG_ASYNC_VALIDATORS,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgModel,
} from '@angular/forms';
import { CookiesService } from '../../../service/cookies/cookies.service';
import { globalConstant } from '../../../utils/constant';
import { Literal } from '../../../utils/literal';
import { ElementBase } from '../../element-base';
import { ValidationControlService } from '../../service/validation-control.service';

@Component({
  selector: 'nk-input-file-form',
  templateUrl: './input-file-form.component.html',
  styleUrls: ['./input-file-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputFileFormComponent,
      multi: true,
    },
  ],
})
export class InputFileFormComponent extends ElementBase<any> implements OnInit {
  @ViewChild(NgModel, { static: true }) model: NgModel;
  @ViewChild('textLabel') textLabel: ElementRef;
  @Input() accept: string;
  @Input() multiple: boolean;
  public label: string;
  public dinamicId = (Math.random() * 1000).toFixed(3).toString();

  constructor(
    @Optional() @Inject(NG_VALIDATORS) validators: Array<any>,
    @Optional() @Inject(NG_ASYNC_VALIDATORS) asyncValidators: Array<any>,
    private _validationService: ValidationControlService
  ) {
    super(validators, asyncValidators);
  }

  ngOnInit(): void {
    if (this.model?.model) {
      this.textLabel.nativeElement.className =
        globalConstant.FORMS_STYLES.ACTIVE;
    }
    this.label = Literal[CookiesService.getCookie('lang')]?.SELECT_FILE;
  }

  public getNameFile(fileInput: any) {
    if (fileInput?.target?.files?.length > 0) {
      this.value = fileInput?.target?.files as Array<File>;
      if (this.multiple && fileInput?.target.files.length > 1) {
        this.label = '';
        for (const file of fileInput?.target?.files) {
          this.label += ` ${file.name},`;
        }
      } else {
        this.label = fileInput?.target?.files[0]?.name;
      }
    }
  }
}
