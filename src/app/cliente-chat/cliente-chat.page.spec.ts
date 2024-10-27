import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClienteChatPage } from './cliente-chat.page';

describe('ClienteChatPage', () => {
  let component: ClienteChatPage;
  let fixture: ComponentFixture<ClienteChatPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
