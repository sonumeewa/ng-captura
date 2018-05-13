import { Component, OnInit } from '@angular/core';
import { DeskDuplTestResult, DeskDuplTestResults } from '../../models/desk-dupl-test-result';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  deskDuplTested: DeskDuplTestResult[] = DeskDuplTestResults;

  constructor() { }

  ngOnInit() {
  }

}
