import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, scan, Subject, takeUntil} from "rxjs";
import {Page, PageRequest} from "../../../shared/model/Page.model";
import {PointOfInterest} from "../../model/PointOfInterest";
import {PoiHttpService} from "../../service/poi-http.service";
import {Router} from "@angular/router";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-points-of-interest-list',
  templateUrl: './points-of-interest-list.component.html',
  styleUrls: ['./points-of-interest-list.component.scss']
})
export class PointsOfInterestListComponent implements OnInit, OnDestroy {

  pois$: Observable<Page<PointOfInterest>>;
  pageRequest$ = new Subject<PageRequest>();
  destroyed$ = new Subject();

  initialPage = {page: 0, size: 10};

  constructor(private poiHttpService: PoiHttpService,
              private router: Router) { }

  ngOnInit(): void {
    this.pageRequest$.pipe(
      takeUntil(this.destroyed$),
      scan((acc, value) => ({...acc, ...value}))
    ).subscribe(params => this.loadData(params));

    this.pageRequest$.next(this.initialPage);
  }

  onDetail(poi: PointOfInterest) {
    this.router.navigate(['points-of-interest', poi.id]);
  }

  onPage($event: PageEvent) {
    this.pageRequest$.next({size: $event.pageSize, page: $event.pageIndex})
  }

  onFilter(filter: { name: string }) {
    this.pageRequest$.next(filter);
  }

  private loadData(params: PageRequest) {
    this.pois$ = this.poiHttpService.getPointsOfInterest(params);
  }

  ngOnDestroy(): void {
    this.destroyed$.next('');
  }
}
