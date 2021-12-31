import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgChatComponent } from './msg-chat.component';
import { ListModule } from '../../list/list.module';

describe('MsgChatComponent', () => {
  let component: MsgChatComponent;
  let fixture: ComponentFixture<MsgChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MsgChatComponent],
      imports: [ListModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
