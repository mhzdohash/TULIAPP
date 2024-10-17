import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroEspecialistaPage } from './cadastro-especialista.page';

describe('CadastroEspecialistaPage', () => {
  let component: CadastroEspecialistaPage;
  let fixture: ComponentFixture<CadastroEspecialistaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroEspecialistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
