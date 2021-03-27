import { TestBed, inject } from '@angular/core/testing';

import { SpaceXserviceService } from './space-xservice.service';

describe('SpaceXserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpaceXserviceService]
    });
  });

  it('should be created', inject([SpaceXserviceService], (service: SpaceXserviceService) => {
    expect(service).toBeTruthy();
  }));
});
