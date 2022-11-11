import {Component, Input, OnInit} from '@angular/core';
import {Geolocation} from "../../../geolocation/model/geolocation.model";
import {Markers} from "../../../map/models/marker.model";
import {CustomMarker} from "../../../map/components/map.component";

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

  currentLocation: Geolocation;
  currentLocationMarker: CustomMarker = {
    id: 'currentLocation',
    options: Markers.redMarker('Position'),
    location: [1, 1]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
