import {Component} from '@angular/core';

@Component({
  selector: 'app-edit-mini-fab',
  template:`
    <button mat-mini-fab color="green">
      <mat-icon>edit</mat-icon>
    </button>
  `,
  styleUrls: ['./edit-mini-fab.component.scss']
})
export class EditMiniFabComponent {}
