import { Component } from '@angular/core';
import { LucideIcon } from '../../shared/lucide-icon/lucide-icon';
interface Column {
  label: string;
  color: string;
}
@Component({
  selector: 'app-eisenhower',
  imports: [LucideIcon],
  templateUrl: './eisenhower.html',
  styleUrl: './eisenhower.css',
})
export class Eisenhower {
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
