import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { RealEstatePropertyModel } from '../../shared/models/realestate-property.model';
import { PropertyCategory } from '../../shared/models/propertyabstract.model';
import { REPService } from '../../core/realestate-property.service';

@Component({
  selector: 'app-realty-property-edititem',
  templateUrl: './realty-property-edititem.component.html',
  styleUrls: ['./realty-property-edititem.component.css']
})
export class RealtyPropertyEdititemComponent implements OnInit {
  realesateproeprties: Array<RealEstatePropertyModel>;
  estatepropertyobj: RealEstatePropertyModel;
  propertyCategory: PropertyCategory;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public repService: REPService
  ) {}

  ngOnInit() {
    console.log('edit');
    this.realesateproeprties = null;

    this.route.params.subscribe(params => {
      console.log(params);
      if (params['id']) {
        const propID: number = +params['id'];
        this.repService.getPropertybyid(propID).subscribe(
          (rp: RealEstatePropertyModel) => {
            // this.realesateproeprties = [];
            // this.realesateproeprties.push(rp);
            this.estatepropertyobj = rp;
            console.log(this.estatepropertyobj);
            this.propertyCategory  = this.estatepropertyobj.PropertyCategory;
          },
          // error => this.openSnackBar(error, 'Search RE')
        );

      }
    });

  }



}
