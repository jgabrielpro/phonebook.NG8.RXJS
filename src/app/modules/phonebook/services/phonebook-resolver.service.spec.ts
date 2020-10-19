import { TestBed } from '@angular/core/testing';

import { PhonebookResolverService } from './phonebook-resolver.service';

describe('PhonebookResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhonebookResolverService = TestBed.get(PhonebookResolverService);
    expect(service).toBeTruthy();
  });
});
