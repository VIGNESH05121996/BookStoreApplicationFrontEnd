import { TestBed } from '@angular/core/testing';

import { OrderSercivesService } from './order-sercives.service';

describe('OrderSercivesService', () => {
  let service: OrderSercivesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderSercivesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
