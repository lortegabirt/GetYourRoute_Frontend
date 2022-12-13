import { Pipe, PipeTransform } from '@angular/core';
import {Geolocation} from "../../geolocation/model/geolocation.model";
import * as L from 'leaflet';

@Pipe({
  name: 'latLng'
})
export class LatLngPipe implements PipeTransform {

  transform(locations: Geolocation[] | [number, number]): L.LatLng[]{
    if (this.isGeolocation(locations)) {
      return locations
        ?.filter(location => location.location.coordinates.values)
        .map(location =>
          new L.LatLng(location.location.coordinates[0], location.location.coordinates[1]));

    } else {
      return locations?.length && [new L.LatLng(locations[0], locations[1])];
    }
  }

  private isGeolocation(locations: Geolocation[] | [number, number]): locations is Geolocation[] {
    return locations?.length && !!(<Geolocation>locations[0]).timestamp;
  }

}
