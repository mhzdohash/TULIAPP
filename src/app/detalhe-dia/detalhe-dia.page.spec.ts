import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalheDiaPage } from './detalhe-dia.page';

describe('DetalheDiaPage', () => {
  let component: DetalheDiaPage;
  let fixture: ComponentFixture<DetalheDiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheDiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
