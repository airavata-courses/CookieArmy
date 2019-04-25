import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenPage } from './green.page';

describe('GreenPage', () => {
  let component: GreenPage;
  let fixture: ComponentFixture<GreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
