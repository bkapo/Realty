import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input } from '@angular/core';

import { RealEstatePropertyModel } from '../../shared/models/realestate-property.model';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-realty-property-list',
  templateUrl: './realty-property-list.component.html',
  styleUrls: ['./realty-property-list.component.css']
})
export class RealtyPropertyListComponent implements OnInit {
  @Input() rpList: Observable<RealEstatePropertyModel[]>;
  orpList$: Observable<RealEstatePropertyModel[]>;
  private selectedId: number;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.orpList$ = this.route.paramMap
    .switchMap((params: ParamMap) => {
      this.selectedId = +params.get('id');
      return this.rpList;
    });
  }

}
