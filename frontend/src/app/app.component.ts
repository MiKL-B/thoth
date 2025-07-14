import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'frontend';
  message = "";
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    // this.http.get('http://localhost:8080/api/hello', { responseType: 'text' })
    //   .subscribe(data => this.message = data);
  }
}
