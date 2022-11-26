export type LocationPoint = {coordinates: [number, number]};

export interface Geolocation {
  timestamp: Date;
  itineraryId: string;
  userId: string;
  location: LocationPoint;
}
