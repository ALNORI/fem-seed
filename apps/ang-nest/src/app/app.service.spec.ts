import { TestBed } from '@angular/core/testing';
import { appService } from './app.service';

describe('AppService', () => {
  let service: appService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(appService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
