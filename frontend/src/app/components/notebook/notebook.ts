import { Component } from '@angular/core';
import { LucideIcon } from '../../shared/lucide-icon/lucide-icon';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-notebook',
  imports: [LucideIcon, NgClass],
  templateUrl: './notebook.html',
  styleUrl: './notebook.css',
})
export class Notebook {
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
