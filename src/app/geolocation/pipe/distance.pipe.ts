import { Pipe, PipeTransform } from '@angular/core';
import {latLng} from "leaflet";
import {Geolocation} from "../model/geolocation.model";

@Pipe({
  name: 'distance'
})
export class DistancePipe implements PipeTransform {

  transform(geolocations: Geolocation[], ...args: unknown[]): number {
    return geolocations
      ?.map(point => latLng(point.location.coordinates))
      .reduce(this.distanceAccumulator()
        , {distance: 0, previous: null} as {distance: number, previous: L.LatLng})
      .distance;
  }

  private distanceAccumulator() {
    return (acc: {distance: number, previous: L.LatLng}, val: L.LatLng)  => {
      if (acc.previous === null) {
        return {distance: 0, previous: val};
      }
      return {distance: acc.distance + acc.previous.distanceTo(val), previous: val};
    };
  }

}
