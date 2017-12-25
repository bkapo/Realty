import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

import { InvolvedPartyCardComponent } from './involved-party-card/involved-party-card.component';
import { InvolvedPartyListComponent } from './involved-party-list/involved-party-list.component';
import { involvedPartyRoutes } from './involved-party-routing.module';


@NgModule({
    imports: [
        SharedModule,
        MaterialModule,
        involvedPartyRoutes
    ],
    declarations: [
        InvolvedPartyCardComponent,
        InvolvedPartyListComponent
    ],
    exports: [
    ],
    providers: []
})
export class InvolvedPartyModule { }
