import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Itinerary} from "../model/Itinerary.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ItinerariesHttpService {

  private readonly baseUrl = environment.backend.baseUrl;
  private readonly path = environment.backend.endpoints.itineraries;

  constructor(private http: HttpClient) { }

  public getItineraries(): Observable<Itinerary[]> {
    return this.http.get<Itinerary[]>(`${this.baseUrl}${this.path}`);
  }

  public getItinerary(id: string): Observable<Itinerary> {
    return this.http.get<Itinerary>(`${this.baseUrl}${this.path}${id}`);
  }

  public deleteItinerary(itineraryId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}${this.path}${itineraryId}`)
  }

  public updateItinerary(itineraryId: string, itinerary: Itinerary): Observable<Itinerary> {
    return this.http.put<Itinerary>(`${this.baseUrl}${this.path}${itineraryId}`, itinerary);
  }

}
