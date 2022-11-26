import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DistancePipe} from "./pipe/distance.pipe";
import { DurationPipe } from './pipe/duration.pipe';



@NgModule({
  declarations: [
    DistancePipe,
    DurationPipe
  ],
  imports: [
    CommonModule
  ],
    exports: [
        DistancePipe,
        DurationPipe
    ],
})
export class GeolocationModule { }
