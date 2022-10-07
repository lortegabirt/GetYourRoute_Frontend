import {Component, OnInit} from '@angular/core';
import * as L from 'leaflet';

declare var HeatmapOverlay: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  heatmapLayer = new HeatmapOverlay({
    radius: .0003,
    maxOpacity: 0.5,
    scaleRadius: true,
    useLocalExtrema: true,
    latField: 'lat',
    lngField: 'lng',
    valueField: 'count'
  });
  data = {
    data: []
  } as any

  mapOptions = {
    layers: [
      this.heatmapLayer,
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18, attribution: '...'})
    ],
    zoom: 15,
    center: L.latLng([ 43.263679, -2.923050 ]),
    maxZoom: 18,
    minZoom: 4
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  onMapReady(map: L.Map) {
    map.on('mousemove', (event: L.LeafletMouseEvent) => {
      this.data.data.push({
        lat: event.latlng.lat,
        lng: event.latlng.lng,
        count: 1
      });

      this.heatmapLayer.setData(this.data);
    });
  }
}
