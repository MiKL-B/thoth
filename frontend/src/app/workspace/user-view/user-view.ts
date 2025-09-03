import { NgClass, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideIcon } from '../../shared/lucide-icon/lucide-icon';

@Component({
  selector: 'app-user-view',
  imports: [RouterLink, TitleCasePipe, NgClass, LucideIcon],
  templateUrl: './user-view.html',
  styleUrl: './user-view.css',
})
export class UserView {
  views: string[] = [
    'personal',
    'account',
    'security',
    'permissions',
    'notifications',
    'settings',
  ];
  selectedView: string = 'personal';
  selectView(newView: string) {
    this.selectedView = newView;
  }
}
