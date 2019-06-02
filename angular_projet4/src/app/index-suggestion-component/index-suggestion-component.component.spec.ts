import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexSuggestionComponentComponent } from './index-suggestion-component.component';

describe('IndexSuggestionComponentComponent', () => {
  let component: IndexSuggestionComponentComponent;
  let fixture: ComponentFixture<IndexSuggestionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexSuggestionComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexSuggestionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
