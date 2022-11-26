import {Component, OnDestroy, OnInit} from '@angular/core';
import {combineLatestWith, map, Observable, scan, Subject, takeUntil} from "rxjs";
import {Itinerary} from "../../model/Itinerary.model";
import {ItinerariesHttpService} from "../../service/itineraries.http.service";
import {MatDialog} from "@angular/material/dialog";
import {AlertDialogComponent, AlertDialogData} from "../../../shared/component/alert-dialog/alert-dialog.component";
import {Router} from "@angular/router";
import {ItineraryEditComponent} from "../../components/itinerary-edit/itinerary-edit.component";
import {Page, PageRequest} from "../../../shared/model/Page.model";
import {PageEvent} from "@angular/material/paginator";
import {AuthenticationService} from "../../../service/authentication.service";


@Component({
  selector: 'app-itineraries',
  templateUrl: './itineraries.component.html',
  styleUrls: ['./itineraries.component.scss']
})
export class ItinerariesComponent implements OnInit, OnDestroy {

  itineraries$: Observable<Page<Itinerary>>;
  pageRequest$ = new Subject<PageRequest>();
  destroyed$ = new Subject();

  initialPage = {page: 0, size: 10};

  constructor(private itinerariesHttpService: ItinerariesHttpService,
              private authenticationService: AuthenticationService,
              private router: Router,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    const emailParam$ = this.authenticationService.session.pipe(
      map(session => ({userId: session?.subjectId}))
    )

    this.pageRequest$.pipe(
      combineLatestWith(emailParam$),
      takeUntil(this.destroyed$),
      map(([request, email]) => ({...request, ...email})),
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

  onPage($event: PageEvent) {
    this.pageRequest$.next({size: $event.pageSize, page: $event.pageIndex})
  }

  onFilter(filter: { beginDate: string; endDate: string }) {
    this.pageRequest$.next(filter);
  }

  private loadData(params: PageRequest) {
    this.itineraries$ = this.itinerariesHttpService.getItineraries(params);
  }

  ngOnDestroy(): void {
    this.destroyed$.next('');
  }
}
