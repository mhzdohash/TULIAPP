import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EspecialistaPerfilPage } from './especialista-perfil.page';

describe('EspecialistaPerfilPage', () => {
  let component: EspecialistaPerfilPage;
  let fixture: ComponentFixture<EspecialistaPerfilPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialistaPerfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
