import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { LucideIconComponent } from '../shared/lucide-icon/lucide-icon.component';
import { FormsModule } from '@angular/forms';
import { Note } from '../../models/note.model';
import { ButtonIconComponent } from '../shared/button-icon/button-icon.component';
import { NoteListComponent } from '../note-list/note-list.component';
import { NoteService } from '../../services/note.service';
interface Notebook {
  id: number;
  title: string;
}
interface Status {
  id: number;
  title: string;
}
interface Priority {
  id: number;
  title: string;
}
@Component({
  selector: 'app-note-view',
  imports: [
    LucideIconComponent,
    FormsModule,
    ButtonIconComponent,
    NoteListComponent,
  ],
  templateUrl: './note-view.component.html',
  styleUrl: './note-view.component.scss',
})
export class NoteViewComponent implements OnInit {
  // notebook
  idNotebook = 3;
  defaultNotebook: Notebook = { id: 0, title: 'All notes' };
  archiveNotebook: Notebook = { id: 1, title: 'Archived' };
  trashNotebook: Notebook = { id: 2, title: 'Trash' };
  notebooks: Notebook[] = [
    this.defaultNotebook,
    this.archiveNotebook,
    this.trashNotebook,
  ];
  selectedNotebook: Notebook = this.notebooks[0];
  changedNotebookID!: number;
  canUserEditNotebookTitle: boolean = false;

  // note
  idNote = 0;
  notes: Note[] = [];
  defaultNote: Note = {
    note_id: -1,
    title: '',
    content: '',
    pinned: false,
    created_at: new Date(),
    updated_at: new Date(),
    due_date: new Date(),
    priority_id: -1,
    status_id: -1,
    notebook_id: -1,
    created_by: -1,
    assigned_to: -1,
    deleted: false,
    archived: false,
  };
  selectedNote: Note = this.defaultNote;

  // search
  searchValue: string = '';

  // status
  statusDefaultFilter: Status = { id: 0, title: 'All' };
  status: Status[] = [
    { id: 1, title: 'Draft' },
    { id: 2, title: 'Todo' },
    { id: 3, title: 'In progress' },
    { id: 4, title: 'Finished' },
  ];
  selectedStatus: Status = this.statusDefaultFilter;
  changedStatusID!: number;

  // priority
  priorityDefaultFilter: Priority = { id: 0, title: 'All' };
  priorities: Priority[] = [
    { id: 1, title: 'Do it' },
    { id: 2, title: 'Schedule it' },
    { id: 3, title: 'Delegate it' },
    { id: 4, title: 'Delete it' },
  ];
  selectedPriority: Priority = this.priorityDefaultFilter;
  changedPriorityID!: number;

  // mode
  isEditMode: boolean = false;
  isMobile: boolean = false;
  isVisibleNoteSettings: boolean = false;
  isVisibleNoteFilters: boolean = false;
  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.checkScreenSize();
    // this.loadNotes();
  }

  // Responsive design
  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 896;
  }
  @ViewChild('noteFiltersRef') noteFiltersRef!: ElementRef;
  @ViewChild('noteSettingsRef') noteSettingsRef!: ElementRef;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInsideFilters = this.noteFiltersRef?.nativeElement.contains(
      event.target
    );
    const clickedInsideSettings = this.noteSettingsRef?.nativeElement.contains(
      event.target
    );

    if (!clickedInsideFilters) {
      this.isVisibleNoteFilters = false;
    }

    if (!clickedInsideSettings) {
      this.isVisibleNoteSettings = false;
    }
  }
  // notebook
  addNotebook(): void {
    if (!this.notebooks) return;
    const newNotebook: Notebook = {
      id: this.idNotebook,
      title: 'Notebook ' + this.idNotebook,
    };
    this.notebooks.push(newNotebook);
    this.idNotebook++;
    this.selectNotebook(newNotebook);
    this.canUserEditNotebookTitle = false;
  }
  selectNotebook(notebook: Notebook) {
    this.selectedNotebook = notebook;
  }
  onNotebookChange(selectedNotebookID: number) {
    this.changedNotebookID = selectedNotebookID;
    this.selectedNote.notebook_id = selectedNotebookID;
  }
  toggleEditNotebookTitle() {
    this.canUserEditNotebookTitle = !this.canUserEditNotebookTitle;
  }
  deleteNotebook() {
    const message = `Are you sure you want to delete this notebook: ${this.selectedNotebook.title}?`;
    if (window.confirm(message)) {
      this.notes = this.notes.filter(
        (note) => note.notebook_id !== this.selectedNotebook.id
      );
      this.notebooks = this.notebooks.filter(
        (notebook) => notebook.id !== this.selectedNotebook.id
      );
      this.selectNotebook(this.defaultNotebook);
    }
  }
  canUserEditNotebook(): boolean {
    return (
      this.selectedNotebook !== this.defaultNotebook &&
      this.selectedNotebook !== this.archiveNotebook &&
      this.selectedNotebook !== this.trashNotebook
    );
  }
  // note
  // loadNotes(): void {
  //   this.noteService.getAllNotes().subscribe((notes) => {
  //     this.notes = notes;
  //   });
  // }
  addNote(): void {
    const note: Note = {
      note_id: this.idNote++,
      title: 'Untitled note ' + this.idNote,
      content: '',
      pinned: false,
      created_at: new Date(),
      updated_at: new Date(),
      due_date: new Date(),
      priority_id: this.priorities[0].id,
      status_id: this.status[0].id,
      notebook_id: this.selectedNotebook.id,
      created_by: 0,
      assigned_to: 0,
      deleted: false,
      archived: false,
    };
    this.notes.push(note);
    this.selectNote(note);
    // this.noteService.createNote(newNote).subscribe((note) => {
    //   this.notes.push(note);
    //   this.selectNote(note);
    // });
  }
  duplicateNote(): void {
    const newNote: Note = {
      note_id: this.idNote++,
      title: this.selectedNote.title + ' - Copy',
      content: this.selectedNote.content,
      pinned: this.selectedNote.pinned,
      created_at: new Date(),
      updated_at: new Date(),
      due_date: new Date(),
      priority_id: this.selectedNote.priority_id,
      status_id: this.selectedNote.status_id,
      notebook_id: this.selectedNote.notebook_id,
      created_by: this.selectedNote.created_by,
      assigned_to: this.selectedNote.assigned_to,
      deleted: this.selectedNote.deleted,
      archived: this.selectedNote.archived,
    };
    this.notes.push(newNote);
    this.selectNote(newNote);
  }
  get countNote(): number {
    return this.filteredNotes.length;
  }
  get countDeletedNote(): number {
    return this.notes.filter((note) => note.deleted).length;
  }
  get countArchivedNote(): number {
    return this.notes.filter((note) => note.archived).length;
  }
  get filteredNotes(): Note[] {
    const search = this.searchValue.trim().toLowerCase();

    return this.notes
      .filter(
        (note) =>
          this.matchesSearch(note, search) &&
          this.matchesStatus(note) &&
          this.matchesPriority(note) &&
          this.matchesNotebook(note)
      )
      .sort((a, b) => {
        if (a.pinned === b.pinned) {
          return (
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          );
        }
        return (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0);
      });
  }
  matchesSearch(note: Note, search: string): boolean {
    return !search || note.title.toLowerCase().includes(search);
  }
  matchesStatus(note: Note): boolean {
    if (this.selectedStatus.id === this.statusDefaultFilter.id) {
      return true;
    }
    return note.status_id === this.selectedStatus.id;
  }
  matchesPriority(note: Note): boolean {
    if (this.selectedPriority.id === this.priorityDefaultFilter.id) {
      return true;
    }
    return note.priority_id === this.selectedPriority.id;
  }
  matchesNotebook(note: Note): boolean {
    if (note.deleted) {
      return this.selectedNotebook.id === this.trashNotebook.id;
    }

    if (note.archived) {
      return this.selectedNotebook.id === this.archiveNotebook.id;
    }

    return (
      this.selectedNotebook.id === this.defaultNotebook.id ||
      note.notebook_id === this.selectedNotebook.id
    );
  }

  resetFilters() {
    this.searchValue = '';
    this.selectedStatus = this.statusDefaultFilter;
    this.selectedNotebook = this.defaultNotebook;
  }
  selectNote(note: Note) {
    this.selectedNote = note;
    this.changedPriorityID = note.priority_id;
    this.changedStatusID = note.status_id;
    this.changedNotebookID = note.notebook_id;
  }
  unselectNote(): void {
    this.selectedNote = this.defaultNote;
    this.changedPriorityID = this.defaultNote.priority_id;
    this.changedStatusID = this.defaultNote.status_id;
    this.changedNotebookID = this.defaultNote.notebook_id;
  }
  isNoteSelected(): boolean {
    if (!this.selectedNote) return false;
    return this.selectedNote.note_id !== -1;
  }
  togglePinNote() {
    this.selectedNote.pinned = !this.selectedNote.pinned;
  }
  deleteNote() {
    this.selectedNote.deleted = true;
    this.unselectNote();
  }
  deleteNotePermanently() {
    const message = `Are you sure you want to delete this note: ${this.selectedNote.title}?`;
    // if (window.confirm(message)) {
    //   this.noteService.deleteNote(this.selectedNote.note_id).subscribe(() => {
    //     this.notes = this.notes.filter(
    //       (note) => note.note_id !== this.selectedNote.note_id
    //     );
    //     this.unselectNote();
    //   });
    // }
  }
  restoreNote() {
    this.selectedNote.deleted = false;
  }
  emptyTrash() {
    const message = `Are you sure you want to delete all deleted notes?`;
    if (window.confirm(message)) {
      this.notes = this.notes.filter((note) => !note.deleted);
    }
  }
  toggleArchiveNote() {
    this.selectedNote.archived = !this.selectedNote.archived;
  }
  existingNote() {
    return this.notes.find(
      (note) => note.note_id === this.selectedNote.note_id
    );
  }

  // search
  onSearchChange(text: string) {
    this.searchValue = text;
  }
  // status
  onStatusChange(selectedStatusID: number) {
    this.changedStatusID = selectedStatusID;
    this.selectedNote.status_id = selectedStatusID;
  }
  // priority
  onPriorityChange(selectedPriorityID: number) {
    this.changedPriorityID = selectedPriorityID;
    this.selectedNote.priority_id = selectedPriorityID;
  }
  // mode
  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }
  toggleNoteSettings() {
    this.isVisibleNoteSettings = !this.isVisibleNoteSettings;
  }
  toggleNoteFilters() {
    this.isVisibleNoteFilters = !this.isVisibleNoteFilters;
  }
}
