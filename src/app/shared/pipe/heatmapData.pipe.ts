import {Pipe, PipeTransform} from '@angular/core';
import {Geolocation} from "../../geolocation/model/geolocation.model";

@Pipe({
  name: 'heatmapData'
})
export class HeatmapDataPipe implements PipeTransform {

  transform(geolocations: Geolocation[]): { data: { lat: number, lng: number, count: number }[] } {
    return {data: this.getReduce(geolocations)};
  }

  private getReduce(geolocations: Geolocation[]): { lat: number, lng: number, count: number }[] {
    return geolocations?.reduce((acc, val) => [...acc, {
      lat: val.location.coordinates[0],
      lng: val.location.coordinates[1],
      count: 1
    }], []);
  }
}
