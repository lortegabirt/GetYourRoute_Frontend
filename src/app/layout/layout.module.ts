import {NgModule} from '@angular/core';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {SharedMaterialModule} from "../shared/shared-material.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    MainLayoutComponent,
  ],
  exports: [
  ],
  imports: [
    SharedModule,
    SharedMaterialModule,
  ]
})
export class LayoutModule { }
