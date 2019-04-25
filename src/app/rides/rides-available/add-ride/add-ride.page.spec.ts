import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRidePage } from './add-ride.page';

describe('AddRidePage', () => {
  let component: AddRidePage;
  let fixture: ComponentFixture<AddRidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRidePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
