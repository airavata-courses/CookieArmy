import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RideItemPage } from './ride-item.page';

describe('RideItemPage', () => {
  let component: RideItemPage;
  let fixture: ComponentFixture<RideItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RideItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RideItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
