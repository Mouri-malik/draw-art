import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawUserComponent } from './draw-user.component';

describe('DrawUserComponent', () => {
  let component: DrawUserComponent;
  let fixture: ComponentFixture<DrawUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
