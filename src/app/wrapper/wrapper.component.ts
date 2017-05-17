import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";
import { AppComponent } from "../app.component";
import { CollapseOnClick } from "../directives/collapse-on-click.directive";

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {
  @Input() lessons = [];

  constructor() { }

  ngOnInit() {
  }

  collapsed = false;

  onToggle(collapsed) {
    console.log(collapsed);
  }

}
