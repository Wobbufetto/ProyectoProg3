import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluatorCreateComponent } from './evaluator-create.component';

describe('EvaluatorCreateComponent', () => {
  let component: EvaluatorCreateComponent;
  let fixture: ComponentFixture<EvaluatorCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluatorCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluatorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
