import { Component, inject } from '@angular/core';
import { LucideIcon } from '../../lucide-icon/lucide-icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [LucideIcon],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {
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
