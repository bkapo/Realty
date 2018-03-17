import { Component, OnInit } from '@angular/core';
import { RealEstatePropertyModel } from '../../shared/models/realestate-property.model';
import { REPService } from '../../core/realestate-property.service';
import { Observable } from 'rxjs/Observable';
import { ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  // selector: 'app-realty-property-search',
  templateUrl: './realty-property-search.component.html',
  styleUrls: ['./realty-property-search.component.css']
})
export class RealtyPropertySearchComponent implements OnInit {
  realesateproeprties: Array<RealEstatePropertyModel>;
  constructor(public repService: REPService, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onEnter(q: string) {

    // this.realesateproeprties$ = this.route.paramMap
    // .switchMap((params: ParamMap) => {
    //   return this.repService.searchForProperty(q);
    // });

    this.repService.searchForProperty(q).subscribe(
      (rp: RealEstatePropertyModel[]) => {
        this.realesateproeprties = rp;
      },
      // error => this.openSnackBar(error, 'Search RE')
    );
  }

}
