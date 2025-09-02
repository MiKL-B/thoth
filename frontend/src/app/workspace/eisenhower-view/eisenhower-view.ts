import { Component } from '@angular/core';
import { LucideIcon } from '../../lucide-icon/lucide-icon';
interface Column {
  label: string;
  color: string;
}
@Component({
  selector: 'app-eisenhower-view',
  imports: [LucideIcon],
  templateUrl: './eisenhower-view.html',
  styleUrl: './eisenhower-view.css',
})
export class EisenhowerView {
  columns: Column[] = [
    {
      label: 'Do',
      color: 'dark',
    },
    {
      label: 'Schedule',
      color: 'blue',
    },
    {
      label: 'Delegate',
      color: 'red',
    },
    {
      label: 'Delete',
      color: 'gold',
    },
  ];
}
