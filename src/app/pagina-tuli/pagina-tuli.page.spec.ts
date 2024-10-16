import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaTuliPage } from './pagina-tuli.page';

describe('PaginaTuliPage', () => {
  let component: PaginaTuliPage;
  let fixture: ComponentFixture<PaginaTuliPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaTuliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
