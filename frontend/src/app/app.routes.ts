import { Routes } from '@angular/router';
import { Auth } from './components/auth/auth';
import { Landing } from './components/landing/landing';
import { Notfound } from './components/notfound/notfound';
import { Workspace } from './components/workspace/workspace';

export const routes: Routes = [
  { path: '', component: Landing },
  {
    path: 'workspace',
    component: Workspace,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./components/dashboard/dashboard').then((m) => m.Dashboard),
      },
      {
        path: 'notebook',
        loadComponent: () =>
          import('./components/notebook/notebook').then((m) => m.Notebook),
      },
      {
        path: 'kanban',
        loadComponent: () =>
          import('./components/kanban/kanban').then((m) => m.Kanban),
      },
      {
        path: 'calendar',
        loadComponent: () =>
          import('./components/calendar/calendar').then((m) => m.Calendar),
      },
      {
        path: 'chat',
        loadComponent: () =>
          import('./components/chat/chat').then((m) => m.Chat),
      },
      {
        path: 'gantt',
        loadComponent: () =>
          import('./components/gantt/gantt').then((m) => m.Gantt),
      },
      {
        path: 'pert',
        loadComponent: () =>
          import('./components/pert/pert').then((m) => m.Pert),
      },
      {
        path: 'eisenhower',
        loadComponent: () =>
          import('./components/eisenhower/eisenhower').then(
            (m) => m.Eisenhower
          ),
      },
      {
        path: 'secondbrain',
        loadComponent: () =>
          import('./components/secondbrain/secondbrain').then(
            (m) => m.Secondbrain
          ),
      },
      {
        path: 'automatisation',
        loadComponent: () =>
          import('./components/automatisation/automatisation').then(
            (m) => m.Automatisation
          ),
      },
      {
        path: 'user',
        loadComponent: () =>
          import('./components/user/user').then((m) => m.User),
      },
    ],
  },
  { path: 'auth', component: Auth },
  { path: '**', component: Notfound },
];
