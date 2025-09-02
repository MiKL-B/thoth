import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { FooterComponent } from "./components/shared/footer/footer.component";
import { HeaderComponent } from "./components/shared/header/header.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'frontend';
  message = "";
  isWebsitePage: boolean = true;

  constructor(private http: HttpClient, private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Liste des routes où le header/footer doit être masqué
        // const hiddenRoutes = ['/workspace', '/register'];
        const hiddenRoute = "/workspace";
        this.isWebsitePage = hiddenRoute !== event.urlAfterRedirects;
        // this.isWebsitePage = !hiddenRoutes.includes(event.urlAfterRedirects);
      }
    });
  }
  ngOnInit(): void {
    // this.http.get('http://localhost:8080/api/hello', { responseType: 'text' })
    //   .subscribe(data => this.message = data);
  }
}
