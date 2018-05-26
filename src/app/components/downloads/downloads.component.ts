import { Component, OnInit } from '@angular/core';
import { Release } from '../../services/github-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css']
})
export class DownloadsComponent implements OnInit {

  release: Release;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: { latestRelease: Release }) => {
      this.release = data.latestRelease;
    });
  }

}
