import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorCreateComponent } from './editor-create.component';

describe('EditorCreateComponent', () => {
  let component: EditorCreateComponent;
  let fixture: ComponentFixture<EditorCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
