import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Itinerary} from "../../model/Itinerary.model";
import {ItinerariesHttpService} from "../../service/itineraries.http.service";
import {MatDialog} from "@angular/material/dialog";
import {AlertDialogComponent, AlertDialogData} from "../../../shared/component/alert-dialog/alert-dialog.component";
import {Router} from "@angular/router";
import {ItineraryEditComponent} from "../../components/itinerary-edit/itinerary-edit.component";
import {Page} from "../../../shared/model/Page.model";

@Component({
  selector: 'app-itineraries',
  templateUrl: './itineraries.component.html',
  styleUrls: ['./itineraries.component.scss']
})
export class ItinerariesComponent implements OnInit {

  itineraries$: Observable<Page<Itinerary>>;

  constructor(private itinerariesHttpService: ItinerariesHttpService,
              private router: Router,
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
          .subscribe(_ => this.loadData());
      }
    })
  }

  private loadData() {
    this.itineraries$ = this.itinerariesHttpService.getItineraries();
  }

}
