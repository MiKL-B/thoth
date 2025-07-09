import { Component } from '@angular/core';
import { LucideIconComponent } from "../shared/lucide-icon/lucide-icon.component";
import { NoteListItemComponent } from "../note-list-item/note-list-item.component";
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Note } from '../../models/note.model';
import { ButtonIconComponent } from "../button-icon/button-icon.component";
interface Notebook {
  id: number,
  title: string,
}

@Component({
  selector: 'app-note-view',
  imports: [LucideIconComponent, NoteListItemComponent, NgClass, FormsModule, ButtonIconComponent],
  templateUrl: './note-view.component.html',
  styleUrl: './note-view.component.scss'
})
export class NoteViewComponent {
  idNotebook = 1;
  defaultNotebook: Notebook = { id: 0, title: "All notes" }
  notebooks: Notebook[] = [this.defaultNotebook];
  selectedNotebook: Notebook = this.notebooks[0];
  changedNotebookID!: number;
  isEditNotebookTitle: boolean = false;

  idNote = 0;
  notes: Note[] = []
  selectedNote!: Note;

  isEditMode = false;
  isFocusMode = false;
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
    this.selectedNote.notebookID = selectedNotebookID;
  }
  toggleEditNotebookTitle() {
    this.isEditNotebookTitle = !this.isEditNotebookTitle;
  }
  deleteNotebook() {
    const message = `Are you sure you want to delete this notebook: ${this.selectedNotebook.title}?`
    if (window.confirm(message)) {
      this.notes = this.notes.filter((note) => note.notebookID !== this.selectedNotebook.id)
      this.notebooks = this.notebooks.filter((notebook) => notebook.id !== this.selectedNotebook.id);
      this.selectNotebook(this.defaultNotebook);
    }
  }
  addNote(): void {
    const newNote: Note = {
      id: this.idNote++,
      title: "Untitled note " + this.idNote,
      content: "",
      pinned: false,
      notebookID: this.selectedNotebook.id
    };
    this.notes.push(newNote);
    this.selectNote(newNote);
  }
  duplicateNote(): void {
    const newNote: Note = {
      id: this.idNote++,
      title: this.selectedNote.title + " - Copy",
      content: this.selectedNote.content,
      pinned: this.selectedNote.pinned,
      notebookID: this.selectedNote.notebookID
    };
    this.notes.push(newNote);
    this.selectNote(newNote);
  }
  get countNote(): number {
    return this.filteredNotes.length;
  }
  get filteredNotes(): Note[] {
    if (this.selectedNotebook.id === 0) {
      return this.notes;
    }
    return this.notes.filter(note => note.notebookID === this.selectedNotebook.id)
  }
  selectNote(note: Note) {
    this.selectedNote = note;
    this.changedNotebookID = note.notebookID
  }
  togglePinNote() {
    this.selectedNote.pinned = !this.selectedNote.pinned;
  }
  deleteNote() {
    const message = `Are you sure you want to delete this note: ${this.selectedNote.title}?`
    if (window.confirm(message)) {
      this.notes = this.notes.filter((note) => note.id !== this.selectedNote.id);
    }
  }
  existingNote() {
    return this.notes.find((note) => note.id === this.selectedNote.id)
  }
  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }
  toggleFocusMode() {
    this.isFocusMode = !this.isFocusMode;
  }
}
