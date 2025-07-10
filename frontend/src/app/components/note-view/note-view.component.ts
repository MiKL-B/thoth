import { Component } from '@angular/core';
import { LucideIconComponent } from "../shared/lucide-icon/lucide-icon.component";
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Note } from '../../models/note.model';
import { ButtonIconComponent } from "../button-icon/button-icon.component";
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
  imports: [LucideIconComponent, NgClass, FormsModule, ButtonIconComponent, NoteListComponent],
  templateUrl: './note-view.component.html',
  styleUrl: './note-view.component.scss'
})
export class NoteViewComponent {
  // notebook
  idNotebook = 1;
  defaultNotebook: Notebook = { id: 0, title: "All notes" }
  notebooks: Notebook[] = [this.defaultNotebook];
  selectedNotebook: Notebook = this.notebooks[0];
  changedNotebookID!: number;
  isEditNotebookTitle: boolean = false;

  // note
  idNote = 0;
  notes: Note[] = []
  selectedNote!: Note;

  // search
  searchValue: string = "";

  // status
  statusDefaultFilter: Status = { id: 0, title: "All" }
  status: Status[] = [
    { id: 1, title: "Draft" },
    { id: 2, title: "Todo" },
    { id: 3, title: "In progress" },
    { id: 4, title: "Finished" },
    { id: 5, title: "Archived" },
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
  isEditMode = false;
  isFocusMode = false;

  // notebook
  addNotebook(): void {
    if (!this.notebooks) return;
    const newNotebook: Notebook = {
      id: this.idNotebook,
      title: "Notebook " + this.idNotebook,
    }
    this.notebooks.push(newNotebook);
    this.idNotebook++;
    this.selectNotebook(newNotebook)
  }
  selectNotebook(notebook: Notebook) {
    this.selectedNotebook = notebook
  }
  onNotebookChange(selectedNotebookID: number) {
    this.changedNotebookID = selectedNotebookID;
    this.selectedNote.notebook_id = selectedNotebookID;
  }
  toggleEditNotebookTitle() {
    this.isEditNotebookTitle = !this.isEditNotebookTitle;
  }
  deleteNotebook() {
    const message = `Are you sure you want to delete this notebook: ${this.selectedNotebook.title}?`
    if (window.confirm(message)) {
      this.notes = this.notes.filter((note) => note.notebook_id !== this.selectedNotebook.id)
      this.notebooks = this.notebooks.filter((notebook) => notebook.id !== this.selectedNotebook.id);
      this.selectNotebook(this.defaultNotebook);
    }
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
    };
    this.notes.push(newNote);
    this.selectNote(newNote);
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
      assigned_to: this.selectedNote.assigned_to
    };
    this.notes.push(newNote);
    this.selectNote(newNote);
  }
  get countNote(): number {
    return this.filteredNotes.length;
  }
  get filteredNotes(): Note[] {
    return this.notes.filter(note => {
      const matchesSearch = this.searchValue.trim() === '' ||
        note.title.toLowerCase().includes(this.searchValue.toLowerCase());

      const matchesStatus = this.selectedStatus.id === 0 ||
        note.status_id === this.selectedStatus.id;

      const matchesNotebook = this.selectedNotebook.id === 0 ||
        note.notebook_id === this.selectedNotebook.id;

      return matchesSearch && matchesStatus && matchesNotebook;
    }).sort((a, b) => {
      // if (a.pinned === b.pinned) {
      //   return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      // }
      return (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0);
    });
  }

  selectNote(note: Note) {
    this.selectedNote = note;
    this.changedPriorityID = note.priority_id;
    this.changedStatusID = note.status_id;
    this.changedNotebookID = note.notebook_id;
  }
  togglePinNote() {
    this.selectedNote.pinned = !this.selectedNote.pinned;
  }
  deleteNote() {
    const message = `Are you sure you want to delete this note: ${this.selectedNote.title}?`
    if (window.confirm(message)) {
      this.notes = this.notes.filter((note) => note.note_id !== this.selectedNote.note_id);
    }
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
  toggleFocusMode() {
    this.isFocusMode = !this.isFocusMode;
  }
}
