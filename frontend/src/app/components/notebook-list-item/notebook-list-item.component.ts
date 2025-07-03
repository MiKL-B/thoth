import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LucideIconComponent } from "../shared/lucide-icon/lucide-icon.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-notebook-list-item',
  imports: [LucideIconComponent, NgClass],
  templateUrl: './notebook-list-item.component.html',
  styleUrl: './notebook-list-item.component.scss'
})
export class NotebookListItemComponent {
  @Input() title!: string
  @Input() currentView!: string;
  @Output() selectView = new EventEmitter<string>();

  handleSelectView(view: string) {
    this.selectView.emit(view)
  }

}
