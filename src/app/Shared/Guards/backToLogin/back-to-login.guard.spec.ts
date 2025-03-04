import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { backToLoginGuard } from './back-to-login.guard';

describe('backToLoginGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => backToLoginGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
