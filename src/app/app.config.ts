import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { reducers } from './store/reducers';
import { provideEffects } from '@ngrx/effects';
import { PostsEffects } from './store/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideStore({posts: reducers}), provideEffects(PostsEffects), provideStoreDevtools({maxAge: 25, logOnly: !isDevMode()})]
};
