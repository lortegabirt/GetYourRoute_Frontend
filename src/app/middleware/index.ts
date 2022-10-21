import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthenticationInterceptor} from "./authentication.interceptor";
import {GlobalErrorHandler} from "./global-error.handler";
import {ErrorHandler} from "@angular/core";

export const httpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true}
];

export const globalErrorHandlerProvider = {provide: ErrorHandler, useClass: GlobalErrorHandler}
