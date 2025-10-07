import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withEventReplay()), provideFirebaseApp(() => initializeApp({ projectId: "earthvibes-firebase-project", appId: "1:580894066907:web:4054eb4c0e306aa13324fe", storageBucket: "earthvibes-firebase-project.firebasestorage.app", apiKey: "AIzaSyCoK8ZUPg1aQF6AYA5-71Q8h8qV8KMjmx8", authDomain: "earthvibes-firebase-project.firebaseapp.com", messagingSenderId: "580894066907"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())
  ]
};
