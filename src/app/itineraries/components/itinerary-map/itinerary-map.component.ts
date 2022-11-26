import {Component, Input, OnInit} from '@angular/core';
import {Geolocation} from "../../../geolocation/model/geolocation.model";
import {CurrentLocationLayerService} from "../../../geolocation/service/current-location-layer.service";
import {map, merge, Observable, of, scan, tap} from "rxjs";
import {Layer, marker} from "leaflet";
import {Markers} from "../../../map/models/marker.model";
import {PointOfInterest} from "../../../point-of-interest/model/PointOfInterest";
import {PointOfInterestLayerService} from "../../../point-of-interest/service/poi-layer.service";

@Component({
  selector: 'app-itinerary-map',
  templateUrl: './itinerary-map.component.html',
  styleUrls: ['./itinerary-map.component.scss']
})
export class ItineraryMapComponent implements OnInit {

  @Input() geolocations: Geolocation[] = [];

  @Input() set currentLocation(geolocation: Geolocation) {
    this.currentLocationLayerService.setCurrentLocation(geolocation);
  }

  @Input() set pointsOfInterest(pointOfInterests: PointOfInterest[]) {
    this.pointOfInterestLayerService.setPointsOfInterest(pointOfInterests);
  }


  extraLayers$: Observable<Layer[]> = of([]);
  overlay$: Observable<{ [key: string]: Layer }> = of({});

  constructor(private currentLocationLayerService: CurrentLocationLayerService,
              private pointOfInterestLayerService: PointOfInterestLayerService,) {
  }

  ngOnInit(): void {
    const other = of(marker([43.257219, -2.930313], Markers.yellowMarker()));
    this.extraLayers$ = this.currentLocationLayerService.getCurrentLocation().pipe(
      map(location => [location])
    );

    const location$ = this.currentLocationLayerService.getCurrentLocation().pipe(
      map(location => ({'Current location': location})),
    );

    this.overlay$ = merge(location$, this.pointOfInterestLayerService.getPointsOfInterestOverlay()).pipe(
      scan((acc, val) => ({...acc, ...val}), {}),
    )
  }
}
