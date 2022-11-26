import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, tap} from "rxjs";
import {Layer, layerGroup, marker} from "leaflet";
import {PoiEnum, PointOfInterest} from "../model/PointOfInterest";
import {Markers} from "../../map/models/marker.model";

@Injectable({
  providedIn: 'root'
})
export class PointOfInterestLayerService implements OnDestroy{

  private pointOfInterestLayers$: BehaviorSubject<{[key: string]: Layer}> = new BehaviorSubject({});

  public setPointsOfInterest(poiList: PointOfInterest[]) {
    const container: {[key: string]: PointOfInterest[]} = Object.values(PoiEnum)
      .map(type => ({[type]: [] as PointOfInterest[]}))
      .reduce((acc, val) => ({...acc, ...val}));

    const poiMap = poiList
      ?.reduce((acc, val) => {
      acc[val.type].push(val);
      return acc;
    } , container) || {};

    const overlay: {[key: string]: Layer} = {};

    Object.keys(poiMap).forEach(key => {
      overlay[key] = poiMap[key]
        .map(poi => marker(poi.location.coordinates.reverse() as [number, number], Markers.yellowMarker())
          .bindPopup(this.getContent(poi)))
        .reduce((acc, val) => acc.addLayer(val), layerGroup())
    })

    this.pointOfInterestLayers$.next(overlay);
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
    console.log('destroyed');
    this.pointOfInterestLayers$.complete();
  }

}
