import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideClientHydration(), provideHttpClient(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"elitewheyapp","appId":"1:92069244983:web:3daba9e04e22a91ebb4fb2","storageBucket":"elitewheyapp.appspot.com","apiKey":"AIzaSyBUTDxAWg7w6F6JduMSDf5kzE3B2R0i2uI","authDomain":"elitewheyapp.firebaseapp.com","messagingSenderId":"92069244983"}))), importProvidersFrom(provideAuth(() => getAuth()))]
};
