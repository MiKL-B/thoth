import { NgClass, NgStyle, TitleCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LucideIcon } from '../../shared/lucide-icon/lucide-icon';
import {
  RouterModule,
  RouterLink,
  RouterOutlet,
  RouterLinkActive,
} from '@angular/router';

interface View {
  title: ViewType;
  icon: string;
}

type ViewType =
  | 'dashboard'
  | 'notebook'
  | 'kanban'
  | 'calendar'
  | 'gantt'
  | 'pert'
  | 'eisenhower'
  | 'secondbrain'
  | 'chat'
  | 'user'
  | 'automatisation';

@Component({
  selector: 'app-workspace-page',
  imports: [
    NgClass,
    NgStyle,
    TitleCasePipe,
    LucideIcon,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    RouterModule,
  ],
  templateUrl: './workspace-page.html',
  styleUrl: './workspace-page.css',
})
export class WorkspacePage implements OnInit {
  isSidebarOpened: boolean = false;
  isPanelOpened: boolean = false;

  views: View[] = [
    { title: 'dashboard', icon: 'layoutdashboard' },
    { title: 'notebook', icon: 'notebook' },
    { title: 'kanban', icon: 'kanban' },
    { title: 'calendar', icon: 'calendar' },
    { title: 'chat', icon: 'messagecirclemore' },
    { title: 'gantt', icon: 'chartgantt' },
    { title: 'pert', icon: 'chartnetwork' },
    { title: 'eisenhower', icon: 'layoutgrid' },
    { title: 'secondbrain', icon: 'brain' },
    { title: 'automatisation', icon: 'zap' },
    { title: 'user', icon: 'user' },
  ];

  isMobile = false;

  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize.bind(this));
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 960;
  }

  get sidebarWidth(): string {
    if (this.isMobile) {
      return this.isSidebarOpened ? '240px' : '0px';
    } else {
      return this.isPanelOpened ? '240px' : '64px';
    }
  }

  get listItemWidth(): string {
    if (this.isMobile) {
      return this.isSidebarOpened ? '100%' : '0px';
    } else {
      return this.isPanelOpened ? '100%' : '32px';
    }
  }

  openSidebar() {
    this.isSidebarOpened = true;
    document.body.classList.add('no-scroll');
  }
  closeSidebar() {
    this.isSidebarOpened = false;
    document.body.classList.remove('no-scroll');
  }
  togglePanel() {
    this.isPanelOpened = !this.isPanelOpened;
  }
}
