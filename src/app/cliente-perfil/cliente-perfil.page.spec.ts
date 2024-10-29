import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientePerfilPage } from './cliente-perfil.page';

describe('ClientePerfilPage', () => {
  let component: ClientePerfilPage;
  let fixture: ComponentFixture<ClientePerfilPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientePerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
