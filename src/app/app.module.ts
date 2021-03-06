import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BaseModule } from './base.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { DonationsComponent } from './components/donations/donations.component';
import { ChangelogComponent } from './components/changelog/changelog.component';
import { CiComponent } from './components/ci/ci.component';
import { HotkeysComponent } from './components/hotkeys/hotkeys.component';
import { CmdlineComponent } from './components/cmdline/cmdline.component';
import { BuildingComponent } from './components/building/building.component';
import { FaqComponent } from './components/faq/faq.component';
import { TranslationComponent } from './components/translation/translation.component';
import { ScreenshotsComponent } from './components/screenshots/screenshots.component';
import { LicenseComponent } from './components/license/license.component';
import { CodeOfConductComponent } from './components/code-of-conduct/code-of-conduct.component';
import { ContributingComponent } from './components/contributing/contributing.component';
import { DownloadsComponent } from './components/downloads/downloads.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ContactComponent } from './components/contact/contact.component';
import { GameRecordingComponent } from './components/game-recording/game-recording.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    HomeComponent,
    DonationsComponent,
    ChangelogComponent,
    CiComponent,
    HotkeysComponent,
    CmdlineComponent,
    BuildingComponent,
    FaqComponent,
    TranslationComponent,
    ScreenshotsComponent,
    LicenseComponent,
    CodeOfConductComponent,
    ContributingComponent,
    DownloadsComponent,
    LoaderComponent,
    ContactComponent,
    GameRecordingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BaseModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
