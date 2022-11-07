import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Itinerary} from "../../model/Itinerary.model";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ItinerariesHttpService} from "../../service/itineraries.http.service";

@Component({
  selector: 'app-itinerary-edit',
  templateUrl: './itinerary-edit.component.html',
  styleUrls: ['./itinerary-edit.component.scss']
})
export class ItineraryEditComponent implements OnInit {

  itinerary: Itinerary;

  itineraryForm = this.formBuilder.group({
    name: [this.data.name],
    description: [this.data.description],
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: Itinerary,
              private matDialogRef: MatDialogRef<ItineraryEditComponent>,
              private itineraryHttpService: ItinerariesHttpService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.itinerary = this.data;
  }

  onSave(): void {
    this.matDialogRef.close({...this.itinerary, ...this.itineraryForm.value})
  }

}
