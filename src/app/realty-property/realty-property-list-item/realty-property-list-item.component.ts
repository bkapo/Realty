import { Component, OnInit, Input } from '@angular/core';

import { RealEstatePropertyModel } from './../../shared/models/realestate-property.model';

@Component({
  selector: 'app-realty-property-list-item',
  templateUrl: './realty-property-list-item.component.html',
  styleUrls: ['./realty-property-list-item.component.css']
})
export class RealtyPropertyListItemComponent implements OnInit {
  @Input() realEstate: RealEstatePropertyModel;

  constructor() { }

  ngOnInit() {
  }

}
