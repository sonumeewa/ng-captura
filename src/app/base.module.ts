import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AdsenseModule } from 'ng2-adsense';

import { environment } from '../environments/environment.prod';

import { GithubApiService } from './services/github-api.service';
import { LatestReleaseResolver } from './services/latest-release-resolver.service';
import { LoaderService } from './services/loader.service';

import { FileSizePipe } from './file-size.pipe';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-4251360406988977',
      adSlot: '7875153049',
      adtest: String(!environment.production)
    })
  ],
  providers: [
    GithubApiService,
    LatestReleaseResolver,
    LoaderService
  ],
  declarations: [
    FileSizePipe
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    AdsenseModule,
    FileSizePipe
  ],
  entryComponents: []
})
export class BaseModule { }
