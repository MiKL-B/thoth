import { Component, Input, OnInit, } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ICONS } from '../../../lucide-icon';
@Component({
  selector: 'app-lucide-icon',
  standalone: true,
  imports: [LucideAngularModule],
  template: '<lucide-icon [name]="iconName" [size]="size" [color]="color"></lucide-icon>',
  styleUrl: './lucide-icon.component.scss'
})
export class LucideIconComponent implements OnInit {

  @Input({ required: true }) name!: string;
  @Input() size!: number;
  @Input() color!: string;
  iconName = 'HelpCircle';


  ngOnInit(): void {
    const foundIcon = ICONS.find(i => i.name.toLowerCase() === this.name.toLowerCase());
    if (!foundIcon) return;
    this.iconName = foundIcon.name ?? this.iconName
  }
}
