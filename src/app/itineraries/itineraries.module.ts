import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItinerariesRoutingModule } from './itineraries-routing.module';
import { ItineraryTableComponent } from './components/itinerary-table/itinerary-table.component';
import {SharedMaterialModule} from "../shared/shared-material.module";
import { ItinerariesComponent } from './views/itineraries/itineraries.component';
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {SharedModule} from "../shared/shared.module";
import { ItineraryDetailComponent } from './views/itinerary-detail/itinerary-detail.component';


@NgModule({
  declarations: [
    ItineraryTableComponent,
    ItinerariesComponent,
    ItineraryDetailComponent
  ],
  imports: [
    CommonModule,
    ItinerariesRoutingModule,
    SharedMaterialModule,
    SharedModule,
  ]
})
export class ItinerariesModule { }
