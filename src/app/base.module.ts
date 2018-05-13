import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, Validator }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdsenseModule } from 'ng2-adsense';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-4251360406988977',
      adSlot: '7875153049'
    })
  ],
  providers: [],
  declarations: [],
  exports: [
    CommonModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AdsenseModule
  ],
  entryComponents: []
})
export class BaseModule { }
