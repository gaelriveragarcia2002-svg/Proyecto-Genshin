import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideGlobalCore } from '@proyecto-genshin/global-core';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    ...provideGlobalCore(),
    provideBrowserGlobalErrorListeners(),
    provideRouter(appRoutes),
  ],
};
