# ng-source-mapper

## Description
A utility for source maps in typescript. Find the original source file's name, 
line, and column number given a location inside of a javascript file that was 
generated from angular project. This utility will request the source map from 
the server if it has not done so already. 

## Prerequisites
These condition must hold true in order for the utility to function properly.
1) Angular 6+
2) Source maps must be enabled (enabled by default, but this works too `ng build --sourceMap=true`)

## Building
First install dependencies
> `npm install`
 
Build source-mapper library and demo application
> `npm run build-demo`
  
Build source-mapper library
> `npm run build-lib`
  
## Testing
Run unit tests for demo application
> `npm run test-demo`
  
Run unit tests for source-mapper library
> `npm run test-lib`
  
## Running
Run demo application
> `npm run run-demo`
 
## Examples
See the following files for examples
1. src/app/components/demo-from-url.component.ts
2. src/app/components/demo-from-map.component.ts




