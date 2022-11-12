import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable, of, shareReplay, switchMap, tap} from "rxjs";
import {ItinerariesHttpService} from "../../service/itineraries.http.service";
import {Itinerary} from "../../model/Itinerary.model";
import {Geolocation} from "../../../geolocation/model/geolocation.model";
import {GeolocationHttpService} from "../../../geolocation/service/geolocation.http.service";
import {CurrentLocationLayerService} from "../../../geolocation/service/current-location-layer.service";

@Component({
  selector: 'app-itinerary-detail',
  templateUrl: './itinerary-detail.component.html',
  styleUrls: ['./itinerary-detail.component.scss'],
  providers: [CurrentLocationLayerService]
})
export class ItineraryDetailComponent implements OnInit {

  itinerary$: Observable<Itinerary>;
  geolocations$: Observable<Geolocation[]> = of([]);
  currentLocation: Geolocation;

  constructor(private route: ActivatedRoute,
              private currentLocationLayerService :CurrentLocationLayerService,
              private geolocationHttpService: GeolocationHttpService,
              private itineraryHttpService: ItinerariesHttpService) { }

  ngOnInit(): void {
    this.itinerary$ = this.route.params.pipe(
      switchMap(({id}) => this.itineraryHttpService.getItinerary(id)),
      shareReplay()
    );
    this.geolocations$ = this.route.params.pipe(
      switchMap(({id}) => this.geolocationHttpService.getGeolocations({itineraryId: id})),
      tap(list => list.length && (this.currentLocation = list[0]))
    );
  }

  onLocationChange(location: Geolocation) {
    this.currentLocation = location;
    this.currentLocationLayerService.setCurrentLocation(location);
  }
}
