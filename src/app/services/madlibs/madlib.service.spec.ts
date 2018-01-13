import { TestBed, inject } from '@angular/core/testing';

import { MadlibService } from './madlib.service';

describe('MadlibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MadlibService]
    });
  });

  it('should be created', inject([MadlibService], (service: MadlibService) => {
    expect(service).toBeTruthy();
  }));
});
