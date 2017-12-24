import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map, filter, catchError } from 'rxjs/operators';

import { ESTATEPROPERTIES_API_URL } from './data.service'
import { DemandModel } from '../shared/models/demand.model';
import { RealEstatePropertyModel } from '../shared/models/realestate-property.model';

@Injectable()
export class REPService {

    REST_API_URL: string = ESTATEPROPERTIES_API_URL;

    constructor(public http: HttpClient) {
        this.http = http;
    }

    /**
     * Search for real eastate property...(SiteCode or RealEstatePropertyId)
     */
    searchForProperty(src: string): Observable<RealEstatePropertyModel[]> {
        const url = this.REST_API_URL + '/search/' + src;
        return this.http.get<RealEstatePropertyModel[]>(url)
            .pipe(
            catchError(this.handleError('searchForProperty', []))
            );
    }

    demandMatching(dm: DemandModel): Observable<RealEstatePropertyModel[]> {
        const url = this.REST_API_URL + '/DemandMatching/';
        const body = JSON.stringify(dm);
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        return this.http.post(url, body, httpOptions).pipe(
            // tap(_ => this.log(`updated hero id=${hero.id}`)),
            catchError(this.handleError<any>('demandMatching'))
        );
    }

    /**
 * Search for real eastate property...(RealEstatePropertyId)
 */
    getPropertybyid(id: number): Observable<RealEstatePropertyModel> {
        const url = this.REST_API_URL + '/' + id;
        return this.http.get<RealEstatePropertyModel>(url)
            .pipe(
            catchError(this.handleError<any>('getPropertybyid'))
            );
    }

    addProperty(estateProp: RealEstatePropertyModel): Observable<RealEstatePropertyModel> {
        const body = JSON.stringify(estateProp);
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        return this.http.post(this.REST_API_URL, body, httpOptions).pipe(
            // tap(_ => this.log(`updated hero id=${hero.id}`)),
            catchError(this.handleError<any>('addProperty'))
        );
    }

    updateProperty(estateProp: RealEstatePropertyModel): Observable<RealEstatePropertyModel> {
        const url = this.REST_API_URL + '/' + estateProp.RealEstatePropertyId;
        const body = JSON.stringify(estateProp);
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        return this.http.put(url, body, httpOptions).pipe(
            // tap(_ => this.log(`updated hero id=${hero.id}`)),
            catchError(this.handleError<any>('updateInvolvedParty'))
        );
    }


    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            // this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            // return of(result as T);
            if (error.status === 404) {
                return Observable.throw('Not found');
            } else {
                return Observable.throw(error || 'Server error');
            }

        };
    }

}

