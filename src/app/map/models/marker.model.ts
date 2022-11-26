import * as L from 'leaflet';
import {PoiEnum} from "../../point-of-interest/model/PointOfInterest";

const redMarker: (title?: string) => L.MarkerOptions = (title= '') =>  ({
  icon: L.icon({
    iconSize: [25, 41],
    iconAnchor: [13, 41],
    iconUrl: 'assets/markers/marker-icon-red.png',
    shadowUrl: 'assets/markers/marker-shadow.png'
  }),
  title
});


const yellowMarker: (title?: string) => L.MarkerOptions = (title= '') =>  ({
  icon: L.icon({
    iconSize: [25, 41],
    iconAnchor: [13, 41],
    iconUrl: 'assets/markers/marker-icon-yellow.png',
    shadowUrl: 'assets/markers/marker-shadow.png'
  }),
  title
});

const greenMarker: (title?: string) => L.MarkerOptions = (title: '') => ({
  icon: L.icon({
    iconSize: [25, 41],
    iconAnchor: [13, 41],
    iconUrl: 'assets/markers/marker-icon-green.png',
    shadowUrl: 'assets/markers/marker-shadow.png'
  }),
  title
});

const orangeMarker = {
  icon: L.icon({
    iconSize: [25, 41],
    iconAnchor: [13, 41],
    iconUrl: 'assets/markers/marker-icon-orange.png',
    shadowUrl: 'assets/markers/marker-shadow.png'
  })
};

const pinkMarker = {
  icon: L.icon({
    iconSize: [25, 41],
    iconAnchor: [13, 41],
    iconUrl: 'assets/markers/marker-icon-pink.png',
    shadowUrl: 'assets/markers/marker-shadow.png'
  })
};

const blueMarker = {
  icon: L.icon({
    iconSize: [25, 41],
    iconAnchor: [13, 41],
    iconUrl: 'assets/markers/marker-icon-blue.png',
    shadowUrl: 'assets/markers/marker-shadow.png'
  })
};

const violetMarker = {
  icon: L.icon({
    iconSize: [25, 41],
    iconAnchor: [13, 41],
    iconUrl: 'assets/markers/marker-icon-violet.png',
    shadowUrl: 'assets/markers/marker-shadow.png'
  })
};

export const Markers = {
  redMarker,
  yellowMarker,
}

export const poiMarker = (poiType: PoiEnum) => {
  switch (poiType) {
    case PoiEnum.ACCOMMODATION: return yellowMarker
    case PoiEnum.RESTAURANT: return greenMarker
  }
}
