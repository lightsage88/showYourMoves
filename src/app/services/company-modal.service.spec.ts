import { TestBed } from '@angular/core/testing';

import { CompanyModalService } from './company-modal.service';

describe('CompanyModalService', () => {
  let service: CompanyModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
