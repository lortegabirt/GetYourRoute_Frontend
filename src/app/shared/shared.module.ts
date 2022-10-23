import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLinkWithHref, RouterOutlet} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {TrimPipe} from './pipe/trim.pipe';
import {AuthenticatedDirective} from './directives/authenticated.directive';
import {ViewWrapperComponent} from "./view-wrapper/view-wrapper.component";


@NgModule({
  declarations: [
    TrimPipe,
    AuthenticatedDirective,
    ViewWrapperComponent,
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    ReactiveFormsModule,
    HttpClientModule,
    RouterLinkWithHref,
  ],
  exports: [
    CommonModule,
    RouterOutlet,
    ReactiveFormsModule,
    HttpClientModule,
    RouterLinkWithHref,
    TrimPipe,
    AuthenticatedDirective,
    ViewWrapperComponent,
  ]
})
export class SharedModule { }
