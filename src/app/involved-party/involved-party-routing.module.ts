import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvolvedPartyListItemComponent } from './involved-party-list-item/involved-party-list-item.component';
import { InvolvedPartyListComponent } from './involved-party-list/involved-party-list.component';


const routes: Routes = [
  { path: '', component: InvolvedPartyListComponent }
];

export const involvedPartyRoutes: ModuleWithProviders = RouterModule.forChild(routes);
