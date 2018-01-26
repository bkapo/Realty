import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map, filter, catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';


import { INVOLVEDPARTY_API_URL } from './data.service';
import { InvolvepdPartyModel } from '../shared/models/involved-party.model';
import { DemandModel } from '../shared/models/demand.model';
import { RealEstatePropertyModel } from '../shared/models/realestate-property.model';

@Injectable()
export class IPService {

    REST_API_URL: string = INVOLVEDPARTY_API_URL;

    constructor(public http: HttpClient) {
        this.http = http;
    }

    searchInolvedPartyByLastName(name: string): Observable<InvolvepdPartyModel[]> {
        const url = this.REST_API_URL + '/GetByName/' + name;
        return this.http.get<InvolvepdPartyModel[]>(url)
            .pipe(
            catchError(this.handleError('searchInolvedPartyByLastName', []))
            );
    }

    searchInolvedPartyByTypeAndLastName(typeid: number, name: string): Observable<InvolvepdPartyModel[]> {
        const url = this.REST_API_URL + '/GetByTypeAndName/' + typeid + '/' + name;
        return this.http.get<InvolvepdPartyModel[]>(url)
            .pipe(
            catchError(this.handleError('searchInolvedPartyByTypeAndLastName', []))
            );
    }

    getInvolvedPartyByType(typeId: number): Observable<InvolvepdPartyModel[]> {
        const url = this.REST_API_URL + '/GetByType/' + typeId;
        console.log(url);
        return this.http.get<InvolvepdPartyModel[]>(url).pipe(
            catchError(this.handleError('getInvolvedPartyByType', []))
            );
    }

    addInvolvedParty(ip): Observable<InvolvepdPartyModel> {
        const body = JSON.stringify(ip);
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        return this.http.post(this.REST_API_URL, body, httpOptions).pipe(
            // tap(_ => this.log(`updated hero id=${hero.id}`)),
            catchError(this.handleError<any>('addInvolvedParty'))
        );
    }

    updateInvolvedParty(ip): Observable<InvolvepdPartyModel> {
        const url = this.REST_API_URL + '/' + ip.InvolvedPartyId;
        const body = JSON.stringify(ip);
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        return this.http.put(url, body, httpOptions).pipe(
            // tap(_ => this.log(`updated hero id=${hero.id}`)),
            catchError(this.handleError<any>('updateInvolvedParty'))
        );
    }

    getDemandsOfInvolvedParty(ipid: number): Observable<DemandModel[]> {
        const url = this.REST_API_URL + '/' + ipid + '/Demand/';
        return this.http.get<DemandModel[]>(url)
            .pipe(
            catchError(this.handleError('getDemandsOfInvolvedParty', []))
            );
    }

    getPropertiesOfInvolvedParty(ipid: number): Observable<RealEstatePropertyModel[]> {
        const url = this.REST_API_URL + '/' + ipid + '/RealEstateProperties/';
        return this.http.get<RealEstatePropertyModel[]>(url)
        .pipe(
        catchError(this.handleError('getPropertiesOfInvolvedParty', []))
        );
    }

    getDemandsOfAgent(agentid: number): Observable<DemandModel[]> {
        const url = this.REST_API_URL + '/Agents/' + agentid + '/Demands/';
        return this.http.get<DemandModel[]>(url)
        .pipe(
        catchError(this.handleError('getDemandsOfAgent', []))
        );
    }

    getPropertiesOfAgent(agentid: number): Observable<RealEstatePropertyModel[]> {
        const url = this.REST_API_URL + '/Agents/' + agentid + '/RealEstateProperties/';
        return this.http.get<RealEstatePropertyModel[]>(url)
        .pipe(
        catchError(this.handleError('getPropertiesOfAgent', []))
        );

    }

    saveDeamandOfInvolvedParty(ipid: number, dmid: number, dm: DemandModel): Observable<DemandModel> {
        const body = JSON.stringify(dm);
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        // If we're updating an existing demand
        if (dm.DemandId) {
            const url = this.REST_API_URL + '/' + ipid + '/Demand/' + dmid;
            return this.http.put(url, body, httpOptions).pipe(
                // tap(_ => this.log(`updated hero id=${hero.id}`)),
                catchError(this.handleError<any>('saveDeamandOfInvolvedParty'))
            );
            // Otherwise, create a new demand
        } else {
            const url = this.REST_API_URL + '/' + ipid + '/Demand/';
            return this.http.post(url, body, httpOptions).pipe(
                // tap(_ => this.log(`updated hero id=${hero.id}`)),
                catchError(this.handleError<any>('addInvolvedParty'))
            );
        }
    }


    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {



      if (error.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.log('An error occurred:', error.error.message);
        return Observable.throw(`An error occurred: ${error}`);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
        return Observable.throw(`Δεν βρέθηκαν αποτελέσματα.: ${error.status}`);
      }



            // TODO: send the error to remote logging infrastructure
            // console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            // this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            // return of(result as T);
            // if (error.status === 404) {
            //     return Observable.throw(`${operation} failed: ${error.message}`);
            // } else {
            //     return Observable.throw(`${operation} failed: ${error.message}`);
            // }

        };
    }

}

