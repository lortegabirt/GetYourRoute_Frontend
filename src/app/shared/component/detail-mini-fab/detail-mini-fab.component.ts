import {Component, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-detail-mini-fab',
  template: `
    <button mat-mini-fab color="primary">
      <mat-icon>visibility</mat-icon>
    </button>
  `,
  styleUrls: ['./detail-mini-fab.component.scss']
})
export class DetailMiniFabComponent {}
