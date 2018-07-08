import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
  options: FormGroup;
  panelOpenState = false;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      'fixed': false,
      'top': 0,
      'bottom': 0,
    });
  }
    isLargeScreen() {
      const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      if (width > 720) {
        return true;
      } else {
        return false;
      }
    }

  ngOnInit() {}

}
