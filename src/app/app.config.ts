import {
  ApplicationConfig,
  importProvidersFrom,
  mergeApplicationConfig,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './services/user.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([]), withFetch()),
    importProvidersFrom(BrowserModule, BrowserAnimationsModule),
  ],
};

export const config = mergeApplicationConfig(appConfig, appConfig);
