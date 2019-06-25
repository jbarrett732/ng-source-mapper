import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as vlq from 'vlq';
import { NgPosition } from '../models/ng-position';
import { NgSourceMap } from '../models/ng-source-map';

@Injectable({
  providedIn: 'root'
})
export class NGSourceMapper {

  // used to cache source maps
  private cache = {};

  constructor(private http: HttpClient) {}

  /*
	  Public Functions
	 */
  public getSourceInfoFromMap(map: NgSourceMap, position: NgPosition): NgPosition {
    // => ';' indicates end of a line
    // => ',' separates mappings in a line
    // decoded mapping => [ generatedCodeColumn, sourceFileIndex, sourceCodeLine, sourceCodeColumn, nameIndex ]
    let sourceFileIndex = 0,   // second field
      sourceCodeLine = 0,    // third field
      sourceCodeColumn = 0;  // fourth field
    const lines = map.mappings.split(';');
    for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
      // reset column position to 0 after each line
      let generatedCodeColumn = 0;
      // decode sections in line
      const columns = lines[lineIndex].split(',');
      for (let columnIndex = 0; columnIndex < columns.length; columnIndex++) {
        const decodedSection = vlq.decode(columns[columnIndex]);
        if (decodedSection.length >= 4) {
          // update relative positions
          generatedCodeColumn += decodedSection[0];
          sourceFileIndex += decodedSection[1];
          sourceCodeLine += decodedSection[2];
          sourceCodeColumn += decodedSection[3];
        }
        // check if matching map
        if (lineIndex === position.lineNumber) {
          if (generatedCodeColumn === position.columnNumber) {
            // matching column and line found
            return new NgPosition(map.sources[sourceFileIndex], sourceCodeLine, sourceCodeColumn);
          } else if (columnIndex + 1 === columns.length) {
            // matching column not found, but line is correct
            return new NgPosition(map.sources[sourceFileIndex], sourceCodeLine, 0);
          }
        }
      }
    }
    // failed if reached
    return new NgPosition('unknown', 0, 0);
  }

  public getSourceInfoFromURL(position: NgPosition, cache: boolean = true): Observable<NgPosition>{
    // url check
    if (!position.fileName.startsWith('http')) {
      return of(position);
    }
    // check if we have map has already, otherwise request from server
    if (this.cache.hasOwnProperty(position.fileName)) {
      return of(this.getSourceInfoFromMap(this.cache[position.fileName], position));
    }
    return this.http.get<NgSourceMap>(position.fileName + '.map').pipe(map(sourceMap => {
      // store file in cache if not already stored
      if (!this.cache.hasOwnProperty(position.fileName) && cache) {
        this.cache[position.fileName] = sourceMap;
      }
      // map generated position to source position
      return this.getSourceInfoFromMap(sourceMap, position);
    }));
  }

}
