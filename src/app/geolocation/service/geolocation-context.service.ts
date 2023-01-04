import { Injectable } from '@angular/core';
import {Geolocation} from "../model/geolocation.model";

export type Box = {
  bottomLeftCoorLong: number,
  bottomLeftCoorLat: number;
  upperRightCoorLong: number;
  upperRightCoorLat: number;
}

@Injectable({
  providedIn: 'root'
})
export class GeolocationContextService {
  public toInfluenceBox(geolocations: Geolocation[]): Box {
    const locations = geolocations
      .map(geolocation => geolocation.location.coordinates);

    const bottomLeftCoorLong = Math.min(...this.getColumn(locations, 1)) - 0.005;
    const bottomLeftCoorLat = Math.min(...this.getColumn(locations, 0)) - 0.005;
    const upperRightCoorLong = Math.max(...this.getColumn(locations, 1)) + 0.005;
    const upperRightCoorLat = Math.max(...this.getColumn(locations, 0)) + 0.005;

    return {bottomLeftCoorLong, bottomLeftCoorLat, upperRightCoorLat, upperRightCoorLong}
  }

  public getColumn(array: any[][], column: number) {
    return array.map(row => row[column]);
  }
}
