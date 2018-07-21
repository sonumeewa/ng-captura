import { Component, OnInit } from '@angular/core';
import { DeskDuplTestResults } from '../../models/desk-dupl-test-result';

@Component({
  selector: 'app-game-recording',
  templateUrl: './game-recording.component.html',
  styleUrls: ['./game-recording.component.css']
})
export class GameRecordingComponent implements OnInit {

  deskDuplTested = DeskDuplTestResults;

  constructor() { }

  ngOnInit() {
  }

}
