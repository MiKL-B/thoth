import { Component } from '@angular/core';
import { NoteListItemComponent } from "../note-list-item/note-list-item.component";
import { Note } from '../../models/note.model';

@Component({
  selector: 'app-eisenhower-view',
  imports: [NoteListItemComponent],
  templateUrl: './eisenhower-view.component.html',
  styleUrl: './eisenhower-view.component.scss'
})
export class EisenhowerViewComponent {
  notes: Note[] = [
    {
      id: 0,
      title: "Note test",
      content: "",
      pinned: false,
      notebookID: 1
    },
  ]
}
