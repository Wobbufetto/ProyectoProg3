import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvalArticleComponent } from './eval-article.component';

describe('EvalArticleComponent', () => {
  let component: EvalArticleComponent;
  let fixture: ComponentFixture<EvalArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvalArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvalArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
