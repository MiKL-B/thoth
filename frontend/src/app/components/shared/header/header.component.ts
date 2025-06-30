import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LucideAngularModule, Menu,X } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly Menu = Menu;
  readonly X = X;
  public router = inject(Router);

  isOpenMenuMobile:boolean = false;
  toggleMenuMobile(){
    this.isOpenMenuMobile = !this.isOpenMenuMobile
  }
  redirect(url:string){
    this.router.navigateByUrl(url)
    this.isOpenMenuMobile = false;
  }
}
