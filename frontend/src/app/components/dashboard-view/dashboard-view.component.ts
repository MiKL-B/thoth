import { Component } from '@angular/core';
import { LucideIconComponent } from "../shared/lucide-icon/lucide-icon.component";

@Component({
  selector: 'app-dashboard-view',
  imports: [LucideIconComponent],
  templateUrl: './dashboard-view.component.html',
  styleUrl: './dashboard-view.component.scss'
})
export class DashboardViewComponent {
  totalNotes: number = 0;
}
