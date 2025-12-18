import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app-module';

import { fire } from './app/fire';
import {initializeApp} from 'firebase/app';
initializeApp(fire.firebase);
platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));
