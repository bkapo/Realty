import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { InvolvepdPartyModel, InvolvedPartyType } from '../../shared/models/involved-party.model';
import { IPService } from '../../core/involved-party.service';

@Component({
  selector: 'app-involved-party-list-container',
  templateUrl: './involved-party-list-container.component.html',
  styleUrls: ['./involved-party-list-container.component.css']
})
export class InvolvedPartyListContainerComponent implements OnInit, OnDestroy {
  private invPartyType: InvolvedPartyType;
  invPartyList: Array<InvolvepdPartyModel>;
  private sub: any;

  constructor(public ipService: IPService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('pppppp');
    this.sub = this.route.params.subscribe(params => {
      this.invPartyType = +params['typeid']; // (+) converts string 'id' to a number
      this.getAllInvolvedParties();
    });
  }

  getAllInvolvedParties() {
    console.log(this.invPartyType);
    this.ipService.getInvolvedPartyByType(1).subscribe((inv: InvolvepdPartyModel[]) => {
      console.log(inv);
      this.invPartyList = inv;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
