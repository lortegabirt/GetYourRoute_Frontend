import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {SharedMaterialModule} from "../shared/shared-material.module";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SharedMaterialModule,
  ]
})
export class LayoutModule { }
