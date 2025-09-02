import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing-page/landing-page';
import { WorkspacePage } from './pages/workspace-page/workspace-page';
import { AuthPage } from './pages/auth-page/auth-page';
import { NotfoundPage } from './pages/notfound-page/notfound-page';

export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'workspace', component: WorkspacePage },
  { path: 'auth', component: AuthPage },
  { path: '**', component: NotfoundPage },
];
