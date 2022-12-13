import {Component, OnInit} from '@angular/core';
import {map, Observable, of, shareReplay, switchMap, tap, withLatestFrom} from "rxjs";
import {PointOfInterest} from "../../model/PointOfInterest";
import {ActivatedRoute} from "@angular/router";
import {PoiHttpService} from "../../service/poi-http.service";
import {Layer} from "leaflet";
import {PointOfInterestLayerService} from "../../../itineraries/service/poi-layer.service";

@Component({
  selector: 'app-point-of-interest-detail',
  templateUrl: './point-of-interest-detail.component.html',
  styleUrls: ['./point-of-interest-detail.component.scss']
})
export class PointOfInterestDetailComponent implements OnInit {

  poi$: Observable<PointOfInterest>;
  marker$: Observable<Layer[]> = of([]);
  location: [number, number];

  constructor(private route: ActivatedRoute,
              private poiHttpService: PoiHttpService,
              private pointOfInterestLayerService: PointOfInterestLayerService) { }

  ngOnInit(): void {
    this.poi$ = this.route.params.pipe(
      switchMap(({id}) => this.poiHttpService.getPointOfInterest(id)),
      tap(poi => this.location = poi.location.coordinates),
      tap(poi => this.pointOfInterestLayerService.setPointsOfInterest([poi])),
      shareReplay()
    )
    this.marker$ = this.pointOfInterestLayerService.getPointsOfInterestOverlay().pipe(
      map(overlay => Object.values(overlay))
    );
  }

  onCenter() {
    this.location = [...this.location];
  }
}
