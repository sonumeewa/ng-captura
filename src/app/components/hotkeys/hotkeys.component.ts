import { Component, OnInit } from '@angular/core';
import { Hotkeys } from '../../models/hotkeys';

@Component({
  selector: 'app-hotkeys',
  templateUrl: './hotkeys.component.html',
  styleUrls: ['./hotkeys.component.css']
})
export class HotkeysComponent implements OnInit {

  hotkeys = Hotkeys;

  constructor() { }

  ngOnInit() {
  }

}
