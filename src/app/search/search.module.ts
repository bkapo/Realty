import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

import { searchRoutes } from './search-routing.module';
import { SearchBoxComponent } from './search-box/search-box.component';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    searchRoutes
  ],
  declarations: [SearchBoxComponent]
})
export class SearchModule { }
