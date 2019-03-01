import { TestBed } from '@angular/core/testing';

import { AvailableRidesService } from './available-rides.service';

describe('AvailableRidesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvailableRidesService = TestBed.get(AvailableRidesService);
    expect(service).toBeTruthy();
  });
});
