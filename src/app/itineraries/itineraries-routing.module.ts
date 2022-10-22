import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItineraryTableComponent} from "./components/itinerary-table/itinerary-table.component";
import {ItinerariesComponent} from "./views/itineraries/itineraries.component";

const routes: Routes = [
  {
    path: '',
    component: ItinerariesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItinerariesRoutingModule { }
