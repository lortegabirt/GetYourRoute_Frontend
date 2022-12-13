import { Pipe, PipeTransform } from '@angular/core';
import intervalToDuration from "date-fns/intervalToDuration";

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform([begin, end]: [Date | number, Date | number]): string {
    const duration = intervalToDuration({start: new Date(begin), end: new Date(end)});
    const hours = duration.hours.toString().padStart(2, '0');
    const minutes = duration.minutes.toString().padStart(2, '0');
    const seconds = duration.seconds.toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

}
