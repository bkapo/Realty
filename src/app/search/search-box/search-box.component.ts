import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MatSnackBar } from '@angular/material';
import { InvolvepdPartyModel } from './../../shared/models/involved-party.model';
import { IPService } from '../../core/involved-party.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  involvedparties: Array<InvolvepdPartyModel>;

  constructor(public ipService: IPService, public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onEnter(q: string) {
    this.involvedparties = null;
    this.ipService.searchInolvedPartyByLastName(q)
    .subscribe(
    (people: InvolvepdPartyModel[]) => this.involvedparties = people,
    error => this.setError(error)
    // (err: HttpErrorResponse) => {
    //   if (err.error instanceof Error) {
    //     // A client-side or network error occurred. Handle it accordingly.
    //     console.log('An error occurred:', err.error.message);
    //   } else {
    //     // The backend returned an unsuccessful response code.
    //     // The response body may contain clues as to what went wrong,
    //     console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
    //     this.openSnackBar('Δεν βρέθηκαν αποτελέσματα...', err.status.toString());
    //   }
    // }
    );

  }
  setError(err) {
    console.log(err);
    this.openSnackBar('Δεν βρέθηκαν αποτελέσματα...', err);
}
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
