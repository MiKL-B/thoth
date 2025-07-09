import { Component, Input, OnChanges, SimpleChanges, } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ICONS } from '../../../lucide-icon';
@Component({
  selector: 'app-lucide-icon',
  standalone: true,
  imports: [LucideAngularModule],
  template: '<lucide-icon [name]="name" [size]="size" [color]="color"></lucide-icon>',
  styleUrl: './lucide-icon.component.scss'
})
export class LucideIconComponent implements OnChanges {

  @Input({ required: true }) name!: string;
  @Input() size!: number;
  @Input() color!: string;
  iconName = 'HelpCircle';


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['name']) {
      const foundIcon = ICONS.find(i => i.name.toLowerCase() === this.name.toLowerCase());
      if (!foundIcon) return;
      this.name = foundIcon.name ?? this.name
    }
  }
}
