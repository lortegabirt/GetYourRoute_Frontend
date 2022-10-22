import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Itinerary} from "../../model/Itinerary.model";
import {ItinerariesHttpService} from "../../service/itineraries.http.service";

@Component({
  selector: 'app-itineraries',
  templateUrl: './itineraries.component.html',
  styleUrls: ['./itineraries.component.scss']
})
export class ItinerariesComponent implements OnInit {

  itineraries$: Observable<Itinerary[]>;

  constructor(private itinerariesHttpService: ItinerariesHttpService) { }

  ngOnInit(): void {
    this.itineraries$ = this.itinerariesHttpService.getItineraries();
  }

}
