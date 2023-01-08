import {LocationPoint} from "../../geolocation/model/geolocation.model";

export interface PointOfInterest {
  id: string;
  name: string;
  type: PoiEnum;
  location: LocationPoint;
  properties: {[key: string]: string};
}

export enum PoiEnum {
  ACCOMMODATION = 'ACCOMMODATION',
  RESTAURANT = 'RESTAURANT',
  ALL = '',
}
