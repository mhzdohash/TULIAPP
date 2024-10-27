import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClienteProdutosPage } from './cliente-produtos.page';

describe('ClienteProdutosPage', () => {
  let component: ClienteProdutosPage;
  let fixture: ComponentFixture<ClienteProdutosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteProdutosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
