import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-edit-mini-fab',
  templateUrl: './edit-mini-fab.component.html',
  styleUrls: ['./edit-mini-fab.component.scss']
})
export class EditMiniFabComponent {
  @Output() click = new EventEmitter();
}
