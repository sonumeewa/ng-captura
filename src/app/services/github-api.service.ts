import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LoaderService } from './loader.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

export class Asset {
  constructor(public name: string, public url: string, public size: number, public downloadCount: number) { }
}

export class Release {
  constructor(public tag: string, public prerelease: boolean) { }

  publishedAt: Date;

  setup: Asset;
  portable: Asset;
  zipball: string;
  commit: string;
}

export class LatestRelease {
  latest: Release;
  prerelease: Release;
}

class GitHubApiReleaseItem {
  tag_name: string;
  zipball_url: string;
  published_at: Date;
  target_commitish: string;
  prerelease: boolean;
  assets: {
    name: string,
    size: number,
    browser_download_url: string,
    download_count: number
  }[]
}

const repo = "MathewSachin/Captura";
const setup = "Captura-Setup.exe";
const portable = "Captura-Portable.zip";

@Injectable({
  providedIn: 'root',
})
export class GithubApiService {

  constructor(private http: HttpClient,
    private loaderService: LoaderService) { }

  //dummy = JSON.parse('{"tag":"v7.0.1","publishedAt":"2018-03-20T14:23:10Z","zipball":"https://api.github.com/repos/MathewSachin/Captura/zipball/v7.0.1","commit":"27084171ab03d9a8fdd5de5a0a5f75eb6a7ee05d","portable":{"name":"Captura-Portable.zip","url":"https://github.com/MathewSachin/Captura/releases/download/v7.0.1/Captura-Portable.zip","size":1665089,"downloadCount":6082},"setup":{"name":"Captura-Setup.exe","url":"https://github.com/MathewSachin/Captura/releases/download/v7.0.1/Captura-Setup.exe","size":1812285,"downloadCount":9204}}');
  //dummyPr = JSON.parse('{"tag":"v8.0.0-beta3","prerelease":"true","publishedAt":"2018-03-20T14:23:10Z","zipball":"https://api.github.com/repos/MathewSachin/Captura/zipball/v7.0.1","commit":"27084171ab03d9a8fdd5de5a0a5f75eb6a7ee05d","portable":{"name":"Captura-Portable.zip","url":"https://github.com/MathewSachin/Captura/releases/download/v7.0.1/Captura-Portable.zip","size":1665089,"downloadCount":6082},"setup":{"name":"Captura-Setup.exe","url":"https://github.com/MathewSachin/Captura/releases/download/v7.0.1/Captura-Setup.exe","size":1812285,"downloadCount":9204}}');

  get latestRelease() : Observable<LatestRelease> {
    // return of({
    //   latest: this.dummy,
    //   prerelease: this.dummyPr
    // });

    this.loaderService.show();

    return this.http.get("https://api.github.com/repos/" + repo + "/releases?prerelease=true").pipe(
      map((data: GitHubApiReleaseItem[]) => {
        let result = new LatestRelease();

        if (data != null)
        {
          for (let i = 0; i < data.length; ++i) {
            let item = data[i];

            if (item.prerelease && i != 0) {
              continue;
            }

            let release = new Release(item.tag_name, item.prerelease);

            release.publishedAt = item.published_at;
            release.zipball = item.zipball_url;
            release.commit = item.target_commitish;
  
            item.assets.forEach(element => {
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

            if (release.prerelease) {
              result.prerelease = release;
            }
            else {
              result.latest = release;
              break;
            }
          };
        }

        return result;
      }),
      finalize(() => this.loaderService.hide())
    );
  }
}
