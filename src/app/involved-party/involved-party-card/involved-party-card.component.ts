import { Component, OnInit, Input } from '@angular/core';

import { DemandModel } from '../../shared/models/demand.model';
import { InvolvepdPartyModel } from '../../shared/models/involved-party.model';

// import { DemandAddComponent } from '../../demands/demand-add.component/demand-add.component'
// import { DemandListPage } from '../../demands/demand-list.component/demand-list.component'
// import { InvolvedPartyEditPage } from '../../involved-parties/involved-party-edit.page/involved-party-edit.page'
// import { RealEstatePropertyListPage }
// from '../../realestate-properties/realestate-property-list.component/realestate-property-list.component'


@Component({
  selector: 'app-involved-party-card',
  templateUrl: './involved-party-card.component.html',
  styleUrls: ['./involved-party-card.component.css']
})
export class InvolvedPartyCardComponent implements OnInit {
  @Input() people: InvolvepdPartyModel;
  newDm: DemandModel;

  constructor() { }

  ngOnInit() {
  }

}
