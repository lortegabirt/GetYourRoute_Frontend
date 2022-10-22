import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLinkWithHref, RouterOutlet} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { TrimPipe } from './pipe/trim.pipe';



@NgModule({
  declarations: [
    TrimPipe
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
  ]
})
export class SharedModule { }
