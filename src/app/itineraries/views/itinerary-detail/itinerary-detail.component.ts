import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map, Observable, of, shareReplay, switchMap, tap} from "rxjs";
import {ItinerariesHttpService} from "../../service/itineraries.http.service";
import {Itinerary} from "../../model/Itinerary.model";
import {Geolocation} from "../../../geolocation/model/geolocation.model";
import {GeolocationHttpService} from "../../../geolocation/service/geolocation.http.service";
import {CurrentLocationLayerService} from "../../../geolocation/service/current-location-layer.service";
import {PointOfInterestLayerService} from "../../../point-of-interest/service/poi-layer.service";
import {PoiHttpService} from "../../../point-of-interest/service/poi-http.service";
import {PointOfInterest} from "../../../point-of-interest/model/PointOfInterest";

@Component({
  selector: 'app-itinerary-detail',
  templateUrl: './itinerary-detail.component.html',
  styleUrls: ['./itinerary-detail.component.scss'],
  providers: [CurrentLocationLayerService, PointOfInterestLayerService]
})
export class ItineraryDetailComponent implements OnInit {

  itinerary$: Observable<Itinerary>;
  geolocations$: Observable<Geolocation[]> = of([]);
  pointsOfInterest$: Observable<PointOfInterest[]> = of([]);
  currentLocation: Geolocation = {itineraryId: '', userId: '', timestamp: null, location: {coordinates: [1, 1]}};

  constructor(private route: ActivatedRoute,
              private pointOfInterestHttpService: PoiHttpService,
              private geolocationHttpService: GeolocationHttpService,
              private itineraryHttpService: ItinerariesHttpService) { }

  ngOnInit(): void {
    this.itinerary$ = this.route.params.pipe(
      switchMap(({id}) => this.itineraryHttpService.getItinerary(id)),
      shareReplay()
    );
    this.geolocations$ = this.route.params.pipe(
      switchMap(({id}) => this.geolocationHttpService.getGeolocations({itineraryId: id})),
      map(page => page.content),
      tap(list => list.length && (this.currentLocation = list[0])),
      shareReplay()
    );
    this.pointsOfInterest$ = this.pointOfInterestHttpService.getPointsOfInterest().pipe(
      map(page => page.content),
      shareReplay(),
    );
  }

  onLocationChange(location: Geolocation) {
    this.currentLocation = location;
  }
}
