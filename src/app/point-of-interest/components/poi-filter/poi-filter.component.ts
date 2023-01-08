import {Component, EventEmitter, Output} from '@angular/core';
import {PoiEnum} from "../../model/PointOfInterest";

@Component({
  selector: 'app-poi-filter',
  templateUrl: './poi-filter.component.html',
  styleUrls: ['./poi-filter.component.scss']
})
export class PoiFilterComponent {

  @Output() filter = new EventEmitter<{name: string, type: PoiEnum}>();
  name = '';
  type: PoiEnum = PoiEnum.ALL;
  typeOptions = Object.keys(PoiEnum).map(key => ({key, value: PoiEnum[key]}));

  onFilter() {
    this.filter.emit({name: this.name, type: this.type})
  }

  onClear() {
    this.name = '';
    this.type = PoiEnum.ALL;
    this.filter.emit({name: '', type: PoiEnum.ALL});
  }

}
