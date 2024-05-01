import {ApplicationConfig, NgZone} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {remult} from "remult";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};

export class AppModule {
  constructor(zone: NgZone) {
    remult.apiClient.wrapMessageHandling = (handler) => {
      zone.run(() => handler());
    }
  }
}
