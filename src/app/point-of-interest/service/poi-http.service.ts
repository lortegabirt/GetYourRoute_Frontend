import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Page, PageRequest} from "../../shared/model/Page.model";
import {PointOfInterest} from "../model/PointOfInterest";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PoiHttpService {
  private readonly baseUrl = environment.backend.baseUrl;
  private readonly path = environment.backend.endpoints.pointsOfInterest;

  constructor(private http: HttpClient) {}

  public getPointsOfInterest(params: PageRequest = {}): Observable<Page<PointOfInterest>> {
    return this.http.get<Page<PointOfInterest>>(`${this.baseUrl}${this.path}`, {params});
  }

  public getPointOfInterest(id: string): Observable<PointOfInterest> {
    return this.http.get<PointOfInterest>(`${this.baseUrl}${this.path}id/${id}`);
  }
}
