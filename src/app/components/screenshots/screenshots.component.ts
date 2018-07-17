import { Component, OnInit } from '@angular/core';
import { ScreenShots } from '../../models/screenshots';

@Component({
  selector: 'app-screenshots',
  templateUrl: './screenshots.component.html',
  styleUrls: ['./screenshots.component.css']
})
export class ScreenshotsComponent implements OnInit {

  screenshots = ScreenShots;

  dark = false;

  constructor() { }

  ngOnInit() {
  }

}
