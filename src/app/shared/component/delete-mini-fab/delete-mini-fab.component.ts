import {Component} from '@angular/core';

@Component({
  selector: 'app-delete-mini-fab',
  template: `
    <button mat-mini-fab color="warn">
      <mat-icon>delete</mat-icon>
    </button>
  `,
  styleUrls: ['./delete-mini-fab.component.scss']
})
export class DeleteMiniFabComponent {}
