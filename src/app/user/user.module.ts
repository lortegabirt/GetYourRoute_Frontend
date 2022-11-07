import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {ProfileComponent} from "./views/profile/profile.component";
import {SharedModule} from "../shared/shared.module";
import {SharedMaterialModule} from "../shared/shared-material.module";


@NgModule({
  declarations: [
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    SharedMaterialModule,
  ]
})
export class UserModule { }
