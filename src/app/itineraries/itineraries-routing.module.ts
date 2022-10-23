import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItineraryTableComponent} from "./components/itinerary-table/itinerary-table.component";
import {ItinerariesComponent} from "./views/itineraries/itineraries.component";
import {ItineraryDetailComponent} from "./views/itinerary-detail/itinerary-detail.component";

const routes: Routes = [
  {
    path: '',
    component: ItinerariesComponent,
  },
  {
    path: ':id',
    component: ItineraryDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItinerariesRoutingModule { }
