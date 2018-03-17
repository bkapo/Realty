import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { RealEstatePropertyModel } from './../../shared/models/realestate-property.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-realty-property-list-item',
  templateUrl: './realty-property-list-item.component.html',
  styleUrls: ['./realty-property-list-item.component.css']
})
export class RealtyPropertyListItemComponent implements OnInit {
  @Input() realEstate: RealEstatePropertyModel;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

  }

  editre() {
    console.log(this.realEstate.RealEstatePropertyId);
    this.router.navigate(['/realestate', this.realEstate.RealEstatePropertyId]);
  }


}
