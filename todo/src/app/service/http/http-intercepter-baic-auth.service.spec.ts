import { TestBed } from '@angular/core/testing';

import { HttpIntercepterBaicAuthService } from './http-intercepter-baic-auth.service';

describe('HttpIntercepterBaicAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpIntercepterBaicAuthService = TestBed.get(HttpIntercepterBaicAuthService);
    expect(service).toBeTruthy();
  });
});
