import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRidePage } from './post-ride.page';

describe('PostRidePage', () => {
  let component: PostRidePage;
  let fixture: ComponentFixture<PostRidePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostRidePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostRidePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
