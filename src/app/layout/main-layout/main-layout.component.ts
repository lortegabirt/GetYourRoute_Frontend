import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../service/authentication.service";
import {BehaviorSubject, Observable, of} from "rxjs";
import {Session} from "../../authentication/model/Session.model";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  session$: Observable<Session> = of(null);

  constructor(private router: Router, private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.session$ = this.authService.session;
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['auth', 'login']);
  }

  onLogin() {
    this.router.navigate(['auth', 'login']);
  }
}
