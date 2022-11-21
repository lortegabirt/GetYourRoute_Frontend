import {Injectable} from '@angular/core';
import {BehaviorSubject, concatMap, map, Observable, tap} from "rxjs";
import jwtDecode from "jwt-decode";
import {Jwt, Session} from "../authentication/model/Session.model";
import {AuthenticationHttpService} from "./authentication.http.service";
import {Router} from "@angular/router";
import {User} from "../user/model/User.model";

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
      tap(response => localStorage.setItem('token', response.token)),
      map(response => ({...response, ...jwtDecode(response.token)}) as Jwt),
      map(jwt => new Session(jwt)),
      tap(session => this._session.next(session)),
      concatMap(_ => this._session.asObservable())
    );
  }

  public signup(user: User) {
    return this.authenticationHttp.signup(user);
  }

  public logout() {
    this._session.next(null);
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

  public get session() {
    return this._session.asObservable();
  }

  public isAuthenticated(): Observable<boolean> {
    return this.session.pipe(
      map(session => session && !session.isExpired),
    );
  }

  public restoreSession() {
    const token = localStorage.getItem('token');
    const restoredSession = token && new Session({token, ...jwtDecode(token)});
    if (!!token && !restoredSession?.isExpired) {
      console.log('session restored');
      this._session.next(restoredSession);
    } else {
      console.log('token expired');
      this.router.navigate(['']);
    }
  }

}
