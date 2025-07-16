import { Component, inject } from '@angular/core';
import { LucideIconComponent } from "../../components/shared/lucide-icon/lucide-icon.component";
import { Router } from '@angular/router';
import { ButtonIconComponent } from "../../components/button-icon/button-icon.component";

@Component({
  selector: 'app-home',
  imports: [LucideIconComponent, ButtonIconComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public router = inject(Router)
  features = [
    {
      title: "Smart taking notes",
      description: "",
      icon: "list",
    },
    {
      title: "Dashboard",
      description: "",
      icon: "layoutdashboard",
    },
    {
      title: "Kanban",
      description: "",
      icon: "kanban",
    },
    {
      title: "Calendar",
      description: "",
      icon: "calendar",
    },
    {
      title: "Gantt",
      description: "",
      icon: "chartgantt",
    },
    {
      title: "PERT",
      description: "",
      icon: "chartnetwork",
    },
    {
      title: "Eisenhower matrix",
      description: "",
      icon: "layoutgrid",
    },
    {
      title: "Second brain",
      description: "",
      icon: "brain",
    },

  ]
  scrollTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    this.router.navigateByUrl("/")
  }
}
