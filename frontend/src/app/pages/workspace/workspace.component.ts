import { Component } from '@angular/core';
import { NgClass, NgComponentOutlet, TitleCasePipe } from '@angular/common';
import { DashboardViewComponent } from '../../components/dashboard-view/dashboard-view.component';
import { NoteViewComponent } from '../../components/note-view/note-view.component';
import { LucideIconComponent } from "../../components/shared/lucide-icon/lucide-icon.component";
import { UserViewComponent } from '../../components/user-view/user-view.component';
import { KanbanViewComponent } from '../../components/kanban-view/kanban-view.component';
import { EisenhowerViewComponent } from '../../components/eisenhower-view/eisenhower-view.component';
import { ButtonIconComponent } from "../../components/shared/button-icon/button-icon.component";
interface Notebook {
  id: number,
  title: string
}
interface View {
  title: ViewType,
  icon: string
}
type ViewType = 'notebook' | 'dashboard' | 'kanban' | 'eisenhower' | 'user';
//  'calendar' | 'gantt' | 'pert' |'second brain' | 'settings'

@Component({
  selector: 'app-workspace',
  imports: [NgClass, LucideIconComponent, TitleCasePipe, NgComponentOutlet, ButtonIconComponent],
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.scss'
})

export class WorkspaceComponent {
  selectedView: ViewType = 'notebook';
  isOpenMenuMobile: boolean = false;
  notebooks: Notebook[] = []
  idNotebook = 0;
  views: View[] = [
    { title: "notebook", icon: "notebook" },
    { title: "dashboard", icon: "layoutdashboard" },
    { title: "kanban", icon: "kanban" },
    // { title: "calendar", icon: "calendar" },
    // { title: "gantt", icon: "chartgantt" },
    // { title: "pert", icon: "chartnetwork" },
    { title: "eisenhower", icon: "layoutgrid" },
    // { title: "second brain", icon: "brain" },
  ]
  viewComponents = {
    notebook: NoteViewComponent,
    dashboard: DashboardViewComponent,
    kanban: KanbanViewComponent,
    eisenhower: EisenhowerViewComponent,
    user: UserViewComponent
  };
  bottomViews: View[] = [
    // { title: 'settings', icon: 'settings' },
    { title: 'user', icon: 'user' }
  ];
  selectView(view: ViewType): void {
    this.selectedView = view;
    this.isOpenMenuMobile = false;
  }
  toggleMenuMobile(): void {
    this.isOpenMenuMobile = !this.isOpenMenuMobile;
  }
  addNotebook(): void {
    if (!this.notebooks) return;
    this.notebooks.push({ id: this.idNotebook, title: "Notebook " + this.idNotebook });
    this.idNotebook++;
  }
}
