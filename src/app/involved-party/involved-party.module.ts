import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

import { InvolvedPartyListItemComponent } from './involved-party-list-item/involved-party-list-item.component';
import { InvolvedPartyListComponent } from './involved-party-list/involved-party-list.component';
import { InvolvedPartyListContainerComponent } from './involved-party-list-container/involved-party-list-container.component';
import { involvedPartyRoutes } from './involved-party-routing.module';


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
    ],
    providers: []
})
export class InvolvedPartyModule { }
