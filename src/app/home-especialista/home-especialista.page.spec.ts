import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeEspecialistaPage } from './home-especialista.page';

describe('HomeEspecialistaPage', () => {
  let component: HomeEspecialistaPage;
  let fixture: ComponentFixture<HomeEspecialistaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeEspecialistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
