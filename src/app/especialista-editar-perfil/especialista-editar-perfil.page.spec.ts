import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EspecialistaEditarPerfilPage } from './especialista-editar-perfil.page';

describe('EspecialistaEditarPerfilPage', () => {
  let component: EspecialistaEditarPerfilPage;
  let fixture: ComponentFixture<EspecialistaEditarPerfilPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialistaEditarPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
