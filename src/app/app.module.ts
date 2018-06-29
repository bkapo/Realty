/* Angular Imports */
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

/* Angular Material */
import { MaterialModule } from './material/material.module';
import { MatSpinner } from '@angular/material';


/* Angular Fire 2 */
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';

/* App Imports */
import { AppComponent } from './app.component';

/* Core Modules */
import { CoreModule } from './core/core.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

/* Feature Modules */
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';



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
    NgHttpLoaderModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBfaydo1Vh9OXBY53pKPT1hPiHXmnXhZSk",
      authDomain: "realtyapi2018.firebaseapp.com",
      databaseURL: "https://realtyapi2018.firebaseio.com",
      projectId: "realtyapi2018",
      storageBucket: "realtyapi2018.appspot.com",
      messagingSenderId: "305437971860"
    }),
    AngularFireStorageModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }
  )

  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent],
  entryComponents: [
    MatSpinner
]
})
export class AppModule  { }
