import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { NGSourceMapper} from './ng-source-mapper.service';

describe('NGSourceMapper', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [HttpClient]
  }));

  it('should be created', () => {
    const service: NGSourceMapper = TestBed.get(NGSourceMapper);
    expect(service).toBeTruthy();
  });
});
