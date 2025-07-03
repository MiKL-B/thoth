import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { DashboardViewComponent } from '../../components/dashboard-view/dashboard-view.component';
import { NoteViewComponent } from '../../components/note-view/note-view.component';
import { LucideIconComponent } from "../../components/shared/lucide-icon/lucide-icon.component";

@Component({
  selector: 'app-workspace',
  imports: [NgClass, DashboardViewComponent, NoteViewComponent, LucideIconComponent],
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.scss'
})
export class WorkspaceComponent {
  currentView: string = 'notes';
  isOpenMenuMobile: boolean = false;
  notebooks = []
  selectView(view: string) {
    this.currentView = view;
    this.isOpenMenuMobile = false;
    console.log(this.currentView)
  }
  toggleMenuMobile() {
    this.isOpenMenuMobile = !this.isOpenMenuMobile;
  }

}
