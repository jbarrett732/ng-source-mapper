import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import { NgSourceMapper} from './ng-source-mapper.service';

describe('NGSourceMapper', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: NgSourceMapper = TestBed.get(NgSourceMapper);
    expect(service).toBeTruthy();
  });
});
