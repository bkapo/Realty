import { Component, OnInit } from '@angular/core';

import { InvolvepdPartyModel } from '../../shared/models/involved-party.model';
import { IPService } from '../../core/involved-party.service';

@Component({
  // selector: 'app-involved-party-list',
  templateUrl: './involved-party-list.component.html',
  styleUrls: ['./involved-party-list.component.css']
})
export class InvolvedPartyListComponent implements OnInit {
  agentList: Array<InvolvepdPartyModel>;

  constructor(public ipService: IPService) { }

  ngOnInit() {
    this.getAllAgents();
  }

  getAllAgents() {
    // const loader = this.loadingCtrl.create({
    //     content: 'Please wait...',
    //    // dismissOnPageChange: true
    // });
    // loader.present();

    this.ipService.getInvolvedPartyByType(1).subscribe((inv: InvolvepdPartyModel[]) => {
      console.log(inv);
      this.agentList = inv;
    });
  }



}
