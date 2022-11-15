import {Component, Input, OnInit} from '@angular/core';
import {Geolocation} from "../../../geolocation/model/geolocation.model";
import {Markers} from "../../../map/models/marker.model";
import {CustomMarker} from "../../../map/components/map.component";
import {CurrentLocationLayerService} from "../../../geolocation/service/current-location-layer.service";
import {map, Observable, of, tap} from "rxjs";
import {latLngBounds, Layer} from "leaflet";

@Component({
  selector: 'app-itinerary-map',
  templateUrl: './itinerary-map.component.html',
  styleUrls: ['./itinerary-map.component.scss']
})
export class ItineraryMapComponent implements OnInit {

  @Input() geolocations: Geolocation[] = [];

  @Input() set location(location: Geolocation) {
    this.currentLocation = location;
  }

  extraLayers$: Observable<Layer[]> = of([]);

  currentLocation: Geolocation;
  currentLocationMarker: CustomMarker = {
    id: 'currentLocation',
    options: Markers.redMarker('Position'),
    location: [1, 1]
  }

  constructor(private currentLocationLayerService: CurrentLocationLayerService) { }

  ngOnInit(): void {
    this.extraLayers$ = this.currentLocationLayerService.getCurrentLocation().pipe(
      map(location => [location]),
    );
  }
}
