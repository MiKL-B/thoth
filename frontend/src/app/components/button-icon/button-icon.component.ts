import { Component, Input } from '@angular/core';
import { LucideIconComponent } from "../shared/lucide-icon/lucide-icon.component";

@Component({
  selector: 'app-button-icon',
  standalone: true,
  imports: [LucideIconComponent],
  templateUrl: './button-icon.component.html',
  styleUrl: './button-icon.component.scss'
})
export class ButtonIconComponent {
  @Input() name!: string;
  @Input() disabled!: boolean;

}
