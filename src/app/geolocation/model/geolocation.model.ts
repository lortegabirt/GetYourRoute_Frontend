export type LocationPoint = {type: GeoJsonType, coordinates: [number, number]};
type GeoJsonType = "Point" | "MultiPoint" | "LineString" | "MultiLineString" | "Polygon" | "MultiPolygon" | "GeometryCollection" | "Feature" | "FeatureCollection";

export interface Geolocation {
  timestamp: Date;
  itineraryId: string;
  userId: string;
  location: LocationPoint;
}
