import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { InvolvedPartyModule } from '../involved-party/involved-party.module';
import { RealtyPropertyModule } from './../realty-property/realty-property.module';

import { searchRoutes } from './search-routing.module';
import { SearchBoxComponent } from './search-box/search-box.component';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    InvolvedPartyModule,
    RealtyPropertyModule,
    searchRoutes
  ],
  declarations: [SearchBoxComponent]
})
export class SearchModule { }
