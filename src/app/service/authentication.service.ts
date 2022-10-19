import { Injectable } from '@angular/core';
import {BehaviorSubject, concatMap, delay, map, Observable, tap, timeout} from "rxjs";
import jwtDecode from "jwt-decode";
import {Jwt, Session} from "../shared/model/Session.model";
import {AuthenticationHttpService} from "./authentication.http.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly _session: BehaviorSubject<Session | null> =
    new BehaviorSubject<Session | null>(null);

  constructor(private authenticationHttp: AuthenticationHttpService,
              private router: Router) { }

  public login({email, password}: {email: string, password: string}): Observable<Session | null> {
    return this.authenticationHttp.login(email, password).pipe(
      map(response => ({...response, ...jwtDecode(response.token)}) as Jwt),
      map(jwt => new Session(jwt)),
      tap(session => localStorage.setItem('session', JSON.stringify(session))),
      tap(session => this._session.next(session)),
      concatMap(_ => this._session.asObservable())
    );
  }

  public logout() {
    this._session.next(null);
    localStorage.removeItem('session');
    this.router.navigate(['login']);
  }

  public get session() {
    return this._session.asObservable();
  }
}
