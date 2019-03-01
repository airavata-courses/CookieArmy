import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedRidesPage } from './requested-rides.page';

describe('RequestedRidesPage', () => {
  let component: RequestedRidesPage;
  let fixture: ComponentFixture<RequestedRidesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestedRidesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedRidesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
