import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {
  propertyID: number;

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onEnter(q: string) {
    // this.ipService.searchInolvedPartyByLastName(q)
    //   .subscribe(
    //   (people: InvolvepdPartyModel[]) => this.involvedparties = people,
    //   error => this.openSnackBar(error, 'Search')
    //   );
    // const propID: number = +q;
    this.propertyID  = +q;
    // this.router.navigate(['/rpList', propID]);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
