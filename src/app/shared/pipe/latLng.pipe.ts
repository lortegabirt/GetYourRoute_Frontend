import { Pipe, PipeTransform } from '@angular/core';
import {Geolocation} from "../../geolocation/model/geolocation.model";
import * as L from 'leaflet';

@Pipe({
  name: 'latLng'
})
export class LatLngPipe implements PipeTransform {

  transform(geolocations: Geolocation[]): L.LatLng[]{
    return geolocations
      ?.filter(location => location.location.coordinates.values)
      .map(location =>
      new L.LatLng(location.location.coordinates[0], location.location.coordinates[1]));
  }

}
