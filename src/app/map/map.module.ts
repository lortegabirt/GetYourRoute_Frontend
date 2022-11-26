import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MapComponent} from "./components/map.component";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [MapComponent],
    imports: [
        CommonModule,
        LeafletModule,
    ],
  exports: [MapComponent]
})
export class MapModule { }
