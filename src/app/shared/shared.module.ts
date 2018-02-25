import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Pipes
import { InvolvedPartyTypePipe } from './pipes/involved-party-type.pipe';
import { KeysPipe } from './pipes/keys.pipe';
import { PropertyCategoryPipe } from './pipes/property-category.pipe';
import { HousePropertyTypePipe } from './pipes/house-property-type.pipe';
import { CommercialPropertyTypePipe } from './pipes/commercial-property-type.pipe';
import { LandTypePipe } from './pipes/land-type.pipe';
import { OtherPropertyTypePipe } from './pipes/other-property-type.pipe';
import { PurposePipe } from './pipes/purpose.pipe';
import { HeatingCategoryPipe } from './pipes/heating-category.pipe';
import { HeatingTypePipe } from './pipes/heating-type.pipe';
import { LandZonePipe } from './pipes/land-zone.pipe';
import { OrientationPipe } from './pipes/orientation.pipe';
import { AccessPipe } from './pipes/access.pipe';
import { EnergyPerformancePipe } from './pipes/energy-performance.pipe';
import { NgcFloatButtonModule } from 'ngc-float-button';

const REALTY_PIPES = [
  InvolvedPartyTypePipe,
  KeysPipe,
  PropertyCategoryPipe,
  HousePropertyTypePipe,
  CommercialPropertyTypePipe,
  LandTypePipe,
  OtherPropertyTypePipe,
  PurposePipe,
  HeatingTypePipe,
  HeatingCategoryPipe,
  LandZonePipe,
  OrientationPipe,
  AccessPipe,
  EnergyPerformancePipe
];

@NgModule({
    imports: [CommonModule],
    declarations: [
      REALTY_PIPES
    ],
    providers: [],
    exports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      REALTY_PIPES,
      NgcFloatButtonModule
    ]
  })
  export class SharedModule { }
