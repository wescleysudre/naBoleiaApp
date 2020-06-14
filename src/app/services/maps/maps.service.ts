import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

import { GeoJson } from '../../models/maps';
import * as mapboxgl from 'mapbox-gl';

// import { AngularFireDatabase, FirebaseListObservable } from 'angu'

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor() {
    // mapboxgl.accessToken = environment.mapbox.acces_token
  }
}
