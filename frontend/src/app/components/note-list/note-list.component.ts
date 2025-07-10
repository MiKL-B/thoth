import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NoteListItemComponent } from "../note-list-item/note-list-item.component";
import { Note } from '../../models/note.model';
import { LucideIconComponent } from "../shared/lucide-icon/lucide-icon.component";

@Component({
  selector: 'app-note-list',
  imports: [NoteListItemComponent, LucideIconComponent],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.scss'
})
export class NoteListComponent {
  @Input() notes!: Note[];
  @Input() selectedNote!: Note;
  @Output() noteSelected = new EventEmitter<Note>();

  onNoteSelected(note: Note) {
    this.noteSelected.emit(note)
  }
}
