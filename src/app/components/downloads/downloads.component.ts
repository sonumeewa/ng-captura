import { Component, OnInit } from '@angular/core';
import { LatestRelease, Release } from '../../services/github-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css']
})
export class DownloadsComponent implements OnInit {

  latest: LatestRelease;

  isPrerelease = false;
  hasPrerelease = false;

  get release() {
    return this.isPrerelease ? this.latest.prerelease : this.latest.latest;
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: { latestRelease: LatestRelease }) => {
      this.latest = data.latestRelease;

      if (data.latestRelease.prerelease) {
        this.hasPrerelease = true;
      }
    });
  }

}
