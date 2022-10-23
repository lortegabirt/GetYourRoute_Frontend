import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Itinerary} from "../../model/Itinerary.model";
import {ItinerariesHttpService} from "../../service/itineraries.http.service";
import {MatDialog} from "@angular/material/dialog";
import {AlertDialogComponent, AlertDialogData} from "../../../shared/component/alert-dialog/alert-dialog.component";

@Component({
  selector: 'app-itineraries',
  templateUrl: './itineraries.component.html',
  styleUrls: ['./itineraries.component.scss']
})
export class ItinerariesComponent implements OnInit {

  itineraries$: Observable<Itinerary[]>;

  constructor(private itinerariesHttpService: ItinerariesHttpService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.loadData();
  }

  onDelete(itinerary: Itinerary) {
    const matDialogRef = this.dialog.open(
      AlertDialogComponent,
      {data: {title: 'Delete Itinerary', message: 'Do you really want to delete the itinerary?'} as AlertDialogData});
    matDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.itinerariesHttpService.deleteItinerary(itinerary.id)
          .subscribe(_ => this.loadData());
      }
    })
  }

  private loadData() {
    this.itineraries$ = this.itinerariesHttpService.getItineraries();
  }

}
