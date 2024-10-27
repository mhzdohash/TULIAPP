import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClienteCasaPage } from './cliente-casa.page';

describe('ClienteCasaPage', () => {
  let component: ClienteCasaPage;
  let fixture: ComponentFixture<ClienteCasaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteCasaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
