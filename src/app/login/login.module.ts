import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import {SharedMaterialModule} from "../shared/shared-material.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    LoginRoutingModule,
    SharedMaterialModule,
    SharedModule,
  ]
})
export class LoginModule { }
