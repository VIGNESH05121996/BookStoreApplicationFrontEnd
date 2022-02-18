import { TestBed } from '@angular/core/testing';

import { CartListServiceService } from './cart-list-service.service';

describe('CartListServiceService', () => {
  let service: CartListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
