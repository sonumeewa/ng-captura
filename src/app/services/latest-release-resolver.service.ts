import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { LatestRelease, GithubApiService } from './github-api.service';

@Injectable()
export class LatestReleaseResolver implements Resolve<LatestRelease> {
  constructor(private api: GithubApiService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LatestRelease> {
    return this.api.latestRelease;
  }
}