import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AddWishListService } from './add-wish-list.service';

describe('AddWishListService', () => {
  let service: AddWishListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ]
    });
    service = TestBed.inject(AddWishListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
