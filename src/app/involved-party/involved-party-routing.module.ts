import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvolvedPartyListContainerComponent } from './involved-party-list-container/involved-party-list-container.component';

const routes: Routes = [
  { path: ':typeid', component: InvolvedPartyListContainerComponent }
];

export const involvedPartyRoutes: ModuleWithProviders = RouterModule.forChild(routes);
