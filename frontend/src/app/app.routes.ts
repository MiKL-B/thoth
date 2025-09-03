import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing-page/landing-page';
import { WorkspacePage } from './pages/workspace-page/workspace-page';
import { AuthPage } from './pages/auth-page/auth-page';
import { NotfoundPage } from './pages/notfound-page/notfound-page';

export const routes: Routes = [
  { path: '', component: LandingPage },
  {
    path: 'workspace',
    component: WorkspacePage,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./workspace/dashboard-view/dashboard-view').then(
            (m) => m.DashboardView
          ),
      },
      {
        path: 'notebook',
        loadComponent: () =>
          import('./workspace/notebook-view/notebook-view').then(
            (m) => m.NotebookView
          ),
      },
      {
        path: 'kanban',
        loadComponent: () =>
          import('./workspace/kanban-view/kanban-view').then(
            (m) => m.KanbanView
          ),
      },
      {
        path: 'calendar',
        loadComponent: () =>
          import('./workspace/calendar-view/calendar-view').then(
            (m) => m.CalendarView
          ),
      },
      {
        path: 'chat',
        loadComponent: () =>
          import('./workspace/chat-view/chat-view').then((m) => m.ChatView),
      },
      {
        path: 'gantt',
        loadComponent: () =>
          import('./workspace/gantt-view/gantt-view').then((m) => m.GanttView),
      },
      {
        path: 'pert',
        loadComponent: () =>
          import('./workspace/pert-view/pert-view').then((m) => m.PertView),
      },
      {
        path: 'eisenhower',
        loadComponent: () =>
          import('./workspace/eisenhower-view/eisenhower-view').then(
            (m) => m.EisenhowerView
          ),
      },
      {
        path: 'secondbrain',
        loadComponent: () =>
          import('./workspace/secondbrain-view/secondbrain-view').then(
            (m) => m.SecondbrainView
          ),
      },
      {
        path: 'automatisation',
        loadComponent: () =>
          import('./workspace/automatisation-view/automatisation-view').then(
            (m) => m.AutomatisationView
          ),
      },
      {
        path: 'user',
        loadComponent: () =>
          import('./workspace/user-view/user-view').then((m) => m.UserView),
      },
    ],
  },
  { path: 'auth', component: AuthPage },
  { path: '**', component: NotfoundPage },
];
