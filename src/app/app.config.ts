import {
  ApplicationConfig,
  InjectionToken,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const APP_CONFIG = new InjectionToken<ApplicationConfig>('app.config');
export interface AppConfig extends ApplicationConfig {
  apiUrl: string;
}

export const appConfig: AppConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
  apiUrl: 'http://localhost:3000',
};
