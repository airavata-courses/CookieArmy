import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RidesAvailablePage } from './rides-available.page';

describe('RidesAvailablePage', () => {
  let component: RidesAvailablePage;
  let fixture: ComponentFixture<RidesAvailablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RidesAvailablePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RidesAvailablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
