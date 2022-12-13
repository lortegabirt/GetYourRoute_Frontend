import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Itinerary} from "../model/Itinerary.model";
import {environment} from "../../../environments/environment";
import {Page} from "../../shared/model/Page.model";

export type PageRequest = {[key: string]: string | number};

@Injectable({
  providedIn: 'root'
})
export class ItinerariesHttpService {

  private readonly baseUrl = environment.backend.baseUrl;
  private readonly path = environment.backend.endpoints.itineraries;

  constructor(private http: HttpClient) { }

  public getItineraries(params: PageRequest = {}): Observable<Page<Itinerary>> {
    return this.http.get<Page<Itinerary>>(`${this.baseUrl}${this.path}`, {params}).pipe(
      map(page => {
        page.content = this.mapDatesCollection(page.content);
        return page;
      })
    );
  }

  public getItinerary(id: string): Observable<Itinerary> {
    return this.http.get<Itinerary>(`${this.baseUrl}${this.path}id/${id}`).pipe(
      map(itinerary => this.mapDatesElement(itinerary))
    );
  }

  public deleteItinerary(itineraryId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}${this.path}${itineraryId}`)
  }

  public updateItinerary(itineraryId: string, itinerary: Itinerary): Observable<Itinerary> {
    return this.http.put<Itinerary>(`${this.baseUrl}${this.path}${itineraryId}`, itinerary);
  }

  public mapDatesCollection(itineraries: Itinerary[]): Itinerary[] {
    return itineraries.map(itinerary => this.mapDatesElement(itinerary));
  }

  public mapDatesElement(itinerary: Itinerary) {
    itinerary.beginDate = new Date(itinerary.beginDate);
    itinerary.endDate = new Date(itinerary.endDate);
    return itinerary;
  }

}
