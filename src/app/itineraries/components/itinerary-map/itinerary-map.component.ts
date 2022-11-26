import {Component, Input, OnInit} from '@angular/core';
import {Geolocation} from "../../../geolocation/model/geolocation.model";
import {CurrentLocationLayerService} from "../../service/current-location-layer.service";
import {map, merge, Observable, of, scan} from "rxjs";
import {Layer} from "leaflet";
import {PointOfInterest} from "../../../point-of-interest/model/PointOfInterest";
import {PointOfInterestLayerService} from "../../service/poi-layer.service";
import {MapEventsService} from "../../service/map-events.service";

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
              private pointOfInterestLayerService: PointOfInterestLayerService,
              private mapEventsService: MapEventsService,) {
  }

  ngOnInit(): void {
    this.extraLayers$ = this.currentLocationLayerService.getCurrentLocation().pipe(
      map(location => [location])
    );

    const location$ = this.currentLocationLayerService.getCurrentLocation().pipe(
      map(location => ({'Current location': location})),
    );

    this.overlay$ = merge(location$, this.pointOfInterestLayerService.getPointsOfInterestOverlay()).pipe(
      scan((acc, val) => ({...acc, ...val}), {}),
    )

    this.mapEventsService.fitBoundsEvent().subscribe(_ => this.geolocations = [...this.geolocations]);
  }
}
