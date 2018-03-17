import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, filter } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class Blobservice {
    images: ReplaySubject<any> = new ReplaySubject();
    // images: Subject<string[]>;
    imagelist: Array<string> = new Array<string>();

    constructor(public http: HttpClient) {
        this.http = http;

        this.imagelist.push('../assets/img/re1.jpeg');
        this.imagelist.push('../assets/img/re2.jpeg');
        this.imagelist.push('../assets/img/re3.jpeg');
        this.imagelist.push('../assets/img/re4.jpeg');

        this.images.next(this.imagelist);
        console.log(this.imagelist);

    }

    getImagesOfProperty(propertyId: number): Observable< Array<string>> {
        // let url = this.REST_API_URL + '/GetByType/' + typeId;
        // return this.http.get(url)
        //     .map(res => res.json())
        //     .catch(this.handleError);
        // console.log(this.images);
        return this.images;
        // return  this.images.asObservable();
    }

}
