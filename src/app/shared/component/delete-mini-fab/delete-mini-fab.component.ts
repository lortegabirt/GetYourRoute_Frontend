import {Component, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-delete-mini-fab',
  templateUrl: './delete-mini-fab.component.html',
  styleUrls: ['./delete-mini-fab.component.scss']
})
export class DeleteMiniFabComponent {
  click = new EventEmitter();
}
