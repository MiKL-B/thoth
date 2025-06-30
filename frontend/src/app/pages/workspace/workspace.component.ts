import { Component } from '@angular/core';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { NotesComponent } from '../../components/notes/notes.component';

@Component({
  selector: 'app-workspace',
  imports: [DashboardComponent,NotesComponent],
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.scss'
})
export class WorkspaceComponent {
  currentView:string = 'dashboard';

  selectView(view:string){
    this.currentView = view;
  }
}
