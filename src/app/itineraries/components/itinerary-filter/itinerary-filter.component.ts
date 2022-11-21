import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-itinerary-filter',
  templateUrl: './itinerary-filter.component.html',
  styleUrls: ['./itinerary-filter.component.scss']
})
export class ItineraryFilterComponent {

  @Output() filter = new EventEmitter<{beginDate: string, endDate: string}>();
  beginDate: Date;
  endDate: Date;

  onFilter() {
    this.filter.emit({
      beginDate: this.beginDate?.toISOString(),
      endDate: this.endDate?.toISOString(),
    })
  }

  onClear() {
    this.beginDate = undefined;
    this.endDate = undefined;
    this.filter.emit({beginDate: '', endDate: ''});
  }
}
