import { NgModule } from '@angular/core';

import {
  MatSlideToggleModule,
  MatProgressBarModule,
  MatIconModule,
  MatTableModule,
  MatSortModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';

var modules = [
  MatSlideToggleModule,
  MatProgressBarModule,
  MatIconModule,
  MatTableModule,
  MatSortModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule { }