import { TestBed, inject } from '@angular/core/testing';

import { InventoryLibService } from './inventory-lib.service';

describe('InventoryLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InventoryLibService]
    });
  });

  it('should be created', inject([InventoryLibService], (service: InventoryLibService) => {
    expect(service).toBeTruthy();
  }));
});
