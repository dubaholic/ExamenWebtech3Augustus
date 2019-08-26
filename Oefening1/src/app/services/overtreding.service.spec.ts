import { TestBed } from '@angular/core/testing';

import { OvertredingService } from './overtreding.service';

describe('OvertredingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OvertredingService = TestBed.get(OvertredingService);
    expect(service).toBeTruthy();
  });
});
