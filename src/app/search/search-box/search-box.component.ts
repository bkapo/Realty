
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
  searchMode = 'Πελάτες';

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
    if (this.searchMode === 'Πελάτες') {

      this.ipService.searchInolvedPartyByLastName(q).subscribe(
        (people: InvolvepdPartyModel[]) => this.involvedparties = people,
        error => this.openSnackBar(error, 'Search IP')
      );

    } else {
      const propID: number = +q;
      this.repService.getPropertybyid(propID).subscribe(
        (rp: RealEstatePropertyModel) => { this.realesateproeprties = []; this.realesateproeprties.push(rp); },
        error => this.openSnackBar(error, 'Search RE')
      );
    }
  }

  onSearchModeClick() {
    if (this.searchMode === 'Πελάτες') {
      this.searchMode = 'Ακίνητα';
    } else {
      this.searchMode = 'Πελάτες';
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  addProperty() {
    this.openSnackBar('addProperty', 'FAB');
  }

  addCommercial() {
    this.openSnackBar('addCommercial', 'FAB');
  }

  addLand() {
    this.openSnackBar('addLand', 'FAB');
  }

  addOther() {
    this.openSnackBar('addOther', 'FAB');
  }

}
