import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import {CommonProvider} from './providers/commonprovider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    hideSideBar = false;
     constructor(commonProvider:CommonProvider) {


     }

    ngOnInit(){
    }

    isMap(path){
      // var titlee = this.location.prepareExternalUrl(this.location.path());
      // titlee = titlee.slice( 1 );
      // if(path == titlee){
      //   return false;
      // }
      // else {
      //   return true;
      // }
    }
}
