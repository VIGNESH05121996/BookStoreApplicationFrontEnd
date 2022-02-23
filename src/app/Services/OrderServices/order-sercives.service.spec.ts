import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OrderSercivesService } from './order-sercives.service';

describe('OrderSercivesService', () => {
  let service: OrderSercivesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ]
    });
    service = TestBed.inject(OrderSercivesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
