import { Component } from '@angular/core';
import { LucideIcon } from '../../shared/lucide-icon/lucide-icon';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-notebook-view',
  imports: [LucideIcon, NgClass],
  templateUrl: './notebook-view.html',
  styleUrl: './notebook-view.css',
})
export class NotebookView {
  noteTitle: string = 'Untitled note';
  isEditableNote: boolean = false;
  isNoteSelected: boolean = false;

  toggleEditNote() {
    this.isEditableNote = !this.isEditableNote;
  }
  selectNote() {
    this.isNoteSelected = true;
  }
  unselectNote() {
    this.isNoteSelected = false;
  }
}
