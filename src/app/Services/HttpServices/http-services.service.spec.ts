import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpServicesService } from './http-services.service';

describe('HttpServicesService', () => {
  let service: HttpServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ]
    });
    service = TestBed.inject(HttpServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
