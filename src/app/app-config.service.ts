import { Injectable } from '@angular/core';
import { appConfig } from './app.config';

@Injectable({ providedIn: 'root' })
export class AppConfigService {
  get apiUrl(): string {
    return appConfig.apiUrl;
  }
}
