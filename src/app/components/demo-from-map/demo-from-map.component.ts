import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgSourceMapper, NgPosition, NgSourceMap } from 'ng-source-mapper';
import { DemoUtil } from "../../classes/demo-util";

@Component({
  selector: 'app-demo-from-map',
  templateUrl: './demo-from-map.component.html',
  styleUrls: ['./demo-from-map.component.css']
})
export class DemoFromMapComponent implements OnInit {

  private originalPosition: NgPosition;

  constructor(private ngSourceMapper: NgSourceMapper, private httpClient: HttpClient) { }

  ngOnInit() {
    this.originalPosition =  DemoUtil.getPositionFromTraceLine(DemoUtil.getStackTrace()[2]);
  }

  buttonClick() {
    console.log('Original position: ' + this.originalPosition.toString());
    this.httpClient.get<NgSourceMap>(this.originalPosition.fileName + '.map').subscribe(
      sourceMap => {
        const sourcePosition = this.ngSourceMapper.getSourceInfoFromMap(sourceMap, this.originalPosition);
        console.log('SourcePosition: ' + sourcePosition.toString());
      }
    )
  }

}
