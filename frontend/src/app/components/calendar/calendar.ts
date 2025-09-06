import { Component } from '@angular/core';
import { LucideIcon } from '../../shared/lucide-icon/lucide-icon';
import { NgClass } from '@angular/common';

interface ButtonCalendar {
  tooltip: string;
  icon: string;
}
@Component({
  selector: 'app-calendar',
  imports: [LucideIcon, NgClass],
  templateUrl: './calendar.html',
  styleUrl: './calendar.css',
})
export class Calendar {
  buttons: ButtonCalendar[] = [
    {
      tooltip: 'Day',
      icon: 'list',
    },
    {
      tooltip: 'Week',
      icon: 'columns2',
    },
    {
      tooltip: 'Month',
      icon: 'grid2x2',
    },
    {
      tooltip: 'Year',
      icon: 'grid3x3',
    },
    {
      tooltip: 'Agenda',
      icon: 'calendarrange',
    },
  ];
  selectedButton: ButtonCalendar = this.buttons[0];

  selectButton(button: ButtonCalendar) {
    this.selectedButton = button;
  }
}
