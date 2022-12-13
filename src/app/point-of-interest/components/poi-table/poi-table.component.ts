import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Page} from "../../../shared/model/Page.model";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {PointOfInterest} from "../../model/PointOfInterest";

@Component({
  selector: 'app-poi-table',
  templateUrl: './poi-table.component.html',
  styleUrls: ['./poi-table.component.scss']
})
export class PoiTableComponent implements OnInit {

  @Input() set dataSource(itineraries: Page<PointOfInterest>) {
    this.tableDataSource.data = itineraries?.content;
    this.pageMetadata = itineraries;
  }
  @Output() delete = new EventEmitter<PointOfInterest>();
  @Output() detail = new EventEmitter<PointOfInterest>();
  @Output() edit = new EventEmitter<PointOfInterest>();
  @Output() page = new EventEmitter<PageEvent>();

  tableDataSource = new MatTableDataSource<PointOfInterest>();
  displayedColumns = ['name', 'type', 'actions'];
  pageMetadata: Page<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  onDetail(poi: PointOfInterest) {
    this.detail.emit(poi);
  }

  onPage($event: PageEvent) {
    this.page.emit($event);
  }

  ngOnInit(): void {
  }

}
