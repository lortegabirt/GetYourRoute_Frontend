import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Itinerary} from "../../model/Itinerary.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-itinerary-table',
  templateUrl: './itinerary-table.component.html',
  styleUrls: ['./itinerary-table.component.scss']
})
export class ItineraryTableComponent implements AfterViewInit {

  @Input() set dataSource(itineraries: Itinerary[]) {
    this.tableDataSource.data = itineraries;
  }
  tableDataSource = new MatTableDataSource<Itinerary>();
  displayedColumns = ['name', 'description', 'beginDate', 'endDate', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit(): void {
    this.tableDataSource.paginator = this.paginator;
  }

  onDetail(itinerary: Itinerary) {
    console.log('detail ' + itinerary.id);
  }

  onDelete(itinerary: Itinerary) {
    console.log('delete ' + itinerary.id)
  }

  onEdit(itinerary: Itinerary) {
    console.log('edit ' + itinerary.id)
  }
}
