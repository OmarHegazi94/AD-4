import { Component, OnInit } from '@angular/core';
import { Renderer } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // ngAfterViewChecked(){
  //   this.renderer.setElementStyle(targetItem.nativeElement, 'height', textHeight+"px");
  // }
  // let result: any = document.getElementsByClassName('height')[0];

  // isSmallScreen() {
  // const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  //   if (width > 720) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
}
