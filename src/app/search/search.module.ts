import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { InvolvedPartyModule } from '../involved-party/involved-party.module';

import { searchRoutes } from './search-routing.module';
import { SearchBoxComponent } from './search-box/search-box.component';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    InvolvedPartyModule,
    searchRoutes
  ],
  declarations: [SearchBoxComponent]
})
export class SearchModule { }
