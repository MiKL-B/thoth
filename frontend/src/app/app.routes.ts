import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: "workspace",
    loadComponent: () => import("./pages/workspace/workspace.component").then((c) => c.WorkspaceComponent),
    canActivate: [authGuard],
  },
  {
    path: "**", component: NotFoundComponent
  }
];
