import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  isWebsitePage: boolean = true;
  constructor(private http: HttpClient, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Liste des routes où le header/footer doit être masqué
        // const hiddenRoutes = ['/workspace', '/register'];
        const hiddenRoute = '/workspace';
        this.isWebsitePage = hiddenRoute !== event.urlAfterRedirects;
        // this.isWebsitePage = !hiddenRoutes.includes(event.urlAfterRedirects);
      }
    });
  }
}
