import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealtyPropertyListContainerComponent } from './realty-property-list-container/realty-property-list-container.component';

const realtyPropertyRoutes: Routes = [
  {
    path: ':id',
    component: RealtyPropertyListContainerComponent,
    children: [

    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(realtyPropertyRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class RealtyPropertyRoutingModule { }
