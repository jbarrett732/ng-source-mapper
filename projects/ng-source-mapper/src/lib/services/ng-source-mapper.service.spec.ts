import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { NgSourceMapper} from './ng-source-mapper.service';

describe('NGSourceMapper', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [HttpClient]
  }));

  it('should be created', () => {
    const service: NgSourceMapper = TestBed.get(NgSourceMapper);
    expect(service).toBeTruthy();
  });
});
