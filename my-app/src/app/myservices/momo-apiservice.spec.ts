import { TestBed } from '@angular/core/testing';

import { MomoAPIService } from './momo-apiservice';

describe('MomoAPIService', () => {
  let service: MomoAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MomoAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
