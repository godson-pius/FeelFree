import { TestBed } from '@angular/core/testing';

import { FfreeService } from './ffree.service';

describe('FfreeService', () => {
  let service: FfreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FfreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
