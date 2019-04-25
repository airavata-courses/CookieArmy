import { TestBed } from '@angular/core/testing';

import { RequestRideService } from './request-ride.service';

describe('RequestRideService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestRideService = TestBed.get(RequestRideService);
    expect(service).toBeTruthy();
  });
});
