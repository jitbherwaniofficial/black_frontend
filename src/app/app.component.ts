import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

interface SideNavToggle {
  screenWidth:number;
  collapsed:boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'blackcoffer';
  isSideNavCollapsed = false;
  screenWidth = 0;

  ngOnInit() {
  }
  
  onToggleSideNav(data:SideNavToggle){
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
  
}

