import { Component } from '@angular/core';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { NotesComponent } from '../../components/notes/notes.component';
import { LucideAngularModule, Menu, PanelLeftOpen,PanelLeftClose,LayoutDashboard, List } from 'lucide-angular';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-workspace',
  imports: [DashboardComponent,NotesComponent,LucideAngularModule,NgStyle,NgClass],
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.scss'
})
export class WorkspaceComponent {
  readonly Menu = Menu;
  readonly PanelLeftOpen = PanelLeftOpen;
  readonly PanelLeftClose = PanelLeftClose;
  readonly LayoutDashboard = LayoutDashboard;
  readonly List = List;
  currentView:string = 'dashboard';
  isOpenMenuMobile:boolean = false;
  isOpenPanelLeft:boolean = false;

  selectView(view:string){
    this.currentView = view;
    this.isOpenMenuMobile = false;
  }
  toggleMenuMobile(){
    this.isOpenMenuMobile = !this.isOpenMenuMobile;
  }
  togglePanelLeft(){
    this.isOpenPanelLeft = !this.isOpenPanelLeft;
  }

}
