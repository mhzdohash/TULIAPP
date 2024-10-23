import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EspecialistaChatPage } from './especialista-chat.page';

describe('EspecialistaChatPage', () => {
  let component: EspecialistaChatPage;
  let fixture: ComponentFixture<EspecialistaChatPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialistaChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
