import { TestBed } from '@angular/core/testing';
import { PhonebookListResolverService } from './phonebook-list-resolver.service';


describe('PhonebookListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhonebookListResolverService = TestBed.get(PhonebookListResolverService);
    expect(service).toBeTruthy();
  });
});
