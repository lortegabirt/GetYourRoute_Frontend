import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Geolocation} from "../model/geolocation.model";
import {Page} from "../../shared/model/Page.model";

@Injectable({
  providedIn: 'root'
})
export class GeolocationHttpService {
  private readonly baseUrl = environment.backend.baseUrl;
  private readonly path = environment.backend.endpoints.geolocations;

  constructor(private http: HttpClient) { }

  public getGeolocations(params: {itineraryId?: string} = {}): Observable<Page<Geolocation>> {
    return this.http.get<Page<Geolocation>>(`${this.baseUrl}${this.path}`, {params});
  }
}
