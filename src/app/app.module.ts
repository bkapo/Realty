/* Angular Imports */
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Angular Material */
import { MaterialModule } from './material/material.module';

/* App Imports */
import { AppComponent } from './app.component';

/* Core Modules */
import { CoreModule } from './core/core.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

/* Feature Modules */
// import { InvolvedPartyModule } from './involved-party/involved-party.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    CoreModule,
    AppRoutingModule,
    //InvolvedPartyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule  { }
