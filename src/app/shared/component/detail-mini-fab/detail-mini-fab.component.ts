import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-detail-mini-fab',
  templateUrl: './detail-mini-fab.component.html',
  styleUrls: ['./detail-mini-fab.component.scss']
})
export class DetailMiniFabComponent {
  @Output() click = new EventEmitter();
}
