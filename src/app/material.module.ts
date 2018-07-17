import { NgModule } from '@angular/core';

import {
  MatSlideToggleModule,
  MatProgressBarModule,
  MatIconModule,
  MatTableModule,
  MatSortModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatTabsModule,
  MatCardModule
} from '@angular/material';

var modules = [
  MatSlideToggleModule,
  MatProgressBarModule,
  MatIconModule,
  MatTableModule,
  MatSortModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatTabsModule,
  MatCardModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule { }