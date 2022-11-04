import {Directive, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthenticationService} from "../../service/authentication.service";
import {BehaviorSubject, Observable, of, Subject, takeUntil} from "rxjs";

/**
 * This structural directive renders the template
 * only when the user is authenticated
 */
@Directive({selector: '[appAuthenticated]'})
export class AuthenticatedDirective implements OnInit, OnDestroy{

  destroyed$ = new Subject();

  constructor(private templateRef: TemplateRef<any>,
    private authenticationService: AuthenticationService,
    private viewContainer: ViewContainerRef) { }

  ngOnInit(): void {
    this.authenticationService.isAuthenticated().pipe(
      takeUntil(this.destroyed$)
    ).subscribe(authenticated => {
      if (authenticated) {
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next('');
  }

}
