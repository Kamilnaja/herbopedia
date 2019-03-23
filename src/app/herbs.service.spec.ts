import { TestBed, inject } from '@angular/core/testing';

import { HerbsService } from './herbs.service';
import { HttpModule } from '@angular/http';

describe('HerbsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HerbsService],
      imports: [HttpModule]
    });
  });

  it('should boots up correctly', inject([HerbsService], (service: HerbsService) => {
    expect(service).toBeTruthy();
  }));
});
