export interface Geolocation {
  timestamp: Date;
  itineraryId: string;
  userId: string;
  location: {
    coordinates: {
      values: [number, number];
    };
  };
}
