import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, scan, Subject, takeUntil} from "rxjs";
import {Itinerary} from "../../model/Itinerary.model";
import {ItinerariesHttpService, PageRequest} from "../../service/itineraries.http.service";
import {MatDialog} from "@angular/material/dialog";
import {AlertDialogComponent, AlertDialogData} from "../../../shared/component/alert-dialog/alert-dialog.component";
import {Router} from "@angular/router";
import {ItineraryEditComponent} from "../../components/itinerary-edit/itinerary-edit.component";
import {Page} from "../../../shared/model/Page.model";
import {PageEvent} from "@angular/material/paginator";


@Component({
  selector: 'app-itineraries',
  templateUrl: './itineraries.component.html',
  styleUrls: ['./itineraries.component.scss']
})
export class ItinerariesComponent implements OnInit, OnDestroy {

  itineraries$: Observable<Page<Itinerary>>;
  filter: {[key: string]: string | number} = {};

  pageRequest$ = new Subject<PageRequest>();
  destroyed$ = new Subject();

  initialPage = {page: 0, size: 10};

  constructor(private itinerariesHttpService: ItinerariesHttpService,
              private router: Router,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.pageRequest$.pipe(
      takeUntil(this.destroyed$),
      scan((acc, value) => ({...acc, ...value}))
    ).subscribe(params => this.loadData(params));
    this.pageRequest$.next(this.initialPage);
  }

  onDelete(itinerary: Itinerary) {
    const matDialogRef = this.dialog.open(
      AlertDialogComponent,
      {data: {title: 'Delete Itinerary', message: 'Do you really want to delete the itinerary?'} as AlertDialogData});
    matDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.itinerariesHttpService.deleteItinerary(itinerary.id)
          .subscribe(_ => this.pageRequest$.next(this.initialPage));
      }
    })
  }

  onDetail(itinerary: Itinerary) {
    this.router.navigate(['itineraries', itinerary.id])
  }

  onEdit(itinerary: Itinerary) {
    const matDialogRef = this.dialog.open(
      ItineraryEditComponent,
      {data: itinerary}
    )
    matDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.itinerariesHttpService.updateItinerary(result.id, result)
          .subscribe(_ => this.pageRequest$.next({}));
      }
    })
  }

  private loadData(params: PageRequest) {
    this.itineraries$ = this.itinerariesHttpService.getItineraries(params);
  }

  onPage($event: PageEvent) {
    this.pageRequest$.next({size: $event.pageSize, page: $event.pageIndex})
  }

  onFilter(filter: { beginDate: string; endDate: string }) {
    console.log(filter);
    this.pageRequest$.next(filter);
  }

  ngOnDestroy(): void {
    this.destroyed$.next('');
  }
}
