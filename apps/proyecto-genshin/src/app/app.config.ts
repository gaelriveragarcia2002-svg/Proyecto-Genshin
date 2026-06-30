import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideGlobalCore } from '@proyecto-genshin/global-core';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    ...provideGlobalCore(),
    provideClientHydration(withEventReplay()),
    provideBrowserGlobalErrorListeners(),
    provideRouter(appRoutes),
  ],
};
