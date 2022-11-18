import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';

import {ItinerariesRoutingModule} from './itineraries-routing.module';
import {ItineraryTableComponent} from './components/itinerary-table/itinerary-table.component';
import {SharedMaterialModule} from "../shared/shared-material.module";
import {ItinerariesComponent} from './views/itineraries/itineraries.component';
import {SharedModule} from "../shared/shared.module";
import {ItineraryDetailComponent} from './views/itinerary-detail/itinerary-detail.component';
import {MapModule} from "../map/map.module";
import {ItineraryMapComponent} from './components/itinerary-map/itinerary-map.component';
import {ItineraryEditComponent} from './components/itinerary-edit/itinerary-edit.component';
import {
  ItineraryLocationSliderComponent
} from './components/itinerary-location-slider/itinerary-location-slider.component';
import {ItineraryFilterComponent} from './components/itinerary-filter/itinerary-filter.component';
import {GeolocationModule} from "../geolocation/geolocation.module";
import localeEs from '@angular/common/locales/es'
registerLocaleData(localeEs)


@NgModule({
  declarations: [
    ItineraryTableComponent,
    ItinerariesComponent,
    ItineraryDetailComponent,
    ItineraryMapComponent,
    ItineraryEditComponent,
    ItineraryLocationSliderComponent,
    ItineraryFilterComponent
  ],
  imports: [
    CommonModule,
    ItinerariesRoutingModule,
    SharedMaterialModule,
    SharedModule,
    MapModule,
    GeolocationModule,
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es-EA'}]
})
export class ItinerariesModule {
}
