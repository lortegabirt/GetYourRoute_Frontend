import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Geolocation} from "../model/geolocation.model";

@Injectable({
  providedIn: 'root'
})
export class GeolocationHttpService {
  private readonly baseUrl = environment.backend.mockUrl;
  private readonly path = environment.backend.endpoints.geolocations;

  constructor(private http: HttpClient) { }

  public getGeolocations(params: {itineraryId?: string} = {}): Observable<Geolocation[]> {
    return this.http.get<Geolocation[]>(`${this.baseUrl}${this.path}`, {params});
  }
}
