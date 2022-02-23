import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CartListServiceService } from './cart-list-service.service';

describe('CartListServiceService', () => {
  let service: CartListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ]
    });
    service = TestBed.inject(CartListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
