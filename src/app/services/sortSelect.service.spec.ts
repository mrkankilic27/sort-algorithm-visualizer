/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SortSelectService } from './sortSelect.service';

describe('Service: SortSelect', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SortSelectService]
    });
  });

  it('should ...', inject([SortSelectService], (service: SortSelectService) => {
    expect(service).toBeTruthy();
  }));
});
