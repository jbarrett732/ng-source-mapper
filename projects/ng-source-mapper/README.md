# NgSourceMapper

## Description
A utility for source maps in typescript. Find the original source file's name, 
line, and column number given a location inside of a javascript file that was 
generated from angular project. This utility will request the source map from 
the server if it has not done so already. 

## Prerequisites
These condition must hold true in order for the utility to function properly.
1) Angular 6+
2) Source maps must be enabled (enabled by default, but this works too `ng build --sourceMap=true`)

## Install
Run `npm install ng-source-mapper`

## Examples
Import from ng-source-mapper
```
import { NgSourceMapper, NgPosition } from 'ng-source-mapper';
```

Inject service into component
```
constructor(private sourceMapper: NgSourceMapper) {}
```

Determine location of generated code, Ex. 'http://localhost:4200/main.js:523:96'
```
const positionString = 'http://localhost:4200/main.js:523:96';
const positionObject = NgPosition.fromString(positionString);
```

Or
```
const positionObject = new NgPosition('http://localhost:4200/main.js', 523, 96);
```

Use service to map to source code position
```
this.sourceMapper.getSourceInfoFromURL(oldPos).subscribe(
  (sourcePosition: NgPosition) => {
    // Success
    console.log(sourcePosition.toString());
  }
);
```

## Mocking for unit tests
Import both NgSourceMapper and NgSourceMapperMock
```javascript
import {NgSourceMapper, NgSourceMapperMock} from 'ng-source-mapper';
```
Use the Mock class instead of actual class in test bed providers
```javascript
providers: [
  {provide: NgSourceMapper, useClass: NgSourceMapperMock}
]
```
