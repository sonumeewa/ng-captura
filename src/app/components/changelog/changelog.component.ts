import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.css']
})
export class ChangelogComponent implements OnInit {

  @ViewChild("vNext") template;

  constructor() { }

  ngOnInit() {
  }

}
