import { TestBed, inject } from '@angular/core/testing';

import { SpaceXServiceService } from './space-xservice.service';

describe('SpaceXServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpaceXServiceService]
    });
  });

  it('should be created', inject([SpaceXServiceService], (service: SpaceXServiceService) => {
    expect(service).toBeTruthy();
  }));
});
