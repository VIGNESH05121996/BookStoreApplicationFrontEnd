import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AddressServicesService } from './address-services.service';

describe('AddressServicesService', () => {
  let service: AddressServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ]
    });
    service = TestBed.inject(AddressServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
