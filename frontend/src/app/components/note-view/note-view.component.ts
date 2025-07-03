import { Component } from '@angular/core';
import { NoteListComponent } from "../note-list/note-list.component";
import { LucideIconComponent } from "../shared/lucide-icon/lucide-icon.component";

@Component({
  selector: 'app-note-view',
  imports: [NoteListComponent, LucideIconComponent],
  templateUrl: './note-view.component.html',
  styleUrl: './note-view.component.scss'
})
export class NoteViewComponent {

}
