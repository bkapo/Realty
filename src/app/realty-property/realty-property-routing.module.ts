import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealtyPropertyListContainerComponent } from './realty-property-list-container/realty-property-list-container.component';

const routes: Routes = [
  { path: ':id', component: RealtyPropertyListContainerComponent }
];

export const realtyPropertyRoutes: ModuleWithProviders = RouterModule.forChild(routes);
