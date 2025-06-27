import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  isRegister: boolean = false;
  isVisiblePassword: boolean = false;
  name: string = '';
  email: string = '';
  password: string = '';
  toggleForm() {
    this.isRegister = !this.isRegister;
    this.name = '';
    this.email = '';
    this.password = '';
  }
  togglePassword() {
    this.isVisiblePassword = !this.isVisiblePassword;
  }
  onSubmit() {
    console.log('Formulaire soumis');
    // ton traitement ici...
  }
}
