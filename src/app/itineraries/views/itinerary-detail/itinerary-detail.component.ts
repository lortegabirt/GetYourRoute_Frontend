import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable, shareReplay, switchMap} from "rxjs";
import {ItinerariesHttpService} from "../../service/itineraries.http.service";
import {Itinerary} from "../../model/Itinerary.model";

@Component({
  selector: 'app-itinerary-detail',
  templateUrl: './itinerary-detail.component.html',
  styleUrls: ['./itinerary-detail.component.scss']
})
export class ItineraryDetailComponent implements OnInit {

  itinerary$: Observable<Itinerary>;

  constructor(private route: ActivatedRoute,
              private itineraryHttpService: ItinerariesHttpService) { }

  ngOnInit(): void {
    this.itinerary$ = this.route.params.pipe(
      switchMap(({id}) => this.itineraryHttpService.getItinerary(id)),
      shareReplay()
    );
  }

}
