import { TestBed, inject } from '@angular/core/testing';

import { FireDictionaryService } from './fire-dictionary.service';

describe('FireDictionaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FireDictionaryService]
    });
  });

  it('should ...', inject([FireDictionaryService], (service: FireDictionaryService) => {
    expect(service).toBeTruthy();
  }));
});
