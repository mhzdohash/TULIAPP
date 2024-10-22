import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroEmecPage } from './registro-emec.page';

describe('RegistroEmecPage', () => {
  let component: RegistroEmecPage;
  let fixture: ComponentFixture<RegistroEmecPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEmecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
