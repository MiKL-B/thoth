import { Component } from '@angular/core';
import { LucideIcon } from '../../lucide-icon/lucide-icon';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-chat-view',
  imports: [LucideIcon, NgClass],
  templateUrl: './chat-view.html',
  styleUrl: './chat-view.css',
})
export class ChatView {
  isChatSelected: boolean = false;

  openChat() {
    this.isChatSelected = true;
  }
  closeChat() {
    this.isChatSelected = false;
  }
}
