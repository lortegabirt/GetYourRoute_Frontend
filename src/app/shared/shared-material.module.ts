import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {DeleteMiniFabComponent} from "./component/delete-mini-fab/delete-mini-fab.component";
import {DetailMiniFabComponent} from "./component/detail-mini-fab/detail-mini-fab.component";
import {EditMiniFabComponent} from "./component/edit-mini-fab/edit-mini-fab.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDialogModule} from "@angular/material/dialog";
import {AlertDialogComponent} from "./component/alert-dialog/alert-dialog.component";
import {MatMenuModule} from "@angular/material/menu";
import {MatSliderModule} from "@angular/material/slider";


@NgModule({
  declarations: [
    DeleteMiniFabComponent,
    DetailMiniFabComponent,
    EditMiniFabComponent,
    AlertDialogComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatDialogModule,
    MatMenuModule,
    MatSliderModule,
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatTableModule,
    MatIconModule,
    DeleteMiniFabComponent,
    DetailMiniFabComponent,
    EditMiniFabComponent,
    MatPaginatorModule,
    MatDialogModule,
    AlertDialogComponent,
    MatMenuModule,
    MatSliderModule,
  ]
})
export class SharedMaterialModule { }
