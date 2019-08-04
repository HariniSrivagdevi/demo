import { TestBed } from '@angular/core/testing';

import { OnlineserviceService } from './onlineservice.service';

describe('OnlineserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OnlineserviceService = TestBed.get(OnlineserviceService);
    expect(service).toBeTruthy();
  });
});
