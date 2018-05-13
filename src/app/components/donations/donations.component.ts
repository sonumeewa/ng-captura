import { Component, OnInit } from '@angular/core';
import { Donation, DonationHistory } from '../../models/donations';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  donations: Donation[] = DonationHistory;

}
