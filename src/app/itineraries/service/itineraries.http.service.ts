import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Itinerary} from "../model/Itinerary.model";
import {environment} from "../../../environments/environment";
import {Page} from "../../shared/model/Page.model";

@Injectable({
  providedIn: 'root'
})
export class ItinerariesHttpService {

  private readonly baseUrl = environment.backend.baseUrl;
  private readonly path = environment.backend.endpoints.itineraries;

  constructor(private http: HttpClient) { }

  public getItineraries(size = 10, page = 0): Observable<Page<Itinerary>> {
    return this.http.get<Page<Itinerary>>(`${this.baseUrl}${this.path}`, {params: {size, page}});
  }

  public getItinerary(id: string): Observable<Itinerary> {
    return this.http.get<Itinerary>(`${this.baseUrl}${this.path}id/${id}`);
  }

  public deleteItinerary(itineraryId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}${this.path}${itineraryId}`)
  }

  public updateItinerary(itineraryId: string, itinerary: Itinerary): Observable<Itinerary> {
    return this.http.put<Itinerary>(`${this.baseUrl}${this.path}${itineraryId}`, itinerary);
  }

}
