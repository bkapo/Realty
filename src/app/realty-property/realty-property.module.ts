import { NgModule } from '@angular/core';

import { realtyPropertyRoutes } from './realty-property-routing.module';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

import { RealtyPropertyListItemComponent } from './realty-property-list-item/realty-property-list-item.component';
import { RealtyPropertyListComponent } from './realty-property-list/realty-property-list.component';
import { RealtyPropertyListContainerComponent } from './realty-property-list-container/realty-property-list-container.component';


@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    realtyPropertyRoutes
  ],
  declarations: [
    RealtyPropertyListItemComponent,
    RealtyPropertyListComponent,
    RealtyPropertyListContainerComponent
  ],
  exports: [
    RealtyPropertyListItemComponent,
    RealtyPropertyListComponent,
    RealtyPropertyListContainerComponent
  ]
})
export class RealtyPropertyModule { }
