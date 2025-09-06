import { Component } from '@angular/core';
import { LucideIcon } from '../../shared/lucide-icon/lucide-icon';
import { NgStyle } from '@angular/common';

interface Column {
  label: string;
  color: string;
}
@Component({
  selector: 'app-kanban',
  imports: [LucideIcon, NgStyle],
  templateUrl: './kanban.html',
  styleUrl: './kanban.css',
})
export class Kanban {
  columns: Column[] = [
    {
      label: 'Backlog',
      color: 'dark',
    },
    {
      label: 'To Do',
      color: 'blue',
    },
    {
      label: 'In Progress',
      color: 'red',
    },
    {
      label: 'In Review',
      color: 'gold',
    },
    {
      label: 'Done',
      color: 'green',
    },
  ];
}
