import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SelectOptionInterface} from '../select-option.interface';
import {TypeActionType} from '../types/type-action.type';
import {ListInterface} from '../../list/interfaces/list-interface';

@Component({
  selector: 'nk-msg-chat',
  templateUrl: './msg-chat.component.html',
  styleUrls: ['./msg-chat.component.scss']
})
export class MsgChatComponent implements OnInit {
  @Input() msgEnter: boolean;
  @Input() text: string;
  @Input() time: string;
  @Input() status: number;
  @Input() author: string;
  @Output() selectOption: EventEmitter<SelectOptionInterface> = new EventEmitter<SelectOptionInterface>();
  @Input() index: number;
  public showSubmenu: boolean;
  public dataOptions:  ListInterface[];

  constructor() {
    this.msgEnter = false;
    this.text = '';
    this.time = '';
    this.author = '';
    this.index = 0;
    this.showSubmenu = false;
    this.dataOptions = [];
  }

  ngOnInit(): void {
    this._initOptions();
  }

  public emitAction(action: TypeActionType) {
    if (action === 'C') {
      try {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(this.text)
            .then(() => {
              console.log('texto copiado', this.text);
            });
        }
      } catch (e) {
        throw new Error(e);
      }
    } else {
      this.selectOption.emit( {
        action,
        author: this.author,
        text: this.text,
        time: this.time,
        index: this.index
      });
    }
  }

  private _initOptions(): void {
    if (!this.msgEnter) {
      this.dataOptions = [
        {
          text: 'Eliminar___',
          value: 'D'
        },
        {
          text: 'Editar___',
          value: 'U'
        },
        {
          text: 'Copiar___',
          value: 'C'
        }
      ];
    } else {
      this.dataOptions = [
        {
          text: 'Copiar___',
          value: 'C'
        },
        {
          text: 'Responder___',
          value: 'R'
        }
      ];
    }
  }
}
