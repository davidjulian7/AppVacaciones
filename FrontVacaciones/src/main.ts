// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));


import { provideHttpClient, withInterceptorsFromDi, withFetch } from '@angular/common/http';

// Configuración de HttpClient con withFetch()
provideHttpClient(withInterceptorsFromDi(), withFetch());

// Resto de inicialización de la aplicación
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';

platformBrowserDynamic().bootstrapModule(AppComponent)
  .catch(err => console.error(err));

