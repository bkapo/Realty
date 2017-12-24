import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

import { InvolvedPartyCardComponent } from './involved-party-card/involved-party-card.component';
import { InvolvedPartyListComponent } from './involved-party-list/involved-party-list.component';


@NgModule({
    imports: [
        SharedModule,
        MaterialModule
    ],
    declarations: [
        InvolvedPartyCardComponent,
        InvolvedPartyListComponent],
    exports: [
        InvolvedPartyCardComponent,
        InvolvedPartyListComponent],
    providers: []
})
export class InvolvedPartyModule { }
