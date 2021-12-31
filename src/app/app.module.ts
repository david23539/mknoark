import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BannerModule } from './banner/banner.module';
import { BreadcrumbModule } from './breadcum/breadcrumb.module';
import { BrowserIncompatibleModule } from './browser-incompatible/browser-incompatible.module';
import { ButtonModule } from './button/button.module';
import { CardModule } from './card/card.module';
import { CookieDefaultService } from './cookie/cookie-default/cookie-default.service';
import { CheckboxModule } from './form/checkbox/checkbox.module';
import { FormModule } from './form/form.module';
import { InputModule } from './form/input/input.module';
import { SelectModule } from './form/select/select.module';
import { ListModule } from './list/list.module';
import { ModalServiceDefaultService } from './modal/modal-service/modal-service-default.service';
import { ModalModule } from './modal/modal.module';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { TableModule } from './table/table.module';
import { TooltipModule } from './tooltip/tooltip.module';
import { ValidatorsModule } from './validators/validators.module';
import { MsgChatModule } from './msg-chat/msg-chat.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    NavBarModule,
    ButtonModule,
    NavBarModule,
    CardModule,
    ListModule,
    FormModule,
    InputModule,
    FormsModule,
    ValidatorsModule,
    TableModule,
    CheckboxModule,
    SelectModule,
    ModalModule,
    BrowserIncompatibleModule,
    BannerModule,
    BreadcrumbModule,
    MsgChatModule,
    TooltipModule,
  ],
  exports: [
    NavBarModule,
    ButtonModule,
    NavBarModule,
    CardModule,
    InputModule,
    ListModule,
  ],
  providers: [CookieDefaultService, ModalServiceDefaultService],
  bootstrap: [AppComponent],
})
// @ts-ignore
export class AppModule {}
