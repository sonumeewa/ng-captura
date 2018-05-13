import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cmdline',
  templateUrl: './cmdline.component.html',
  styleUrls: ['./cmdline.component.css']
})
export class CmdlineComponent implements OnInit {

  @ViewChild("verbList") verbTemplate;
  @ViewChild("sourceDesktop") sourceTemplate;
  @ViewChild("encoderGif") encoderTemplate;

  constructor() { }

  ngOnInit() {
  }

}
