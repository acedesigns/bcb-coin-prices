/* =======================================================
 *
 * Created by anele on on 2021/04/11.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap  } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { InterValCoin } from "../Models/CoinModel";

@Injectable({
  providedIn: 'root'
})

export class HttpService {

    appConfig = {
        apiUrl      : 'http://localhost:4200/api',
        headers     : new HttpHeaders({
            'Content-Type' : 'application/json',
            'X-Requested-With' 	: 'XMLHttpRequest',
            'Access-Control-Allow-Origin'	: '*',
            'Access-Control-Allow-Headers'	: '*',
        })
    };

    constructor( private http: HttpClient) { }


    private catchError( error: HttpErrorResponse | any ) {
        return throwError( error   || "Server Error")
    }

    private extractData (resp : HttpResponse<any>) {
        return resp;
    }


    getData(verb: string): Observable<any> {
        return this.http.get(this.appConfig.apiUrl + verb , {headers : this.appConfig.headers})
            .pipe(
                catchError(err => {
                    return this.catchError(err);
                }),
                map(
                    (response: any) => {
                        return this.extractData(response);
                    }
                )
            );
    }


    getIntervalData(verb: string, params: any) {

        return this.http.get(this.appConfig.apiUrl + verb + '/'+params.coin+'/'+params.interval+'/'+params.currency, {headers : this.appConfig.headers })
            .pipe(
                catchError(err => {
                    return this.catchError(err);
                }),
                map(
                    (response: InterValCoin) => {
                        return { data: response.Data }
                    }
                )
            );
    }


    postData(verb: string, data: any ): Observable<any> {
        return this.http.post( this.appConfig.apiUrl + verb, data, {headers : this.appConfig.headers});
    }

}
