import { Component } from '@angular/core';
import { LucideIcon } from '../../shared/lucide-icon/lucide-icon';
import { NgStyle } from '@angular/common';

interface Column {
  label: string;
  color: string;
}
@Component({
  selector: 'app-kanban-view',
  imports: [LucideIcon, NgStyle],
  templateUrl: './kanban-view.html',
  styleUrl: './kanban-view.css',
})
export class KanbanView {
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
