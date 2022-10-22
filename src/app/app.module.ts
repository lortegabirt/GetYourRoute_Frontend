import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MapComponent} from './map/map.component';
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from "./layout/layout.module";
import {globalErrorHandlerProvider, httpInterceptorProviders} from "./middleware";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule,
    BrowserAnimationsModule,
    LayoutModule,
  ],
  providers: [globalErrorHandlerProvider, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
