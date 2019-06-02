import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexHeaderComponentComponent } from './index-header-component.component';

describe('IndexHeaderComponentComponent', () => {
  let component: IndexHeaderComponentComponent;
  let fixture: ComponentFixture<IndexHeaderComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexHeaderComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
