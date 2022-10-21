import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterOutlet,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    CommonModule,
    RouterOutlet,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class SharedModule { }
