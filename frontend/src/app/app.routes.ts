import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { WorkspaceComponent } from './pages/workspace/workspace.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path:"workspace",
    component:WorkspaceComponent,
     canActivate:[authGuard],
    //   children: [
    //   { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    //   { path: 'dashboard', component: DashboardComponent },
    //   { path: 'notes', component: NotesComponent },
    //   { path: 'kanban', component: KanbanComponent },
    //   { path: 'calendar', component: CalendarComponent },
    //   { path: '**', component: NotFoundComponent } // en option ici
    // ]
  },
  {
    path:"**", component:NotFoundComponent
  }
];
