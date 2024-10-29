import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClienteEditarPerfilPage } from './cliente-editar-perfil.page';

describe('ClienteEditarPerfilPage', () => {
  let component: ClienteEditarPerfilPage;
  let fixture: ComponentFixture<ClienteEditarPerfilPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteEditarPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
