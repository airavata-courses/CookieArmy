import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RidesRequestedPage } from './rides-requested.page';

describe('RidesRequestedPage', () => {
  let component: RidesRequestedPage;
  let fixture: ComponentFixture<RidesRequestedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RidesRequestedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RidesRequestedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
