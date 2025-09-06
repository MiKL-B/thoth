import { Component, inject } from '@angular/core';
import { LucideIcon } from '../../shared/lucide-icon/lucide-icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [LucideIcon],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {
  public router = inject(Router);
  features = [
    {
      title: 'Smart taking notes',
      description: '',
      icon: 'list',
    },
    {
      title: 'Dashboard',
      description: '',
      icon: 'layoutdashboard',
    },
    {
      title: 'Kanban',
      description: '',
      icon: 'kanban',
    },
    {
      title: 'Calendar',
      description: '',
      icon: 'calendar',
    },
    {
      title: 'Gantt',
      description: '',
      icon: 'chartgantt',
    },
    {
      title: 'PERT',
      description: '',
      icon: 'chartnetwork',
    },
    {
      title: 'Eisenhower matrix',
      description: '',
      icon: 'layoutgrid',
    },
    {
      title: 'Second brain',
      description: '',
      icon: 'brain',
    },
  ];
  scrollTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    this.router.navigateByUrl('/');
  }
}
