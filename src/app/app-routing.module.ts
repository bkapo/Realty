import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvolvedPartyListComponent } from './involved-party/involved-party-list/involved-party-list.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'agents', component: InvolvedPartyListComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
