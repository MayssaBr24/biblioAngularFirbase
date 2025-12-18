import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import {FormsModule} from '@angular/forms';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {fire} from './fire';
import { Ajout } from './ajout/ajout';
import { Liste } from './liste/liste';
@NgModule({
  declarations: [ App, Ajout, Liste,],
  imports: [ BrowserModule, AppRoutingModule, FormsModule ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideFirebaseApp(() => initializeApp(fire.firebase)),
    provideFirestore(() => getFirestore())
  ],
  bootstrap: [App]
})
export class AppModule { }
