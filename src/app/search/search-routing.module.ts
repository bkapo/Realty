import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchBoxComponent } from './search-box/search-box.component';

const routes: Routes = [
  { path: '', component: SearchBoxComponent }
];



export const searchRoutes: ModuleWithProviders = RouterModule.forChild(routes);
