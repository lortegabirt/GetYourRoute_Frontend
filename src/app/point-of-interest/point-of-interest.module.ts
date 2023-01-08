import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PointOfInterestRoutingModule } from './point-of-interest-routing.module';
import { PointsOfInterestListComponent } from './views/points-of-interest-list/points-of-interest-list.component';
import {SharedModule} from "../shared/shared.module";
import { PoiTableComponent } from './components/poi-table/poi-table.component';
import {SharedMaterialModule} from "../shared/shared-material.module";
import { PointOfInterestDetailComponent } from './views/point-of-interest-detail/point-of-interest-detail.component';
import {MapModule} from "../map/map.module";
import { PoiFilterComponent } from './components/poi-filter/poi-filter.component';


@NgModule({
  declarations: [
    PointsOfInterestListComponent,
    PoiTableComponent,
    PointOfInterestDetailComponent,
    PoiFilterComponent
  ],
  imports: [
    CommonModule,
    PointOfInterestRoutingModule,
    SharedModule,
    SharedMaterialModule,
    MapModule
  ]
})
export class PointOfInterestModule { }
