import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DistancePipe} from "./pipe/distance.pipe";



@NgModule({
  declarations: [
    DistancePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DistancePipe
  ],
})
export class GeolocationModule { }
