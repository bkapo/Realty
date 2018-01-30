import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { involvedPartyRoutes } from './involved-party-routing.module';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

import { InvolvedPartyListItemComponent } from './involved-party-list-item/involved-party-list-item.component';
import { InvolvedPartyListComponent } from './involved-party-list/involved-party-list.component';
import { InvolvedPartyListContainerComponent } from './involved-party-list-container/involved-party-list-container.component';



@NgModule({
    imports: [
        SharedModule,
        MaterialModule,
        involvedPartyRoutes
    ],
    declarations: [
        InvolvedPartyListItemComponent,
        InvolvedPartyListComponent,
        InvolvedPartyListContainerComponent
    ],
    exports: [
        InvolvedPartyListItemComponent,
        InvolvedPartyListComponent,
        InvolvedPartyListContainerComponent
    ],
    providers: []
})
export class InvolvedPartyModule { }
