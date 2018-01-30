import { Component, OnInit, Input } from '@angular/core';

import { InvolvepdPartyModel } from '../../shared/models/involved-party.model';

@Component({
  selector: 'app-involved-party-list',
  templateUrl: './involved-party-list.component.html',
  styleUrls: ['./involved-party-list.component.css']
})
export class InvolvedPartyListComponent implements OnInit {
  @Input() ipList: Array<InvolvepdPartyModel>;

  constructor( ) { }

  ngOnInit() {

  }




}
