import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable, of, shareReplay, switchMap} from "rxjs";
import {ItinerariesHttpService} from "../../service/itineraries.http.service";
import {Itinerary} from "../../model/Itinerary.model";
import {Geolocation} from "../../../geolocation/model/geolocation.model";
import {GeolocationHttpService} from "../../../geolocation/service/geolocation.http.service";

@Component({
  selector: 'app-itinerary-detail',
  templateUrl: './itinerary-detail.component.html',
  styleUrls: ['./itinerary-detail.component.scss']
})
export class ItineraryDetailComponent implements OnInit {

  itinerary$: Observable<Itinerary>;
  geolocations$: Observable<Geolocation[]> = of([]);

  constructor(private route: ActivatedRoute,
              private geolocationHttpService: GeolocationHttpService,
              private itineraryHttpService: ItinerariesHttpService) { }

  ngOnInit(): void {
    this.itinerary$ = this.route.params.pipe(
      switchMap(({id}) => this.itineraryHttpService.getItinerary(id)),
      shareReplay()
    );
    this.geolocations$ = this.route.params.pipe(
      switchMap(({id}) => this.geolocationHttpService.getGeolocations({itineraryId: id}))
    );
  }

}
