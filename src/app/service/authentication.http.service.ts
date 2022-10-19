import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationHttpService {

  private baseUrl = `${environment.backend.baseUrl}`;

  constructor(private http: HttpClient) {
  }

  public login(email: string, password: string): Observable<{token: string}> {
    const path = `${environment.backend.endpoints.login}`;
    return this.http.post<{token: string}>(this.baseUrl + path, {email, password})
  }
}
