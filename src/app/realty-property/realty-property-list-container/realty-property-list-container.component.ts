import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RealEstatePropertyModel } from '../../shared/models/realestate-property.model';
import { REPService } from '../../core/realestate-property.service';


@Component({
  selector: 'app-realty-property-list-container',
  templateUrl: './realty-property-list-container.component.html',
  styleUrls: ['./realty-property-list-container.component.css']
})
export class RealtyPropertyListContainerComponent implements  OnDestroy, OnChanges {
  id: any;
  realtyPropertyList: Array<RealEstatePropertyModel> = [];
  private sub: any;
  @Input() propertyId;

  constructor(public repService: REPService, private route: ActivatedRoute) { }



  ngOnChanges() {
    // this.sub = this.route.params.subscribe(params => {
    //   this.id = +params['id']; // (+) converts string 'id' to a number
    //   this.getPropertybyid();
    // });
    this.getPropertybyid();
  }

  getPropertybyid() {
    this.repService.getPropertybyid(this.propertyId).subscribe((rp: RealEstatePropertyModel) => {
      console.log(rp);
      this.realtyPropertyList = [];
      this.realtyPropertyList.push(rp);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
