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
      error => this.openSnackBar(error, 'Search')
      );

  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
