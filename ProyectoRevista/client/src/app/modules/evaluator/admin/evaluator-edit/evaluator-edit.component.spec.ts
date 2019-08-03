import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluatorEditComponent } from './evaluator-edit.component';

describe('EvaluatorEditComponent', () => {
  let component: EvaluatorEditComponent;
  let fixture: ComponentFixture<EvaluatorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluatorEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluatorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
