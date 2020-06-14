import { environment } from '../../../environments/environment';
import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
// const mapboxgl = require('mapbox-gl');

import * as mapboxgl from "mapbox-gl/dist/mapbox-gl";
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 37.75;
  lng = -122.41;

  constructor(
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    mapboxgl.accessToken = environment.mapbox.acces_token;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.lng, this.lat]
  });
  // Add map controls
  this.map.addControl(new mapboxgl.NavigationControl());
  }

  openSnackBar(message: string, action: string) {
    this.router.navigate(['/alertas']);
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
