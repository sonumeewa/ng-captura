import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LatestReleaseResolver } from './services/latest-release-resolver.service';

import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ChangelogComponent } from './components/changelog/changelog.component';
import { DonationsComponent } from './components/donations/donations.component';
import { FaqComponent } from './components/faq/faq.component';
import { TranslationComponent } from './components/translation/translation.component';
import { CmdlineComponent } from './components/cmdline/cmdline.component';
import { BuildingComponent } from './components/building/building.component';
import { ScreenshotsComponent } from './components/screenshots/screenshots.component';
import { LicenseComponent } from './components/license/license.component';
import { CiComponent } from './components/ci/ci.component';
import { HotkeysComponent } from './components/hotkeys/hotkeys.component';
import { CodeOfConductComponent } from './components/code-of-conduct/code-of-conduct.component';
import { ContributingComponent } from './components/contributing/contributing.component';
import { DownloadsComponent } from './components/downloads/downloads.component';
import { ContactComponent } from './components/contact/contact.component';
import { GameRecordingComponent } from './components/game-recording/game-recording.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'changelog',
    children: [
      { path: ':any', redirectTo: '', pathMatch: 'full' },
      { path: '', component: ChangelogComponent }
    ]
  },
  { path: 'Donate', redirectTo: 'donate', pathMatch: 'full' },
  { path: 'donate', component: DonationsComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'translation', component: TranslationComponent },
  { path: 'cmdline', component: CmdlineComponent },
  { path: 'build', component: BuildingComponent },
  { path: 'screenshots', component: ScreenshotsComponent },
  { path: 'license', component: LicenseComponent },
  { path: 'ci', component: CiComponent },
  { path: 'hotkeys', component: HotkeysComponent },
  { path: 'code_of_conduct', component: CodeOfConductComponent },
  { path: 'contributing', component: ContributingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gamerec', component: GameRecordingComponent },
  {
    path: 'download',
    component: DownloadsComponent,
    resolve: {
      latestRelease: LatestReleaseResolver
    }
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
