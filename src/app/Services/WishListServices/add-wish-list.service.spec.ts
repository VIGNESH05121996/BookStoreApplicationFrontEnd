import { TestBed } from '@angular/core/testing';

import { AddWishListService } from './add-wish-list.service';

describe('AddWishListService', () => {
  let service: AddWishListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddWishListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
