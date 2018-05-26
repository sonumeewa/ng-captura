import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { LoaderService } from './loader.service';
import 'rxjs/add/operator/finally';

export class Asset {
  constructor(public name: string, public url: string, public size: number, public downloadCount: number) { }
}

export class Release {
  constructor(public tag: string) { }

  publishedAt: Date;

  setup: Asset;
  portable: Asset;
  zipball: string;
  commit: string;
}

const repo = "MathewSachin/Captura";
const setup = "Captura-Setup.exe";
const portable = "Captura-Portable.zip";

@Injectable()
export class GithubApiService {

  constructor(private http: HttpClient,
    private loaderService: LoaderService) { }

  get latestRelease() : Observable<Release> {
    this.loaderService.show();

    return this.http.get("https://api.github.com/repos/" + repo + "/releases/latest").pipe(
      map((data: {
        tag_name: string,
        zipball_url: string,
        published_at: Date,
        target_commitish: string,
        assets: {
          name: string,
          size: number,
          browser_download_url: string,
          download_count: number
        }[]
      }) => {
        let result: Release;

        let release = new Release(data.tag_name);

        release.publishedAt = data.published_at;
        release.zipball = data.zipball_url;
        release.commit = data.target_commitish;

        data.assets.forEach(element => {
          let asset = new Asset(element.name, element.browser_download_url, element.size, element.download_count);

          switch (asset.name) {
            case setup:
              release.setup = asset;
              break;

            case portable:
              release.portable = asset;
              break;
          }
        });

        return release;
      })
    ).finally(() => this.loaderService.hide());
  }

}
