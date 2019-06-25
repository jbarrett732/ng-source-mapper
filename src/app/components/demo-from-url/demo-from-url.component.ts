import { Component, OnInit } from '@angular/core';
import { NgSourceMapper, NgPosition } from 'ng-source-mapper';
import {DemoUtil} from "../../classes/demo-util";

@Component({
  selector: 'app-demo-from-url',
  templateUrl: './demo-from-url.component.html',
  styleUrls: ['./demo-from-url.component.css']
})
export class DemoFromUrlComponent implements OnInit {

  private stackTraceGenerated = [];
  private stackTraceSource = [];
  private lines = 0;

  constructor(private ngSourceMapper: NgSourceMapper) { }

  ngOnInit() {
    this.stackTraceGenerated = DemoUtil.getStackTrace();
    this.stackTraceSource = this.stackTraceGenerated;
  }

  buttonClick() {

    // Show original stack trace in console
    console.log('Original Stack Trace');
    DemoUtil.printStack(this.stackTraceGenerated);

    // Perform source mapping and print to console after all have completed
    this.lines = this.stackTraceGenerated.length;
    for (const i in this.stackTraceGenerated) {

      // skip Error line
      if (this.stackTraceGenerated[i] === 'Error') {
        this.lines--;
        continue;
      }


      const oldPos = DemoUtil.getPositionFromTraceLine(this.stackTraceGenerated[i]);
      this.ngSourceMapper.getSourceInfoFromURL(oldPos).subscribe(
        newPosition => {
          this.stackTraceSource[i] = DemoUtil.replacePositionTraceLine(this.stackTraceGenerated[i], newPosition);
          // keep track of how many lines are left to map
          this.lines--;
          if (this.lines === 0) {
            // Show source stack trace in console
            console.log('Source Stack Trace');
            DemoUtil.printStack(this.stackTraceGenerated);
          }
        }, err => {
          console.log('Could not find map');
        }
      );
    }
  }

}
