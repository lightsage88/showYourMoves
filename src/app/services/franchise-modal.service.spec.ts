import { TestBed } from '@angular/core/testing';

import { FranchiseModalService } from './franchise-modal.service';

describe('FranchiseModalService', () => {
  let service: FranchiseModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FranchiseModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
