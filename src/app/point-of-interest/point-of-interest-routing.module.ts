import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PointsOfInterestListComponent} from "./views/points-of-interest-list/points-of-interest-list.component";
import {PointOfInterestDetailComponent} from "./views/point-of-interest-detail/point-of-interest-detail.component";

const routes: Routes = [
  {
    path: '',
    component: PointsOfInterestListComponent,
  },
  {
    path: ':id',
    component: PointOfInterestDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PointOfInterestRoutingModule { }
