import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListModule} from '../list/list.module';
import {MsgChatComponent} from './msg-chat/msg-chat.component';


@NgModule({
  declarations: [
    MsgChatComponent
  ],
  imports: [
    CommonModule,
    ListModule
  ],
  exports: [MsgChatComponent]
})
export class MsgChatModule { }
