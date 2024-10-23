import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EspecialistaConversaPage } from './especialista-conversa.page';

describe('EspecialistaConversaPage', () => {
  let component: EspecialistaConversaPage;
  let fixture: ComponentFixture<EspecialistaConversaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialistaConversaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
