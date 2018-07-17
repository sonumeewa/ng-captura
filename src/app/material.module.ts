import { NgModule } from '@angular/core';

import * as Mat from '@angular/material';

var modules = [
  Mat.MatSlideToggleModule,
  Mat.MatProgressBarModule,
  Mat.MatIconModule,
  Mat.MatTableModule,
  Mat.MatSortModule,
  Mat.MatFormFieldModule,
  Mat.MatInputModule,
  Mat.MatButtonModule,
  Mat.MatTabsModule,
  Mat.MatCardModule,
  Mat.MatExpansionModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule { }