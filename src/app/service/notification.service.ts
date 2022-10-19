import {Injectable, NgZone} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
      private snackBar: MatSnackBar,
      private zone: NgZone) { }

  showSuccess(message: string): void {
    this.zone.run(() => {
      this.snackBar.open(message, 'Accept', {duration: 5000});
    });
  }

  showError(message: string): void {
    this.zone.run(() => {
      this.snackBar.open(message, 'Accept', {panelClass: ['snack-error'], duration: 5000});
    });
  }
}
