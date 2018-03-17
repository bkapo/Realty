import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealtyPropertyEdititemComponent } from './realty-property-edititem/realty-property-edititem.component';
import { RealtyPropertyMainComponent } from './realty-property-main/realty-property-main.component';
import { RealtyPropertySearchComponent } from './realty-property-search/realty-property-search.component';
import { RealtyPropertyListComponent } from './realty-property-list/realty-property-list.component';


const realtyPropertyRoutes: Routes = [
  {
    path: '',
    component: RealtyPropertyMainComponent,
    children: [
      {
        path: '',
        component: RealtyPropertySearchComponent,
        children: [
          {
            path: '',
            component: RealtyPropertyListComponent,
            children: [
              {
                path: ':id',
                component: RealtyPropertyEdititemComponent
              },
            ]
          }
        ]
      }
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
