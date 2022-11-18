import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Geolocation} from "../model/geolocation.model";
import * as L from "leaflet";
import {Markers} from "../../map/models/marker.model";

@Injectable({
  providedIn: 'root'
})
export class CurrentLocationLayerService implements OnDestroy{

  private currentLocationLayer$: BehaviorSubject<L.Layer> = new BehaviorSubject(L.marker([1, 1]));

  public setCurrentLocation(location: Geolocation) {
    const marker = L.marker(location?.location.coordinates, Markers.redMarker('Current location'));
    this.currentLocationLayer$.next(marker);
  }

  public getCurrentLocation() {
    return this.currentLocationLayer$.asObservable();
  }

  ngOnDestroy(): void {
    console.log('destroyed');
    this.currentLocationLayer$.complete();
  }
}
