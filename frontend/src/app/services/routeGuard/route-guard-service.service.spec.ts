import { TestBed } from '@angular/core/testing';

import { RouteGuardServiceService } from './route-guard-service.service';

describe('RouteGuardServiceService', () => {
  let service: RouteGuardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteGuardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
