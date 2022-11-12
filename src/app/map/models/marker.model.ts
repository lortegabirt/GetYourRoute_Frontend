import * as L from 'leaflet';

const redMarker: (title: string) => L.MarkerOptions = (title= '') =>  ({
  icon: L.icon({
    iconSize: [25, 41],
    iconAnchor: [13, 41],
    iconUrl: 'assets/markers/marker-icon-red.png',
    shadowUrl: 'assets/markers/marker-shadow.png'
  }),
  title
});


const yellowMarker = {
  icon: L.icon({
    iconSize: [25, 41],
    iconAnchor: [13, 41],
    iconUrl: 'assets/img/markers/marker-icon-yellow.png',
    shadowUrl: 'assets/img/markers/marker-shadow.png'
  })
};

const greenMarker = {
  icon: L.icon({
    iconSize: [25, 41],
    iconAnchor: [13, 41],
    iconUrl: 'assets/img/markers/marker-icon-green.png',
    shadowUrl: 'assets/img/markers/marker-shadow.png'
  })
};

const orangeMarker = {
  icon: L.icon({
    iconSize: [25, 41],
    iconAnchor: [13, 41],
    iconUrl: 'assets/img/markers/marker-icon-orange.png',
    shadowUrl: 'assets/img/markers/marker-shadow.png'
  })
};

const pinkMarker = {
  icon: L.icon({
    iconSize: [25, 41],
    iconAnchor: [13, 41],
    iconUrl: 'assets/img/markers/marker-icon-pink.png',
    shadowUrl: 'assets/img/markers/marker-shadow.png'
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
    iconUrl: 'assets/img/markers/marker-icon-violet.png',
    shadowUrl: 'assets/img/markers/marker-shadow.png'
  })
};

export const Markers = {
  redMarker,
  pinkMarker,
}
