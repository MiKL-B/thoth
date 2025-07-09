import { Component } from '@angular/core';
import { NoteListItemComponent } from "../note-list-item/note-list-item.component";
import { Note } from '../../models/note.model';

@Component({
  selector: 'app-kanban-view',
  imports: [NoteListItemComponent],
  templateUrl: './kanban-view.component.html',
  styleUrl: './kanban-view.component.scss'
})
export class KanbanViewComponent {
  notes: Note[] = [
    {
      id: 0,
      title: "Note test",
      content: "",
      pinned: false,
      notebookID: 1
    },
    {
      id: 0,
      title: "Note test",
      content: "",
      pinned: false,
      notebookID: 1
    },
    {
      id: 0,
      title: "Note test",
      content: "",
      pinned: false,
      notebookID: 1
    },
    {
      id: 0,
      title: "Note test",
      content: "",
      pinned: false,
      notebookID: 1
    },
    {
      id: 0,
      title: "Note test",
      content: "",
      pinned: false,
      notebookID: 1
    },
    {
      id: 0,
      title: "Note test",
      content: "",
      pinned: false,
      notebookID: 1
    },
    {
      id: 0,
      title: "Note test",
      content: "",
      pinned: false,
      notebookID: 1
    }, {
      id: 0,
      title: "Note test",
      content: "",
      pinned: false,
      notebookID: 1
    },
  ]
}
