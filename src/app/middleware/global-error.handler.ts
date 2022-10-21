import {ErrorHandler, Injectable, Injector} from "@angular/core";
import {NotificationService} from "../service/notification.service";
import {Router} from "@angular/router";
import {AuthenticationService} from "../service/authentication.service";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private injector: Injector) {
  }

  handleError(error: Error | HttpErrorResponse): void {
    const notifier = this.injector.get(NotificationService);
    const router = this.injector.get(Router);
    const authService = this.injector.get(AuthenticationService);

    if (error instanceof Error) {
      this.handleClientError(error, notifier)
    } else {
      this.handleServerError(error, notifier, authService)
    }

    console.error(error);
  }

  handleClientError(error: Error, notifier: NotificationService) {

  }

  handleServerError(error: HttpErrorResponse, notifier: NotificationService, authService: AuthenticationService) {
    notifier.showError(error.message);
  }

}
