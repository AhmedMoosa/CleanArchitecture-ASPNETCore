import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment, ApiUrls } from './environments/environment.prod';
import { API_URLS, IApiUrls } from './app';

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}
export function getApiUrls(): IApiUrls {
  return new ApiUrls();
}
const providers = [
  { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] },
  { provide: API_URLS, useFactory: getApiUrls, deps: [] }
];

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.log(err));
