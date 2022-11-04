import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './views/login/login.component';
import {SharedMaterialModule} from "../shared/shared-material.module";
import {SharedModule} from "../shared/shared.module";
import { SignupComponent } from './views/signup/signup.component';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    LoginRoutingModule,
    SharedMaterialModule,
    SharedModule,
  ]
})
export class LoginModule { }
