import {Component, Input, OnInit} from '@angular/core';
import {Geolocation} from "../../../geolocation/model/geolocation.model";
import {CurrentLocationLayerService} from "../../service/current-location-layer.service";
import {BehaviorSubject, map, merge, Observable, of, scan, startWith, Subject, tap} from "rxjs";
import {geoJSON, GeoJSON, Layer, rectangle} from "leaflet";
import {PointOfInterest} from "../../../point-of-interest/model/PointOfInterest";
import {PointOfInterestLayerService} from "../../service/poi-layer.service";
import {MapEventsService} from "../../service/map-events.service";
import {Box} from "../../../geolocation/service/geolocation-context.service";

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

  @Input() set boundingBox(box: Box) {
    box && this.boundingBox$.next(box);
  }

  extraLayers$: Observable<Layer[]> = of([]);
  overlay$: Observable<{ [key: string]: Layer }> = of({});
  boundingBox$: BehaviorSubject<Box> = new BehaviorSubject({upperRightCoorLong: 0, upperRightCoorLat: 0, bottomLeftCoorLong: 0, bottomLeftCoorLat: 0});

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

    const boxOverlay$ = this.boundingBox$.pipe(
      map(box => rectangle([[box.bottomLeftCoorLat, box.bottomLeftCoorLong], [box.upperRightCoorLat, box.upperRightCoorLong]], )),
      map(layer => ({"Box": layer})),
    );

    this.overlay$ = merge(location$, this.pointOfInterestLayerService.getPointsOfInterestOverlay(), boxOverlay$.pipe(startWith({Box: geoJSON()}))).pipe(
      scan((acc, val) => ({...acc, ...val}), {}),
    )

    this.mapEventsService.fitBoundsEvent().subscribe(_ => this.geolocations = [...this.geolocations]);
  }
}
