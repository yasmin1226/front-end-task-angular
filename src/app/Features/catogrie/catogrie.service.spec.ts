import { TestBed } from '@angular/core/testing';

import { CatogrieService } from './catogrie.service';

describe('CatogrieService', () => {
  let service: CatogrieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatogrieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
