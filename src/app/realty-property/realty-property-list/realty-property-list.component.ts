import { Component, OnInit, Input } from '@angular/core';

import { RealEstatePropertyModel } from '../../shared/models/realestate-property.model';


@Component({
  selector: 'app-realty-property-list',
  templateUrl: './realty-property-list.component.html',
  styleUrls: ['./realty-property-list.component.css']
})
export class RealtyPropertyListComponent implements OnInit {
  @Input() rpList: Array<RealEstatePropertyModel>;

  constructor() { }

  ngOnInit() {
  }

}
