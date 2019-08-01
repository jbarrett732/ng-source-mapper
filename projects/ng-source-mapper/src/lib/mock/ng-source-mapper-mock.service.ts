import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NgPosition } from '../models/ng-position';
import { NgSourceMap } from '../models/ng-source-map';

@Injectable({
  providedIn: 'root'
})
export class NgSourceMapperMock {

  constructor() {}

  /*
	  Mock Public Functions
	 */
  public getSourceInfoFromMap(map: NgSourceMap, position: NgPosition): NgPosition {
    return new NgPosition('mock.js', 0, 0);
  }

  public getSourceInfoFromURL(position: NgPosition, cache: boolean = true): Observable<NgPosition>{
    return of(new NgPosition('mock.js', 0, 0));
  }

}
