import { TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ListModule } from '../../../list/list.module';
import { SelectInterface } from '../select-interface';
import { SelectLangComponent } from './select-lang.component';

describe('SelectLangComponent', () => {
  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SelectLangComponent],
        imports: [ListModule, FormsModule],
      }).compileComponents();
    })
  );

  it('method _validateData', () => {
    const selectLang = new SelectLangComponent();
    const data: SelectInterface[] = [
      {
        text: 'ES',
        value: 'es',
      },
    ];
    const inputTextMock = {
      nativeElement: {
        value: '',
      },
    };
    selectLang.inputText = inputTextMock;
    selectLang.data = data;
    (selectLang as any)._validateSelect('es');
    (selectLang as any)._validateSelect('en');
  });

  it('method validated', () => {
    const selectLang = new SelectLangComponent();
    selectLang.validated();
  });

  it('method validated', () => {
    const selectLang = new SelectLangComponent();
    selectLang.mouseIn(true);
  });

  it('method checkPositionList', () => {
    const selectLang = new SelectLangComponent();
    const selectMock = {
      nativeElement: {
        offsetTop: 30,
      },
    };
    selectLang.select = selectMock;
    selectLang.checkPositionList();
  });

  it('method on Init', () => {
    const selectLang = new SelectLangComponent();
    (selectLang as any)._validateSelect = () => true;
    selectLang.ngOnInit();
    localStorage.clear();
    selectLang.ngOnInit();
  });
});
