import {
  ModuleWithProviders, NgModule,
  Optional, SkipSelf
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { IPService } from './involved-party.service';
import { REPService } from './realestate-property.service';
import { Blobservice } from './blob.service';
import { GeoDataService } from './geodata.service';
import { FirestoreProvider } from "./firestore.service"; 

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [
    IPService,
    REPService,
    Blobservice,
    GeoDataService,
    FirestoreProvider
  ]
})

export class CoreModule {

  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  // static forRoot(config: UserServiceConfig): ModuleWithProviders {
  //   return {
  //     ngModule: CoreModule,
  //     providers: [
  //       {provide: UserServiceConfig, useValue: config }
  //     ]
  //   };
  // }
}
