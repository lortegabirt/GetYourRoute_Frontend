import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatSliderChange} from "@angular/material/slider";
import {Geolocation} from "../../../geolocation/model/geolocation.model";

@Component({
  selector: 'app-itinerary-location-slider',
  templateUrl: './itinerary-location-slider.component.html',
  styleUrls: ['./itinerary-location-slider.component.scss']
})
export class ItineraryLocationSliderComponent implements OnInit {

  @Input() set geolocations(geolocations: Geolocation[]) {
    if (geolocations?.length) {
      this.locationChange.emit(geolocations[0]);
      this.locations = geolocations;
    }
  }

  @Output() locationChange = new EventEmitter<Geolocation>();

  locations: Geolocation[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  onIndexChange($event: MatSliderChange) {
    this.locationChange.emit(this.locations[$event.value]);
  }
}
