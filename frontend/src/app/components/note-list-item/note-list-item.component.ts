import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '../../models/note.model';
import { LucideIconComponent } from "../shared/lucide-icon/lucide-icon.component";
import { DatePipe, NgClass, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-note-list-item',
  imports: [LucideIconComponent, UpperCasePipe, DatePipe],
  templateUrl: './note-list-item.component.html',
  styleUrl: './note-list-item.component.scss'
})
export class NoteListItemComponent {
  @Input() note!: Note;
  @Input() selected: boolean = false;
  @Output() select = new EventEmitter<Note>();

  icons = [
    { id: 1, name: "circledashed" },
    { id: 2, name: "circle" },
    { id: 3, name: "loader" },
    { id: 4, name: "circlecheck" },
    { id: 5, name: "archive" }
  ]
  priorities = [
    { id: 0, title: "Do it" },
    { id: 1, title: "Schedule it" },
    { id: 2, title: "Delegate it" },
    { id: 3, title: "Delete it" },
  ]
  get iconStatus(): string {
    const existing = this.icons.find((item) => item.id === this.note.status_id);
    if (!existing) return "";
    return existing.name;
  }
  get priority(): string {
    const existing = this.priorities.find((item) => item.id === this.note.priority_id);
    if (!existing) return "";
    return existing.title;
  }
  onSelect() {
    this.select.emit(this.note);
  }
}
