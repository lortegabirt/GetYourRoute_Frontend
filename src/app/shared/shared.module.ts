import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLinkWithHref, RouterOutlet} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {TrimPipe} from './pipe/trim.pipe';
import {AuthenticatedDirective} from './directives/authenticated.directive';
import {ViewWrapperComponent} from "./view-wrapper/view-wrapper.component";
import {HeatmapDataPipe} from "./pipe/heatmapData.pipe";
import { LatLngPipe } from './pipe/latLng.pipe';
import { DurationPipe } from './pipe/duration.pipe';


@NgModule({
  declarations: [
    TrimPipe,
    AuthenticatedDirective,
    ViewWrapperComponent,
    HeatmapDataPipe,
    LatLngPipe,
    DurationPipe,
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterLinkWithHref,
  ],
    exports: [
        CommonModule,
        RouterOutlet,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        RouterLinkWithHref,
        TrimPipe,
        AuthenticatedDirective,
        ViewWrapperComponent,
        HeatmapDataPipe,
        LatLngPipe,
        DurationPipe,
    ]
})
export class SharedModule { }
