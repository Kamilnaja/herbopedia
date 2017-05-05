import { TestBed, inject } from '@angular/core/testing';

import { HerbsService } from './herbs.service';

describe('HerbsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HerbsService]
    });
  });

  it('should ...', inject([HerbsService], (service: HerbsService) => {
    expect(service).toBeTruthy();
  }));
});
