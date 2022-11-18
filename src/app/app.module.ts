import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from "./layout/layout.module";
import {globalErrorHandlerProvider, httpInterceptorProviders} from "./middleware";
import { HomeComponent } from './home/home.component';
import {MAT_DATE_LOCALE} from "@angular/material/core";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
  ],
  providers: [
    globalErrorHandlerProvider,
    httpInterceptorProviders,
    {provide: MAT_DATE_LOCALE, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
