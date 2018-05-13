import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  collapsed = true;

  dropdown1 = false;

  constructor() { }

  ngOnInit() {
  }

  collapse() {
    this.collapsed = true;
    this.dropdown1 = false;
  }
}
