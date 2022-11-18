import {Component, Input, OnInit} from '@angular/core';
import * as L from 'leaflet';

declare var HeatmapOverlay: any;

export interface CustomMarker {
  id: string;
  options: L.MarkerOptions;
  location: [number, number];
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() set heatMapData(data: { data: { lat: number, lng: number, count: number }[] }) {
    const heatmapData = {min: 1, max: 100, data: data?.data || []};
    this.heatmapLayer.setData(heatmapData);
  }

  @Input() set fitBounds(locations: L.LatLng[]) {
    if (locations?.length) {
      this.map?.fitBounds(L.latLngBounds(locations));
    }
  }

  @Input() set marker(marker: CustomMarker) {
    this.addMarker(marker);
    this.drawMarkers();
  }

  @Input() set markerCollection(markers: CustomMarker[]) {
    if (markers?.length) {
      markers.forEach(this.addMarker);
    }
    this.drawMarkers();
  }

  @Input() extraLayers: L.Layer[] = [];

  heatmapLayer = new HeatmapOverlay({
    radius: .0002,
    maxOpacity: 0.5,
    scaleRadius: true,
    useLocalExtrema: true,
    latField: 'lat',
    lngField: 'lng',
    valueField: 'count'
  });

  markerMap: Map<string, L.Marker> = new Map<string, L.Marker>()
  markers: L.Marker[] = [];

  maps = {
    normal: L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18, attribution: '© OpenStreetMap'}),
    dark: L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {maxZoom: 18, attribution: '© OpenStreetMap'}),
  }

  mapOptions: L.MapOptions = {
    layers: [
      this.heatmapLayer,
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18, attribution: '© OpenStreetMap'})
    ],
    zoom: 15,
    center: L.latLng([43.263679, -2.923050]),
    maxZoom: 18,
    minZoom: 4,
  };

  private map: L.Map;

  constructor() {
  }

  ngOnInit(): void {
  }

  onMapReady(map: L.Map) {
    this.map = map;
    this.map.addControl(L.control.layers(this.maps));
  }

  private addMarker(marker: CustomMarker) {
    if (this.markerMap.has(marker.id)) {
      this.clearMarker(marker.id);
    }
    this.markerMap.set(marker.id, L.marker(marker.location, marker.options));
  }

  private drawMarkers() {
    this.markers = Array.from(this.markerMap.values());
  }

  private clearMarker(id: string) {
    this.markerMap.delete(id);
    this.markers = Array.from(this.markerMap.values());
  }
}
