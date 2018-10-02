import { Component, OnInit } from '@angular/core';
import { Home } from '../../models/screenshots';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  screenshotLink = Home.lightUrl;

}
