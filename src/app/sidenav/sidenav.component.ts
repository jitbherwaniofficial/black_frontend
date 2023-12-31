import { style, transition, trigger, animate, keyframes } from '@angular/animations';
import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';

interface SideNavToggle {
  screenWidth:number;
  collapsed:boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations:[
    trigger('fadeInOut',[
      transition(':enter',[
        style({opacity:0}),
        animate('350ms',style({opacity:1}))
      ]),
      transition(':leave',[
        style({opacity:1}),
        animate('350ms',style({opacity:0}))
      ])
    ]),
    trigger('rotate',[
      transition(':enter', [
        animate('1000ms',keyframes([
          style({transform:'rotate(0deg)',offset:'0'}),
          style({transform:'rotate(2turn)',offset:'1'}),
        ]))
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter()
  collapsed = false;
  navData  = navbarData
  screenWidth = 0

  @HostListener('window:resize',['$event'])
  onResize(event:any){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768){
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed:this.collapsed, screenWidth:this.screenWidth})
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth
  }

  closeSidenav(){
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed:this.collapsed, screenWidth:this.screenWidth})
  }

  toggleCollapse(){
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed:this.collapsed, screenWidth:this.screenWidth})
  }

}
