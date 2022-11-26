import {Injectable, OnDestroy} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MapEventsService implements OnDestroy{

  private fitBounds$ = new Subject();

  public centerOnItinerary() {
    this.fitBounds$.next({});
  }

  public fitBoundsEvent(): Observable<any> {
    return this.fitBounds$.asObservable();
  }

  ngOnDestroy(): void {
    this.fitBounds$.complete();
  }
}
