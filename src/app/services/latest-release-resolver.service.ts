import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Release, GithubApiService } from './github-api.service';

@Injectable()
export class LatestReleaseResolver implements Resolve<Release> {
  constructor(private api: GithubApiService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Release> {
    return this.api.latestRelease;
  }
}