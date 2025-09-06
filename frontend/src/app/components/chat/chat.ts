import { Component } from '@angular/core';
import { LucideIcon } from '../../shared/lucide-icon/lucide-icon';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-chat',
  imports: [LucideIcon, NgClass],
  templateUrl: './chat.html',
  styleUrl: './chat.css',
})
export class Chat {
  isChatSelected: boolean = false;

  openChat() {
    this.isChatSelected = true;
  }
  closeChat() {
    this.isChatSelected = false;
  }
}
