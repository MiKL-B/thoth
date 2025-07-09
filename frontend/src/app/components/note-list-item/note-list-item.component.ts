import { Component, Input } from '@angular/core';
import { Note } from '../../models/note.model';
import { LucideIconComponent } from "../shared/lucide-icon/lucide-icon.component";

@Component({
  selector: 'app-note-list-item',
  imports: [LucideIconComponent,],
  templateUrl: './note-list-item.component.html',
  styleUrl: './note-list-item.component.scss'
})
export class NoteListItemComponent {
  @Input() note!: Note;
}
