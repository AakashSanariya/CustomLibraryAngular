import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCallingComponent } from './api-calling.component';

describe('ApiCallingComponent', () => {
  let component: ApiCallingComponent;
  let fixture: ComponentFixture<ApiCallingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiCallingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiCallingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
