import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheProduto2Component } from './detalhe-produto2.component';

describe('DetalheProduto2Component', () => {
  let component: DetalheProduto2Component;
  let fixture: ComponentFixture<DetalheProduto2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalheProduto2Component]
    });
    fixture = TestBed.createComponent(DetalheProduto2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
