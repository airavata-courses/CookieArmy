import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RidesPostedPage } from './rides-posted.page';

describe('RidesPostedPage', () => {
  let component: RidesPostedPage;
  let fixture: ComponentFixture<RidesPostedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RidesPostedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RidesPostedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
