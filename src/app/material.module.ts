import { NgModule } from '@angular/core';

import {
  MatSlideToggleModule,
  MatProgressBarModule,
  MatIconModule
} from '@angular/material';

var modules = [
  MatSlideToggleModule,
  MatProgressBarModule,
  MatIconModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule { }