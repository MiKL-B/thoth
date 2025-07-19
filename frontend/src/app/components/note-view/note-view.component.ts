import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { LucideIconComponent } from "../shared/lucide-icon/lucide-icon.component";
import { FormsModule } from '@angular/forms';
import { Note } from '../../models/note.model';
import { ButtonIconComponent } from "../shared/button-icon/button-icon.component";
import { NoteListComponent } from "../note-list/note-list.component";
interface Notebook {
  id: number,
  title: string,
}
interface Status {
  id: number,
  title: string
}
interface Priority {
  id: number,
  title: string
}
@Component({
  selector: 'app-note-view',
  imports: [LucideIconComponent, FormsModule, ButtonIconComponent, NoteListComponent],
  templateUrl: './note-view.component.html',
  styleUrl: './note-view.component.scss'
})
export class NoteViewComponent implements OnInit {
  // notebook
  idNotebook = 1;
  defaultNotebook: Notebook = { id: 0, title: "All notes" };
  notebooks: Notebook[] = [this.defaultNotebook];
  selectedNotebook: Notebook = this.notebooks[0];
  changedNotebookID!: number;
  canUserEditNotebookTitle: boolean = false;

  // note
  idNote = 0;
  notes: Note[] = []
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
  }
  selectedNote: Note = this.defaultNote;
  checkTrashNote: boolean = false;
  checkArchivedNote: boolean = false;

  // search
  searchValue: string = "";

  // status
  statusDefaultFilter: Status = { id: 0, title: "All" }
  status: Status[] = [
    { id: 1, title: "Draft" },
    { id: 2, title: "Todo" },
    { id: 3, title: "In progress" },
    { id: 4, title: "Finished" },
  ]
  selectedStatus: Status = this.statusDefaultFilter;
  changedStatusID!: number;

  // priority
  priorities: Priority[] = [
    { id: 0, title: "Do it" },
    { id: 1, title: "Schedule it" },
    { id: 2, title: "Delegate it" },
    { id: 3, title: "Delete it" },
  ]
  changedPriorityID!: number;

  // mode
  isEditMode: boolean = false;
  isMobile: boolean = false;
  isVisibleNoteSettings: boolean = false;
  isVisibleNoteFilters: boolean = false;

  ngOnInit(): void {
    this.checkScreenSize();
  }
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
    const clickedInsideFilters = this.noteFiltersRef?.nativeElement.contains(event.target);
    const clickedInsideSettings = this.noteSettingsRef?.nativeElement.contains(event.target);

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
      title: "Notebook " + this.idNotebook,
    }
    this.notebooks.push(newNotebook);
    this.idNotebook++;
    this.selectNotebook(newNotebook);
    this.canUserEditNotebookTitle = false;
  }
  selectNotebook(notebook: Notebook) {
    this.selectedNotebook = notebook
  }
  onNotebookChange(selectedNotebookID: number) {
    this.changedNotebookID = selectedNotebookID;
    this.selectedNote.notebook_id = selectedNotebookID;
  }
  toggleEditNotebookTitle() {
    this.canUserEditNotebookTitle = !this.canUserEditNotebookTitle;
  }
  deleteNotebook() {
    const message = `Are you sure you want to delete this notebook: ${this.selectedNotebook.title}?`
    if (window.confirm(message)) {
      this.notes = this.notes.filter((note) => note.notebook_id !== this.selectedNotebook.id)
      this.notebooks = this.notebooks.filter((notebook) => notebook.id !== this.selectedNotebook.id);
      this.selectNotebook(this.defaultNotebook);
    }
  }
  canUserEditNotebook(): boolean {
    return this.selectedNotebook !== this.defaultNotebook;
  }
  // note
  addNote(): void {
    const newNote: Note = {
      note_id: this.idNote++,
      title: "Untitled note " + this.idNote,
      content: "",
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
    this.notes.push(newNote);
  }
  duplicateNote(): void {
    const newNote: Note = {
      note_id: this.idNote++,
      title: this.selectedNote.title + " - Copy",
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
      archived: this.selectedNote.archived
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
    const statusId = this.selectedStatus.id;
    const notebookId = this.selectedNotebook.id;
    const includeDeleted = this.checkTrashNote;
    const includeArchived = this.checkArchivedNote;

    return this.notes
      .filter(note =>
        this.matchesSearch(note, search) &&
        this.matchesStatus(note, statusId) &&
        this.matchesNotebook(note, notebookId) &&
        this.matchesDeletedArchived(note, includeDeleted, includeArchived)
      )
      .sort((a, b) => {
        // if (a.pinned === b.pinned) {
        //   return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        // }
        return (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0);
      });
  }
  get activeFiltersDescription(): string {
    const filters: string[] = [];

    const search = this.searchValue.trim();
    if (search) {
      filters.push(`Mot-clé "${search}"`);
    }

    if (this.selectedStatus.id !== 0) {
      filters.push(`Statut "${this.selectedStatus.title}"`);
    }

    if (this.selectedNotebook.id !== 0) {
      filters.push(`Carnet "${this.selectedNotebook.title}"`);
    }

    if (this.checkTrashNote) {
      filters.push("Notes supprimées incluses");
    }

    if (this.checkArchivedNote) {
      filters.push("Notes archivées incluses");
    }

    return filters.length > 0
      ? `Filtres appliqués : ${filters.join(', ')}`
      : "Aucun filtre appliqué";
  }
  get activeFilters(): string[] {
    const filters: string[] = [];

    const search = this.searchValue.trim();
    if (search) {
      filters.push(`Mot-clé : "${search}"`);
    }

    if (this.selectedStatus.id !== 0) {
      filters.push(`Statut : ${this.selectedStatus.title}`);
    }

    if (this.selectedNotebook.id !== 0) {
      filters.push(`Carnet : ${this.selectedNotebook.title}`);
    }

    if (this.checkTrashNote) {
      filters.push("Supprimées incluses");
    }

    if (this.checkArchivedNote) {
      filters.push("Archivées incluses");
    }

    return filters;
  }
  matchesSearch(note: Note, search: string): boolean {
    return !search || note.title.toLowerCase().includes(search);
  }
  matchesStatus(note: Note, statusId: number): boolean {
    return statusId === 0 || note.status_id === statusId;
  }
  matchesNotebook(note: Note, notebookId: number): boolean {
    return notebookId === 0 || note.notebook_id === notebookId;
  }
  matchesDeletedArchived(note: Note, includeDeleted: boolean, includeArchived: boolean): boolean {
    if (note.deleted) return includeDeleted;
    if (note.archived) return includeArchived;
    return true;
  }
  resetFilters() {
    this.searchValue = '';
    this.selectedStatus = this.statusDefaultFilter;
    this.selectedNotebook = this.defaultNotebook;
    this.checkTrashNote = false;
    this.checkArchivedNote = false;
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
  }
  deleteNotePermanently() {
    const message = `Are you sure you want to delete this note: ${this.selectedNote.title}?`
    if (window.confirm(message)) {
      this.notes = this.notes.filter((note) => note.note_id !== this.selectedNote.note_id);
    }
  }
  emptyTrash() {
    const message = `Are you sure you want to delete all deleted notes?`
    if (window.confirm(message)) {
      this.notes = this.notes.filter((note) => !note.deleted)
    }
  }
  archiveNote() {
    this.selectedNote.archived = true;
  }
  existingNote() {
    return this.notes.find((note) => note.note_id === this.selectedNote.note_id)
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
