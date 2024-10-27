import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClienteConversaPage } from './cliente-conversa.page';

describe('ClienteConversaPage', () => {
  let component: ClienteConversaPage;
  let fixture: ComponentFixture<ClienteConversaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteConversaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
