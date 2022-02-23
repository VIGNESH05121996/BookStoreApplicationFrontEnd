import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FeedbackServiceService } from './feedback-service.service';

describe('FeedbackServiceService', () => {
  let service: FeedbackServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ]
    });
    service = TestBed.inject(FeedbackServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
