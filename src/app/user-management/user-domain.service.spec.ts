import { TestBed, inject } from '@angular/core/testing';

import { UserDomainService } from './user-domain.service';

describe('UserDomainService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDomainService]
    });
  });

  it('should be created', inject([UserDomainService], (service: UserDomainService) => {
    expect(service).toBeTruthy();
  }));
});
