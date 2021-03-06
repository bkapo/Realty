import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full'},
  { path: 'search', loadChildren: '../app/search/search.module#SearchModule' },
  { path: 'iplist', loadChildren: '../app/involved-party/involved-party.module#InvolvedPartyModule' },
  { path: 'realestate', loadChildren: '../app/realty-property/realty-property.module#RealtyPropertyModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
