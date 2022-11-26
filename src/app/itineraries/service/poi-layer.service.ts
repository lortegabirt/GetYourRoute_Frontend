import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Layer, LayerGroup, layerGroup, marker} from "leaflet";
import {PoiEnum, PointOfInterest} from "../../point-of-interest/model/PointOfInterest";
import {poiMarker} from "../../map/models/marker.model";
import {TitleCasePipe} from "@angular/common";

@Injectable({
  providedIn: 'root',
})
export class PointOfInterestLayerService implements OnDestroy{

  private pointOfInterestLayers$: BehaviorSubject<{[key: string]: Layer}> = new BehaviorSubject({});

  constructor(private titleCasePipe: TitleCasePipe) {
  }

  public setPointsOfInterest(poiList: PointOfInterest[]) {
    const container: {[key: string]: LayerGroup} = Object.values(PoiEnum)
      .map(type => ({[this.titleCasePipe.transform(type)]: layerGroup()}))
      .reduce((acc, val) => ({...acc, ...val}));

    const overlay: {[key: string]: Layer}= poiList
      ?.reduce((acc, val) => {
      acc[this.titleCasePipe.transform(val.type)].addLayer(this.toLayer(val))
      return acc;
    } , container) || {};

    this.pointOfInterestLayers$.next(overlay);
  }
  private toLayer(poi: PointOfInterest): Layer {
    return marker(poi.location.coordinates, poiMarker(poi.type)())
          .bindPopup(this.getContent(poi));
  }

  private getContent(poi: PointOfInterest) {
    const properties = Object.entries(poi.properties)
      .map(property => `<li>${property[0]}: ${property[1]}</li>`)
    return `
          <div class="prose prose-slate prose-headings:text-slate-600">
            <h3>${poi.name}</h3>
            <ul>${properties.join(' ')}</ul>
          </div>
           `;
  }

  public getPointsOfInterestOverlay() {
    return this.pointOfInterestLayers$.asObservable();
  }

  ngOnDestroy(): void {
    this.pointOfInterestLayers$.complete();
  }

}
