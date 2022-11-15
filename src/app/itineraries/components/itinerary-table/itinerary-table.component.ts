import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Itinerary} from "../../model/Itinerary.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {Page} from "../../../shared/model/Page.model";

@Component({
  selector: 'app-itinerary-table',
  templateUrl: './itinerary-table.component.html',
  styleUrls: ['./itinerary-table.component.scss']
})
export class ItineraryTableComponent implements AfterViewInit {

  @Input() set dataSource(itineraries: Page<Itinerary>) {
    this.tableDataSource.data = itineraries?.content;
    this.pageMetadata = itineraries;
  }
  @Output() delete = new EventEmitter<Itinerary>();
  @Output() detail = new EventEmitter<Itinerary>();
  @Output() edit = new EventEmitter<Itinerary>();
  @Output() page = new EventEmitter<PageEvent>();

  tableDataSource = new MatTableDataSource<Itinerary>();
  displayedColumns = ['name', 'description', 'beginDate', 'endDate', 'actions'];
  pageMetadata: Page<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit(): void {
    // this.tableDataSource.paginator = this.paginator;
  }

  onDetail(itinerary: Itinerary) {
    this.detail.emit(itinerary);
  }

  onDelete(itinerary: Itinerary) {
    this.delete.emit(itinerary);
  }

  onEdit(itinerary: Itinerary) {
    this.edit.emit(itinerary);
  }

  onPage($event: PageEvent) {
    this.page.emit($event);
  }
}
