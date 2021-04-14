/* =======================================================
 *
 * Created by anele on on 2021/04/11.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { catchError, filter, take, switchMap, map } from "rxjs/operators";
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from "@angular/common/http";

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

        return next.handle(request)
            .pipe(
                map((event: HttpEvent<any>) => {
                    console.log('event--- || ', event);
                    if (event instanceof HttpResponse) {
                        console.log('event--->>>', event);
                    }
                    return event;
                })
            );
    }
}