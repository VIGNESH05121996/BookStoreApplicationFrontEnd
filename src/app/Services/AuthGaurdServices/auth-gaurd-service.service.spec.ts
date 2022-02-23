import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGaurdServiceService } from './auth-gaurd-service.service';

describe('AuthGaurdServiceService', () => {
  let service: AuthGaurdServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ]
    });
    service = TestBed.inject(AuthGaurdServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
