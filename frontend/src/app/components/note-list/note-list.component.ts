import { Component } from '@angular/core';
import { NoteListItemComponent } from "../note-list-item/note-list-item.component";
import { Note } from '../../models/note.model';

@Component({
  selector: 'app-note-list',
  imports: [NoteListItemComponent],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.scss'
})
export class NoteListComponent {
  notes: Note[] = [
    { title: "Note 1" },
    { title: "Note 2" }
  ]
}
