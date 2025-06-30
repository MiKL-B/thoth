import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule, Menu,X } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly Menu = Menu;
  readonly X = X;
  isOpenMenuMobile:boolean = false;
  toggleMenuMobile(){
    this.isOpenMenuMobile = !this.isOpenMenuMobile

  }
}
