import { Pipe, PipeTransform } from '@angular/core';
import {Geolocation} from "../model/geolocation.model";
import intervalToDuration from 'date-fns/intervalToDuration'
import {formatDuration} from "date-fns";

@Pipe({
  name: 'geolocationToDuration'
})
export class DurationPipe implements PipeTransform {

  transform(geolocations: Geolocation[], ...args: unknown[]): string {
    if (!geolocations?.length) {
      return '';
    }
    const dates = geolocations
      .map(location => location.timestamp)
      .filter(this.isFirstOrLast(geolocations));
    const duration = intervalToDuration({start: dates[0], end: dates[1]});
    return formatDuration(duration);
  }

  private isFirstOrLast(geolocations: Geolocation[]) {
    return (date, index) => index == 0 || index == geolocations.length - 1;
  }
}
