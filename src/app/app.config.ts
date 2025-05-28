import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeng/themes/Lara';
import { provideAnimations } from '@angular/platform-browser/animations'

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
  [
    provideHttpClient()
  ],
  provideClientHydration(withEventReplay()),
  providePrimeNG({
    theme: {
      preset: Lara,
      options: {
        darkModeSelector: '.my-app-dark'
      }
    }

  }),
  provideAnimations()

  ]
};
