import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import {CommonProvider} from '../providers/commonprovider';


@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})


export class TypographyComponent implements AfterViewInit {

  constructor(public commonProvider: CommonProvider) {



  }
  ngAfterViewInit(){
    console.log('view init');
      this.commonProvider.fire.subscribe(val=>{
          console.log('subscribed:');
      });
  }

  ngOnInit() {
  }

}
