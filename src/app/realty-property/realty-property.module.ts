import { NgModule } from '@angular/core';

import { RealtyPropertyRoutingModule } from './realty-property-routing.module';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

import { RealtyPropertyListItemComponent } from './realty-property-list-item/realty-property-list-item.component';
import { RealtyPropertyListComponent } from './realty-property-list/realty-property-list.component';
import { RealtyPropertyListContainerComponent } from './realty-property-list-container/realty-property-list-container.component';
import { RealtyPropertyItemComponent } from './realty-property-item/realty-property-item.component';
import { RealtyPropertyAdditemComponent } from './realty-property-additem/realty-property-additem.component';
import { RealtyPropertyEdititemComponent } from './realty-property-edititem/realty-property-edititem.component';
import { RealtyPropertyCommercialItemComponent } from './realty-property-commercial-item/realty-property-commercial-item.component';
import { RealtyPropertyMainComponent } from './realty-property-main/realty-property-main.component';
import { RealtyPropertySearchComponent } from './realty-property-search/realty-property-search.component';


@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    RealtyPropertyRoutingModule
  ],
  declarations: [
    RealtyPropertyListItemComponent,
    RealtyPropertyListComponent,
    RealtyPropertyListContainerComponent,
    RealtyPropertyItemComponent,
    RealtyPropertyAdditemComponent,
    RealtyPropertyEdititemComponent,
    RealtyPropertyCommercialItemComponent,
    RealtyPropertyMainComponent,
    RealtyPropertySearchComponent
  ],
  exports: [
    RealtyPropertyListItemComponent,
    RealtyPropertyListComponent,
    RealtyPropertyListContainerComponent
  ]
})
export class RealtyPropertyModule { }
