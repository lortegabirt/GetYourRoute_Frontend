import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLinkWithHref, RouterOutlet} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {TrimPipe} from './pipe/trim.pipe';
import {AuthenticatedDirective} from './directives/authenticated.directive';


@NgModule({
  declarations: [
    TrimPipe,
    AuthenticatedDirective,
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
  ]
})
export class SharedModule { }
