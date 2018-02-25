
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { MatSnackBar } from '@angular/material';

import { RealEstatePropertyModel } from '../../shared/models/realestate-property.model';
import { InvolvepdPartyModel } from '../../shared/models/involved-party.model';
import { REPService } from '../../core/realestate-property.service';
import { IPService } from '../../core/involved-party.service';



@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  propertyID: number;
  involvedparties: Array<InvolvepdPartyModel>;
  realesateproeprties: Array<RealEstatePropertyModel>;

  constructor(
    public snackBar: MatSnackBar,
    private router: Router,
    public repService: REPService,
    public ipService: IPService
  ) { }

  ngOnInit() {
  }

  onEnter(q: string) {
    this.involvedparties = null;
    this.realesateproeprties = null;

    this.ipService.searchInolvedPartyByLastName(q)
      .subscribe(
      (people: InvolvepdPartyModel[]) => this.involvedparties = people,
      error => this.openSnackBar(error, 'Search')
      );
    // const propID: number = +q;
    // this.propertyID  = +q;
    //  this.router.navigate(['/rpList', this.propertyID]);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
