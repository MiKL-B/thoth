import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { LUCIDE_ICONS } from './lucide-icon';
import { routes } from './app.routes';
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(LucideAngularModule.pick(LUCIDE_ICONS)),
  ]
};
