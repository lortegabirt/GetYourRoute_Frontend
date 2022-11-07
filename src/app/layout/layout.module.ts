import {NgModule} from '@angular/core';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {SharedMaterialModule} from "../shared/shared-material.module";
import {SharedModule} from "../shared/shared.module";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [
    MainLayoutComponent,
  ],
  exports: [
  ],
  imports: [
    SharedModule,
    SharedMaterialModule,
    RouterLink,
  ]
})
export class LayoutModule { }
