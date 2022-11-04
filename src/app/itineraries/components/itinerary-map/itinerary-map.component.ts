import {Component, Input, OnInit} from '@angular/core';
import {Geolocation} from "../../../geolocation/model/geolocation.model";

@Component({
  selector: 'app-itinerary-map',
  templateUrl: './itinerary-map.component.html',
  styleUrls: ['./itinerary-map.component.scss']
})
export class ItineraryMapComponent implements OnInit {

  @Input() geolocations: Geolocation[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
