import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheProduto3Component } from './detalhe-produto3.component';

describe('DetalheProduto3Component', () => {
  let component: DetalheProduto3Component;
  let fixture: ComponentFixture<DetalheProduto3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalheProduto3Component]
    });
    fixture = TestBed.createComponent(DetalheProduto3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
