import {LocationPoint} from "../../geolocation/model/geolocation.model";

export type PoiType = 'ACCOMMODATION' | 'RESTAURANT';

export interface PointOfInterest {
  id: string;
  name: string;
  type: PoiType;
  location: LocationPoint;
  properties: {[key: string]: string};
}

export enum PoiEnum {
  ACCOMMODATION = 'ACCOMMODATION',
  RESTAURANT = 'RESTAURANT',
}
