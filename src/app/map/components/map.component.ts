import {Component, Input, OnInit} from '@angular/core';
import * as L from 'leaflet';

declare var HeatmapOverlay: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() set heatMapData(data: { data: { lat: number, lng: number, count: number }[] }) {
    if (data) {
      this.heatmapLayer.setData({min: 1, max: 100, ...data});
    }
  }

  @Input() set fitBounds(locations: L.LatLng[]) {
    if (locations) {
      this.map.fitBounds(L.latLngBounds(locations));
    }
  }

  heatmapLayer = new HeatmapOverlay({
    radius: .0003,
    maxOpacity: 0.5,
    scaleRadius: true,
    useLocalExtrema: true,
    latField: 'lat',
    lngField: 'lng',
    valueField: 'count'
  });

  mapOptions = {
    layers: [
      this.heatmapLayer,
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18, attribution: '...'})
    ],
    zoom: 15,
    center: L.latLng([43.263679, -2.923050]),
    maxZoom: 18,
    minZoom: 4
  };

  private map: L.Map;

  constructor() {
  }

  ngOnInit(): void {
  }

  onMapReady(map: L.Map) {
    this.map = map;
  }
}
