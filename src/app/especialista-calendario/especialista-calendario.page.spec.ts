import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EspecialistaCalendarioPage } from './especialista-calendario.page';

describe('EspecialistaCalendarioPage', () => {
  let component: EspecialistaCalendarioPage;
  let fixture: ComponentFixture<EspecialistaCalendarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialistaCalendarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
