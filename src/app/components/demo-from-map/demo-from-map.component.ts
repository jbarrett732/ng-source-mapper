import { Component, OnInit } from '@angular/core';
// import { DemoUtil } from '../../classes/demo-util';
import { NgSourceMapper } from 'ng-source-mapper';

@Component({
  selector: 'app-demo-from-map',
  templateUrl: './demo-from-map.component.html',
  styleUrls: ['./demo-from-map.component.css']
})
export class DemoFromMapComponent implements OnInit {

  constructor(private ngSourceMapper: NgSourceMapper) { }

  ngOnInit() {
  }

}
