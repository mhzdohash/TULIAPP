import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalhesProfissionalPage } from './detalhes-profissional.page';

describe('DetalhesProfissionalPage', () => {
  let component: DetalhesProfissionalPage;
  let fixture: ComponentFixture<DetalhesProfissionalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesProfissionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
