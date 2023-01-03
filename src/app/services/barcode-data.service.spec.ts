import { TestBed } from '@angular/core/testing';

import { BarcodeDataService } from './barcode-data.service';

describe('BarcodeDataService', () => {
  let service: BarcodeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarcodeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
